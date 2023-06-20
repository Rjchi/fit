import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { profile } from "../../redux/actions/profile/profile";
import { Navigate, useNavigate } from "react-router-dom";
import Layout from "../../hocs/layouts/Layout";

import styles from "../../styles/Profile.module.css";

const Profile = ({ profile, e_profile, customerId }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: customerId,
    name: "",
    last_name: "",
    email: "",
    password: "",
    admin: 0,
  });

  useEffect(() => {
    if (e_profile === "Good") {
      navigate("/plans");
    }
  }, [navigate, e_profile]);

  // console.log(customerId);
  // console.log(e_profile);

  if (customerId === null || customerId === undefined) {
    return <Navigate to="/login" />;
  } else {
    const { id, name, last_name, email, password, admin } = formData;

    const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
      e.preventDefault();
      profile(id, name, last_name, email, password, admin);
    };

    return (
      <Layout>
        <div className={styles.ContainerG}>
          <div className={styles.Border}>
            <div className={styles.User}>
              <img
                src="data:image/png;base64,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"
                alt="user"
              />
            </div>
            <form
              className={styles.Form}
              onSubmit={(e) => {
                onSubmit(e);
              }}
              action="#"
              method="POST"
            >
              <div className={styles.Inputs}>
                <label htmlFor="email-address">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  type="email"
                  required
                  autoFocus
                />
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                  type="text"
                  required
                />
                <label htmlFor="last_name">Last Name</label>
                <input
                  id="last_name"
                  name="last_name"
                  value={last_name}
                  onChange={(e) => onChange(e)}
                  type="text"
                  required
                />
                <label htmlFor="password">Password</label>
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
                <button
                  onClick={(e) => {
                    navigate(-1);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
};

const mapStateToProps = (state) => ({
  e_profile: state.profile.e_profile,
  customerId: localStorage.getItem("Id"),
});
export default connect(mapStateToProps, {
  profile,
})(Profile);
