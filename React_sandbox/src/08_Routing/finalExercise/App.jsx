import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Gallery from "./components/Gallery.jsx";
import Customers from "./components/Customers.jsx";
import About from "./components/About.jsx";

import { Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <div>
        <NavBar />
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Gallery" exact element={<Gallery />} />
            <Route path="/Customers" exact element={<Customers />} />
            <Route path="/About" exact element={<About/>} />
        </Routes>
        </div>
    );
}
