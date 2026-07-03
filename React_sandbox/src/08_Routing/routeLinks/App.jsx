import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import LegendOfZelda from "./components/LegendOfZelda.jsx";
import LinkPast from "./components/LinkPast.jsx";
import TwilightPrincess from "./components/TwilightPrincess.jsx";
import LinkWorlds from "./components/LinkWorld.jsx";
import BoTW from "./components/BoTW.jsx";

function Home() {
    return (
        <div className="center">
            <p>Explore the pages above!</p>
        </div>
    );
}

export default function App() {
    return (
        <div className="App">
        <NavBar />
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/1986" exact element={<LegendOfZelda />} />
            <Route path="/1992" exact element={<LinkPast />} />
            <Route path="/2006" exact element={<TwilightPrincess />} />
            <Route path="/2013" exact element={<LinkWorlds />} />
            <Route path="/2017" exact element={<BoTW />} />
        </Routes>
        </div>
    );
}
