import { connect } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OneClasses from "./OneClasses"

import { classesList } from "../../../redux/actions/classesList/classesList";
import Layout from "../../../hocs/layouts/Layout";
import Records from "../Records";

const ListClasses = ({ classesList, setClasses, customerId }) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    classesList();
  }, [classesList]);

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  } else {
    return (
      <Layout>
        <Records/>
        <div className="overflow-hidden bg-white">
          <ul className="divide-y space-y-8 gap-8 divide-gray-200">
            <>
              {setClasses&&
                setClasses.map((clas, index) => (
                  <OneClasses key={index} clas={clas} />
                ))}
            </>
          </ul>
        </div>
        </Layout>
    );
  }
};

const mapStateToProps = (state) => ({
  setClasses: state.classesList.classesList,
  customerId: localStorage.getItem("Id"),
});
export default connect(mapStateToProps, {
  classesList,
})(ListClasses);
