import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./components/loginPage/Home";
import SignUp from "./components/signUpPage/SignUp";
import PlanList from "./components/planPage/PlanList";
import Membership from "./components/membPage/Membership";
import Classes from "./components/classes/classes";
import Profile from "./components/profile/Profile";

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
          </Routes>
        </main>
      </Router>
    </Provider>
  );
}

export default App;
