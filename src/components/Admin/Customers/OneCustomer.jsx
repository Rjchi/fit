import { useState } from "react";
import { Navigate } from "react-router-dom";

const OneCustomer = ({ customer }) => {
  const [select, setSelect] = useState(false);
  const [dele, setDel] = useState(false);

  return (
    <div>
      <h1>cliente: {customer.Nombre}</h1>
      <button
        onClick={() => {
          setSelect(true);
        }}
      >
        Click Me!
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
  );
};

export default OneCustomer;
