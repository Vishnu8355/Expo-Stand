import React, { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Layout from './Components/Dashboard/Layout';
import Userprofile from './Components/Dashboard/Userprofile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const PrivateRoute = ({ element }) => {
    const { auth } = useContext(AuthContext);

    return auth.token ? element : <Navigate to="/"  />;
};
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/layout"  element={<Layout />} />
        <Route path="/userprofile" element={<PrivateRoute element={<Userprofile />} />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
