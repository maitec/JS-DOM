function refreshPage() {
    window.location.reload();
}
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

const buscador = document.getElementById('search');

const modal = document.getElementById('modalWrapper');

let click = "";
let url = "";
let titulo = "";

popular.onclick = () => {
    click = "popular";
    url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`;
    titulo = "Popular Movies";
    traerPeliculas(url)
}
viewAllPopular.onclick = () => {
    click = "popular";
    url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`;
    titulo = "Popular Movies";
    traerPeliculas(url)
}
top_rated.onclick = () => {
    click = "top_rated";
    url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}`;
    titulo = "Top Rated Movies";
    traerPeliculas(url)
}
viewAllRated.onclick = () => {
    click = "top_rated";
    url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}`;
    titulo = "Top Rated Movies";
    traerPeliculas(url)
}
upcoming.onclick = () => {
    click = "upcoming";
    url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`;
    titulo = "Upcoming Movies";
    traerPeliculas(url)
}
viewAllUpcoming.onclick = () => {
    click = "upcoming";
    url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`;
    titulo = "Upcoming Movies";
    traerPeliculas(url)
}
now_playing.onclick = () => {
    click = "now_playing";
    url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`;
    titulo = "Now Playing Movies";
    traerPeliculas(url)
}
viewAllPlaying.onclick = () => {
    click = "now_playing";
    url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`;
    titulo = "Now Playing Movies";
    traerPeliculas(url)
}


const traerPeliculas = (url) => {
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
            function categoriaActiva(clickeada) {
                if (clickeada == "popular") {
                    popular.classList.add("activo");
                    top_rated.classList.remove("activo");
                    upcoming.classList.remove("activo");
                    now_playing.classList.remove("activo");
                } else if (clickeada == "top_rated") {
                    top_rated.classList.add("activo");
                    popular.classList.remove("activo");
                    upcoming.classList.remove("activo");
                    now_playing.classList.remove("activo");
                } else if (clickeada == "upcoming") {
                    upcoming.classList.add("activo");
                    popular.classList.remove("activo");
                    top_rated.classList.remove("activo");
                    now_playing.classList.remove("activo");
                } else if (clickeada == "now_playing") {
                    now_playing.classList.add("activo");
                    popular.classList.remove("activo");
                    top_rated.classList.remove("activo");
                    upcoming.classList.remove("activo");
                }
            }
            categoriaActiva(click)

            function mostrarTodasLasPeliculas(fetchResult) {
                for (let i = 0; i < fetchResult.length; i++) {

                    const divPelicula = document.createElement("div");
                    divPelicula.classList.add("pelicula");
                    divMovies.appendChild(divPelicula);

                    if (fetchResult[i].poster_path == null) {
                        divPelicula.innerHTML = `<img src="assets/no-image.png" alt=""> <p>${fetchResult[i].title}</p>`;
                    } else {
                        divPelicula.innerHTML = `<img src="https://image.tmdb.org/t/p/original${fetchResult[i].poster_path}" alt=""> <p>${fetchResult[i].title}</p>`;
                    }

                    divPelicula.onclick = function () {
                        const idPelicula = fetchResult[i].id;
                        console.log("el nombre de la pelicula clickeada es ", fetchResult[i].title);
                        console.log("el id de la pelicula clickeada es ", idPelicula);

                        modal.classList.remove("none");
                        document.querySelector('body').style.overflow = 'hidden';

                        modal.innerHTML = `
                        <div class="modalContainer">
                            <div id="cerrar">X</div>
                            <header>
                                <div class="poster">
                                     <img src="assets/wmMq5ypRNJbWpdhC9aPjpdx1MMp.jpg" alt="">
                                </div>
                                <div class="titulos">
                                    <h1>Asterix: The Secret of the Magic Potion</h1>
                                    <span>Keep it to yourself</span>
                                </div>
                            </header>
                            <div class="textos">
                                <div class="vacio"></div>
                                <div class="descripcion">
                                    <p>Following a fall during mistletoe picking, Druid Getafix decides that it is time to secure the
                                    future of the village. Accompanied by Asterix and Obelix, he undertakes to travel the Gallic
                                    world in search of a talented young druid to transmit the Secret of the Magic Potion.
                                    </p>
                                    <h2>GENRES</h2>
                                    <p>Animation, Family, Comedy, Adventure</p>
                                    <h2>RELEASE DATE</h2>
                                    <p>05 Dec 2018</p>
                                </div>
                            </div>
                        </div>
                        `
                    }
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
            for (let i = 0; i < 5; i++) {
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
            for (let i = 0; i < 5; i++) {
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
            for (let i = 0; i < 5; i++) {
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
            for (let i = 0; i < 5; i++) {
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

//////////////////////////////////////////BUSCADOR//////////////////////////////////////////////////


buscador.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        paginaActual = 1;
        let textoBusqueda = buscador.value;
        const urlBusqueda = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${textoBusqueda}&page=${paginaActual}`;

        fetch(urlBusqueda)
            .then(res => res.json())
            .then(data => {
                let resultadoFetch = data.results;
                let totalDeResultadosFetch = data.total_results;

                contenedorPelis.classList.add("none");
                const nuevoContenedor = document.getElementById("nuevoContenedor");
                nuevoContenedor.classList.add("block");
                nuevoContenedor.innerHTML = `<div class="titulo"> <h2>Search Results</h2> <p>${totalDeResultadosFetch} results</p> </div>`;
                const divMovies = document.createElement("div");
                divMovies.classList.add("movies");
                nuevoContenedor.appendChild(divMovies);

                function mostrarTodasLasPeliculas(fetchResult) {
                    for (let i = 0; i < fetchResult.length; i++) {

                        const divPelicula = document.createElement("div");
                        divPelicula.classList.add("pelicula");
                        divMovies.appendChild(divPelicula);
                        if (fetchResult[i].poster_path == null) {
                            divPelicula.innerHTML = `<img src="assets/no-image.png" alt=""> <p>${fetchResult[i].title}</p>`;
                        } else {
                            divPelicula.innerHTML = `<img src="https://image.tmdb.org/t/p/original${fetchResult[i].poster_path}" alt=""> <p>${fetchResult[i].title}</p>`;
                        }
                    }
                }
                mostrarTodasLasPeliculas(resultadoFetch);

                const botonLoadMore = document.createElement("div");
                botonLoadMore.innerText = "LOAD MORE";
                botonLoadMore.classList.add("botonLoadMore");
                nuevoContenedor.appendChild(botonLoadMore);
                botonLoadMore.onclick = function () {
                    paginaActual += 1;
                    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${textoBusqueda}&page=${paginaActual}`;
                    fetch(url)
                        .then(res => res.json())
                        .then(data => {
                            mostrarTodasLasPeliculas(data.results);
                        })
                }
            })
    }
})

///////////////////////////////////////////////////FIN BUSCADOR///////////////////////////////////////////

///////////////////////////////////////////////////MODAL/////////////////////////////////////////////////

