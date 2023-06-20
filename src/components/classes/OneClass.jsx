import styles from "../../styles/OneClass.module.css";

const OneClass = ({ data }) => {
  return (
    <div className={styles.Class}>
      <div className={styles.Imagen}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpR5WOn2z31NaCvVK10lQ9D7j3aSV9QxPskg&usqp=CAU"
          alt="gym"
        />
      </div>
      <div className={styles.Name}>
        <p>{data.Nombre}:</p>
      </div>
      <div className={styles.Content}>
        <p className={styles.Des}>DESCRIPTION:</p>
        <p>{data.Descripcion}</p>
      </div>
    </div>
  );
};

export default OneClass;
