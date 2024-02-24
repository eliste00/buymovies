const baseUrl = "https://v2.api.noroff.dev/";
async function fetchMovies(url) {
  try {
    const response = await fetch(baseUrl + url);
    const json = await response.json();
    renderMovies(json.data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("API call is done");
  }
}

function renderMovies(movies) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  for (let index = 0; index < movies.length; index++) {
    const movie = movies[index];
    container.innerHTML += `<div class="card">
     <a href="./product/?id=${movie.id}"
                ><img class="card-image" src="${movie.image.url}" alt="" /></a>
          <div class="content">
            <h3>${movie.title}</h3>
            <div class="card-footer">
              <a href="./product/?id=${movie.id}"
                >about movie <img class="arrow" src="./images/arrow.svg" alt=""
              /></a>
              
            </div></div>`;
  }
}

fetchMovies("square-eyes");
