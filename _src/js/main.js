$(function () {

  // faq tabs
  $('#faq-tabs').responsiveTabs({
    startCollapsed: 'accordion',

  });

  // programs-phone tabs
  $('#programs-phone-accordion').responsiveTabs({
    startCollapsed: 'accordion',

  });

  // office-program tabs
  $('.plan__col--left').responsiveTabs({
    startCollapsed: 'accordion',

  });

  // успешная оплата обучения
  $(`.pay-form__btn`).on(`click`, (e) => {
    e.preventDefault();
    $(`#modal-success`).modal();
  })

  const cache = $('.promo-main__nav');
  if (cache.length) {
    const vTop = -153 + cache.offset().top - parseFloat(cache.css('margin-top').replace(/auto/, 0));

    $(window).on(`scroll`, () => {
      const y = $(this).scrollTop();

      if (y >= vTop) {
        cache.addClass('stuck');
      } else {
        cache.removeClass('stuck');
      }
    });
  }

  //mmenu
  const menu = new MmenuLight(
    document.querySelector("#office-header-nav"),
    "(max-width: 1000px)"
  );

  const navigator = menu.navigation({
    title: ""
  });

  const drawer = menu.offcanvas();

  $(`.office-header__link-open`).on(`click`, (e) => {
    e.preventDefault();
    drawer.open();
    $(`.office-header__link-open`).addClass(`hidden`);
    $(`.office-header__link-close`).removeClass(`hidden`);
  });

  $(`.office-header__link-close`).on(`click`, (e) => {
    e.preventDefault();
    drawer.close();
    $(`.office-header__link-close`).addClass(`hidden`);
    $(`.office-header__link-open`).removeClass(`hidden`);
  });

  $(`.mm-ocd__backdrop`).on(`click`, () => {
    $(`.office-header__link-close`).addClass(`hidden`);
    $(`.office-header__link-open`).removeClass(`hidden`);
  });

  //   // input mask
  $(`.input-phone`).mask("+7 (999) 999-99-99");


  // валидация полей форм
  $(`.form`).on(`submit`, (e) => {
    checkValidation(e);
  });


  const checkValidation = (e) => {
    e.preventDefault();
    $(e.target).parent().find(`input:not(".not-req")`).each((i, item) => {
      if ($(item).val().length === 0) {
        $(item).addClass(`not-valid`);
        droppingErr(item);

      }
    })
  };


  // сброс ошибки
  const droppingErr = (item) => {
    $(item).on(`click`, () => {
      $(item).removeClass(`not-valid`);
    })
  };

  // forms 
  $(`.test__form`).fajax({
    beforeSend: function () {
      console.log($(this).find(`fieldset`))
    },
    success: function () {
      // alert('The form was successfully sent');
    },
  });
});