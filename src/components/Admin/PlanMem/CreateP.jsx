import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createP } from "../../../redux/actions/createP/createP";
import Records from "../Records";
import Layout from "../../../hocs/layouts/Layout";

import styles from "../../../styles/Create.module.css";

import User from "../../../assets/estrella.png";

const CreateP = ({ createP, result }) => {
  const customerId = localStorage.getItem("Id");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    duracion: 0,
  });

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  } else {
    const { name, duracion } = formData;

    const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
      e.preventDefault();
      createP(name, duracion);
    };
    if (result === "Good") {
      console.log("Create");
      navigate(0);
      navigate("/see-memberships");
    }

    return (
      <Layout>
        <Records />
        <div className={styles.ContainerG}>
          <div className={styles.Title}>
            <h2>Create Membership:</h2>
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
              <label htmlFor="duracion" className="sr-only">
                Duracion
              </label>
              <input
                id="duracion"
                name="duracion"
                value={duracion}
                onChange={(e) => onChange(e)}
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
  result: state.createP.result,
});
export default connect(mapStateToProps, {
  createP,
})(CreateP);
