import { Routes, Route } from "react-router-dom";
import Map from "./components/Map";
import House from './components/House.jsx';
import Garden from './components/Garden';
import School from './components/School';
import Museum from './components/Museum';

function App() {
    return (
        <div>
        <h1>Map Navigation</h1>
        <Map />
        <Routes>
            <Route path="/" exact element={<House />} />
            <Route path="/garden" exact element={<Garden />} />
            <Route path="/school" exact element={<School />} />
            <Route path="/museum" exact element={<Museum />} />
        </Routes>
        </div>
    );
}

export default App;
