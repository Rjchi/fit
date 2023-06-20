import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FilterPlan from "../components/filterPlanPage/FilterPlan";
import styles from "../styles/nav.module.css";
import Logo from "../assets/logo.png";
import User from "../assets/usuario.png";
import Class from "../assets/bicicleta.png";
import Member from "../assets/estrella.png";
import Search from "../assets/zoom.png";
import X from "../assets/x.png";
import Lista from "../assets/lista.png";

function Nav() {
  const customerId = localStorage.getItem("Id");
  const navigate = useNavigate();
  const [datos, setData] = useState(null);
  const [formData, setFormData] = useState({
    word: "",
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { word } = formData;

  const Menu = (e) => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (word.length > 5) {
          const res = await axios.get(
            `http://localhost:81/api/filter?name=${word}`
          );

          if (res.status === 200) {
            if (res.data.length > 0 && res.data !== null) {
              const planId = res.data[0].Id;
              const name = res.data[0].Nombre;
              const Duracion = res.data[0].Duracion;
              const horarios = res.data.map((item) => item.Horario);
              const clases = res.data.map((item) => item.ClaseNombre);
              const updatedFilterPlan = {
                planId,
                name,
                Duracion,
                horarios,
                clases,
              };
              setData(updatedFilterPlan);
            }
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [word]);

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  }
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className={styles.Navbar}>
      <div className={styles.ContainerG}>
        <div className={styles.Logo}>
          <div className={styles.Title}>
            <Link to="/plans">
              <img src={Logo} alt="logo" />
            </Link>
            <p onClick={(e) => {
              localStorage.removeItem("Id")
              navigate(0)
            }}>Fitness</p>
          </div>
          <div className={styles.Search}>
            <p>
              <img src={Search} alt="searchIcon" />
            </p>
            <input
              id="word"
              name="word"
              value={word}
              onChange={(e) => onChange(e)}
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className={styles.Links}>
          <div
            className={styles.Menu}
            onClick={(e) => {
              Menu(e);
            }}
          >
            <img src={isMenuOpen?X:Lista} alt="menu" />
          </div>
          {isMenuOpen ? (
            <div className={styles.MenuLinks}>
              <Link to="/profile">
                <img src={User} alt="iconUser" />
                <p>Profile</p>
              </Link>
              <Link to="/class">
                <img src={Class} alt="icon" />
                <p>Classes</p>
              </Link>
              <Link to="/show_membership">
                <img src={Member} alt="icon" />
                <p>Membership</p>
              </Link>
            </div>
          ) : (
            <></>
          )}
          <div className={styles.Enlaces}>
            <Link to="/profile">
              <img src={User} alt="icon" />
              <p>Profile</p>
            </Link>
            <Link to="/class">
              <img src={Class} alt="icon" />
              <p>Classes</p>
            </Link>
            <Link to="/show_membership">
              <img src={Member} alt="icon" />
              <p>Membership</p>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.Filtered}>
        {datos !== null ? (
          <>
            <FilterPlan plan={datos} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Nav;
