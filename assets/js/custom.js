
 // slider options 

 $(document).ready(function(){
    $('.banner').slick({
        dots: true,
        arrows: true,
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

    $('.slider-cargo-options').slick({
        dots: false,
        arrows: true,
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
        ]

    })

    $('.services-slider').slick({
        dots: false,
        arrows: true,
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
        ]
    })
 });

// ------------------------------
 


 // form download file

 const fileInput = document.getElementById("file");

 fileInput.addEventListener("change", function() {
   const fileName = this.value.split("\\").pop();
   const fileExtension = fileName.split(".").pop();
 
   const fileLabel = document.querySelector(".calculation__form-file-label");
   fileLabel.textContent = `${fileName} (${fileExtension})`;
 });

 // ------------------------------

 // transfornation mobile-slider

 mobileOnlySlider("#advantages-mobile-slider", true, false, 991);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
  var slider = $($slidername);
  var settings = {
    mobileFirst: true,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: $breakpoint,
        settings: "unslick"
      }
    ]
  };

  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });

} // Mobile Only Slider

// accordion FAQ


const accordions = document.querySelectorAll('.tabs__accordion');

accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    const panel = accordion.nextElementSibling;
    const tabs = accordion.parentElement;

    accordion.classList.toggle('active');
    accordion.classList.remove('active-before'); // удаляем класс при клике

    if (panel.style.display === 'block') {
      panel.style.display = 'none';
      tabs.style.backgroundColor = 'transparent';
      accordion.classList.add('active-before'); // добавляем класс при скрытии
      accordion.classList.remove('active-after');
    } else {
      panel.style.display = 'block';
      tabs.style.backgroundColor = '#fff';
      accordion.classList.add('active-after');
      accordion.classList.remove('active-before'); // удаляем класс при показе
    }
  });
});

