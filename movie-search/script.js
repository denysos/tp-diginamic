const btn = document.querySelector("#btn-search");

btn.addEventListener('click', ()=>{
  getData();
})

function getData(){
  let search = document.querySelector("#movie").value;
  url = "https://www.omdbapi.com/?apikey=f6e256e1&s=" + search;

  const div = document.querySelector("#result");
  div.innerHTML="";

  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    if(data.Response == "False"){
      let error = document.createElement('p');
      error.className="alert alert-danger mt-3";
      error.textContent =  data.Error;
      document.getElementById("result").appendChild(error);
    } else {
      buildMoviesHTML(data);
    }
    
  })
  .catch(console.error)
}

function buildMoviesHTML(movies){

  const div = document.querySelector("#result");
  
  let nbResult = document.createElement('h3');
  nbResult.textContent = "Nombre de films trouvé : " + movies.totalResults;
  div.appendChild(nbResult);

  movies.Search.forEach(movie => {  
    let newDiv = buildMovieHTML(movie);
    div.appendChild(newDiv);
  });

  

}

function buildMovieHTML(movie){
  
  let newDiv = document.createElement('div');
  newDiv.className = "card col-12 col-md-3 m-3";
  newDiv.innerHTML =  `
      <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
      <div class="card-body text-body">
        <h5 class="card-title">${movie.Title}</h5>
        <a href="movie.html?id=${movie.imdbID}" class="btn btn-primary">See more</a>
      </div>
    `;
  
  return newDiv
}