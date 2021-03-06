$(function () {

  // faq tabs
  $('#faq-tabs').responsiveTabs({
    startCollapsed: 'accordion',

  });

  // programs-phone tabs
  $('#programs-phone-accordion').responsiveTabs({
    startCollapsed: false

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

  //steps slider
  if ($(window).width() <= 768) {
    $('.steps__list').slick({
      // autoplay: true,
      // autoplaySpeed: 1000
    });
  }

  // range input
  let range_invest = $(".calc__range--invest");
  let range_power = $(".calc__range--power")

  range_invest.ionRangeSlider({
    grid: true,
    min: 1000,
    max: 1000000,
    from: 100000,
    step: 1000,
  });

  range_power.ionRangeSlider({
    grid: true,
    min: 1000,
    max: 1000000,
    from: 500000,
    step: 1000,

  });

  range_invest.on(`change`, (e) => {
    const data = $(e.target).prop('value');
    range_power.prop('value', data);
  });

  range_power.on(`change`, (e) => {
    const data = $(e.target).prop('value');
    range_invest.prop('value', data);
  });

  // deposit range
  const deposit_inputs = $(`.deposit-card__input`);

  if (deposit_inputs.length > 0) {
    deposit_inputs.map((i, item) => {
      return $(item).ionRangeSlider({
        grid: true,
        min: 0,
        max: 50,
        from: 30,
        grid_num: 5,
        onChange: function (data) {
          calcProfit(data, item)
        }
      })
    })
  }

  const calcProfit = (data, item) => {
    const proc = $(item)
      .parents(".deposit-card")
      .find('.deposit-card__item--main')
      .find('.deposit-card__proc').text().split(`%`)[0];

    const sum_elem = $(item).parents(".deposit-card__bottom").find('.deposit-card__profit-val');

    const sum_profit = 10000 / 100 * proc * data.from;

    sum_elem.text(`${sum_profit} ₽`)
  }


  let range_modal = $(".range-power");
  if (range_modal.length > 0) {
    range_modal.ionRangeSlider({
      grid: true,
      min: 1000,
      max: 1000000,
      from: 500000,
      step: 1000,

    });
  }


  // chart canvasjs

  const options = {
    animationEnabled: true,
    title: {
      // text: "Company Revenue by Year"
    },
    axisY: {
      // title: "Revenue in USD",
      valueFormatString: "#0,,.",
      suffix: "k",
      // prefix: "$"
    },
    data: [{
      type: "area",
      markerSize: 5,
      xValueFormatString: "YYYY",
      yValueFormatString: "$#,##0.##",
      dataPoints: [
        { x: new Date(2000, 0), y: 22890000 },
        { x: new Date(2001, 0), y: 28300000 },
        { x: new Date(2002, 0), y: 10090000 },
        { x: new Date(2003, 0), y: 18400000 },
        { x: new Date(2004, 0), y: 13960000 },
        { x: new Date(2005, 0), y: 26130000 },
        { x: new Date(2006, 0), y: 18210000 },
        { x: new Date(2007, 0), y: 10000000 },
        { x: new Date(2008, 0), y: 13970000 },
        { x: new Date(2009, 0), y: 15060000 },
        { x: new Date(2010, 0), y: 17980000 },
        { x: new Date(2011, 0), y: 23860000 },
        { x: new Date(2012, 0), y: 47040000 },
        { x: new Date(2013, 0), y: 49260000 },
        { x: new Date(2014, 0), y: 13940000 },
        { x: new Date(2015, 0), y: 9720000 },
        { x: new Date(2016, 0), y: 11400000 }
      ]
    }]
  };

  const chart = $(".farm-profit__chart")

  if (chart.length > 0) {
    chart.CanvasJSChart(options);
  }


  if ($(window).width() <= 768) {
    $('.miners__list').slick({
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
