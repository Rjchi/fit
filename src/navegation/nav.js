import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FilterPlan from "../components/filterPlanPage/FilterPlan";

function Nav() {
  const customerId = localStorage.getItem("Id");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [datos, setData] = useState(null);
  const [formData, setFormData] = useState({
    word: "",
  });

  const { word } = formData;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (word.length > 5) {
          const res = await axios.get(
            `http://localhost:81/api/filter?name=${word}`
          );

          if (res.status === 200) {
            if (res.data.length > 0 && res.data !== null) {
              setLoading(false);
              // setData(res.data);
              const planId = res.data[0].Id;
              const name = res.data[0].Nombre;
              const Duracion = res.data[0].Duracion;
              const horarios = res.data.map((item) => item.Horario);
              const clases = res.data.map((item) => item.ClaseNombre);
              const updatedFilterPlan = {
                planId,
                name,
                Duracion,
                horarios,
                clases,
              };
              setData(updatedFilterPlan);
            } else {
              setLoading(true);
            }
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [word]);

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  }
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <div>
        <input
          id="word"
          name="word"
          value={word}
          onChange={(e) => onChange(e)}
          type="text"
          className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Search"
        />
        <div></div>
        <hr />
        <Link to="/show_membership">MEMBRESIA</Link>
        <hr />
        <Link to="/class">CLASES</Link>
        <hr />
        <Link to="/profile">PROFILE</Link>
        <hr />
      </div>
      {datos !== null ? (
        <div>
          <FilterPlan plan={datos} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Nav;
