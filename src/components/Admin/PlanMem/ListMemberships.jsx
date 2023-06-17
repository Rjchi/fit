import { connect } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OneMemberships from "./OneMemberships"

import { memberships } from "../../../redux/actions/memberships/memberships";
import Layout from "../../../hocs/layouts/Layout";
import Records from "../Records";

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
        <Records/>
        <div className="overflow-hidden bg-white">
          <ul className="divide-y space-y-8 gap-8 divide-gray-200">
            <>
              {membershipsList&&
                membershipsList.map((membership, index) => (
                  <OneMemberships key={index} membership={membership} />
                ))}
            </>
          </ul>
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
