$('.brands-slider').slick({
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: $('.prev-btn'),
    nextArrow: $('.next-btn'),
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
        {
        breakpoint: 1620,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 5
        }
        },
        {
        breakpoint: 1320,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4
        }
        }
    ]
});