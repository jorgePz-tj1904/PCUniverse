import React from "react";;
import "./Admin.css"; // Estilos para el layout
import { Route, Routes } from "react-router-dom";
import Inventory from "../../pages/DashBoardPages/Inventory/Inventory";
import Orders from "../../pages/DashBoardPages/Orders/Orders";
import Customers from "../../pages/DashBoardPages/Customers/Customers";
import Dashboard from "../../pages/DashBoardPages/DashBoard/DashBoard";
import Create from "../../pages/DashBoardPages/Create/Create";
import "./Admin.css"


const AdminLayout = () => {
  return (
  <div >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/create" element={<Create/>} />
        </Routes>
      
  </div>
  );
};

export default AdminLayout;
