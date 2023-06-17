import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const FilterPlan = ({ plan }) => {
  const navigate = useNavigate();
  const customerId = localStorage.getItem("Id");
  const [select, setSelect] = useState(false);
  const [open, setOpen] = useState(false);

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  } else {
    const onSubmitDelete = (e) => {
      e.preventDefault();

      const fetchData = async () => {
        try {
          const res = await axios.get(
            `http://localhost:81/api/membership_selection/${customerId}/${
              plan.planId
            }/${`2023-06-23`}`
          );

          if (res.status === 200) {
            if (res.data === "Seleccionada" || res.data === "Actualizado") {
              setOpen(true);
            }
          }
        } catch (error) {
          alert("Error");
        }
      };
      fetchData();
    };

    return (
      <div>
          FILTERED
          <div>
            {console.log(plan)}
            <div>{plan.planId}</div>
            <div>{plan.name}</div>
            <div>{plan.Duracion}</div>
            <div>{plan.clases}</div>
            <div>{plan.horarios}</div>

            <button onClick={(e) => setSelect(true)}>SELECT</button>
            {select ? (
              <form onSubmit={(e) => onSubmitDelete(e)}>
                SEGURO?
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:text-sm"
                >
                  <span>SAVE</span>
                </button>
                {open ? (
                  <div>
                    Successfully Added!
                    <button
                      onClick={(e) => {
                        navigate(0);
                      }}
                    >
                      Ok
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </form>
            ) : (
              <></>
            )}
          </div>
      </div>
    );
  }
};
export default FilterPlan;
