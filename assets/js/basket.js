const deleteProducts = document.querySelectorAll('.delete__product'),
      basketHideBtn = document.querySelector('.basket-hide__btn'),
      basketForm = document.querySelector('.basket-form'),
      empty = document.querySelector('.empty'),
      basketBtns = document.querySelector('.basket-head-btns'),
      basketBody = document.querySelector('.basket-body'),
      countMinus = document.querySelectorAll('.count__minus'),
      countPlus = document.querySelectorAll('.count__plus')



basketHideBtn.addEventListener('click', () => {
    basketHideBtn.parentElement.parentElement.parentElement.classList.toggle('showBasket')
})

deleteProducts.forEach(btnDelete => {
    let product = btnDelete.parentElement.parentElement.parentElement
    let productBox = btnDelete.parentElement.parentElement.parentElement.parentElement
    btnDelete.addEventListener('click', () => {
        product.remove();
        console.dir(productBox.children.length)

        if(productBox.children.length == 0) {
            basketForm.remove();
            empty.classList.add('emptyHide')
        }
        if(basketBody.children.length < 2) {
            basketBtns.classList.add('hideBtns')
        } else {
            basketBtns.classList.remove('hideBtns')
        }
    });
});

if(basketBody.children.length < 2) {
    basketBtns.classList.add('hideBtns')
} else {
    basketBtns.classList.remove('hideBtns')
}


countPlus.forEach(plus => {
  plus.addEventListener('click', () => {
    plus.previousElementSibling.value++
  })
});

countMinus.forEach(minus => {
  minus.addEventListener('click', () => {
     if(minus.nextElementSibling.value > 1) {
      minus.nextElementSibling.value--
     }
    
  })
});


$('.count__inp').keypress(function (e) {      
    let charCode = (e.which) ? e.which : event.keyCode    
    if (String.fromCharCode(charCode).match(/[^0-9]/g))    
        return false;                        

});  


