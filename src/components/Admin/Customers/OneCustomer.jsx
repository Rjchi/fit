import { useState } from "react";
import { Navigate } from "react-router-dom";

import styles from "../../../styles/OneCustomer.module.css";

const OneCustomer = ({ customer }) => {
  const [select, setSelect] = useState(false);
  const [dele, setDel] = useState(false);
  console.log(customer);

  return (
    <div className={styles.OneTarget}>
      <div className={styles.ContainerP}>
        <label>Name:</label>
        <input value={customer.Nombre} type="text" enabled="true" />
        <label>Last Name:</label>
        <input value={customer.Apellido} type="text" enabled="true" />
        <label>Email:</label>
        <input value={customer.CorreoElectronico} type="text" enabled="true" />
        <label>Password:</label>
        <input value={customer.contrasenia} type="text" enabled="true" />
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
            {localStorage.removeItem("updateId")}
            {localStorage.setItem("updateId", customer.Id)}
            <Navigate to="/update_customer" />
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
            {localStorage.removeItem("deleteId")}
            {localStorage.setItem("deleteId", customer.Id)}
            <Navigate to="/delete-customer" />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default OneCustomer;
