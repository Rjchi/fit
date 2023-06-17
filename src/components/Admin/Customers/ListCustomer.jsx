import { connect } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OneCustomer from "./OneCustomer"

import { customers } from "../../../redux/actions/customers/customers";
import Layout from "../../../hocs/layouts/Layout";
import Records from "../Records";

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
        <div className="overflow-hidden bg-white">
          <ul className="divide-y space-y-8 gap-8 divide-gray-200">
            <>
              {customersList &&
                customersList.map((customer, index) => (
                  <OneCustomer key={index} customer={customer} />
                ))}
            </>
          </ul>
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
