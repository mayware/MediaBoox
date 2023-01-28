function blockExpander() {
    document.querySelector('.expand-btn').classList.toggle('open');
    document.querySelector('.show-less').classList.toggle('open');
    document.querySelector('.arrow-icon-down').classList.toggle('close');
    document.querySelector('.arrow-icon-up').classList.toggle('open');
    document.querySelector('.banners-box').classList.toggle('expand');
}

let yearDate = document.querySelector('.year-date');
yearDate.innerHTML = new Date().getFullYear() + " ";

function sidenavToggler() {
    document.querySelector('.burger-btn').classList.toggle('hidden');
    document.querySelector('.close-btn').classList.toggle('show');
    document.querySelector('.sidenav-overlay').classList.toggle('open');
}
window.addEventListener("resize", function () {
    if (window.innerWidth > 960) {
        document.querySelector('.sidenav-overlay').classList.remove("open");
        document.querySelector('.burger-btn').classList.remove('hidden');
        document.querySelector('.close-btn').classList.remove('show');
    }

});