import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createC } from "../../../redux/actions/createC/createC";
import Layout from "../../../hocs/layouts/Layout";
import Records from "../Records";

import styles from "../../../styles/Create.module.css";

import User from "../../../assets/bicicleta.png";

const CreateC = ({ createC, result }) => {
  const customerId = localStorage.getItem("Id");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Nombre: "",
    Horario: "",
    Descripcion: "",
  });

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  } else {
    const { Nombre, Horario, Descripcion } = formData;

    const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
      e.preventDefault();
      createC(Nombre, Horario, Descripcion);
    };
    if (result === "Good") {
      console.log("Create");
      navigate(0);
      navigate("/see-classes");
    }

    return (
      <Layout>
        <Records />
        <div className={styles.ContainerG}>
          <div className={styles.Title}>
            <h2>Create Class:</h2>
            <img src={User} alt="customerIcon" />
          </div>
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
            action="#"
            method="POST"
          >
            <div className={styles.ContainerP}>
              <label htmlFor="Nombre" className="sr-only">
                Name
              </label>
              <input
                id="Nombre"
                name="Nombre"
                value={Nombre}
                onChange={(e) => onChange(e)}
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              <label htmlFor="Descripcion" className="sr-only">
                Descripcion
              </label>
              <input
                id="Descripcion"
                name="Descripcion"
                value={Descripcion}
                onChange={(e) => onChange(e)}
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              <label htmlFor="Horario" className="sr-only">
                Horario
              </label>
              <input
                id="Horario"
                name="Horario"
                value={Horario}
                onChange={(e) => onChange(e)}
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="ex: Lunes a viernes"
              />
            </div>

            <div className={styles.Btn}>
              <button type="submit">Save</button>
              <button
                onClick={(e) => {
                  navigate("/see-classes");
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Layout>
    );
  }
};

const mapStateToProps = (state) => ({
  result: state.createC.result,
});
export default connect(mapStateToProps, {
  createC,
})(CreateC);
