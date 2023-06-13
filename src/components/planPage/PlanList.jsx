import { connect } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { plans } from "../../redux/actions/plan/plan";

import Plan from "./Plan";
import Layout from '../../hocs/layouts/Layout'

const PlanList = ({ list_plans, plans, customerId }) => {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);
    plans();
  }, [plans]);

  if (customerId === null || customerId === undefined) {
    navigate("/login")
  }else{

  return (
    <Layout>

    <div className="overflow-hidden bg-white">
      <ul className="divide-y space-y-8 gap-8 divide-gray-200">
        {list_plans &&
          list_plans.map((plan, index) => <Plan key={index} data={plan} />)}
      </ul>
    </div>
    </Layout>
  );
};
}

const mapStateToProps = (state) => ({
  list_plans: state.plan.setPlans,
  customerId: localStorage.getItem("Id"),
});
export default connect(mapStateToProps, {
  plans,
})(PlanList);
