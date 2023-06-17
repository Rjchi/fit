import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Records = () => {
  const customerId = localStorage.getItem("Id");
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [createcus, setCreateCus] = useState(false);
  const [createClass, setCreateClass] = useState(false);
  const [createMem, setCreateMem] = useState(false);

  const [seeCustomers, setSeeCustomers] = useState(false)
  const [seeMemberships, setSeeMemberships] = useState(false)
  const [seeClasses, setSeeClasses] = useState(false)

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
    <div>
      <hr />
      <div>
        <h1>Customers</h1>
        {data.total_clientes}
        <button onClick={(e) => setCreateCus(true)}>
          CREATE
        </button>
        {
          createcus?
          <Navigate to="/create-customer" />:
          <></>
        }
        <button onClick={(e) => setSeeCustomers(true)}>
          SEE
        </button>
        {
          seeCustomers?
          <Navigate to="/see-customers" />:
          <></>
        }
      </div>
      <div>
        <h1>Memberships</h1>
        {data.total_membresias}
        <button onClick={(e) => setCreateMem(true)}>
          CREATE
        </button>
        {
          createMem?
          <Navigate to="/create-membership" />:
          <></>
        }
        <button onClick={(e) => setSeeMemberships(true)}>
          SEE
        </button>
        {
          seeMemberships?
          <Navigate to="/see-memberships" />:
          <></>
        }
      </div>
      <div>
        <h1>Classes</h1>
        {data.total_clases}
        <button onClick={(e) => setCreateClass(true)}>
          CREATE
        </button>
        {
          createClass?
          <Navigate to="/create-class" />:
          <></>
        }
        <button onClick={(e) => setSeeClasses(true)}>
          SEE
        </button>
        {
          seeClasses?
          <Navigate to="/see-classes" />:
          <></>
        }
      </div>
      <hr />
    </div>
  );
};

export default Records;
