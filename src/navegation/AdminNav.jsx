import { Link, Navigate } from "react-router-dom";

function AdminNav() {
  const customerId = localStorage.getItem("Id");
  if (customerId === null || customerId === undefined) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <hr />
        <Link to="/Admin">ACCOUNTS</Link>
        <hr />
      </div>
    );
  }
}

export default AdminNav;
