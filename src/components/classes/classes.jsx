import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { classes } from "../../redux/actions/classes/classes";
import { Navigate } from "react-router-dom";

import OneClass from "./OneClass";
import Layout from "../../hocs/layouts/Layout";

import styles from "../../styles/classses.module.css";

const Classes = ({ classesById, classes, customerId }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    classes(customerId)
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [classes, customerId]);

  if (customerId === null || customerId === undefined) {
    return <Navigate to="/login" />;
  }

  if (isLoading) {
    return <div>...</div>;
  }

  if (!Array.isArray(classesById) || classesById.length === 0) {
    return <div>Sin clases seleccione una membresia primero.</div>;
  }

  return (
    <Layout>
      <div className={styles.ContainerG}>
        <div className={styles.ContainerClass}>
          {classesById &&
            classesById.map((datos, index) => (
              <OneClass key={index} data={datos} />
            ))}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  classesById: state.classes.setClasses,
  customerId: localStorage.getItem("Id"),
});

export default connect(mapStateToProps, {
  classes,
})(Classes);
