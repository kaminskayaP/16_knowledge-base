var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999) 999-99-99");

im.mask(selector);

new JustValidate('.section-form__form', {
    rules: {
      name: {
        required: true,
        minLength: 3,
        maxLength: 15
      },
      tel: {
        required: true,
        function (name, value) {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
      email: {
        required: true,
        email: true
      },
    
    },
    messages: {
      name: {
        required: 'Как вас зовут?',
        minLength: 'Имя должно состоять минимум из 3-х символов',
        maxLength: 'Имя должно быть не больше 15-ти символов'
      },
      tel: 'Укажите ваш телефон',
      email: 'Укажите ваш e-mail'
    },

});