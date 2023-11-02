var scroller = 0;
$(document).ready(function () {
  /* Preload image */
  pic = new Image();
  pic.src = "img/right-arrow.svg";

  /* Smoothscroll */
  scroller = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
  $(window).on("load resize", function () {
    if ($(window).width() <= 900) {
      scroller.destroy();
    }
  });
  gsap.registerPlugin(ScrollTrigger);
  scroller.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".wrapper", {
    scrollTop(value) {
      return arguments.length
        ? scroller.scrollTo(value, 0, 0)
        : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });
  ScrollTrigger.addEventListener("refresh", () => scroller.update());
  ScrollTrigger.refresh();

  $(window).on("resize", function () {
    scroller.update();
  });

  /* Modal-open */
  $(".modal-open").click(function (e) {
    e.preventDefault();
    $(".modal-back").fadeIn(300);
    var href = $(this).attr("href");
    $(href).addClass("active");
    $(".header .burger").addClass("disable");
  });

  /* Modal-back */
  $(".modal-back").click(function (e) {
    e.preventDefault();
    $(".modal-back").fadeOut(300);
    $(".header .burger").removeClass("active");
    $(".hidden-menu").removeClass("active");
    $(".modal").removeClass("active");
    $(".gallery").fadeOut(300);
    $(".header .burger").removeClass("disable");
  });

  /* Modal-close */
  $(".modal .close").click(function (e) {
    e.preventDefault();
    $(".modal-back").fadeOut(300);
    $(".header .burger").removeClass("active");
    $(".hidden-menu").removeClass("active");
    $(".modal").removeClass("active");
    $(".gallery").fadeOut(300);
    $(".header .burger").removeClass("disable");
  });
  $(".gallery .close").click(function (e) {
    e.preventDefault();
    $(".modal-back").fadeOut(300);
    $(".header .burger").removeClass("active");
    $(".hidden-menu").removeClass("active");
    $(".modal").removeClass("active");
    $(".gallery").fadeOut(300);
    $(".header .burger").removeClass("disable");
  });

  /* Burger */
  $(".header .burger").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".modal-back").fadeToggle(300);
    $(".hidden-menu").toggleClass("active");
    $(".modal").removeClass("active");
    $(".gallery").fadeOut(300);
  });

  /* Modal-form */
  $($(".checkbox label")).click(function (e) {
    e.preventDefault();
    if ($(this).parent().find('input[type="checkbox"]').is(":checked")) {
      $(this)
        .parent()
        .parent()
        .find('button[type="submit"]')
        .addClass("disable");
      $(this).parent().find('input[type="checkbox"]').prop("checked", false);
    } else {
      $(this)
        .parent()
        .parent()
        .find('button[type="submit"]')
        .removeClass("disable");
      $(this).parent().find('input[type="checkbox"]').prop("checked", true);
    }
  });

  /* Inputmask */
  $('input[type="tel"]').inputmask("+99 999 999 99 99");

  /* Slider */
  if ($(".slider").length) {
    var slider1 = new Swiper(".slider .swiper-container", {
      slidesPerView: 1,
      speed: 1000,
      /* autoplay: {
                delay: 5000
            },
            loop: true, */
      watchOverflow: true,
      observer: true,
      observeParents: true,
      pagination: {
        el: ".slider .paggination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            '<span class="line"></span>' +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
        formatFractionCurrent: function (number) {
          if (number < 10) {
            number = "О" + number;
          }
          return number;
        },
        formatFractionTotal: function (number) {
          if (number < 10) {
            number = "О" + number;
          }
          return number;
        },
      },
      navigation: {
        nextEl: ".slider .next",
        prevEl: ".slider .prev",
      },
    });

    var marquee1 = $(".slider .swiper-slide-active").attr("data-marquee1");
    var marquee2 = $(".slider .swiper-slide-active").attr("data-marquee2");
    var text = $(".slider .swiper-slide-active").attr("data-text");
    var logo = $(".slider .swiper-slide-active").attr("data-logo");
    $(".slider .marquee:first-child").text(marquee1);
    $(".slider .marquee:first-child").attr("data-title", marquee1);
    $(".slider .marquee:last-child").text(marquee2);
    $(".slider .marquee:last-child").attr("data-title", marquee2);
    $(".slider .text2").text(text);
    $(".slider .logo span").css(
      "background",
      "url(" + logo + ") no-repeat 50%/contain"
    );
    slider1.on("slideNextTransitionStart", function () {
      var marquee1 = $(".slider .swiper-slide-active").attr("data-marquee1");
      var marquee2 = $(".slider .swiper-slide-active").attr("data-marquee2");
      var text = $(".slider .swiper-slide-active").attr("data-text");
      var logo = $(".slider .swiper-slide-active").attr("data-logo");
      $(".slider .marquee-wrap").fadeOut(500);
      $(".slider .paggination span:first-child").fadeOut(500);
      $(".slider .text2").fadeOut(500);
      $(".slider .logo").fadeOut(500);
      setTimeout(function name(params) {
        $(".slider .marquee:first-child").text(marquee1);
        $(".slider .marquee:first-child").attr("data-title", marquee1);
        $(".slider .marquee:last-child").text(marquee2);
        $(".slider .marquee:last-child").attr("data-title", marquee2);
        $(".slider .text2").text(text);
        $(".slider .logo span").css(
          "background",
          "url(" + logo + ") no-repeat 50%/contain"
        );
      }, 500);
      $(".slider .marquee-wrap").fadeIn(500);
      $(".slider .paggination span:first-child").fadeIn(500);
      $(".slider .text2").fadeIn(500);
      $(".slider .logo").fadeIn(1000);
    });
    slider1.on("slidePrevTransitionStart", function () {
      var marquee1 = $(".slider .swiper-slide-active").attr("data-marquee1");
      var marquee2 = $(".slider .swiper-slide-active").attr("data-marquee2");
      var text = $(".slider .swiper-slide-active").attr("data-text");
      var logo = $(".slider .swiper-slide-active").attr("data-logo");
      $(".slider .marquee-wrap").fadeOut(500);
      $(".slider .paggination span:first-child").fadeOut(500);
      $(".slider .text2").fadeOut(500);
      $(".slider .logo").fadeOut(500);
      setTimeout(function name(params) {
        $(".slider .marquee:first-child").text(marquee1);
        $(".slider .marquee:first-child").attr("data-title", marquee1);
        $(".slider .marquee:last-child").text(marquee2);
        $(".slider .marquee:last-child").attr("data-title", marquee2);
        $(".slider .text2").text(text);
        $(".slider .logo span").css(
          "background",
          "url(" + logo + ") no-repeat 50%/contain"
        );
      }, 500);
      $(".slider .marquee-wrap").fadeIn(500);
      $(".slider .paggination span:first-child").fadeIn(500);
      $(".slider .text2").fadeIn(500);
      $(".slider .logo").fadeIn(500);
    });
  }
  if ($(".slider2").length) {
    var slider2 = new Swiper(".slider2 .swiper-container", {
      slidesPerView: 4,
      speed: 1000,
      watchOverflow: true,
      observer: true,
      navigation: {
        nextEl: ".slider2 .next",
        prevEl: ".slider2 .prev",
      },
      observeParents: true,
      pagination: {
        el: ".slider2 .paggination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            " / " +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
        formatFractionCurrent: function (number) {
          if (number < 10) {
            number = "0" + number;
          }
          return number;
        },
        formatFractionTotal: function (number) {
          if (number < 10) {
            number = "0" + number;
          }
          return number;
        },
      },
    });
    $(window).on("load resize", function () {
      if ($(window).width() <= 900) {
        slider2.destroy(true, true);
      }
    });
  }

  /* Splittext */
  if ($(".split").length) {
    $(window).on("load resize", function () {
      if ($(window).width() > 900) {
        $(".split").each(function () {
          var text = new SplitText(this);
          var timeline = gsap
            .timeline({
              scrollTrigger: {
                trigger: this,
                scroller: ".wrapper",
                start: "top bottom",
                ease: "power4.out",
              },
            })
            .from($(this).find("span"), {
              yPercent: 100,
              duration: 2,
              ease: "power4.out",
            });
        });
      }
    });
  }

  /* Main-animation */
  if ($(".header .container").length) {
    $(".header .container").each(function () {
      var tl = new TimelineMax();
      tl.to($(this), 2, { opacity: 1, top: 0, ease: "power4.out" });
    });
  }
  if ($(".main .marquee").length) {
    $(".main .marquee").each(function () {
      var tl = new TimelineMax();
      tl.to($(this), 2, { opacity: 1, delay: 1, ease: "power4.out" });
    });
  }
  if ($(".main .img1").length) {
    $(".main .img1").each(function () {
      var tl = new TimelineMax();
      tl.to($(this).find("span"), 2, { y: 0, delay: 1, ease: "power4.out" });
    });
  }
  if ($(".main .img1 .img-w").length) {
    $(".main .img1 .img-w").each(function () {
      var timeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".header",
            scroller: ".wrapper",
            start: "top top",
            ease: "none",
            scrub: true,
            end: "+=200%",
          },
        })
        .to(this, {
          height: "100%",
          ease: "none",
        });
    });
  }
  if ($(".main .img2").length) {
    $(".main .img2").each(function () {
      var tl = new TimelineMax();
      tl.to($(this).find("span"), 2, { y: 0, delay: 1.2, ease: "power4.out" });
    });
  }
  if ($(".main .img2").length) {
    $(".main .img2").each(function () {
      var timeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: this,
            scroller: ".wrapper",
            start: "top center",
            toggleActions: "play none none reverse",
          },
        })
        .to(this, {
          y: "50%",
          duration: 1,
          ease: "none",
        });
    });
    $(window).on("load resize", function () {
      if ($(window).width() <= 900) {
        $(".main .img2").each(function () {
          var timeline = gsap
            .timeline({
              scrollTrigger: {
                trigger: this,
                start: "top center",
                toggleActions: "play none none none",
              },
            })
            .to(this, {
              y: "25%",
              duration: 1,
              ease: "none",
            });
        });
      }
    });
  }
  if ($(".main .center .a").length) {
    $(".main .center .a").each(function () {
      var tl = new TimelineMax();
      tl.to($(this), 2, { opacity: 1, delay: 1.6, ease: "power4.out" });
    });
  }
  if ($(".main .center .down").length) {
    $(".main .center .down").each(function () {
      var tl = new TimelineMax();
      tl.to($(this), 2, { opacity: 1, delay: 1.6, ease: "power4.out" });
    });
  }

  /* Card-width */
  if ($(".card .img-w").length) {
    $(".card .img-w").each(function () {
      var timeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: this,
            scroller: ".wrapper",
            start: "top bottom",
            ease: "power4.out",
          },
        })
        .to($(this), {
          x: 0,
          duration: 2,
          ease: "power4.out",
        });
    });
  }
  if ($(".card .img-w span").length) {
    $(".card .img-w span").each(function () {
      var timeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: this,
            scroller: ".wrapper",
            start: "top bottom",
            ease: "power4.out",
          },
        })
        .to($(this), {
          x: 0,
          duration: 2,
          ease: "power4.out",
        });
    });
    $(window).on("load resize", function () {
      if ($(window).width() <= 900) {
        $(".card .img-w").each(function () {
          var timeline = gsap
            .timeline({
              scrollTrigger: {
                trigger: this,
                start: "top bottom",
                ease: "none",
              },
            })
            .to($(this), {
              x: 0,
              duration: 1,
              ease: "none",
            });
        });
        $(".card .img-w span").each(function () {
          var timeline = gsap
            .timeline({
              scrollTrigger: {
                trigger: this,
                start: "top bottom",
                ease: "none",
              },
            })
            .to($(this), {
              x: 0,
              duration: 1,
              ease: "none",
            });
        });
      }
    });
  }

  /* $('.part .part1 .card').mousemove(function (e) { */
  /*     var pos = $(this).offset(); */
  /*     var elem_left = pos.left; */
  /*     var elem_top = pos.top; */
  /*     var Xinner = e.pageX - elem_left; */
  /*     var Yinner = e.pageY - elem_top; */
  /*     $(this).find('.img').css('left', Xinner); */
  /*     $(this).find('.img').css('top', Yinner); */
  /*     $(this).find('.img').css('opacity', '1'); */
  /*     $('.part .part1 .card').addClass('disable'); */
  /*     $(this).removeClass('disable'); */
  /* }); */
  /* $('.part .part1 .card').mouseout(function (e) { */
  /*     $('.part .part1 .card').removeClass('disable'); */
  /*     $(this).find('.img').css('opacity', '0'); */
  /* }); */

  /* Director-heading */
  if ($(".director .heading span").length) {
    $(".director .heading span").each(function () {
      var timeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".director",
            scroller: ".wrapper",
            start: "top 30%",
            ease: "none",
            scrub: true,
            end: "+=50%",
          },
        })
        .to($(this), {
          y: "100%",
          ease: "none",
        });
    });
  }

  /* Form-line */
  if ($(".form .line").length) {
    $(".form .line").each(function () {
      var timeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: this,
            scroller: ".wrapper",
            start: "top bottom",
            ease: "none",
          },
        })
        .to($(this), {
          scaleX: 1,
          duration: 1,
          ease: "none",
        });
    });
    $(window).on("load resize", function () {
      if ($(window).width() <= 900) {
        $(".form .line").each(function () {
          var timeline = gsap
            .timeline({
              scrollTrigger: {
                trigger: this,
                start: "top bottom",
                ease: "none",
              },
            })
            .to($(this), {
              scaleX: 1,
              duration: 1,
              ease: "none",
            });
        });
      }
    });
  }

  /* Footer-line */
  //    if ($(".footer .line").length) {
  //        $(".footer .line").each(function () {
  //            var timeline = gsap.timeline({
  //                scrollTrigger: {
  //                    trigger: this,
  //                    scroller: '.wrapper',
  //                    start: "top bottom",
  //                    ease: "none",
  //                }
  //            })
  //                .to(this, {
  //                    scaleX: 1,
  //                    duration: 1,
  //                    ease: "none"
  //                })
  //        });
  //        $(window).on('load resize', function () {
  //            if ($(window).width() <= 900) {
  //                $(".footer .line").each(function () {
  //                    var timeline = gsap.timeline({
  //                        scrollTrigger: {
  //                            trigger: this,
  //                            start: "top bottom",
  //                            ease: "none",
  //                        }
  //                    })
  //                        .to(this, {
  //                            scaleX: 1,
  //                            duration: 1,
  //                            ease: "none"
  //                        })
  //                });
  //            }
  //        });
  //    }

  /* ScrollTo */
  //    if ($("[data-scroll-to]").length) {
  //        $(window).on('load resize', function () {
  //            if ($(window).width() <= 900) {
  //                $("[data-scroll-to]").on("click", function (e) {
  //                    e.preventDefault();
  //                    var id = $(this).attr('href'),
  //                        top2 = $(id).offset().top;
  //                    $('body,html').animate({ scrollTop: top2 }, 1000);
  //                });
  //            }
  //        });
  //    }

  /* Footer */
  //    if ($(".footer .container").length) {
  //        $(".footer .container").each(function () {
  //            var timeline = gsap.timeline({
  //                scrollTrigger: {
  //                    trigger: this,
  //                    scroller: '.wrapper',
  //                    start: 'bottom bottom',
  //                    ease: "none",
  //                    scrub: true,
  //                    end: "+=" + $(this).height() + ""
  //                }
  //            })
  //                .to(this, {
  //                    y: 0,
  //                    opacity: 1,
  //                    ease: "none"
  //                })
  //        });
  //    }

  /* Detail background */
  if ($(".slider2 .bottom .img span").length) {
    $(".slider2 .bottom .img span").each(function () {
      var timeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: this,
            scroller: ".wrapper",
            start: "top center",
            ease: "none",
            scrub: true,
            end: "+=" + $(this).height() + "",
          },
        })
        .to(this, {
          width: "100%",
          height: "100%",
          ease: "none",
        });
    });
    $(window).on("load resize", function () {
      if ($(window).width() <= 900) {
        $(".slider2 .bottom .img span").each(function () {
          var timeline = gsap
            .timeline({
              scrollTrigger: {
                trigger: this,
                start: "top center",
                ease: "none",
                scrub: true,
                end: "+=" + $(this).height() + "",
              },
            })
            .to(this, {
              width: "100%",
              height: "100%",
              ease: "none",
            });
        });
      }
    });
  }

  /* Cursor */
  $("body").mousemove(function (e) {
    // положение элемента
    var pos = $(this).offset();
    var elem_left = pos.left;
    var elem_top = pos.top;
    // положение курсора внутри элемента
    var Xinner = e.pageX - elem_left - 75;
    var Yinner = e.pageY - elem_top - 75;
    $(".cursor").css("left", Xinner);
    $(".cursor").css("top", Yinner);
  });

  $(".slider2 .swiper-container").mousemove(function (e) {
    var pos = $(this).offset();
    var elem_left = pos.left;
    var elem_top = pos.top;
    var Xinner = e.pageX - elem_left - 75;
    var Yinner = e.pageY - elem_top - 75;
    $(".cursor3").css("left", Xinner);
    $(".cursor3").css("top", Yinner);
  });
  $(".slider2 .swiper-container").mouseout(function (e) {
    $(".cursor3").css("opacity", "0");
    $(".cursor3").css("transform", "scale(0)");
  });
  $(".slider2 .prev").mousemove(function (e) {
    $(".cursor3").css("opacity", "1");
    $(".cursor3").css("transform", "scale(1)");
    $(".cursor3").removeClass("active");
  });
  $(".slider2 .next").mousemove(function (e) {
    $(".cursor3").css("opacity", "1");
    $(".cursor3").css("transform", "scale(1)");
    $(".cursor3").addClass("active");
  });

  /* Background */

  /* Select */
  $("select").niceSelect();

  $(".more-js").click(function (e) {
    e.preventDefault();
    $(".container-full.hidden").css("display", "block");
    $(this).remove();
    scroller.update();
  });

  $(".objects .modal-open").click(function (e) {
    e.preventDefault();
    var text = $(this).parent().find("span").text();
    $("#product").find(".text1 span").text(text);
  });
});

// slider

let slideIndex = 0;
showSlides();

// Next-previous control
function nextSlide() {
  slideIndex++;
  showSlides();
  timer = _timer; // reset timer
}

function prevSlide() {
  slideIndex--;
  showSlides();
  timer = _timer;
}

// Thumbnail image controlls
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  timer = _timer;
}

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  //let dots = document.querySelectorAll(".dots");

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  // hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // show one slide base on index number
  //slides[slideIndex].style.display = "block";

  //   dots.forEach((dot) => {
  //     dot.classList.remove("active");
  //   });

  //   dots[slideIndex].classList.add("active");
}

// autoplay slides --------
let timer = 7; // sec
const _timer = timer;

// this function runs every 1 second
setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide();
    timer = _timer; // reset timer
  }
}, 1000); // 1sec
