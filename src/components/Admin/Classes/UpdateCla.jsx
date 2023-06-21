import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCla } from "../../../redux/actions/updateCla/updateCla";
import Layout from "../../../hocs/layouts/Layout";
import Records from "../Records";

import styles from "../../../styles/Create.module.css";

import User from "../../../assets/usuario.png";

const UpdateCla = ({ updateCla, result }) => {
  const customerId = localStorage.getItem("Id");
  const updateClaId = localStorage.getItem("updateClaId");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    horary: "",
    description: "",
  });

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  } else {
    const { name, horary, description } = formData;

    const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
      e.preventDefault();
      updateCla(updateClaId, name, horary, description);
    };
    if (result === "Good") {
      console.log("Update!");
      navigate(0);
      navigate("/see-classes");
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
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              <label htmlFor="Description" className="sr-only">
                Description
              </label>
              <input
                id="description"
                name="description"
                value={description}
                onChange={(e) => onChange(e)}
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              <label htmlFor="Horary" className="sr-only">
                Horary
              </label>
              <input
                id="horary"
                name="horary"
                value={horary}
                onChange={(e) => onChange(e)}
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="ex: Los Martes"
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
  result: state.updateCla.result,
});
export default connect(mapStateToProps, {
  updateCla,
})(UpdateCla);
