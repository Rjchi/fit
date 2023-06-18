import { connect } from "react-redux";
import { useState } from "react";
import { login } from "../../redux/actions/login/login";
import { Link, Navigate } from "react-router-dom";
// import MyImg from "../../assets/imagen.png";
import styles from "../../styles/Home.module.css";

const Home = ({ login, isAuthenticated, loading, user }) => {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const { password, email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  localStorage.removeItem("Id");
  localStorage.removeItem("Admin");

  if (isAuthenticated) {
    localStorage.setItem("Id", user[0].Id);
    localStorage.setItem("Admin", user[0].Admin);
    return <Navigate to="/plans" />;
  }

  return (
    <div className={styles.ContainerG}>
      <div className={styles.ContainerP}>
        <div className={styles.Logo}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzCVcXgPapeM3P1NGOGJDaKCzqxwYgIyzgw&usqp=CAU"
            alt="logo"
          />
          <p>Fitness</p>
        </div>
        <h1>LOGIN</h1>
        <div className={styles.Form}>
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
              <div className={styles.Inputs}>
                <label htmlFor="email-address">EMAIL ADDRESS</label>
                <input
                  id="email-address"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  type="email"
                  autoFocus
                  required
                  placeholder="Email address"
                />
              </div>
              <div className={styles.Inputs}>
                <label htmlFor="password">PASSWORD</label>
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  type="password"
                  required
                  placeholder="Password"
                />
              </div>

            <div className={styles.Links}>
                <Link to="/new_account">Sign Up</Link>

                <Link to="#">Forgot your password?</Link>
            </div>

            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.ContainerS}>
        {/* <img width="700px" height="700px" src={MyImg} alt="img" /> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated,
  user: state.login.user,
  loading: state.login.loading,
});
export default connect(mapStateToProps, {
  login,
})(Home);
