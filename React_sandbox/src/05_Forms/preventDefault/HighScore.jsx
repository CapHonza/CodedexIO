import { useState } from "react";

export default function HighScore() {
    const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value);
    }


    function handleSubmit(e) {
        e.preventDefault(); // * Metoda, která brání reloadu stránky -> nedochází ke ztrátě dat
        if (name.length > 3) {
            alert("Name is too long");
        } else {
            setName(""); // * Vyprázdní input po odeslání 
        }
    }

    return (
        <div className="arcade-container">
            <form className="arcade-form" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Enter your setName
                    <br />
                    <br />
                    (3 characters max)
                </label>
                <input 
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleChange}
                    required
                    className="arcade-input"
                />
                <br />
                <button type="submit" className="arcade-button">Submit</button>
            </form>
            <p>
                Top score: <strong>{name}</strong>{""}
            </p>
        </div>
    );
}