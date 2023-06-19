import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from '../../styles/Plan.module.css'

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
        {data.Id}
        {data.Nombre}
        {data.Duracion}
        {data.Horario}
        {data.ClaseNombre}

        <button onClick={(e) => setSelect(true)}>SELECT</button>
        {select ? (
          <form onSubmit={(e) => onSubmitDelete(e)}>
            SEGURO?
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:text-sm"
            >
              <span>SAVE</span>
            </button>
            {open ? (
              <div>
                Successfully Added!
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
