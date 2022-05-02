import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import CompanyLogin from "./components/auth/CompanyLogin";
import CompanyRegister from "./components/auth/CompanyRegister";
import Dashboard from "./components/dashboard/Dashboard";
import AddNewJob from "./components/dashboard/AddJob.js";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login/candidate" element={<Login />} />
          <Route path="/register/candidate" element={<Register />} />
          <Route path="/login/company" element={<CompanyLogin />} />
          <Route path="/register/company" element={<CompanyRegister />} />
          <Route path="/dashboard/addjob" element={<AddNewJob />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
