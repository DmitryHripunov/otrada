"use strict";
$(document).ready(function () {
  $(".menu__search-button").click(function () {
    $(".menu__search-panel").toggleClass("menu__search-panel_active"),
      $(".menu__search-button").toggleClass("menu__search-button_active"),
      $(".menu__search-input").val("")
  }),

    $(".menu__search-panel-close").click(function () {
      $(".menu__search-panel").removeClass("menu__search-panel_active"),
        $(".menu__search-button").toggleClass("menu__search-button_active"),
        $(".menu__search-input").val("")
    }),

    $(".header-mobile-btn, .mobile-menu__close").click(function () {
      $(".mobile-menu").toggleClass("mobile-menu_active")
    }),
    $(".mobile-menu__search-button").click(function () {
      $(".mobile-menu__search-panel-close").toggleClass("mobile-menu__search-panel-close_active"),
        $(".mobile-menu__search-input").toggleClass("mobile-menu__search-input_active").val("")
    });

  new Swiper(".swiper-container-news", {
    loop: !0,
    slidesPerView: 1,
    spaceBetween: 8,
    pagination: {
      el: ".news-slider__dots",
      type: "bullets"
    },
    breakpoints: {
      577: {
        navigation: {
          nextEl: ".news-slider__next"
        }
      }
    }
  }),

    new Swiper(".swiper-container-cinema-main", {
      loop: !0,
      slidesPerView: 1,
      spaceBetween: 8,
      effect: "fade",
      pagination: {
        el: ".cinema-slider__dots", type: "bullets"
      },
      breakpoints: {
        577: {
          navigation: {
            nextEl: ".cinema-slider__next"
          }
        }
      },
    }),

    new Swiper(".swiper-container-cinema-mobile", {
      loop: !0,
      slidesPerView: 1,
      spaceBetween: 8,
      pagination: {
        el: ".cinema-mobile-slider__dots",
        type: "bullets"
      }
    }),

    new Swiper(".swiper-container-brands-slider", {
      loop: !0,
      slidesPerView: 3,
      slidesPerGroup: 1,
      pagination: {
        el: ".brands-slider__dots",
        type: "bullets"
      },
      breakpoints: {
        769: {
          slidesPerView: 4
        },
        1024: {
          slidesPerView: 5,
          navigation: {
            nextEl: ".brands-slider__next",
            prevEl: ".brands-slider__prev"
          }
        }
      }
    }),


    new Swiper(".swiper-container-sale-slider", {
      loop: !1,
      spaceBetween: 8,
      pagination: {
        el: ".sale-slider__dots",
        type: "bullets"
      }
    });

  $(".shops-type").click(function () {
    $(".shops-type__filter").toggleClass("shops-type__filter_active"),
      $(".shops-type__icon").toggleClass("shops-type__icon_active")
  });

  var e = $(".brand__info-description-text"),
    t = $(".brand__info-description-spoiler");
  5 < e.prop("scrollHeight") - e.prop("clientHeight") ? t.addClass("brand__info-description-spoiler_visible") : t.removeClass("brand__info-description-spoiler_visible"),

    t.click(function () {
      e.toggleClass("brand__info-description-text_full"),
        e.hasClass("brand__info-description-text_full") ? t.html("Свернуть...") : t.html("Читать полностью...")
    });
  // shops
  $(".shops-panel__filter-wrap").on("click", function (e) {
    e.preventDefault();
    let href = $(this).attr('href');
    $('.tabs-pane').removeClass('tabs-pane_active');
    $(href).addClass('tabs-pane_active');

    $(".shops-panel__filter-wrap").removeClass("shops-panel__filter-wrap_active"),
      $(this).addClass("shops-panel__filter-wrap_active")
  });
  // photo
  $(".all-photos__header-filter-button").on("click", function (e) {
    e.preventDefault();
    let href = $(this).attr('href');
    $('.all-photos__list').removeClass('all-photos__list_active');
    $(href).addClass('all-photos__list_active');

    $(".all-photos__header-filter-button").removeClass("all-photos__header-filter-button_active"),
      $(this).addClass("all-photos__header-filter-button_active")
  });
  // actions
  $(".sales__header-filter-button").click(function (e) {
    e.preventDefault();
    let href = $(this).attr('attr-section');
    $('.sales__list').removeClass('sales__list_active');
    $(href).addClass('sales__list_active');

    $(".sales__header-filter-button").removeClass("sales__header-filter-button_active"),
      $(this).addClass("sales__header-filter-button_active")
  });
  new Swiper(".swiper-container-cinema", {
    loop: !1,
    navigation: {
      nextEl: ".cinema-movies-next",
      prevEl: ".cinema-movies-prev"
    },
    spaceBetween: 8,
    slidesPerView: "auto",
    breakpoints: {
      576: {
        slidesPerGroup: 2,
        spaceBetween: 16
      },
      768: {
        slidesPerGroup: 3
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 53
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 19
      },
      1401: {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 16
      }
    }
  });

  var i = new Swiper(".about-slider-thumbs", {
    slidesPerView: 4,
    spaceBetween: 8,
    loop: !1,
    freeMode: !1,
    watchSlidesVisibility: !0,
    watchSlidesProgress: !0,
    breakpoints: {
      1024: {
        direction: "vertical"
      }
    }
  }),

    s = (new Swiper(".about-slider-top", {
      loop: !1,
      spaceBetween: 8,
      pagination: {
        el: ".about-slider__counter",
        type: "bullets"
      },
      thumbs: {
        swiper: i
      },
      breakpoints: {
        681: {
          navigation: {
            nextEl: ".about-slider__next",
            prevEl: ".about-slider__prev"
          },
          pagination: {
            type: "fraction"
          }
        }
      }
    }),

      new Swiper(".photo-report-slider-thumbs", {
        slidesPerView: 4,
        spaceBetween: 8,
        loop: !1,
        freeMode: !1,
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0,
        breakpoints: {
          1024: {
            direction: "vertical"
          }
        }
      })),
    a = (new Swiper(".photo-report-slider-top", {
      loop: !1,
      spaceBetween: 8,
      pagination: {
        el: ".photo-report-slider__counter",
        type: "bullets"
      },
      thumbs: {
        swiper: s
      },
      breakpoints: {
        681: {
          navigation: {
            nextEl: ".photo-report-slider__next",
            prevEl: ".photo-report-slider__prev"
          },
          pagination: {
            type: "fraction"
          }
        }
      }
    }),
      $(".about__info-desc-text-spoiler")),
    o = $(".about__info-desc-text-bottom");
  a.click(function () {
    o.toggleClass("about__info-desc-text-bottom_active"),
      o.hasClass("about__info-desc-text-bottom_active") ? a.html("Свернуть...") :
        a.html("Читать полностью...")
  }),
    $(".scheme-header__title").click(function () {
      $(this).toggleClass("scheme-header__title_active"),
        $(".scheme-header__menu").toggleClass("scheme-header__menu_active")
    }),
    $(".scheme-header__mobile-btn ").click(function () {
      $(".scheme-header__menu").toggleClass("scheme-header__menu_active")
    }),
    $(".scheme-header__menu-item-wrapper").click(function () {
      var e = $(this).siblings(".scheme-header__menu-item-filter"),
        t = $(this).children(".scheme-header__menu-item-icon");
      e.toggleClass("scheme-header__menu-item-filter_active"),
        t.toggleClass("scheme-header__menu-item-icon_active")
    }),
    $(".vacancies__list-item-title").click(function () {
      $(this).toggleClass("vacancies__list-item-title_active"),
        $(this).siblings(".vacancies__list-item-content").toggleClass("vacancies__list-item-content_active"),
        $(this).siblings(".vacancies__list-item-icon").toggleClass("vacancies__list-item-icon_active"),
        $(this).parent(".vacancies__list-item").toggleClass("vacancies__list-item_active")
    }),
    $(".rental-request__form-input-field").focusin(function () {
      $(this).siblings(".rental-request__form-input-label").addClass("rental-request__form-input-label_focused")
    }),
    $(".rental-request__form-input-field").focusout(function () {
      var e = $(this),
        t = e.siblings(".rental-request__form-input-label");
      "" === e.val() && t.removeClass("rental-request__form-input-label_focused")
    }),

    $(".contacts__form-input-field").focusin(function () {
      $(this).siblings(".contacts__form-input-label").addClass("contacts__form-input-label_focused")
    }),
    $(".contacts__form-input-field").focusout(function () {
      var e = $(this),
        t = e.siblings(".contacts__form-input-label");
      "" === e.val() && t.removeClass("contacts__form-input-label_focused")
    }),
    $(".route-auto__form-input-field").focusin(function () {
      $(this).siblings(".route-auto__form-input-label").addClass("route-auto__form-input-label_focused")
    }),
    $(".route-auto__form-input-field").focusout(function () {
      var e = $(this),
        t = e.siblings(".route-auto__form-input-label");
      "" === e.val() && t.removeClass("route-auto__form-input-label_focused")
    }),
    $(".route-info__header-filter-button").click(function () {
      $(".route-info__header-filter-button").removeClass("route-info__header-filter-button_active"),
        $(this).addClass("route-info__header-filter-button_active");
      var e = "." + $(this).attr("data-block");
      $(".route-block").removeClass("route-block_visible"),
        $(e).addClass("route-block_visible")
    }),
    $(".footer-top-btn").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1e3)
    });
  var l = function () {
    "993" <= $(window).width() ? ($(".menu__item_last").mouseenter(function () {
      $(this).addClass("menu__item_active"),
        $(".menu__item-hovered").addClass("menu__item-hovered_active")
    }),
      $(".menu__item-hovered").mouseleave(function () {
        $(this).removeClass("menu__item-hovered_active"),
          $(".menu__item_last").removeClass("menu__item_active")
      }))
      : console.log("меньше")
  };
  l(),
    $(window).resize(l),
    $(".event__header-filter-button").click(function () {
      $(".event__header-filter-button").removeClass("event__header-filter-button_active"),
        $(this).addClass("event__header-filter-button_active")
    });
});

const bodyElem = document.body;
setTimeout(function () {
  bodyElem.classList.remove('preload');
}, 1000);

// filtr shops
$(".shops-type__filter-item").click(function (e) {
  e.preventDefault();
  let href = $(this).attr('attr-section');

  if (href == undefined) {
    $('.shops-by-logo__item').show();
    $('#map').find('path').attr('fill-opacity', '0');
  } else {
    $('.shops-by-logo__item').hide();

    $('.shops-by-logo__item').each( function() {
      let currentSections = $(this).attr('attr-section').split(',');
      console.log(currentSections);
      if (currentSections.indexOf(href) != -1) {
        $(this).show()
      }
    });

    // $('.shops-by-logo__item[attr-section="' + href + '"]').show();
    $('#map').find('path').attr('fill-opacity', '0.8');
    $('#map').find('path').attr('stroke-opacity', '1');
    $('#map').find('path').attr('stroke-width', '2');
    $('#map').find('path').each(function () {
      let curSections = $(this).attr('attr-sections').split(',');
      if (curSections.indexOf(href) != -1) {
        $(this).attr('fill-opacity', '0');
      }
    });
  }

  if (href == undefined) {
    $('.shops-by-abc__link').show();
  } else {
    $('.shops-by-abc__link').hide();

    $('.shops-by-abc__link').each( function() {
      let currentSect = $(this).attr('attr-section').split(',');
      if (currentSect.indexOf(href) != -1) {
        $(this).show()
      }
    });
  }

  $(".shops-type__filter-item").removeClass("shops-type__filter-item_active"),
    $(this).addClass("shops-type__filter-item_active")
});

$(window).on('load', function () {
  if ($('#map').length > 0) {
    for (let i = 0; i < scheme_items.length; i++) {
      $('#map').find('path').eq(i).attr('attr-sections', scheme_items[i].sections);

      $('#map').find('path').eq(i).attr('id', scheme_items[i].id_org);
    }
  }

  let polygonId = window.location.hash;
  $('#map').find('path').each(function () {
	let isId = $(this).attr('id');
	let newPolygonId = polygonId.replace(/#/gi, '');
    if (isId === newPolygonId) {
  	$(this).attr('fill-opacity', '0.8');
	  $(this).attr('stroke-opacity', '1');
	  $(this).attr('stroke-width', '2');
    }
  });
});