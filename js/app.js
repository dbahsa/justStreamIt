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


/* *********** FETCH FOR THE 7 BEST RATED MOVIES ********************** */

// Get the 7 best movies data regardless their category:
let filter7BestMovies = 'sort_by=-imdb_score';
let filterPage2 = 'page=2';

// Fetch the url for the 7 best rated movies regardless their genre,
// there are on 2 pages:
const url7BestMoviesP1 = coreApiUrl + filter7BestMovies;
const url7BestMoviesP2 = coreApiUrl + filterPage2 + '&' + filter7BestMovies;

// Fecth 7 best rated movies function:
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


/* ***** Styling Sliders Best Rated Movies - START *** */

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "block";
  }
  slides[slideIndex-1].style.display = "none";
}



/* *********** FETCH FOR THE 7 BEST RATED ACTION MOVIES ********************** */

// Action movies urls (p1 & p2):
const urlActionP1 = "http://127.0.0.1:8000/api/v1/titles/?genre=action&sort_by=-imdb_score";
const urlActionP2 = "http://127.0.0.1:8000/api/v1/titles/?genre=action&page=2&sort_by=-imdb_score";

// Fecth best action movies function:
function goFetchActionMovies() {
    
    for(let i=0; i<5; i++) {
      fetch(urlActionP1)
          .then(data => data.json())
          .then(d => {
            fetch(d.results[i].url)
              .then(data => data.json())
              .then(d => veryBestMovie2(d))
              .catch(err => console.log(err.message));
          })
          .catch(err => console.log(err.message));
      };
    
    setTimeout(function() {
        for(let i=0; i<2; i++) {
          fetch(urlActionP2)
              .then(data => data.json())
              .then(d => {
                fetch(d.results[i].url)
                  .then(data => data.json())
                  .then(d => veryBestMovie2(d))
                  .catch(err => console.log(err.message));
              })
              .catch(err => console.log(err.message));
        }
    }, 1000);

    let b = 0;
    function veryBestMovie2(movie) {
        
        let modal3 = document.getElementById("actionMoviesModal");
        let imgModal3 = document.querySelector("#imgAction"+`${b}`);
        let span3 = document.getElementsByClassName("actionMoviesClose")[0];

        imgModal3.src = movie.image_url;
        
        imgModal3.onclick = function() {
            
            let y = 0;
            if (y !== b) {

                modal3.style.display = "block";
                document.querySelector("#actionMoviesImg"+`${y}`).src = movie.image_url;
                document.querySelector("#actionMoviesTitle"+`${y}`).innerHTML = movie.title;
                document.querySelector("#actionMoviesImdbScore"+`${y}`).innerHTML = '<em style="color: #0bff09;">Note: </em>' + movie.imdb_score;
                document.querySelector("#actionMoviesGenres"+`${y}`).innerHTML = '<em style="color: #0bff09;">Genre: </em>' + movie.genres;
                document.querySelector("#actionMoviesDatePublished"+`${y}`).innerHTML = '<em style="color: #0bff09;">Date de sortie: </em>' + movie.date_published;
                document.querySelector("#actionMoviesRated"+`${y}`).innerHTML = '<em style="color: #0bff09;">Rated: </em>' + movie.rated;
                document.querySelector("#actionMoviesDirectors"+`${y}`).innerHTML = '<em style="color: #0bff09;">Réalisateur: </em>' + movie.directors;
                document.querySelector("#actionMoviesActors"+`${y}`).innerHTML = '<em style="color: #0bff09;">Acteurs: </em>' + movie.actors;
                document.querySelector("#actionMoviesDuration"+`${y}`).innerHTML = '<em style="color: #0bff09;">Durée: </em>' + movie.duration + 'min';
                document.querySelector("#actionMoviesCountries"+`${y}`).innerHTML = '<em style="color: #0bff09;">Pays: </em>' + movie.countries;
                document.querySelector("#actionMoviesGlobalGrossIncome"+`${y}`).innerHTML = '<em style="color: #0bff09;">Box Office: </em>' + movie.worldwide_gross_income;
                document.querySelector("#actionMoviesShortDesc"+`${y}`).innerHTML = '<em style="color: #0bff09;">Résumé: </em>' + movie.description;
            }
        }

        span3.onclick = function() {
            modal3.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal3) {
                modal3.style.display = "none";
            }
        }

        b++;

    }

}
goFetchActionMovies();


/* ***** Styling Sliders Best Action Movies - START *** */

var slideActionIndex = 1;
showActionSlides(slideActionIndex);

// Next/previous controls
function plusActionSlides(n) {
  showActionSlides(slideActionIndex += n);
}

// Thumbnail image controls
function currentActionSlide(n) {
  showActionSlides(slideActionIndex = n);
}

function showActionSlides(n) {
  var i;
  var slides2 = document.getElementsByClassName("myActionSlides");
  if (n > slides2.length) {slideActionIndex = 1}
  if (n < 1) {slideActionIndex = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "block";
  }
  slides2[slideActionIndex-1].style.display = "none";
}



/* *********** FETCH FOR THE 7 BEST RATED ANIMATION MOVIES ********************** */

// Action movies urls (p1 & p2):
const urlAnimP1 = "http://127.0.0.1:8000/api/v1/titles/?genre=Animation&sort_by=-imdb_score";
const urlAnimP2 = "http://127.0.0.1:8000/api/v1/titles/?genre=Animation&page=2&sort_by=-imdb_score";

// Fecth best aanimation movies function:
function goFetchAnimMovies() {
    
    for(let i=0; i<5; i++) {
      fetch(urlAnimP1)
          .then(data => data.json())
          .then(d => {
            fetch(d.results[i].url)
              .then(data => data.json())
              .then(d => veryBestMovie3(d))
              .catch(err => console.log(err.message));
          })
          .catch(err => console.log(err.message));
      };
    
    setTimeout(function() {
        for(let i=0; i<2; i++) {
          fetch(urlAnimP2)
              .then(data => data.json())
              .then(d => {
                fetch(d.results[i].url)
                  .then(data => data.json())
                  .then(d => veryBestMovie3(d))
                  .catch(err => console.log(err.message));
              })
              .catch(err => console.log(err.message));
        }
    }, 1000);

    let c = 0;
    function veryBestMovie3(movie) {
        
        let modal4 = document.getElementById("animMoviesModal");
        let imgModal4 = document.querySelector("#imgAnim"+`${c}`);
        let span4 = document.getElementsByClassName("animMoviesClose")[0];

        imgModal4.src = movie.image_url;
        
        imgModal4.onclick = function() {
            
            let w = 0;
            if (w !== c) {

                modal4.style.display = "block";
                document.querySelector("#animMoviesImg"+`${w}`).src = movie.image_url;
                document.querySelector("#animMoviesTitle"+`${w}`).innerHTML = movie.title;
                document.querySelector("#animMoviesImdbScore"+`${w}`).innerHTML = '<em style="color: #0bff09;">Note: </em>' + movie.imdb_score;
                document.querySelector("#animMoviesGenres"+`${w}`).innerHTML = '<em style="color: #0bff09;">Genre: </em>' + movie.genres;
                document.querySelector("#animMoviesDatePublished"+`${w}`).innerHTML = '<em style="color: #0bff09;">Date de sortie: </em>' + movie.date_published;
                document.querySelector("#animMoviesRated"+`${w}`).innerHTML = '<em style="color: #0bff09;">Rated: </em>' + movie.rated;
                document.querySelector("#animMoviesDirectors"+`${w}`).innerHTML = '<em style="color: #0bff09;">Réalisateur: </em>' + movie.directors;
                document.querySelector("#animMoviesActors"+`${w}`).innerHTML = '<em style="color: #0bff09;">Acteurs: </em>' + movie.actors;
                document.querySelector("#animMoviesDuration"+`${w}`).innerHTML = '<em style="color: #0bff09;">Durée: </em>' + movie.duration + 'min';
                document.querySelector("#animMoviesCountries"+`${w}`).innerHTML = '<em style="color: #0bff09;">Pays: </em>' + movie.countries;
                document.querySelector("#animMoviesGlobalGrossIncome"+`${w}`).innerHTML = '<em style="color: #0bff09;">Box Office: </em>' + movie.worldwide_gross_income;
                document.querySelector("#animMoviesShortDesc"+`${w}`).innerHTML = '<em style="color: #0bff09;">Résumé: </em>' + movie.description;
            }
        }

        span4.onclick = function() {
            modal4.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal4) {
                modal4.style.display = "none";
            }
        }

        c++;

    }

}
goFetchAnimMovies();


/* ***** Styling Sliders Best Animation Movies - START *** */

var slideAnimIndex = 1;
showAnimSlides(slideAnimIndex);

// Next/previous controls
function plusAnimSlides(n) {
  showAnimSlides(slideAnimIndex += n);
}

// Thumbnail image controls
function currentAnimSlide(n) {
  showAnimSlides(slideAnimIndex = n);
}

function showAnimSlides(n) {
  var i;
  var slides3 = document.getElementsByClassName("myAnimSlides");
  if (n > slides3.length) {slideAnimIndex = 1}
  if (n < 1) {slideAnimIndex = slides3.length}
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "block";
  }
  slides3[slideAnimIndex-1].style.display = "none";
}





















/* ***** Styling Sliders - END *** */


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
