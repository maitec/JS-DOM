const apiKey = 'c5bdb3582c9d6426b28942525bb2bc0f';
let paginaActual = 1;

const urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`;
const urlRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}`;
const urlUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`;
const urlPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`;

const contenedorPelis = document.querySelector('#contenedor-pelis');
const popular = document.querySelector('#popular');
const top_rated = document.querySelector('#top-rated');
const upcoming = document.querySelector('#upcoming');
const now_playing = document.querySelector('#now-playing');

const viewAllPopular = document.getElementById('allPopular');
const viewAllRated = document.getElementById('allRated');
const viewAllUpcoming = document.getElementById('allUpcoming');
const viewAllPlaying = document.getElementById('allPlaying');

let click = "";
let url = "";
let titulo ="";

popular.onclick = () => {
    click = "popular";
    url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`;
    titulo = "Popular Movies";
    buscarPeli(url)
}
viewAllPopular.onclick = () => {
    click = "popular";
    url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`;
    titulo = "Popular Movies";
    buscarPeli(url)
}
top_rated.onclick = () => {
    click = "top_rated";
    url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}`;
    titulo = "Top Rated Movies";
    buscarPeli(url)
}
viewAllRated.onclick = () => {
    click = "top_rated";
    url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}`;
    titulo = "Top Rated Movies";
    buscarPeli(url)
}
upcoming.onclick = () => {
    click = "upcoming";
    url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`;
    titulo = "Upcoming Movies";
    buscarPeli(url)
}
viewAllUpcoming.onclick = () => {
    click = "upcoming";
    url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`;
    titulo = "Upcoming Movies";
    buscarPeli(url)
}
now_playing.onclick = () => {
    click = "now_playing";
    url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`;
    titulo = "Now Playing Movies";
    buscarPeli(url)
}
viewAllPlaying.onclick = () => {
    click = "now_playing";
    url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`;
    titulo = "Now Playing Movies";
    buscarPeli(url)
}


const buscarPeli = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(data => {

            let resultadoFetch = data.results;
            let totalDeResultadosFetch = data.total_results;

                contenedorPelis.classList.add("none");
                const nuevoContenedor = document.getElementById("nuevoContenedor");
                nuevoContenedor.classList.add("block");
                nuevoContenedor.innerHTML = `<div class="titulo"> <h2>${titulo}</h2> <p>${totalDeResultadosFetch} results</p> </div>`;
                const divMovies = document.createElement("div");
                divMovies.classList.add("movies");
                nuevoContenedor.appendChild(divMovies);
                function categoriaActiva(clickeada){
                    if(clickeada == "popular"){
                        popular.classList.add("activo");
                    }else if(clickeada == "top_rated"){
                        top_rated.classList.add("activo");
                    }else if(clickeada == "upcoming"){
                        upcoming.classList.add("activo");
                    }else if(clickeada == "now_playing"){
                        now_playing.classList.add("activo");
                    }
                }
                categoriaActiva(click)


                function mostrarTodasLasPeliculas(fetchResult) {
                    for (let i = 0; i < fetchResult.length; i++) {

                        const divPelicula = document.createElement("div");
                        divPelicula.classList.add("pelicula");
                        divMovies.appendChild(divPelicula);

                        divPelicula.innerHTML = `<img src="https://image.tmdb.org/t/p/original${fetchResult[i].poster_path}" alt=""> <p>${fetchResult[i].title}</p>`;
                    }
                }
                mostrarTodasLasPeliculas(resultadoFetch);

                const botonLoadMore = document.createElement("div");
                botonLoadMore.innerText = "LOAD MORE";
                botonLoadMore.classList.add("botonLoadMore");
                nuevoContenedor.appendChild(botonLoadMore);
                botonLoadMore.onclick = function () {
                    paginaActual += 1;
                    const url = `https://api.themoviedb.org/3/movie/${click}?api_key=${apiKey}&page=${paginaActual}`;
                    fetch(url)
                        .then(res => res.json())
                        .then(data => {
                            mostrarTodasLasPeliculas(data.results);
                        })
                }
        })
}

//////////////////////////////////////////////FETCHS DE INICIO/////////////////////////////////////////////////

fetch(urlPopular)
.then(res => res.json())
.then(data => {

    let resultadoFetch = data.results; 

    function agregarPeliculasInicio() {
        for(let i = 0; i<5; i++){
            const divCincoPeliculas = document.getElementById('movies-popular');
            const divPelicula = document.createElement("div");
            divPelicula.classList.add("pelicula");
            divCincoPeliculas.appendChild(divPelicula);

            divPelicula.innerHTML = `<img src="https://image.tmdb.org/t/p/original${resultadoFetch[i].poster_path}" alt=""> <p>${resultadoFetch[i].title}</p>`;       
        }   
    }
    agregarPeliculasInicio();
})
fetch(urlRated)
.then(res => res.json())
.then(data => {

    let resultadoFetch = data.results; 

    function agregarPeliculasInicio() {
        for(let i = 0; i<5; i++){
            const divCincoPeliculas = document.getElementById('movies-rated');
            const divPelicula = document.createElement("div");
            divPelicula.classList.add("pelicula");
            divCincoPeliculas.appendChild(divPelicula);

            divPelicula.innerHTML = `<img src="https://image.tmdb.org/t/p/original${resultadoFetch[i].poster_path}" alt=""> <p>${resultadoFetch[i].title}</p>`;       
        }   
    }
    agregarPeliculasInicio();
})
fetch(urlUpcoming)
.then(res => res.json())
.then(data => {

    let resultadoFetch = data.results; 

    function agregarPeliculasInicio() {
        for(let i = 0; i<5; i++){
            const divCincoPeliculas = document.getElementById('movies-upcoming');
            const divPelicula = document.createElement("div");
            divPelicula.classList.add("pelicula");
            divCincoPeliculas.appendChild(divPelicula);

            divPelicula.innerHTML = `<img src="https://image.tmdb.org/t/p/original${resultadoFetch[i].poster_path}" alt=""> <p>${resultadoFetch[i].title}</p>`;       
        }   
    }
    agregarPeliculasInicio();
})
fetch(urlPlaying)
.then(res => res.json())
.then(data => {

    let resultadoFetch = data.results; 

    function agregarPeliculasInicio() {
        for(let i = 0; i<5; i++){
            const divCincoPeliculas = document.getElementById('movies-playing');
            const divPelicula = document.createElement("div");
            divPelicula.classList.add("pelicula");
            divCincoPeliculas.appendChild(divPelicula);

            divPelicula.innerHTML = `<img src="https://image.tmdb.org/t/p/original${resultadoFetch[i].poster_path}" alt=""> <p>${resultadoFetch[i].title}</p>`;       
        }   
    }
    agregarPeliculasInicio();
})

///////////////////////////////////////////FIN FETCHS DE INICIO///////////////////////////////////////////////////

///////////////FETCH POPULAR ORIGINAL///////////////
// fetch(url)
// .then(res => res.json())
// .then(data => {

//     let popularMovies = data.results; 
//     let totalResultadoPopular = data.total_results;

//     function agregarPeliculasPopular() {
//         for(let i = 0; i<5; i++){
//             const divPeliculasPopulares = document.getElementById('movies-popular');
//             const divPelicula = document.createElement("div");
//             divPelicula.classList.add("pelicula");
//             divPeliculasPopulares.appendChild(divPelicula);

//             divPelicula.innerHTML = `<img src="https://image.tmdb.org/t/p/original${popularMovies[i].poster_path}" alt=""> <p>${popularMovies[i].title}</p>`;       
//         }   
//     }
//     agregarPeliculasPopular();

//     function clickEnPopular(){
//         contenedorPelis.classList.add("none");
//         const nuevoContenedorPopulares = document.getElementById("nuevoContenedorPopulares");
//         nuevoContenedorPopulares.classList.add("block");
//         nuevoContenedorPopulares.innerHTML = `<div class="titulo"> <h2>Popular Movies</h2> <p>${totalResultadoPopular} results</p> </div>`;
//         const divMovies = document.createElement("div");
//         divMovies.classList.add("movies");
//         nuevoContenedorPopulares.appendChild(divMovies);
//         popular.classList.add("activo");

//         function crearPeliculasPopulares(popularMovies){
//             for(let i=0; i<popularMovies.length; i++){

//                 const divPelicula = document.createElement("div");
//                 divPelicula.classList.add("pelicula");
//                 divMovies.appendChild(divPelicula);

//                 divPelicula.innerHTML = `<img src="https://image.tmdb.org/t/p/original${popularMovies[i].poster_path}" alt=""> <p>${popularMovies[i].title}</p>`;
//             }
//         }        
//         crearPeliculasPopulares(popularMovies);

//         const botonLoadMore = document.createElement("div");
//         botonLoadMore.innerText = "LOAD MORE";
//         botonLoadMore.classList.add("botonLoadMore");
//         nuevoContenedorPopulares.appendChild(botonLoadMore);
//         botonLoadMore.onclick = function (){
//             paginaActual+=1;
//             const urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`;
//             fetch(urlPopular)
//             .then(res => res.json())
//             .then(data =>{
//                 crearPeliculasPopulares(data.results);
//             })
//         }
//     }
//     popular.onclick = clickEnPopular;
//     viewAllPopular.onclick = clickEnPopular;
// })
