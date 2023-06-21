import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./components/loginPage/Home";
import SignUp from "./components/signUpPage/SignUp";
import PlanList from "./components/planPage/PlanList";
import Membership from "./components/membPage/Membership";
import Classes from "./components/classes/classes";
import Profile from "./components/profile/Profile";
import Update from "./components/Admin/Customers/Update";
import UpdateMem from "./components/Admin/PlanMem/UpdateMem";
import UpdateCla from "./components/Admin/Classes/UpdateCla";
import Create from "./components/Admin/Customers/Create";
import CreateP from "./components/Admin/PlanMem/CreateP";
import CreateC from "./components/Admin/Classes/CreateC";
import ListCustomer from "./components/Admin/Customers/ListCustomer";
import Delete from "./components/Admin/Customers/Delete";
import ListMemberships from "./components/Admin/PlanMem/ListMemberships";
import DeleteMem from "./components/Admin/PlanMem/DeleteMem";
import ListClasses from "./components/Admin/Classes/ListClasses";
import DeleteCla from "./components/Admin/Classes/DeleteCla";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <main>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/login" element={<Home />} />
            <Route path="/plans" element={<PlanList />} />
            <Route path="/new_account" element={<SignUp />} />
            <Route path="/show_membership" element={<Membership />} />
            <Route path="/class" element={<Classes />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-customer" element={<Create />} />
            <Route path="/see-customers" element={<ListCustomer />} />
            <Route path="/update_customer" element={<Update />} />
            <Route path="/update-membership" element={<UpdateMem />} />
            <Route path="/update-class" element={<UpdateCla />} />
            <Route path="/delete-customer" element={<Delete />} />
            <Route path="/delete-membership" element={<DeleteMem />} />
            <Route path="/delete-class" element={<DeleteCla />} />
            <Route path="/create-membership" element={<CreateP />} />
            <Route path="/see-memberships" element={<ListMemberships />} />
            <Route path="/see-classes" element={<ListClasses />} />
            <Route path="/create-class" element={<CreateC />} />
          </Routes>
        </main>
      </Router>
    </Provider>
  );
}

export default App;
