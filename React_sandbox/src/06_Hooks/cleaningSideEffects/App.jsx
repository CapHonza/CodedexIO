import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
    const [toggle, setToggle] = useState(false);

    useEffect(function () {
        if (toggle === true) {
            const intervalID = setInterval(function() {
                const color = '#' + Math.floor(Math.random() * 16777215).toString(16) ;
                document.body.style.backgroundColor = color;
            }, 2000);

            return function() {
                clearInterval(intervalID);
            };
        }
    }, [toggle]);

    const handleToggle = function () {
        setToggle(function (prevToggle) {
        return !prevToggle;
        });
    };

    return (
        <div id="toggle">
        <button onClick={handleToggle}>
            {toggle ? "Stop" : "Start"} Color Changing
        </button>
        </div>
    );
}
