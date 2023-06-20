import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../../redux/actions/signUp/signUp";
import Layout from "../../../hocs/layouts/Layout";
import Records from "../Records";

import styles from "../../../styles/Create.module.css";

import User from "../../../assets/usuario.png";

const Create = ({ signUp, result }) => {
  const customerId = localStorage.getItem("Id");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
    admin: 0,
  });

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  } else {
    const { name, last_name, email, password, admin } = formData;

    const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
      e.preventDefault();
      signUp(name, last_name, email, password, admin);
    };
    if (result === "Good") {
      console.log("Create");
      navigate(0);
      navigate("/see-customers");
    }

    return (
      <Layout>
        <Records />
        <div className={styles.ContainerG}>
          <div className={styles.Title}>
            <h2>Create Customer:</h2>
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
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                type="email"
                autoFocus
                required
              />
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
                type="text"
                required
              />
              <label htmlFor="last_name">Last Name:</label>
              <input
                id="last_name"
                name="last_name"
                value={last_name}
                onChange={(e) => onChange(e)}
                type="text"
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                type="password"
                required
              />
            </div>

            <div className={styles.Btn}>
              <button type="submit">Save</button>
              <button onClick={(e) => {
                navigate("/see-customers")
              }}>Cancel</button>
            </div>
          </form>
        </div>
      </Layout>
    );
  }
};

const mapStateToProps = (state) => ({
  result: state.signUp.result,
});
export default connect(mapStateToProps, {
  signUp,
})(Create);
