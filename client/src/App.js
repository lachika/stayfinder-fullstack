import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ListingDetailPage from "./pages/ListingDetailPage";
import PaymentPage from './pages/PaymentPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/listing/:id" element={<ListingDetailPage />} />
        <Route path="/payment" element={<PaymentPage />} />

      </Routes>
    </Router>
  );
}

export default App;

