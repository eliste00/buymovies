async function fetchMovies() {
  const response = await fetch("https://v2.api.noroff.dev/square-eyes");
  const movies = await response.json();
  console.log(movies.data);

  return movies.data;
}

fetchMovies();
