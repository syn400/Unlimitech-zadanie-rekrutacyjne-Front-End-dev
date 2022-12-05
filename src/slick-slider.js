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
        breakpoint: 1440,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4
        }
        },
        {
        breakpoint: 1170,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
        },
        {
        breakpoint: 930,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
});