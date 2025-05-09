// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import ItServicesPage from "../pages/ItServices";
import AboutUs from "../pages/AboutUs";
import MarketingServicesPage from "../pages/Marketing";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/it-services" element={<ItServicesPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/marketing" element={<MarketingServicesPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
