import { connect } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OneClasses from "./OneClasses";

import { classesList } from "../../../redux/actions/classesList/classesList";
import Layout from "../../../hocs/layouts/Layout";
import Records from "../Records";

import styles from "../../../styles/ListCustomer.module.css";

import User from "../../../assets/bicicleta.png";

const ListClasses = ({ classesList, setClasses, customerId }) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    classesList();
  }, [classesList]);

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  } else {
    return (
      <Layout>
        <Records />
        <div className={styles.ContainerG}>
          <div className={styles.Title}>
            <h2>Classes:</h2>
            <img src={User} alt="customerIcon" />
          </div>
          <div className={styles.ContainerGrid}>
            <>
              {setClasses &&
                setClasses.map((clas, index) => (
                  <OneClasses key={index} clas={clas} />
                ))}
            </>
          </div>
        </div>
      </Layout>
    );
  }
};

const mapStateToProps = (state) => ({
  setClasses: state.classesList.classesList,
  customerId: localStorage.getItem("Id"),
});
export default connect(mapStateToProps, {
  classesList,
})(ListClasses);
