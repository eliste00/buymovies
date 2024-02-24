const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);
const id = searchParameters.get("id");
const baseUrl = "https://v2.api.noroff.dev/";

async function fetchMovies(url) {
  try {
    const response = await fetch(baseUrl + url);
    const movie = await response.json();
    renderMovie(movie.data);
    addToBasket(movie.data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("API call is done");
  }
}

function renderMovie(movie) {
  const container = document.querySelector("main");
  container.innerHTML = `<div class="image-wrapper">
        <img src="${movie.image.url}" alt="" />
      </div>
      <div class="content">
        <h1>${movie.title}</h1>
        <p>>${movie.description}</p>
        <p>${movie.price}</p>
        <button id="addToBasket">add to basket</button>
      </div>
    `;
}

function getLocalStorage() {
  const movies = JSON.parse(localStorage.getItem("movies"));
  if (!movies) {
    return [];
  }
  return movies;
}

function addToBasket(movie) {
  const button = document.querySelector("#addToBasket");

  function onButtonClick(event) {
    const movieList = getLocalStorage();
    const isInList = movieList.find(function (storedMovie) {
      return storedMovie.id === movie.id;
    });

    if (!isInList) {
      movieList.push(movie);
      localStorage.setItem("movies", JSON.stringify(movieList));
    }
  }

  button.addEventListener("click", onButtonClick);
}

fetchMovies("square-eyes/" + id);
