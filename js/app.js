const images = document.querySelectorAll('#gallery img');

let imgActive = 0;

// Hide the 3 last pictures
for (let i = 4; i < images.length; i++) {
    images[i].classList.add('hidden');
}

//Click on 'next' button 0123456
document.querySelector('#next').addEventListener('click', function() {
    for (let i = 0; i < 3; i++) {
        images[i].classList.add('hidden');
    }
    for (let i = 4; i < images.length; i++) {
        images[i].classList.remove('hidden');
    }
});
