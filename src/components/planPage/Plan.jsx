const Plan = ({ data }) => {

  return (
    <div>
        {data.Id}
        {data.Nombre}
        {data.Duracion}
        {data.Horario}
    </div>
  );
};

export default Plan;
