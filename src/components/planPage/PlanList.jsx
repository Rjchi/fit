import { connect } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { plans } from "../../redux/actions/plan/plan";

import Plan from "./Plan";
import Layout from "../../hocs/layouts/Layout";
import Records from "../Admin/Records";

import styles from '../../styles/PlanList.module.css'

const PlanList = ({ list_plans, plans, customerId }) => {
  const admin = localStorage.getItem("Admin")
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    plans();
  }, [plans]);

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  } else {
    return (
      <Layout>
        <div className={styles.ContainerG}>
          <div className={styles.Target}>
          {
            admin !== "0" && admin === "1"?
            <Records/>:
            <>
              {list_plans &&
                list_plans.map((plan, index) => (
                  <Plan key={index} data={plan} />
                ))}
            </>
          }
          </div>
        </div>
      </Layout>
    );
  }
};

const mapStateToProps = (state) => ({
  list_plans: state.plan.setPlans,
  customerId: localStorage.getItem("Id"),
});
export default connect(mapStateToProps, {
  plans,
})(PlanList);
