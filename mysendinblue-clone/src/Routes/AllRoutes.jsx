import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  )
}

export default AllRoutes