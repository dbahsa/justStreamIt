const images = document.querySelectorAll('#galery img');

for (let i = 1; i < images.length; i++) {
    images[i].classList.add('hidden');
}