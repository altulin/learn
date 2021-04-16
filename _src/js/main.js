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

  // coin slider
  if ($(window).width() <= 768) {
    $('.coin__list').slick({
      // autoplay: true,
      // autoplaySpeed: 1000
    });
  }





  //mmenu
  if ($("#office-header-nav").length > 0) {
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
  }


  //   // input mask
  $(`.input-phone`).mask("+7 (999) 999-99-99");


  //валидация полей форм
  $(`.form`).on(`submit`, (e) => {
    checkValidation(e);
  });


  const checkValidation = (e) => {
    let flag = false;
    e.preventDefault();
    $(e.target).parent().find(`input:not(".not-req")`).each((i, item) => {
      if ($(item).val().length === 0) {
        $(item).addClass(`not-valid`);
        droppingErr(item);

      } else {
        flag = true;
      }
    })

    if (flag) {
      sendForm(e);
    }
  };

  // отправка форм
  const sendForm = (e) => {
    const form = e.target;
    const data = $(form).serialize();
    $.ajax({
      url: 'https://httpbin.org/anything',
      method: 'post',
      dataType: 'json',
      data: data,
      success: function () {
        successHandler(e)
      }
    });
  };

  const successHandler = (e) => {
    e.target.reset();


    if (e.target.id === `pay-form`) {
      $(`#modal-success`).modal();
    }

    if (e.target.id === `exit-form`) {
      window.open("/office-my-learn.html");
    }

    if (e.target.id === `pass-form`) {
      window.open("/exit-link.html");
    }
  }


  //сброс ошибки
  const droppingErr = (item) => {
    $(item).on(`click`, () => {
      $(item).removeClass(`not-valid`);
    })
  };


  // forms test
  $(`.test-form`).on(`submit`, (e) => {
    e.preventDefault();

    let idNum = e.target.id.split(`-`).pop();
    const data = $(`#test-form-${idNum}`).serialize();

    $.ajax({
      url: 'https://httpbin.org/anything',
      method: 'post',
      dataType: 'json',
      data: data,
      success: function (data) {
        let newIdNum = Number(idNum) + 1;

        $(e.target).removeClass(`test-form--visible`);
        $(`#test-form-${newIdNum}`).addClass(`test-form--visible`);

      }
    });
  });

  // btn all step back
  $(`.result__btn-back`).on(`click`, (e) => {
    const forms = $(`.test-form`);

    e.preventDefault();

    forms.each(function (i, item) {
      item.reset();
    });

    forms.removeClass(`test-form--visible`);
    $(`#test-form-1`).addClass(`test-form--visible`);
  });


  // btn 1 step back
  $(`.test-form__btn-back`).on(`click`, (e) => {
    const forms = $(`.test-form`);

    let idNum = $(e.target).parent().parent().attr('id').split(`-`).pop();
    let newIdNum = Number(idNum) - 1;

    e.preventDefault();

    forms.removeClass(`test-form--visible`);
    $(`#test-form-${newIdNum}`).addClass(`test-form--visible`);
  });




});
