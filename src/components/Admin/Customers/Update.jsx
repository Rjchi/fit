import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update } from "../../../redux/actions/update/update";
import Layout from "../../../hocs/layouts/Layout"
import Records from "../Records";

const Update = ({ update, result }) => {
  const customerId = localStorage.getItem("Id");
  const updateId = localStorage.getItem("updateId");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Nombre: "",
    Apellido: "",
    CorreoElectronico: "",
    contrasenia: "",
    Admin: 0,
  });

  if (customerId === null || customerId === undefined) {
    navigate("/login");
  } else {
    const { Nombre, Apellido, CorreoElectronico, contrasenia, Admin } = formData;

    const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
      e.preventDefault();
      update(updateId, Nombre, Apellido, CorreoElectronico, contrasenia, Admin);
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
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="CorreoElectronico"
                  value={CorreoElectronico}
                  onChange={(e) => onChange(e)}
                  type="email"
                  // autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="Nombre"
                  value={Nombre}
                  onChange={(e) => onChange(e)}
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="last_name" className="sr-only">
                  Last Name
                </label>
                <input
                  id="last_name"
                  name="Apellido"
                  value={Apellido}
                  onChange={(e) => onChange(e)}
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="contrasenia"
                  value={contrasenia}
                  onChange={(e) => onChange(e)}
                  type="password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="Admin" className="sr-only">
                  Admin
                </label>
                <input
                  id="Admin"
                  name="Admin"
                  value={Admin}
                  onChange={(e) => onChange(e)}
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Admin"
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
  result: state.update.result,
});
export default connect(mapStateToProps, {
  update,
})(Update);
