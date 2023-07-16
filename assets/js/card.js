const galleryTop = new Swiper('.big-card', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.big-card-next',
        prevEl: '.big-card-prev',
    },
           loop: true,
          loopedSlides: 4
  });
  const galleryThumbs = new Swiper('.small-card', {
    spaceBetween: 10,
    slidesPerView: 5,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    // loopedSlides: 4
    breakpoints: {
        320: {
            // slidesPerView: 1.2,
            // spaceBetween: 0,
        },
        576: {
            direction: 'vertical',
        },
    }
  });
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;



  $('.big-card .swiper-slide').zoom({
    magnify: 1
  });



  let productLink = document.querySelectorAll(".product-color__link");

  productLink.forEach(card => {
    let hits = card.nextElementSibling.children[0].children[0]
    let i = 0;

    function mouseEnter() {
        if (i == hits.children.length - 1) {
            hits.children[i].style.display = "none";
            i = 0;
            hits.children[i].style.display = "block";
        } else {
            hits.children[i].style.display = "none";
            hits.children[i + 1].style.display = "block";
            i++
        }
        
    }



    card.addEventListener('mouseenter', ()=> {
        myVar = setInterval(mouseEnter, 600);
    })

    card.addEventListener('mouseleave', ()=> {
        clearInterval(myVar);
        hits.children[i].style.display = 'none'
        hits.children[0].style.display = 'block'
    });
  });


  const characteristics = document.querySelector('.characteristics'),
        characteristicsBtn = document.querySelector('.characteristics__btn')


let count2 = 0;
characteristicsBtn.addEventListener('click', () => {
    if(count2 == 0) {
        characteristicsBtn.textContent = 'Свернуть характеристики';
        characteristics.classList.add('allCharacteristics');
        return count2 = 1;
    } else {
        characteristicsBtn.textContent = 'Развернуть характеристики';
        characteristics.classList.remove('allCharacteristics');
        return count2 = 0;
    }
});


const sizes = document.querySelectorAll('.product-size-list .size');


sizes.forEach(size => {
    size.addEventListener('click', () => {
        sizes.forEach(remActive => {
            remActive.classList.remove('activeSize')
        });
        size.classList.add('activeSize');
    })
})