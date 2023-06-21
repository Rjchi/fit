import Logo from "../assets/logo.png";
import Face from "../assets/facebook.png";
import styles from '../styles/foo.module.css'

function foo() {
  return (
    <div className={styles.ContainerG}>
      <div className={styles.ContainerP}>
        <img src={Logo} alt="logo" />
        <p>Fitness</p>
      </div>
      <div className={styles.ContainerS}>
        <h2>FOLLOW US:</h2>
        <div className={styles.Icons}>
        <img src={Face} alt="icon" />
        <img src={Face} alt="icon" />
        <img src={Face} alt="icon" />
        <img src={Face} alt="icon" />
        </div>
        <p>All rights reserved Fitness 2023</p>
      </div>
    </div>
  );
}

export default foo;
