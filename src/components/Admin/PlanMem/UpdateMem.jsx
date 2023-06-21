import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateMem } from "../../../redux/actions/updateMem/updateMem";
import Layout from "../../../hocs/layouts/Layout";
import Records from "../Records";

import styles from "../../../styles/Create.module.css";

import User from "../../../assets/estrella.png";

const UpdateMem = ({ updateMem, result }) => {
  const customerId = localStorage.getItem("Id");
  const updateMemId = localStorage.getItem("updateMemId");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Nombre: "",
    Duracion: 0,
  });

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  } else {
    const { Nombre, Duracion } = formData;

    const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
      e.preventDefault();
      updateMem(updateMemId, Nombre, Duracion);
    };
    if (result === "Good") {
      console.log("Update!");
      navigate(0);
      navigate("/see-memberships");
    }

    return (
      <Layout>
        <Records />
        <div className={styles.ContainerG}>
          <div className={styles.Title}>
            <h2>Update Membership:</h2>
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
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="Nombre"
                value={Nombre}
                onChange={(e) => onChange(e)}
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Name"
              />
              <label htmlFor="Duracion" className="sr-only">
                Duration
              </label>
              <input
                id="Duracion"
                name="Duracion"
                value={Duracion}
                onChange={(e) => onChange(e)}
                type="number"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="ex: 21"
              />
            </div>

            <div className={styles.Btn}>
              <button type="submit">Save</button>
              <button
                onClick={(e) => {
                  navigate("/see-memberships");
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
  result: state.updateMem.result,
});
export default connect(mapStateToProps, {
  updateMem,
})(UpdateMem);
