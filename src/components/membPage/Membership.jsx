import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { membership } from "../../redux/actions/membership/membership";
import { Navigate } from "react-router-dom";

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
    <div>
      {firstMembership.Id}
      {firstMembership.Cliente}
      {firstMembership.Nombre}
      {firstMembership.Duracion}
      {firstMembership.FechaInicio}
    </div>
  );
};

const mapStateToProps = (state) => ({
  membershipById: state.membership.membership,
  customerId: localStorage.getItem("Id"),
});

export default connect(mapStateToProps, {
  membership,
})(Membership);
