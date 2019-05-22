const input = document.querySelector('#search');
const contenedorPelis = document.querySelector('#contenedor-pelis');
const popular = document.querySelector('#popular');
const topRated = document.querySelector('#top-rated');
const upcoming = document.querySelector('#upcoming');
const nowPlaying = document.querySelector('#now-playing');

///////////

const apiKey = 'c5bdb3582c9d6426b28942525bb2bc0f';

const urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

fetch(urlPopular)
.then(res => res.json())
.then(data => {

    let popularMovies = data.results; 
    let totalResultadoPopular = data.total_results;

    function agregarPeliculasPopular() {
        for(let i = 0; i<5; i++){
            const divPeliculasPopulares = document.getElementById('movies-popular');
            const divPelicula = document.createElement("div");
            divPelicula.classList.add("pelicula");
            divPeliculasPopulares.appendChild(divPelicula);
        
            divPelicula.innerHTML = `<img src="https://image.tmdb.org/t/p/original${popularMovies[i].poster_path}" alt=""> <p>${popularMovies[i].title}</p>`;       
        }   
    }
    agregarPeliculasPopular();

    popular.onclick = function (){
        contenedorPelis.classList.add("none");
        const nuevoContenedorPopulares = document.getElementById("nuevoContenedorPopulares");
        nuevoContenedorPopulares.classList.add("block");
        nuevoContenedorPopulares.innerHTML = `<div class="titulo"> <h2>Popular Movies</h2> <p>${totalResultadoPopular} results</p> </div>`;
        const divMovies = document.createElement("div");
        divMovies.classList.add("movies");
        nuevoContenedorPopulares.appendChild(divMovies);
        popular.classList.add("activo");

        for(let i=0; i<popularMovies.length; i++){

            const divPelicula = document.createElement("div");
            divPelicula.classList.add("pelicula");
            divMovies.appendChild(divPelicula);
    
            divPelicula.innerHTML = `<img src="https://image.tmdb.org/t/p/original${popularMovies[i].poster_path}" alt=""> <p>${popularMovies[i].title}</p>`;
        }
    }
})

urlRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

fetch(urlRated)
.then(res => res.json())
.then(data => {

    const ratedMovies = data.results;

    function agregarPeliculasRated() {
        for(let i = 0; i<5; i++){
            const divPeliculasRated = document.getElementById('movies-rated');
            const divPelicula = document.createElement("div");
            divPelicula.classList.add("pelicula");
            divPeliculasRated.appendChild(divPelicula);
        
            divPelicula.innerHTML = `<img src="https://image.tmdb.org/t/p/original${ratedMovies[i].poster_path}" alt=""> <p>${ratedMovies[i].title}</p>`;       
        }   
    }
    agregarPeliculasRated();
})

urlUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;

fetch(urlUpcoming)
.then(res => res.json())
.then(data => {

    const upcomingMovies = data.results;

    function agregarPeliculasUpcoming() {
        for(let i = 0; i<5; i++){
            const divPeliculasUpcoming = document.getElementById('movies-upcoming');
            const divPelicula = document.createElement("div");
            divPelicula.classList.add("pelicula");
            divPeliculasUpcoming.appendChild(divPelicula);
        
            divPelicula.innerHTML = `<img src="https://image.tmdb.org/t/p/original${upcomingMovies[i].poster_path}" alt=""> <p>${upcomingMovies[i].title}</p>`;       
        }   
    }
    agregarPeliculasUpcoming();
})

urlPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

fetch(urlPlaying)
.then(res => res.json())
.then(data => {

    const playingMovies = data.results;

    function agregarPeliculasPlaying() {
        for(let i = 0; i<5; i++){
            const divPeliculasPlaying = document.getElementById('movies-playing');
            const divPelicula = document.createElement("div");
            divPelicula.classList.add("pelicula");
            divPeliculasPlaying.appendChild(divPelicula);
        
            divPelicula.innerHTML = `<img src="https://image.tmdb.org/t/p/original${playingMovies[i].poster_path}" alt=""> <p>${playingMovies[i].title}</p>`;   
        }   
    }
    agregarPeliculasPlaying();
})

///////////////////////////////////////////
