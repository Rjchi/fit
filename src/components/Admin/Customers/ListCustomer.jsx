import { connect } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OneCustomer from "./OneCustomer"

import { customers } from "../../../redux/actions/customers/customers";
import Layout from "../../../hocs/layouts/Layout";
import Records from "../Records";

import styles from "../../../styles/ListCustomer.module.css"

import User from "../../../assets/usuario.png"

const ListCustomer = ({ customers, customersList, customerId }) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    customers();
  }, [customers]);

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  } else {
    return (
      <Layout>
        <Records/>
        <div className={styles.ContainerG}>
          <div className={styles.Title}>
            <h2>Customers:</h2>
            <img src={User} alt="customerIcon" />
          </div>
          <div className={styles.ContainerGrid}>
            <>
              {customersList &&
                customersList.map((customer, index) => (
                  <OneCustomer key={index} customer={customer} />
                ))}
            </>
          </div>
        </div>
        </Layout>
    );
  }
};

const mapStateToProps = (state) => ({
  customersList: state.customers.customers,
  customerId: localStorage.getItem("Id"),
});
export default connect(mapStateToProps, {
  customers,
})(ListCustomer);
