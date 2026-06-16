const jokeContainer = document.getElementById("jokeContainer");
const getJokeBtn = document.getElementById("getJokeBtn");

function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => jokeContainer.innerText = `${data.setup} \n\n ${data.punchline}`)
    .catch((error) => console.error())
}

getJokeBtn.addEventListener("click", fetchJoke);
