export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./newroutes/About";
import Contactus from "./newroutes/Contactus";
import Home from "./newroutes/Home";
import Layout from "./newroutes/Layout";
import Login from "./newroutes/login";
import ProductDetails from "./newroutes/productDetails";
import Products from "./newroutes/products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent */}
        <Route path="/" element={<Layout />}>
          {/* Child Routes */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


