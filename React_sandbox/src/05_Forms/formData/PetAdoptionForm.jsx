import { useState } from "react";

export default function PetAdoptionForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        petPreference: "",
        additionalInfo: ""
    });

    // Function to handle form submission
    function handleSubmit(e) {
        e.preventDefault(); // Prevent default form submission behavior

        // Perform form submission logic here
        console.log("Form submitted:", formData);
        // * Když udělám pouze setFormData("");, tak je to špatně, protože přepíšu celý objekt na prázdný textový řetězec
        // * React by pak hledal například formData.name uvnitř textu, což nejde
        setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            petPreference: "",
            additionalInfo: ""
        });
    }

    function handleInputChange(e) {
        setFormData({
            ...formData, // * tzv. spread operátor (...formData) -> zachová stará data a přes dynamický klíč (e.target.name) 
                            // * upravuje jen jedno jediné pole, do kterého uživatel zrovna píše
            [e.target.name]: e.target.value // * Podle jména (např name="phoneNumber") přiřaď hodnotu
        });
    }

    return (
        <div>
        <h2>Pet Adoption Form 🐾</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" value={formData.name} name="name" onChange={handleInputChange}/>
            <br />
            <br />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" value={formData.email} name="email" onChange={handleInputChange} />
            <br />
            <br />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="number" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
            <br />
            <br />

            <label>Preferred Pet:</label>
            <br />
            <input
                type="radio"
                id="dog"
                name="petPreference"
                value="dog"
                checked={formData.petPreference === "dog"}
                onChange={handleInputChange}
            />
            <label htmlFor="dog">Dog</label>
            <br />
            <input
                type="radio"
                id="cat"
                name="petPreference"
                value="cat"
                checked={formData.petPreference === "cat"}
                onChange={handleInputChange}
            />
            <label htmlFor="cat">Cat</label>
            <br />
            <input
                type="radio"
                id="other"
                name="petPreference"
                value="other"
                checked={formData.petPreference === "other"}
                onChange={handleInputChange}
            />
            <label htmlFor="other">Other</label>
            <br />
            <br />

            <label htmlFor="additionalInfo">Additional Information:</label>
            <input type="text" name="additionalInfo" id="additionalInfo" value={formData.additionalInfo} onChange={handleInputChange} />
            <br />
            <br />

            <input type="submit" value="Submit" />
        </form>
        </div>
    );
}
