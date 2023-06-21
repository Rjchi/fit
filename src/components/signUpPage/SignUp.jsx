import { connect } from "react-redux";
import { useState } from "react";
import { signUp } from "../../redux/actions/signUp/signUp";
import { Link, Navigate } from "react-router-dom";
import styles from "../../styles/SignUp.module.css";
import Logo from "../../assets/logo.png";
import noVisi from "../../assets/noVisi.png";
import Visi from "../../assets/visi.png";

const Sign_up = ({ signUp, result, loading }) => {
  const [see, setSee] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
    admin: 0,
  });

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const { name, last_name, email, password, admin } = formData;

  const onclick = (e) => {
    e.preventDefault();
    setSee(!see);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    signUp(name, last_name, email, password, admin);
  };

  if (result === "Good") {
    return <Navigate to="/login" />;
  }

  return (
    <div className={styles.ContainerG}>
      <div className={styles.Logo}>
        <Link to="/login">
        <img src={Logo} alt="logo" />
        </Link>
        <p>Fitness</p>
        <h1>Create New Account</h1>
      </div>
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
        className="mt-8 space-y-6"
        action="#"
        method="POST"
      >
        <div className={styles.ContainerP}>
          <label htmlFor="email-address">EMAIL ADDRESS</label>
          <input
            id="email-address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            type="email"
            required
            placeholder="Email address"
          />
          <label htmlFor="name">NAME</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            type="text"
            required
            placeholder="Name"
          />
          <label htmlFor="last_name">LAST NAME</label>
          <input
            id="last_name"
            name="last_name"
            value={last_name}
            onChange={(e) => onChange(e)}
            type="text"
            required
            placeholder="Last Name"
          />
        </div>
        <div className={styles.ContainerS}>
          <label htmlFor="password">PASSWORD</label>
          <div className={styles.Eye}>
            <input
              id="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              type={!see ? "password" : "text"}
              required
              placeholder="Password"
            />
            <p
              onClick={(e) => {
                onclick(e);
              }}
            >
              {!see ? (
                <img src={noVisi} alt="eye" />
              ) : (
                <>
                  <img src={Visi} alt="eye" />
                </>
              )}
            </p>
          </div>
          <div className={styles.Check}>
            <input
              checked={isChecked}
              onChange={handleCheckboxChange}
              type="checkbox"
              name="terms"
            />{" "}
            <span>I gree to the terms of services</span>
          </div>
          <div className={styles.Button}>
            <button type="submit" disabled={!isChecked} >Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  result: state.signUp.result,
  loading: state.signUp.loading,
});
export default connect(mapStateToProps, {
  signUp,
})(Sign_up);
