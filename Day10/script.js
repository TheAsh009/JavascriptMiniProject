const jokeEl = document.getElementById("joke");
const jokeBtn = document.querySelector("#jokeBtn");

const generateJoke = async function () {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
};

jokeBtn.addEventListener("click", generateJoke);
