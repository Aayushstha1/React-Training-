import { Routes } from "react-router";

export default function HomePage() {
    return(
        <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
    );
}