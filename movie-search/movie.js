function getData(){

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');

  url = "https://www.omdbapi.com/?apikey=f6e256e1&i=" + id;

  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    buildMovieHTML(data);
  })
  .catch(console.error)
}

function buildMovieHTML(movie){

  let title = document.querySelector("h1");
  title.textContent = movie.Title;

  let mainTitle = document.querySelector("title");
  mainTitle.textContent = movie.Title;

  let header = document.querySelector("#header");
  header.textContent = movie.Title;

  let img = document.querySelector("img");
  img.src = movie.Poster;

  let plot = document.getElementById("plot");
  plot.textContent = movie.Plot;

  let genre = document.getElementById("genre");
  genre.textContent = movie.Genre;

  let director = document.getElementById("director");
  director.textContent = movie.Director;

  let actors = document.getElementById("actors");
  actors.textContent = movie.Actors;

  let rated = document.getElementById("rated");
  rated.textContent = movie.Rated;

}

window.onload = getData;