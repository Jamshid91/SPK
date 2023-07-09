const menu = document.querySelector('.menu'),
      menuClose = document.querySelector('.menu__close'),
      menuBurger = document.querySelector('.menu-burger'),
      showMobs = document.querySelectorAll('.showMob'),
      infoBox = document.querySelectorAll('.menu-wrapper__list'),
      body = document.querySelector('body'),
      searchBox = document.querySelector('.header-search'),
      searchInp = document.querySelector('.search__inp'),
      searchResultsBox = document.querySelector('.search-result'),
      searchGoods = document.querySelector('.search-goods'),
      searchBtn = document.querySelector('.search__btn'),
      searchClose = document.querySelector('.search__close'),
      searchResults = document.querySelectorAll('.search-item__title');


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
});

searchInp.addEventListener('focus', () => {
    searchResultsBox.classList.remove('d-none')
});

searchInp.addEventListener('blur', () => {
    searchResultsBox.classList.add('d-none')
});

searchBtn.addEventListener('click', () => {
    searchBox.style.display = 'block'
    body.classList.add('bodyStopScroll');
});

searchClose.addEventListener('click', () => {
    searchBox.style.display = 'none'
    body.classList.remove('bodyStopScroll');
});

window.addEventListener('click', (e) => {
    if(e.target == searchBox) {
        searchBox.style.display = 'none'
        body.classList.remove('bodyStopScroll');
    }
})


document.querySelector('.search__inp').oninput = function () {
    let val = this.value.trim();
       if(val != '') {
        searchGoods.classList.add('d-none')
           searchResults.forEach(elem => {
               if(elem.textContent.search(val) == -1) {
                   elem.innerHTML = elem.textContent; 
                   elem.parentElement.classList.remove('hideResult')
               } else {
                   elem.parentElement.classList.add('hideResult');
                   let str = elem.textContent;
                   elem.innerHTML = insertMark(str, elem.textContent.search(val), val.length)
               }
           });
    
       }
       else {
        searchGoods.classList.remove('d-none')
           searchResults.forEach(elem => {
               elem.parentElement.classList.remove('hideResult');
               elem.innerHTML = elem.textContent;
           });
       }
       
   }
        
   function insertMark(string,pos,len) {
       return string.slice(0,pos) + "<span class='mark'>"+string.slice(pos,pos+len) +"</span>"+string.slice(pos+len)
   };



