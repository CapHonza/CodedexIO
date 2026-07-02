import { useState, useEffect } from "react";

export default function App() {
    const [error, setError] = useState("");

    const errorSrc = "https://i.giphy.com/4Zvz30OkefpNXT4HDQ.webp" // Gif ukazující error

    useEffect(function () { // useEffect sama od sebe nesmí být asynchronní, proto se dává další (už async) funkce pod ni ->
                    // * React očekává, že useEffect nevrátí nic, anebo úklidovou funkci (např. clearTimeout) -> tu si zavolá až když komponenta zmizí z obrazovky
                    // * JS ale při použití async začne automaticky vracet Promise
                    // * Kdyby useEffect vrátil Promise, React by při úklidu spadnul
        async function fetchData() {
        try {
            // Add more characters to the string in fetch() 💖
            const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            );
            if (response.ok === false) { // Zdlouhavě pro !reponse.ok
            throw new Error("Failed to fetch data!");
            }
            setError(null); // Nastavuje se error na null, protože ještě nebyl
        } catch (err) {
            setError(err.message); // Tohle ukazuje error reálně na obrazovce
            console.log(err.message); // Toto vypisuje pouze do konzele, v podsttě by asi nemuselo být
        }
        }
        fetchData();
    }, []);

    return (
        <div>
        {(error && (
            <img
            width="300"
            src={
                errorSrc // Využití error gifu
            }
            />
        )) || (
            <img width="300" src="https://i.giphy.com/ynNF0bU8fB3HsInXEL.webp" />
        )}

        {(error && <h2>Error fetching data</h2>) || (
            <h2>Yay, no errors!</h2>
        )}
        </div>
    );
}
