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