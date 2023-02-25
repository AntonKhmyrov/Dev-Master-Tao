 $(document).ready(function(){
    $('.banner').slick({
        dots: true,
        arrows: true,
        appendArrows: '.banner-nav',
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            },
        ]
    });
 });
