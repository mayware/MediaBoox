function sideToggler() {
    document.querySelector('[data-sidebar]').classList.toggle('open');
    document.querySelector('.container').classList.toggle('open');
}

function blockExpander() {
    document.querySelector('.show-more').classList.toggle('open');
    document.querySelector('.show-less').classList.toggle('open');
    document.querySelector('.arrow-icon-down').classList.toggle('close');
    document.querySelector('.arrow-icon-up').classList.toggle('open');
    document.querySelector('.banners-box').classList.toggle('expand');
}

let yearDate = document.querySelector('.year-date');
yearDate.innerHTML = new Date().getFullYear() + " ";