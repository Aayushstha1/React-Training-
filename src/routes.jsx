import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage"; 
import SingleProductPages from "./pages/product/singleProduct";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="contact" element={<div>Contact Page</div>} />
            <Route path="product">
                <Route element={<div>Product Page</div>} index />
                <Route path=":id" element={<SingleProductPages />} />
            </Route>
        </Routes>
    );
}