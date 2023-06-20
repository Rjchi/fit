import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { membership } from "../../redux/actions/membership/membership";
import { Navigate } from "react-router-dom";

import Layout from "../../hocs/layouts/Layout";
import styles from "../../styles/Membership.module.css";

const Membership = ({ membershipById, membership, customerId }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    membership(customerId)
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [membership, customerId]);

  if (customerId === null || customerId === undefined) {
    return <Navigate to="/login" />;
  }

  if (isLoading) {
    return <div>...</div>;
  }

  if (!membershipById || membershipById.length === 0) {
    return <div>Seleccione una membresia primero.</div>;
  }

  const firstMembership = membershipById[0];

  return (
    <Layout>
      <div className={styles.ContainerG}>
      <div className={styles.OneTarget}>
        <h2>{firstMembership.Nombre}</h2>
        <div className={styles.Description}>
          <p>Description:</p>
        </div>
        <div className={styles.Duration}>
          <p>
            {firstMembership.Duracion}
            <span>
              -month contract counting from the selection of the membership.
            </span>
          </p>
        </div>
        <div className={styles.Class}>
          <p>Customer:</p>
        </div>
        <div className={styles.Classes}>{firstMembership.Cliente}</div>
        <div className={styles.HoraryT}>
          <p>Start Date:</p>
        </div>
        <div className={styles.Horary}>
          <p>{firstMembership.FechaInicio}</p>
        </div>
      </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  membershipById: state.membership.membership,
  customerId: localStorage.getItem("Id"),
});

export default connect(mapStateToProps, {
  membership,
})(Membership);
