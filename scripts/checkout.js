function createMovieList(movies) {
  const container = document.querySelector("#movieList");
  container.innerHTML = "";
  for (let index = 0; index < movies.length; index++) {
    const movie = movies[index];
    container.innerHTML += `<div class="card">
        <div class="image__wrapper">
          <img src="${movie.image.url}" alt="" />
        </div>
        <div class="text">
        <h3>${movie.title}</h3>
          <p>${movie.price}</p>
          <button data-id="${movie.id}" id="removeFromBasket">remove</button>
        </div>
      </div>
    `;
  }
}

function removeFromBasket() {
  const removeButtons = document.querySelectorAll("#removeFromBasket");
  removeButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const id = event.target.dataset.id;
      const movieList = JSON.parse(localStorage.getItem("movies"));
      const isInList = movieList.find(function (storedMovie) {
        return storedMovie.id === id;
      });
      if (isInList) {
        const newMovieList = movieList.filter(function (basketMovie) {
          return basketMovie.id !== id;
        });
        createMovieList(newMovieList);
        localStorage.setItem("movies", JSON.stringify(newMovieList));
      }
    });
  });
}
function pay() {
  const pay = document.querySelector(".pay");
  pay.addEventListener("click", function () {
    localStorage.clear();
  });
}

const movies = JSON.parse(localStorage.getItem("movies"));
createMovieList(movies);
pay();
removeFromBasket();
