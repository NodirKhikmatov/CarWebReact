import React from "react";
import "./css/app.css";
import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./app/screens/helpPage/index";
import OrdersPage from "./app/screens/OrdersPage/index";
import UserPage from "./app/screens/userPage/index";
import ProductsPage from "./app/screens/productsPage/index";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/products">ProductsPage</Link>
          </li>
          <li>
            <Link to="/orders">OrdersPage</Link>
          </li>
          <li>
            <Link to="/member-page">UserPage</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/member-page" element={<UserPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
