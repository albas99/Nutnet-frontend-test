let navIcon = document.querySelector('.nav-icon');
let navList = document.querySelector('.navlist');
navIcon.addEventListener('click', openNavigation);
function openNavigation() {
    if (navList.style.display === 'none') {
        navList.style.display = 'block';
    }
    else {
        navList.style.display = 'none';
    }
}

let videoModal = document.querySelector('.video-modal');
let videoButton = document.querySelector('.video-button');
let closeModalButton = document.querySelector('.close');

videoButton.addEventListener('click', displayVideo);
closeModalButton.addEventListener('click', closeModal);

function displayVideo() {
    videoModal.style.display = 'block';
}

function closeModal() {
    videoModal.style.display = 'none';
}

window.onclick = function (event) {
  if (event.target == videoModal) {
    videoModal.style.display = "none";
  }
};