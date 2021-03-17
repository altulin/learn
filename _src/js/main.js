// import { css } from 'jquery';
import { getElementData, getElementName } from './modules/newElements.js';

$(function () {


  // faq tabs
  $('#faq-tabs').responsiveTabs({
    startCollapsed: 'accordion',
    // animation: 'slide',
    // duration: 300
  });

  // programs-phone tabs
  $('#programs-phone-accordion').responsiveTabs({
    startCollapsed: 'accordion',
    // animation: 'slide',
    // duration: 300
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


  //store the initial position of the element
  // var vTop = cache.offset().top - parseFloat(cache.css('margin-top').replace(/auto/, 0));
  // $(window).scroll(function (event) {
  // what the y position of the scroll is
  // var y = $(this).scrollTop();

  // whether that's below the form
  // if (y >= vTop) {
  // if so, ad the fixed class
  // cache.addClass('stuck');
  // } else {
  // otherwise remove it
  // cache.removeClass('stuck');
  // }
  // });

  //mmenu
  // const menu = new MmenuLight(
  //   document.querySelector("#main-nav"),
  //   "(max-width: 600px)"
  // );

  // const navigator = menu.navigation({
  //   title: ""
  // });

  // const drawer = menu.offcanvas();

  // $(`.header__open`).on(`click`, (e) => {
  //   e.preventDefault();
  //   drawer.open();
  //   $(`.header__open`).addClass(`hidden`);
  //   $(`.header__close`).removeClass(`hidden`);
  // })

  // $(`.header__close`).on(`click`, (e) => {
  //   e.preventDefault();
  //   drawer.close();
  //   $(`.header__close`).addClass(`hidden`);
  //   $(`.header__open`).removeClass(`hidden`);
  // })

  // $(`.nav__link`).each((i, item) => {
  //   $(item).on(`click`, () => {
  //     drawer.close();
  //     $(`.header__close`).addClass(`hidden`);
  //     $(`.header__open`).removeClass(`hidden`);
  //   })
  // })



  //tabs меняем стили при нажатии
  // $(`.fill-tabs__btn`).on(`click`, (e) => {
  //   const index = $(`.fill-tabs__btn`).index(e.target);

  //   $(`.fill-tabs__btn`).each((i, item) => {
  //     $(item).removeClass(`fill-tabs__btn--active`)
  //   })
  //   $(e.target).addClass(`fill-tabs__btn--active`)

  //   $(`.slider__item`).each((i, item) => {
  //     $(item).removeClass(`slider__item--visually`)
  //   })
  //   $($(`.slider__item`)[index]).addClass(`slider__item--visually`)

  // })

  //select childrens добавляем блоки от кол-ва детей
  // $(`#childrens`).on(`change`, (e) => {
  //   let n = 0;
  //   const index = $(e.target).val();
  //   $(`.field-children`).remove();

  //   while (n < index) {
  //     n++
  //     $(`.fill-form__btn--submit`).before(getElementData(n))
  //     $(`.fill-form__btn--submit`).before(getElementName(n))
  //   }

  //   $(`.fill-form__field--children`).remove();

  //   $('select').styler('destroy');
  //   setTimeout(function () {
  //     // $(`select`).styler();
  //     getStyler();
  //     delErrorForm();
  //   }, 1)

  // })





  // const getStyler = () => {
  //   if ($(window).width() > 600) {
  //     $(`select`).styler();
  //   }
  // };

  // getStyler();


  // // проверка заполнения валидация
  // $(`.fill-form__btn`).on(`click`, (e) => {
  //   let validState = true
  //   // e.preventDefault()

  //   $(e.target).parent().find(`input:not(".not_req"), select`).each((i, item) => {
  //     $(item).removeClass(`fill-form__input--not-valid`);
  //     $(item).parent().removeClass(`fill-form__input--not-valid`);


  //     if ($(item).val().length === 0 || $(item).val() === null) {

  //       validState = false
  //       e.preventDefault()

  //       if ($(item).has(`fill-form__select`)) {
  //         $(item).parent().addClass(`fill-form__input--not-valid`);
  //       }

  //       $(item).addClass(`fill-form__input--not-valid`);
  //     }


  //   });

  //   if (validState) {

  //     // если отправка формы
  //     if ($(e.target).hasClass(`fill-form__btn--submit`)) {


  //       // переход на след страницу


  //     } else {
  //       e.preventDefault();

  //       $([document.documentElement, document.body]).animate({
  //         scrollTop: $("#fill").offset().top
  //       }, 500);

  //       const indexElem = $(e.target).parent().next().index();
  //       $($(`.fill-tabs__item`)[indexElem]).removeClass(`fill-tabs__item--disabled`)


  //       // на табах меняем стили
  //       $(`.fill-tabs__btn`).each((i, item) => {
  //         $(item).removeClass(`fill-tabs__btn--active`)
  //       })
  //       $($(`.fill-tabs__item`)[indexElem]).children().addClass(`fill-tabs__btn--active`)

  //       // скрываем и открываем нужный фрагмент формы
  //       $(e.target).parent().next().addClass(`slider__item--visually`);
  //       $(e.target).parent().removeClass(`slider__item--visually`);
  //     }
  //   }
  // });


  // убрать ошибку валидации

  // const delErrorForm = () => {
  //   $(`input, .jq-selectbox__select`).on(`click`, (e) => {
  //     $(e.target).removeClass(`fill-form__input--not-valid`);
  //     $(e.target).parent().parent().removeClass(`fill-form__input--not-valid`);
  //     $(e.target).parent().removeClass(`fill-form__input--not-valid`);
  //   })
  // };

  // delErrorForm();

  // processing кнопка проверить данные
  //   $(`.data__link--open`).on(`click`, (e) => {
  //     e.preventDefault()
  //     $(`.data__link--open`).css('display', 'none');
  //     $(`.data-hidden`).css('display', 'block');
  //   })

  //   // processing__form
  //   $(`.processing__form`).on(`submit`, (e) => {

  //     $(`.processing-form__input`).each((i, item) => {
  //       if ($(item).val().length === 0) {
  //         e.preventDefault()
  //         $(item).addClass(`fill-form__input--not-valid`);
  //       }
  //     })
  //   })

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
});