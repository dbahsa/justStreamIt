const images = document.querySelectorAll('#gallery img');
let imgActive = 0;

// Hide the 3 last pictures
for (let i = 4; i < images.length; i++) {
    images[i].classList.add('hidden');
}

//Click on the 'next' button img = [1,2,3,4,5,6,7]
document.querySelector('#next').addEventListener('click', function() {
    next();
});

//  Function allows go to next movies
const next = function () {
    
    for (let imgActive = 0; imgActive < 3; imgActive++) {
        images[imgActive].classList.add('hidden');
    }
    for (let imgActive = 3; imgActive < images.length; imgActive++) {
        images[imgActive].classList.remove('hidden');
    }
};


//Click on the 'prev' button img = [1,2,3,4,5,6,7]
document.querySelector('#prev').addEventListener('click', function() {
    prev();
});

//  Function allows to go back to previous movies
const prev = function () {
    for (let imgActive = 0; imgActive < 4; imgActive++) {
        images[imgActive].classList.remove('hidden');
    }
    for (let imgActive = 4; imgActive < images.length; imgActive++) {
        images[imgActive].classList.add('hidden');
    }
};

// Keyboard click management
window.addEventListener('keydown', function(e) {
    if (e.key == 'ArrowRight'){
        next();
    }
    if (e.key == 'ArrowLeft'){
        prev();
    }
});
