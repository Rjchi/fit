import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "../styles/AdminNav.module.css";
import Logo from "../assets/logo.png";

import User from "../assets/usuario.png";

function AdminNav() {
  const navigate = useNavigate();
  const customerId = localStorage.getItem("Id");
  if (customerId === null || customerId === undefined) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div className={styles.ContainerG}>
        <div className={styles.Logo}>
          <div className={styles.Title}>
            <Link to="/plans">
              <img src={Logo} alt="logo" />
            </Link>
            <p
              onClick={(e) => {
                localStorage.removeItem("Admin");
                localStorage.removeItem("Id");
                navigate(0);
              }}
            >
              Fitness
            </p>
          </div>
        </div>
        <div className={styles.Links}>
          <Link to="/see-customers">
            <img src={User} alt="icon" />
            <p>Accounts</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default AdminNav;
