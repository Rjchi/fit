import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { delete_ } from "../../../redux/actions/delete/delete";
import Layout from "../../../hocs/layouts/Layout"
import Records from "../Records";

const Delete = ({ delete_, result }) => {
  const customerId = localStorage.getItem("Id");
  const deleteId = localStorage.getItem("deleteId");

  const navigate = useNavigate();

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  } else {

    const clicked = (e) => {
        delete_(deleteId)
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
  result: state.delete_.result,
});
export default connect(mapStateToProps, {
  delete_,
})(Delete);
