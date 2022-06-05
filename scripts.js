
const themeBtn = document.querySelector('.js-change-theme-btn');
const body = document.body;


themeBtn.addEventListener('click', () => {
    console.log('pressed');
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkmode)
    body.classList.toggle('darkmode', !wasDarkmode)
    themeBtn.classList.toggle('header__themeBtn--light', !wasDarkmode)
    themeBtn.classList.toggle('header__themeBtn--dark', wasDarkmode)
});


body.addEventListener('DOMContentLoaded', body.classList.toggle('darkmode', localStorage.getItem('darkmode') === 'true'));


