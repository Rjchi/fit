import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteMem } from "../../../redux/actions/deleteMem/deleteMem";
import Layout from "../../../hocs/layouts/Layout"
import Records from "../Records";

const DeleteMem = ({ deleteMem, result }) => {
  const customerId = localStorage.getItem("Id");
  const deleteMemId = localStorage.getItem("deleteMemId");

  const navigate = useNavigate();

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  } else {

    const clicked = (e) => {
        deleteMem(deleteMemId)
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
  result: state.deleteMem.result,
});
export default connect(mapStateToProps, {
  deleteMem,
})(DeleteMem);
