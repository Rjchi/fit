import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import styles from "../../styles/FilterPlan.module.css";

import Check from "../../assets/marca-de-verificacion.png";

const FilterPlan = ({ plan }) => {
  const navigate = useNavigate();
  const customerId = localStorage.getItem("Id");
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
              plan.planId
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
      <div className={styles.ContainerG}>
        <div className={styles.OneTarget}>
          <h2>{plan.name}</h2>
          <div className={styles.Description}>
            <p>Description:</p>
          </div>
          <div className={styles.Duration}>
            <p>
              {plan.Duracion}
              <span>
                -month contract counting from the selection of the membership.
              </span>
            </p>
          </div>
          <div className={styles.Class}>
            <p>Class:</p>
          </div>
          <div className={styles.Classes}>
            <p>{plan.clases}</p>
          </div>
          <div className={styles.HoraryT}>
            <p>Schedule:</p>
          </div>
          <div className={styles.Horary}>
            <p>{plan.horarios}</p>
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
      </div>
    );
  }
};
export default FilterPlan;
