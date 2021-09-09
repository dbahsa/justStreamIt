const images = document.querySelectorAll('#gallery img');

for (let i = 4; i < images.length; i++) {
    images[i].classList.add('hidden');
}
