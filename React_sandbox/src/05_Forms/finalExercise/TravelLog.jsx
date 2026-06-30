import { useState } from "react";

export default function TravelLog() {
    const [activities, setActivities] = useState([]);
    const [inputData, setInputData] = useState({
        destination: "",
        dates: "",
        groupSize: "",
        travelPreferences: ""
    });

    function handleActivitiesChange(e) {
        const selectedActivities = Array.from(
            e.target.selectedOptions,
                (option) => option.value,
        );
        setActivities(selectedActivities);
    }

    function handleInputDataChange(e) {
        setInputData({
            ...inputData, // * tzv. spread operátor (...inputData) -> zachová stará data a přes dynamický klíč (e.target.name) 
                            // * upravuje jen jedno jediné pole, do kterého uživatel zrovna píše
            [e.target.name]: e.target.value // * Podle jména (např name="phoneNumber") přiřaď hodnotu
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted sucessfully!:", inputData, activities); // * Alert tohle neumí, vypisuje pouze svůj první argument
                // * Jde to udělat například přes: alert("Form submitted successfully!:\n" + JSON.stringify(inputData, null, 2));
        setInputData({ 
            // * Nemažeme celý objekt (klíče jako destination, dates musí zůstat zachované).
            // * Pouze přepisujeme jejich vnitřní hodnoty zpět na prázdné texty (resetujeme je).
            destination: "",
            dates: "",
            groupSize: "",
            travelPreferences: ""
        });
        setActivities([]);
    }

    return (
        <div>
            <h2>Adventure Travel Booking</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="destination">Destination</label>
                <input type="text" id="destination" name="destination" value={inputData.destination} onChange={handleInputDataChange}/>
                <label htmlFor="activities">Activities</label>
                <select name="activities" id="activities" value={activities} onChange={handleActivitiesChange} multiple>
                    <option value="tenis">Tenis</option>
                    <option value="hiking">Hiking</option>
                    <option value="biking">Biking</option>
                    <option value="swimming">Swimming</option>
                </select>
                <label htmlFor="dates">Date</label>
                <input type="date" id="dates" name="dates" value={inputData.dates} min="2026-07-01" max="2026-12-31" onChange={handleInputDataChange}/>
                <label htmlFor="groupSize">Group Size</label>
                <input type="number" id="groupSize" name="groupSize" value={inputData.groupSize} onChange={handleInputDataChange}/>
                <textarea placeholder="Thoughts and reflections..." name="travelPreferences" value={inputData.travelPreferences} onChange={handleInputDataChange}></textarea>
                <button>Submit</button>
            </form>
        </div>
    );
}
