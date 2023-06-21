import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../../styles/Plan.module.css";

import Check from "../../assets/marca-de-verificacion.png";

const Plan = ({ data }) => {
  const customerId = localStorage.getItem("Id");
  const navigate = useNavigate();
  const [select, setSelect] = useState(false);
  const [open, setOpen] = useState(false);

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  } else {
    const onSubmitDelete = (e) => {
      e.preventDefault();

      const fetchData = async () => {
        try {
          const res = await axios.get(
            `http://localhost:81/api/membership_selection/${customerId}/${
              data.Id
            }/${`2023-06-23`}`
          );

          if (res.status === 200) {
            if (res.data === "Seleccionada" || res.data === "Actualizado") {
              setOpen(true);
            }
          }
        } catch (error) {
          alert("Error");
        }
      };
      fetchData();
    };

    return (
      <div className={styles.OneTarget}>
        <h2>{data.Nombre}</h2>
        <div className={styles.Description}>
          <p>Description:</p>
        </div>
        <div className={styles.Duration}>
          <p>
            {data.Duracion}
            <span>
              -month contract counting from the selection of the membership.
            </span>
          </p>
        </div>
        <div className={styles.Class}>
          <p>Class:</p>
        </div>
        <div className={styles.Classes}>
          <p>{data.ClaseNombre}</p>
        </div>
        <div className={styles.HoraryT}>
          <p>Schedule:</p>
        </div>
        <div className={styles.Horary}>
          <p>{data.Horario}</p>
        </div>
        <div className={styles.Btn}>
          <button onClick={(e) => setSelect(true)}>SELECT</button>
        </div>
        {select ? (
          <form onSubmit={(e) => onSubmitDelete(e)}>
            <div className={styles.Safe}>
              <p>SAFE?</p>
              <div className={styles.BtnSafe}>
                <button type="submit">
                  <span>SAVE</span>
                </button>
                <button
                  onClick={(e) => {
                    navigate(0);
                  }}
                >
                  <span>CANCEL</span>
                </button>
              </div>
            </div>
            {open ? (
              <div className={styles.Success}>
                {window.scrollTo(0, 0)}
                <img src={Check} alt="checked" />
                <p>Successfully Added!</p>
                <button
                  onClick={(e) => {
                    navigate(0);
                  }}
                >
                  Ok
                </button>
              </div>
            ) : (
              <></>
            )}
          </form>
        ) : (
          <></>
        )}
      </div>
    );
  }
};

export default Plan;
