
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