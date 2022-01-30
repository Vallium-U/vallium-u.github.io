const body = document.querySelector('body');
const header = document.querySelector('.header_content');
const chart_title = document.querySelector('.chart__title');
const chart_subtitle = document.querySelector('.chart__subtitle');
const registration = document.querySelectorAll('.registration');
changeTheme = ev => {
    body.classList.toggle('light-theme');
    header.classList.toggle('light-theme');
    chart_title.classList.toggle('light-theme');
    chart_subtitle.classList.toggle('light-theme');
    registration.classList.toggle('light-theme');
};