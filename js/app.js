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

// ********** prev & next buttons **********
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


// /* *********** Modal ********* *//
// Get the modal
/*var modal = document.getElementById("myModal");

// Get the img that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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
*/

// *********** FETCH FOR THE VERY BEST MOVIE ********************
// A. To get the best movie data regardless its category:
const coreApiUrl = "http://127.0.0.1:8000/api/v1/titles/?";
const theBestMovieUrlFilter = "sort_by=-imdb_score";

// 1. Fetch the url for the best rated movies regardless of genre,
// then, get the  url of the best rated movi; therafter, fetch for requested data:
/*
const urlBestMovie = coreApiUrl + theBestMovieUrlFilter;

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
    console.log(movie.title);
    console.log(movie.description);
    console.log(movie.image_url);
}
*/



// *********** FETCH FOR THE 7 BEST MOVIES ***********************
// B. To get the 7 best movies data regardless their category:


// $$$$$$$ it does work!!! ******
/*

const coreApiUrl = "http://127.0.0.1:8000/api/v1/titles/?";
const theBestMovieUrlFilter = "sort_by=-imdb_score";

let filter7BestMovies = 'sort_by=-imdb_score';
let filterPage2 = 'page=2';

// 1. Fetch the url for the 7 best rated movies regardless their genre,
// there are on 2 pages:
const url7BestMoviesP1 = coreApiUrl + filter7BestMovies;
const url7BestMoviesP2 = coreApiUrl + filterPage2 + '&' + filter7BestMovies;

// function to fetch data from api
function goFetch() {
    
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

    function veryBestMovie(movie) {
        console.log(movie.title);
        console.log(movie.id);
        //console.log(movie.image_url);
    }
}

goFetch();



// $$$$$$$ end Trial *******


// 4. Fetch data for each individual movie for modal display:
// First the url for each movie, then fetch for data:

for(let i=0; i<url7BestMovies.length; i++) {
  let urlM="";
  fetch(i)
    .then(data => data.json())
    .then(d => urlM = d.results[0].url)
    .catch(err => console.log(err.message));
  
    fetch(urlM)
    .then(data => data.json())
    .then(d => the7BestMovies(d))
    .catch(err => console.log(err.message));
  
  function the7BestMovies(movie) {
    console.log(movie.results[i].image_url);
    console.log(movie.results[i].title);
    console.log(movie.results[i].genres);
    console.log(movie.results[i].date_published);
    console.log(movie.results[i].rated);
    console.log(movie.results[i].imdb_score);
    console.log(movie.results[i].directors);
    console.log(movie.results[i].actors);
    console.log(movie.results[i].duration);
    console.log(movie.results[i].countries);
    console.log(movie.results[i].worldwide_gross_income);
    console.log(movie.results[i].description);
  }
}
*/

// ***************** DATA REQUIRED FOR MODALS *************
/*
console.log(movie.results[i].url);
console.log(movie.results[i].image_url);
console.log(movie.results[i].title);
console.log(movie.results[i].genres);
console.log(movie.results[i].date_published);
console.log(movie.results[i].rated);
console.log(movie.results[i].imdb_score);
console.log(movie.results[i].directors);
console.log(movie.results[i].actors);
console.log(movie.results[i].duration);
console.log(movie.results[i].countries);
console.log(movie.results[i].worldwide_gross_income);
console.log(movie.results[i].description);
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