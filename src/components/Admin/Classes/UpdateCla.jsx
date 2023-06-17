import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCla } from "../../../redux/actions/updateCla/updateCla";
import Layout from "../../../hocs/layouts/Layout"
import Records from "../Records";

const UpdateCla = ({ updateCla, result }) => {
  const customerId = localStorage.getItem("Id");
  const updateClaId = localStorage.getItem("updateClaId");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    horary: "",
    description: "",
  });

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  } else {
    const { name, horary, description} = formData;

    const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
      e.preventDefault();
      updateCla(updateClaId, name, horary, description);
    };
    if (result === "Good") {
      console.log("Update!");
      navigate(0)
      navigate("/plans")
    }

    return (
      <Layout>
        <Records/>
      <div>
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="Horary" className="sr-only">
                  Horary
                </label>
                <input
                  id="horary"
                  name="horary"
                  value={horary}
                  onChange={(e) => onChange(e)}
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="ex: Los Martes"
                />
              </div>
              <div>
                <label htmlFor="Description" className="sr-only">
                  Description
                </label>
                <input
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => onChange(e)}
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Description"
                />
              </div>
            </div>

            {/* <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  to="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div> */}

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <LockClosedIcon
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                      /> */}
                </span>
                Save
              </button>
            </div>
          </form>
      </div>
      </Layout>
    );
  }
};

const mapStateToProps = (state) => ({
  result: state.updateCla.result,
});
export default connect(mapStateToProps, {
  updateCla,
})(UpdateCla);
