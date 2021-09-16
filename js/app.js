// *********** FETCH FOR THE VERY BEST MOVIE ********************
// A. To get the best movie data regardless its category:
const coreApiUrl = "http://127.0.0.1:8000/api/v1/titles/?";
const theBestMovieUrlFilter = "sort_by=-imdb_score";

// 1. Fetch the url for the best rated movies regardless of genre,
// then, get the  url of the best rated movie; therafter, fetch for the requested data:

const urlBestMovie = coreApiUrl + theBestMovieUrlFilter;

// To display the best movie data in a modal
function goFetchBestMovie() {
    fetch(urlBestMovie)
      .then(data => data.json())
      .then(d => {
        fetch(d.results[0].url)
          .then(data => data.json())
          .then(d => veryBestMovie(d))
          .catch(err => console.log(err.message));
       })
      .catch(err => console.log(err.message));
    function veryBestMovie(movie) {
        document.querySelector("#bestRatedMovieImdbScore1").innerHTML = 'Note: ' + movie.imdb_score;
        document.querySelector("#bestRatedMovieImdbScore2").innerHTML = '<em style="color: #0bff09;">Note: </em>' + movie.imdb_score;
        document.querySelector("#bestRatedMovieTitle1").innerHTML = movie.title;
        document.querySelector("#bestRatedMovieTitle2").innerHTML = movie.title;
        document.querySelector("#bestRatedMovieGenres").innerHTML = '<em style="color: #0bff09;">Genre: </em>' + movie.genres;
        document.querySelector("#bestRatedMovieDatePublished").innerHTML = '<em style="color: #0bff09;">Date de sortie: </em>' + movie.date_published;
        document.querySelector("#bestRatedMovieRated").innerHTML = '<em style="color: #0bff09;">Rated: </em>' + movie.rated;
        document.querySelector("#bestRatedMovieDirectors").innerHTML = '<em style="color: #0bff09;">Réalisateur: </em>' + movie.directors;
        document.querySelector("#bestRatedMovieActors").innerHTML = '<em style="color: #0bff09;">Acteurs: </em>' + movie.actors;
        document.querySelector("#bestRatedMovieDuration").innerHTML = '<em style="color: #0bff09;">Durée: </em>' + movie.duration + 'min';
        document.querySelector("#bestRatedMovieCountries").innerHTML = '<em style="color: #0bff09;">Pays: </em>' + movie.countries;
        document.querySelector("#bestRatedMovieGlobalGrossIncome").innerHTML = '<em style="color: #0bff09;">Box Office: </em>' + movie.worldwide_gross_income;
        document.querySelector("#bestRatedMovieShortDesc2").innerHTML = '<em style="color: #0bff09;">Résumé: </em>' + movie.description;
        document.querySelector("#bestRatedMovieShortDesc1").innerHTML = 'Résumé: ' + movie.description;
        document.getElementById("bestRatedMovieImg1").src = movie.image_url;
        document.getElementById("bestRatedMovieImg2").src = movie.image_url;
        document.getElementById("bestRatedMovieImg1").alt = movie.title;
        document.getElementById("bestRatedMovieImg2").alt = movie.title;
    }
}
goFetchBestMovie();


/* *********** MODAL FOR THE BEST RATED MOVIE ********* */

function bestRatedMovieModal() {
    // Get the modal
    let modal = document.getElementById("bestRatedMovieModal");
    // Get the img that opens the modal
    let btn = document.getElementById("bestRatedMovieButton");
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
    // When the user clicks on the img, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
bestRatedMovieModal();


/* *********** FETCH FOR THE 7 BEST MOVIES ********************** */

// Get the 7 best movies data regardless their category:
let filter7BestMovies = 'sort_by=-imdb_score';
let filterPage2 = 'page=2';

// Fetch the url for the 7 best rated movies regardless their genre,
// there are on 2 pages:
const url7BestMoviesP1 = coreApiUrl + filter7BestMovies;
const url7BestMoviesP2 = coreApiUrl + filterPage2 + '&' + filter7BestMovies;

// Fecth function:
function goFetchSevenBestRatedMovies() {
    
    for(let i=0; i<5; i++) {
      fetch(url7BestMoviesP1)
          .then(data => data.json())
          .then(d => {
            fetch(d.results[i].url)
              .then(data => data.json())
              .then(d => veryBestMovie(d))
              .catch(err => console.log(err.message));
          })
          .catch(err => console.log(err.message));
      };
    
    setTimeout(function() {
        for(let i=0; i<2; i++) {
          fetch(url7BestMoviesP2)
              .then(data => data.json())
              .then(d => {
                fetch(d.results[i].url)
                  .then(data => data.json())
                  .then(d => veryBestMovie(d))
                  .catch(err => console.log(err.message));
              })
              .catch(err => console.log(err.message));
        }
    }, 1000);

    let a = 0;
    function veryBestMovie(movie) {
        
        let modal2 = document.getElementById("sevenBestRatedMoviesModal");
        let imgModal = document.querySelector("#img"+`${a}`);
        let span2 = document.getElementsByClassName("sevenBestRatedMoviesClose")[0];

        imgModal.src = movie.image_url;
        
        /*for (let i = 0; i < cars.length; i++) {
            
            text += cars[i] + "<br>";
        
        }*/

        imgModal.onclick = function() {
            
            let i = 0;
            if (i !== a) {

                modal2.style.display = "block";
                document.querySelector("#sevenBestRatedMoviesImg"+`${i}`).src = movie.image_url;
                document.querySelector("#sevenBestRatedMoviesTitle"+`${i}`).innerHTML = movie.title;
                document.querySelector("#sevenBestRatedMoviesImdbScore"+`${i}`).innerHTML = '<em style="color: #0bff09;">Note: </em>' + movie.imdb_score;
                document.querySelector("#sevenBestRatedMoviesGenres"+`${i}`).innerHTML = '<em style="color: #0bff09;">Genre: </em>' + movie.genres;
                document.querySelector("#sevenBestRatedMoviesDatePublished"+`${i}`).innerHTML = '<em style="color: #0bff09;">Date de sortie: </em>' + movie.date_published;
                document.querySelector("#sevenBestRatedMoviesRated"+`${i}`).innerHTML = '<em style="color: #0bff09;">Rated: </em>' + movie.rated;
                document.querySelector("#sevenBestRatedMoviesDirectors"+`${i}`).innerHTML = '<em style="color: #0bff09;">Réalisateur: </em>' + movie.directors;
                document.querySelector("#sevenBestRatedMoviesActors"+`${i}`).innerHTML = '<em style="color: #0bff09;">Acteurs: </em>' + movie.actors;
                document.querySelector("#sevenBestRatedMoviesDuration"+`${i}`).innerHTML = '<em style="color: #0bff09;">Durée: </em>' + movie.duration + 'min';
                document.querySelector("#sevenBestRatedMoviesCountries"+`${i}`).innerHTML = '<em style="color: #0bff09;">Pays: </em>' + movie.countries;
                document.querySelector("#sevenBestRatedMoviesGlobalGrossIncome"+`${i}`).innerHTML = '<em style="color: #0bff09;">Box Office: </em>' + movie.worldwide_gross_income;
                document.querySelector("#sevenBestRatedMoviesShortDesc"+`${i}`).innerHTML = '<em style="color: #0bff09;">Résumé: </em>' + movie.description;
            }
        }

        span2.onclick = function() {
            modal2.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal2) {
                modal2.style.display = "none";
            }
        }

        a++;

    }

}
goFetchSevenBestRatedMovies();






/* DATA REQUIRED FOR MODALS:
movie.image_url
movie.imdb_score
movie.title
movie.genres
movie.date_published
movie.rated
movie.directors
movie.actors
movie.duration
movie.countries
movie.worldwide_gross_income
movie.descritpion
*/


//****************** CATEGORIES URLS ************************ 
/*
* Best movie: http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score
* comedy: http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score&genre=comedy
* sci-fi: http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score&genre=sci-fi
* biography: http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score&genre=Biography
* animation: http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score&genre=Animation
*/


// ****** Cateogies *************

// Create Categories promise

/*const promiseGetCategories = new Promise((resolve, reject) => {
    if (typeof CATEGORIES !== 'undefined') {
        resolve(CATEGORIES);
    } else {
        reject('Accès aux catégories impossible!')
    }
});
*/
// Get Categories promise
/*
promiseGetCategories
    .then( c => { // 'c' for categorie
        console.log(c);
        console.log(c[0].title);
        document.querySelector("#categ").innerHTML = c[0].title;
        let list = '<ul>';
        for (let cat of c) {
            list += `<li>${cat.title}</li>`;
        }
        list += '</ul>';
        document.querySelector("#cat").innerHTML = list;
        return c.length;
    })
    .then( numberOfMovies => { 
        console.log(`Il y a ${numberOfMovies} catégories`);
    })
    .catch(e => console.log(e)); //'e' for error 
*/


// ****** Movies *************
/*
// Create movies promise
const promiseGetMovies = new Promise((resolve, reject) => {
    if (typeof MOVIES !== 'undefined') {
        resolve(MOVIES);
    } else {
        reject('Accès aux films impossible!')
    }
});

// Get movies promise
/*
promiseGetMovies
    .then( m => { //'m' for movie
        console.log(m);
        console.log(m[0].title);
        document.querySelector("#categ").innerHTML = m[0].title;
        let list = '<ul>';
        for (let mov of m) {
            list += `<li>${mov.title}</li>`;
        }
        list += '</ul>';
        document.querySelector("#categ").innerHTML = list;
        return m.length;
    })
    .then( numberOfMovies => { 
        console.log(`Il y a ${numberOfMovies} films`);
    })
    .catch(e => console.log(e)); //'e' for error 
*/

// ************* FETCH URLS ****************
/*
// Base url
let url = 'http://localhost:8000/api/v1';

// best rated by categ: Adventure, 9 pax rated at 8.5
let bestRatedUrlAdventure = '/titles/?year=&min_year=&max_year=&imdb_score=8.5&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Adventure&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains==';

//best rate by categ: Action, 7 pax rated at 8.6
let bestRatedUrlAction = "/titles/?year=&min_year=&max_year=&imdb_score=8.6&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Action&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=";

//best rate by categ: Animation, 7 pax rated at 8.3
let bestRatedUrlAnimation = "/titles/?year=&min_year=&max_year=&imdb_score=8.3&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Animation&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=";

//best rate by categ: Sci-Fi, 10 pax rated at 8.1
let bestRatedUrlSciFi = "/titles/?year=&min_year=&max_year=&imdb_score=8.1&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Sci-Fi&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=";

// the very best movie(s) 3 rated at 9.4
let veryBestMovieUrl = "/titles/?year=&min_year=&max_year=&imdb_score=9.4&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=";

*/

/* ***************** PREV + NEXT BUTTONS: code 1 - Not fully functional !!! ***************

const images = document.querySelectorAll('#gallery1 img');
let imgActive = 0;

// Hide the 3 last pictures
for (let i = 4; i < images.length; i++) {
    images[i].classList.add('hidden');
}

//Click on the 'next1' button
document.querySelector('#next').addEventListener('click', function() {
    next1();
});

//  Function allows go to next1 movies
const next1 = function () {
    for (let imgActive = 0; imgActive < 3; imgActive++) {
        images[imgActive].classList.add('hidden');
    }
    for (let imgActive = 3; imgActive < images.length; imgActive++) {
        images[imgActive].classList.remove('hidden');
    }
};


//Click on the 'prev1' button
document.querySelector('#prev').addEventListener('click', function() {
    prev1();
});

//  Function allows to go back to previous movies
const prev1 = function () {
    for (let imgActive = 0; imgActive < 4; imgActive++) {
        images[imgActive].classList.remove('hidden');
    }
    for (let imgActive = 4; imgActive < images.length; imgActive++) {
        images[imgActive].classList.add('hidden');
    }
};

// Keyboard click management
window.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight'){
        next1();
    }
    if (e.key === 'ArrowLeft'){
        prev1();
    }
});
*/

/* ***************** PREV + NEXT BUTTONS: code 2 -- works like a charm :) ***************
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
 */ 

