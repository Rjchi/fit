import { useState } from "react";
import { Navigate } from "react-router-dom";

import styles from "../../../styles/OneCustomer.module.css";

const OneMemberships = ({ membership }) => {
  const [select, setSelect] = useState(false);
  const [dele, setDel] = useState(false);

  return (
    <div className={styles.OneTarget}>
      <div className={styles.ContainerP}>
        <label>Name:</label>
        <input value={membership.Nombre} type="text" enabled="true" />
        <label>Duration:</label>
        <input value={membership.Duracion} type="text" enabled="true" />
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
            {localStorage.removeItem("updateMemId")}
            {localStorage.setItem("updateMemId", membership.Id)}
            <Navigate to="/update-membership" />
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
            {localStorage.removeItem("deleteMemId")}
            {localStorage.setItem("deleteMemId", membership.Id)}
            <Navigate to="/delete-membership" />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default OneMemberships;
