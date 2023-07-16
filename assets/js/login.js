const loginInp = document.querySelector('.login-form__inp'),
      loginButton = document.querySelector('.login-form__btn')


loginButton.addEventListener('click', () => {
  if(loginInp.value.length < 16 || loginInp.value.length == 0) {
    loginInp.parentElement.classList.add('error');
    loginInp.nextElementSibling.textContent = 'Некорректный формат номера'
  } else {
    loginButton.type = 'submit'
    loginInp.parentElement.classList.remove('error')
    loginInp.nextElementSibling.textContent = ''
  }
})


$(function () {
    $('.input--tel').mask('+7 999 999-99-99');
    
    $('.input--tel').on('focus', function () {
       if ($(this).val().length === 0) {
         $(this).val('+7 ');
       }
    });
  });