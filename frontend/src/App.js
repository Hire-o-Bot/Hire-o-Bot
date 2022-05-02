import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import CompanyLogin from "./components/auth/CompanyLogin";
import CompanyRegister from "./components/auth/CompanyRegister";
import Navbar from "./components/navigation/Navbar";
import CompanySetup from "./components/profile/company/Setup";
import { loadUser } from "./state/actions/auth";
import store from "./store";
import { useEffect } from "react";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <div className='h-screen text-center pt-16 text-[#001E2B]'>
                <h2 className='text-7xl font-bold'>HOME PAGE</h2>
              </div>
            }
          />

          <Route path='/login/candidate' element={<Login />} />
          <Route
            path='register'
            element={
              <p className='text-7xl font-bold text-center mt-16'>Register</p>
            }></Route>
          <Route path='/register/candidate' element={<Register />} />
          <Route path='/login/company' element={<CompanyLogin />} />
          <Route path='/register/company' element={<CompanyRegister />} />
          <Route path='/login/candidate' element={<Login />} />
          <Route
            path='/profile/setup'
            element={
              <ProtectedRoute>
                <CompanySetup />
              </ProtectedRoute>
            }
          />
          <Route
            path='*'
            element={
              <div className='h-screen text-center pt-16 text-[#001E2B]'>
                <h2 className='text-9xl font-bold'>404</h2>
                <h3 className='text-6xl font-bold mb-4'>Page Not Found</h3>
                <p className='text-[#00ed64] font-bold text-lg'>
                  Back to Home ↺
                </p>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
