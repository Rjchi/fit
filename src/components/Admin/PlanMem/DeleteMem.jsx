import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteMem } from "../../../redux/actions/deleteMem/deleteMem";
import Layout from "../../../hocs/layouts/Layout"
import Records from "../Records";

import styles from "../../../styles/Delete.module.css";

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
      navigate("/see-memberships")
    }

    return (
      <Layout>
        <Records/>
        <div className={styles.ContainerG}>
          <div className={styles.DeleteP}>
            <div className={styles.Title}>
            <img src="data:image/png;base64,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" alt="warning" />
            <h1>Are you sure you want to delete this record?</h1>
            </div>
            <div className={styles.Btn}>
              <button onClick={(e) => clicked(e)}>Yes</button>
              <button onClick={(e) => navigate("/see-memberships")}>
                Cancel
              </button>
            </div>
          </div>
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
