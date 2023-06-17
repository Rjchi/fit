import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCla } from "../../../redux/actions/deleteCla/deleteCla";
import Layout from "../../../hocs/layouts/Layout"
import Records from "../Records";

const DeleteCla = ({ deleteCla, result }) => {
  const customerId = localStorage.getItem("Id");
  const deleteClaId = localStorage.getItem("deleteClaId");

  const navigate = useNavigate();

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  } else {

    const clicked = (e) => {
        deleteCla(deleteClaId)
    }

    if (result === "Good") {
      console.log("Delete!");
      navigate(0)
      navigate("/plans")
    }

    return (
      <Layout>
        <Records/>
      <div>
        Seguro que quiere eliminar este registro?
        <button
        onClick={(e) => clicked(e)}
        >
            Yes
        </button>
        <button
        onClick={(e) => navigate("/plans")}
        >
            Cancel
        </button>
      </div>
      </Layout>
    );
  }
};

const mapStateToProps = (state) => ({
  result: state.deleteCla.result,
});
export default connect(mapStateToProps, {
  deleteCla,
})(DeleteCla);
