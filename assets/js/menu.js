const menu = document.querySelector('.menu'),
      menuClose = document.querySelector('.menu__close'),
      menuBurger = document.querySelector('.menu-burger'),
      showMobs = document.querySelectorAll('.showMob'),
      infoBox = document.querySelectorAll('.menu-wrapper__list'),
      body = document.querySelector('body')


menuBurger.addEventListener('click', () => {
    menu.classList.remove('d-none');
    body.classList.add('bodyStopScroll');
});

menuClose.addEventListener('click', () => {
    menu.classList.add('d-none');
    body.classList.remove('bodyStopScroll');
});

window.addEventListener('click', (e) => {
    if(e.target == menu) {
        menu.classList.add('d-none');
        body.classList.remove('bodyStopScroll');
        
    }
});

showMobs.forEach(btn => {
    btn.addEventListener('click', () => {
        infoBox.forEach(info => {
            info.classList.remove('showMenu');
        })
        btn.parentElement.classList.toggle('showMenu');
    })
})



