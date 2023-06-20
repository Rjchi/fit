import { connect } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OneMemberships from "./OneMemberships";

import { memberships } from "../../../redux/actions/memberships/memberships";
import Layout from "../../../hocs/layouts/Layout";
import Records from "../Records";

import styles from "../../../styles/ListCustomer.module.css";

import User from "../../../assets/estrella.png";

const ListMemberships = ({ memberships, membershipsList, customerId }) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    memberships();
  }, [memberships]);

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  } else {
    return (
      <Layout>
        <Records />
        <div className={styles.ContainerG}>
          <div className={styles.Title}>
            <h2>Memberships:</h2>
            <img src={User} alt="customerIcon" />
          </div>
          <div className={styles.ContainerGrid}>
            <>
              {membershipsList &&
                membershipsList.map((membership, index) => (
                  <OneMemberships key={index} membership={membership} />
                ))}
            </>
          </div>
        </div>
      </Layout>
    );
  }
};

const mapStateToProps = (state) => ({
  membershipsList: state.memberships.memberships,
  customerId: localStorage.getItem("Id"),
});
export default connect(mapStateToProps, {
  memberships,
})(ListMemberships);
