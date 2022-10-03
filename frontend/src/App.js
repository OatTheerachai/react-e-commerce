import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

// screen
import Home from "./screens/Home";
import Order from "./screens/Order";
import Contact from "./screens/Contact";
import Product from "./screens/Product";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route index path="order" element={<Order />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
