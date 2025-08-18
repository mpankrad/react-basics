import axios from "axios";
import { Routes, Route } from "react-router";

import { useState, useEffect } from "react";

import { HomePage } from "./pages/Home-page";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";

import "./App.css";
import { Tracking } from "./pages/Tracking";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart = {cart} />} />
      <Route path="checkout" element={<CheckoutPage cart = {cart} />} />
      <Route path="orders" element={<OrdersPage />}></Route>
      <Route path="tracking" element={<Tracking />}></Route>
    </Routes>
  );
}

export default App;
