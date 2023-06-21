import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import styles from "../../styles/Records.module.css";

import User from "../../assets/usuario.png";
import Mem from "../../assets/estrella.png";
import Cla from "../../assets/bicicleta.png";

const Records = () => {
  const customerId = localStorage.getItem("Id");
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [createcus, setCreateCus] = useState(false);
  const [createClass, setCreateClass] = useState(false);
  const [createMem, setCreateMem] = useState(false);

  const [seeCustomers, setSeeCustomers] = useState(false);
  const [seeMemberships, setSeeMemberships] = useState(false);
  const [seeClasses, setSeeClasses] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:81/api/count_records");

        if (res.status === 200) {
          setData(res.data[0]);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.ContainerG}>
      <div className={styles.Customers}>
        <h1>Customers</h1>
        <div className={styles.Total}>
          <p>Total:</p>
          <p>{data.total_clientes}</p>
        </div>
        <div className={styles.Btn}>
          <img src={User} alt="customerIcon" />
          <button onClick={(e) => setCreateCus(true)}>Create</button>
          {createcus ? <Navigate to="/create-customer" /> : <></>}
          <button onClick={(e) => setSeeCustomers(true)}>See</button>
          {seeCustomers ? <Navigate to="/see-customers" /> : <></>}
        </div>
      </div>
      <div className={styles.Customers}>
        <h1>Memberships</h1>
        <div className={styles.Total}>
          <p>Total:</p>
          <p>{data.total_membresias}</p>
        </div>
        <div className={styles.Btn}>
          <img src={Mem} alt="starIcon" />
          <button onClick={(e) => setCreateMem(true)}>Create</button>
          {createMem ? <Navigate to="/create-membership" /> : <></>}
          <button onClick={(e) => setSeeMemberships(true)}>See</button>
          {seeMemberships ? <Navigate to="/see-memberships" /> : <></>}
        </div>
      </div>
      <div className={styles.Customers}>
        <h1>Classes</h1>
        <div className={styles.Total}>
          <p>Total:</p>
          <p>{data.total_clases}</p>
        </div>
        <div className={styles.Btn}>
          <img src={Cla} alt="classIcon" />
          <button onClick={(e) => setCreateClass(true)}>Create</button>
          {createClass ? <Navigate to="/create-class" /> : <></>}
          <button onClick={(e) => setSeeClasses(true)}>See</button>
          {seeClasses ? <Navigate to="/see-classes" /> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Records;
