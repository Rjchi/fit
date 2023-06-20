import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update } from "../../../redux/actions/update/update";
import Layout from "../../../hocs/layouts/Layout";
import Records from "../Records";

import styles from "../../../styles/Create.module.css";

import User from "../../../assets/usuario.png";

const Update = ({ update, result }) => {
  const customerId = localStorage.getItem("Id");
  const updateId = localStorage.getItem("updateId");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Nombre: "",
    Apellido: "",
    CorreoElectronico: "",
    contrasenia: "",
    Admin: 0,
  });

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  } else {
    const { Nombre, Apellido, CorreoElectronico, contrasenia, Admin } =
      formData;

    const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
      e.preventDefault();
      update(updateId, Nombre, Apellido, CorreoElectronico, contrasenia, Admin);
    };
    if (result === "Good") {
      console.log("Update!");
      navigate(0);
      navigate("/see-customers");
    }

    return (
      <Layout>
        <Records />
        <div className={styles.ContainerG}>
          <div className={styles.Title}>
            <h2>Update Customer:</h2>
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
              <label htmlFor="email-address">Email address:</label>
              <input
                id="email-address"
                name="CorreoElectronico"
                value={CorreoElectronico}
                onChange={(e) => onChange(e)}
                type="email"
                autoFocus
                required
              />
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                name="Nombre"
                value={Nombre}
                onChange={(e) => onChange(e)}
                type="text"
                required
              />
              <label htmlFor="last_name">Last Name:</label>
              <input
                id="last_name"
                name="Apellido"
                value={Apellido}
                onChange={(e) => onChange(e)}
                type="text"
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                name="contrasenia"
                value={contrasenia}
                onChange={(e) => onChange(e)}
                type="password"
                required
              />
              <label htmlFor="Admin" className="sr-only">
                Admin
              </label>
              <input
                id="Admin"
                name="Admin"
                value={Admin}
                onChange={(e) => onChange(e)}
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Admin"
              />
            </div>

            <div className={styles.Btn}>
              <button type="submit">Save</button>
              <button
                onClick={(e) => {
                  navigate("/see-customers");
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
  result: state.update.result,
});
export default connect(mapStateToProps, {
  update,
})(Update);
