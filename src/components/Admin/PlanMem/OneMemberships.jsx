import { useState } from "react";
import { Navigate } from "react-router-dom";

const OneMemberships = ({ membership }) => {
  const [select, setSelect] = useState(false);
  const [dele, setDel] = useState(false);

  return (
    <div>
      <h1>Nombre del Plan: {membership.Nombre}</h1>
      <h1>Duracion: {membership.Duracion}</h1>
      <button
        onClick={() => {
          setSelect(true);
        }}
      >
        Click Me!
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
  );
};

export default OneMemberships;
