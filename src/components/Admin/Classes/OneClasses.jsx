import { useState } from "react";
import { Navigate } from "react-router-dom";

const OneMemberships = ({ clas }) => {
  const [select, setSelect] = useState(false);
  const [dele, setDel] = useState(false);

  return (
    <div>
      <h1>Nombre de la clase: {clas.Nombre}</h1>
      <h1>Horario: {clas.Horario}</h1>
      <button
        onClick={() => {
          setSelect(true);
        }}
      >
        Click Me!
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
  );
};

export default OneMemberships;
