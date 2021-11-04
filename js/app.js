// preloader
let mask = document.querySelector('.mask');
window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 600);
});

$(document).ready(function () {
    /* Fixed Header */
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $('#nav');
    let button = $('#navToggle');
    let links = $('.nav__link');
    let overlay = $('#burger_overlay');

    checkScroll(scrollPos, introH);

    $(window).on('scroll  resize', function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }

    /* Smooth scroll*/

    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let elemId = $(this).data('scroll');
        let elementOffset = $(elemId).offset().top;

        nav.removeClass('show');

        $('html, body').animate(
            {
                scrollTop: elementOffset - 10,
            },
            900
        );
    });

    /*Burger menu */

    button.click(function (event) {
        event.preventDefault();
        button.toggleClass('burger_active');
        nav.toggleClass('show');
    });
    links.click(function (event) {
        event.preventDefault();
        button.toggleClass('burger_active');
    });
    overlay.click(function () {
        button.toggleClass('burger_active');
        nav.toggleClass('show');
    });

    /*Slider  Reviews: https://kenwheeler.github.io/slick/*/

    let slider = $('#priceSlider');

    slider.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,

        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
});
