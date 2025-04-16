// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import ItServicesPage from "../pages/ItServices";
import MarketingServicesPage from "../pages/Marketing";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/it-services" element={<ItServicesPage />} />
        <Route path="/markating" element={<MarketingServicesPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
