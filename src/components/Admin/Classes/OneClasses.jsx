import { useState } from "react";
import { Navigate } from "react-router-dom";

import styles from "../../../styles/OneCustomer.module.css";

const OneMemberships = ({ clas }) => {
  const [select, setSelect] = useState(false);
  const [dele, setDel] = useState(false);

  return (
    <div className={styles.OneTarget}>
      <div className={styles.ContainerP}>
        <label>Name:</label>
        <input value={clas.Nombre} type="text" enabled="true" />
        <label>Horary:</label>
        <input value={clas.Horario} type="text" enabled="true" />
      </div>
      <div className={styles.Btn}>
        <button
          onClick={() => {
            setSelect(true);
          }}
        >
          Update
        </button>
        {select ? (
          <>
            {localStorage.removeItem("updateClaId")}
            {localStorage.setItem("updateClaId", clas.Id)}
            <Navigate to="/update-class" />
          </>
        ) : (
          <></>
        )}
        <button
          onClick={() => {
            setDel(true);
          }}
        >
          DELETE
        </button>
        {dele ? (
          <>
            {localStorage.removeItem("deleteClaId")}
            {localStorage.setItem("deleteClaId", clas.Id)}
            <Navigate to="/delete-class" />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default OneMemberships;
