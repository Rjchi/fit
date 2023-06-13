import { connect } from "react-redux";
import { useEffect } from "react";

import { plans } from '../../redux/actions/plan/plan'

import Plan from './Plan'

const PlanList = ({ list_plans, plans }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
    plans();
  }, [plans]);

  return (
    <div className="overflow-hidden bg-white">
    <ul className="divide-y space-y-8 gap-8 divide-gray-200">
      {list_plans&&list_plans.map((plan, index) => (
        <Plan key={index} data={plan} />
      ))}
    </ul>
  </div>
  );
};

const mapStateToProps = (state) => ({
  list_plans: state.plan.setPlans,
  // loading: state.plans.loading,
});
export default connect(mapStateToProps, {
  plans,
})(PlanList);

