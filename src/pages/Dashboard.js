import React from "react";
import { Routes, Route } from "react-router-dom";

// import all pages here
import { Layout, Search ,Topranked, History} from "components/dashboard";
// replace the divs with your pages

const Dashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Search />} />

        <Route path="history" element={<History />} />

        <Route path="top-rank" element={<Topranked />} />

        <Route path="profile" element={<div>tprofile</div>} />
      </Route>
    </Routes>
  );
};

export default Dashboard;
