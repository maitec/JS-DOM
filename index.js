const input = document.querySelector('#search');
// const contenedorPelis = document.querySelector('#contenedor-pelis');
// const popular = document.querySelector('#popular');
// const topRated = document.querySelector('#top-rated');
// const upcoming = document.querySelector('#upcoming');
// const nowPlaying = document.querySelector('#now-playing');
// const viewAllPopular = document.getElementById('allPopular');

/////////////////////////////////////////////////////////////////////

// const apiKey = 'c5bdb3582c9d6426b28942525bb2bc0f';
// let  paginaActual = 1;

////////////////////////////////////////////////////////////////////

// const urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`;
// const urlRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}`;
// const urlUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`;
// const urlPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`;

// fetch(urlPopular)
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

const apiKey = 'c5bdb3582c9d6426b28942525bb2bc0f';
let paginaActual = 1;

const urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`;
const urlRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}`;
const urlUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`;
const urlPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`;


const contenedorPelis = document.querySelector('#contenedor-pelis');
const popular = document.querySelector('#popular');
const topRated = document.querySelector('#top-rated');
const upcoming = document.querySelector('#upcoming');
const nowPlaying = document.querySelector('#now-playing');

const viewAllPopular = document.getElementById('allPopular');
const viewAllRated = document.getElementById('allRated');
const viewAllUpcoming = document.getElementById('allUpcoming');
const viewAllPlaying = document.getElementById('allPlaying');

let click = "";
let url = "";
let titulo ="";
//let idDivInicio = "";

popular.onclick = () => {
    console.log("click en popular")
    click = "popular";
    url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`;
    titulo = "Popular Movies";
    //idDivInicio = "movies-popular";
    buscarPeli(url)
}
topRated.onclick = () => {
    console.log("click en rated")
    click = "top_rated";
    url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}`;
    titulo = "Top Rated Movies";
    //idDivInicio = "movies-rated";
    buscarPeli(url)
}
upcoming.onclick = () => {
    console.log("upcoming click")
    click = "upcoming";
    url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`;
    titulo = "Upcoming Movies";
    //idDivInicio = "movies-upcoming";
    buscarPeli(url)
}
nowPlaying.onclick = () => {
    click = "now_playing";
    url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`;
    titulo = "Now Playing Movies";
    //idDivInicio = "movies-playing";
    buscarPeli(url)
}


const buscarPeli = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(data => {

            let resultadoFetch = data.results;
            let totalDeResultadosFetch = data.total_results;

            // function agregarPeliculasInicio() {
            //     for (let i = 0; i < 5; i++) {
            //         const divCincoPeliculas = document.getElementById(`${idDivInicio}`);
            //         const divPelicula = document.createElement("div");
            //         divPelicula.classList.add("pelicula");
            //         divCincoPeliculas.appendChild(divPelicula);

            //         divPelicula.innerHTML = `<img src="https://image.tmdb.org/t/p/original${resultadoFetch[i].poster_path}" alt=""> <p>${resultadoFetch[i].title}</p>`;
            //     }
            // }
            // agregarPeliculasInicio();

            function clickEnCategoriaOViewAll() {
                contenedorPelis.classList.add("none");
                const nuevoContenedor = document.getElementById("nuevoContenedor");
                nuevoContenedor.classList.add("block");
                nuevoContenedor.innerHTML = `<div class="titulo"> <h2>${titulo}</h2> <p>${totalDeResultadosFetch} results</p> </div>`;
                const divMovies = document.createElement("div");
                divMovies.classList.add("movies");
                nuevoContenedor.appendChild(divMovies);
                popular.classList.add("activo");////////////////cambiar

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
            }
            popular.onclick = clickEnCategoriaOViewAll;
            topRated.onclick = clickEnCategoriaOViewAll;
            upcoming.onclick = clickEnCategoriaOViewAll;
            nowPlaying.onclick = clickEnCategoriaOViewAll;
            viewAllPopular.onclick = clickEnCategoriaOViewAll;
            viewAllRated.onclick = clickEnCategoriaOViewAll;
            viewAllUpcoming.onclick = clickEnCategoriaOViewAll;
            viewAllPlaying.onclick = clickEnCategoriaOViewAll;
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

























// urlRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

// fetch(urlRated)
// .then(res => res.json())
// .then(data => {

//     const ratedMovies = data.results;

//     function agregarPeliculasRated() {
//         for(let i = 0; i<5; i++){
//             const divPeliculasRated = document.getElementById('movies-rated');
//             const divPelicula = document.createElement("div");
//             divPelicula.classList.add("pelicula");
//             divPeliculasRated.appendChild(divPelicula);

//             divPelicula.innerHTML = `<img src="https://image.tmdb.org/t/p/original${ratedMovies[i].poster_path}" alt=""> <p>${ratedMovies[i].title}</p>`;       
//         }   
//     }
//     agregarPeliculasRated();
// })

// urlUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;

// fetch(urlUpcoming)
// .then(res => res.json())
// .then(data => {

//     const upcomingMovies = data.results;

//     function agregarPeliculasUpcoming() {
//         for(let i = 0; i<5; i++){
//             const divPeliculasUpcoming = document.getElementById('movies-upcoming');
//             const divPelicula = document.createElement("div");
//             divPelicula.classList.add("pelicula");
//             divPeliculasUpcoming.appendChild(divPelicula);

//             divPelicula.innerHTML = `<img src="https://image.tmdb.org/t/p/original${upcomingMovies[i].poster_path}" alt=""> <p>${upcomingMovies[i].title}</p>`;       
//         }   
//     }
//     agregarPeliculasUpcoming();
// })

// urlPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

// fetch(urlPlaying)
// .then(res => res.json())
// .then(data => {

//     const playingMovies = data.results;

//     function agregarPeliculasPlaying() {
//         for(let i = 0; i<5; i++){
//             const divPeliculasPlaying = document.getElementById('movies-playing');
//             const divPelicula = document.createElement("div");
//             divPelicula.classList.add("pelicula");
//             divPeliculasPlaying.appendChild(divPelicula);

//             divPelicula.innerHTML = `<img src="https://image.tmdb.org/t/p/original${playingMovies[i].poster_path}" alt=""> <p>${playingMovies[i].title}</p>`;   
//         }   
//     }
//     agregarPeliculasPlaying();
// })

// ///////////////////////////////////////////
