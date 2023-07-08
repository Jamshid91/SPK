const seoBtn = document.querySelector('.main-seo__show-btn');

let count =0;
seoBtn.addEventListener('click', () => {
  if(count == 0) {
    seoBtn.previousElementSibling.classList.add('show-seo');
    seoBtn.textContent = 'Свернуть'
    return count = 1;
  } else {
    seoBtn.previousElementSibling.classList.remove('show-seo');
    seoBtn.textContent = 'Читать далее'
    return count = 0;
  }
})



const banner = new Swiper('.main-banner-swiper', {
    slidesPerView: 1,
    loop: true,
    speed: 500,
    effect: 'fade',
    navigation: {
        nextEl: '.banner-btns .next',
        prevEl: '.banner-btns .prev',
      },
      pagination: {
        el: '.banner-pagination',
        clickable: true,
      },
    autoplay: {
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  
  });

  
  let product = document.querySelectorAll(".product-card");

  product.forEach(card => {
    let hits = card.children[0].children[1].children[1]
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
  })

  
  

  


