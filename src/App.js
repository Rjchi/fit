import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./components/loginPage/Home";
import SignUp from "./components/signUpPage/SignUp";
import PlanList from "./components/planPage/PlanList";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <main>
          <Routes>
            {/* <Route exact path="/movies/:movieId" element={<MovieDetalles />} /> */}
            <Route path="/login" element={<Home />} />
            <Route path="/plans" element={<PlanList />} />
            <Route path="/new_account" element={<SignUp />} />
          </Routes>
        </main>
      </Router>
    </Provider>
  );
}

export default App;
