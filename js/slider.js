// $('.saying__slider').slick({

//     centerMode: true,
//     centerPadding: '10px',

//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [


//         {
//             breakpoint: 440,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// });

$('.saying__slider').slick({
    centerMode: true,
    centerPadding: '60px',
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [


        {
            breakpoint: 770,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
            }
        }
    ]
});

$('.payments__slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 1249,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 770,
            arrows: false,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 440,
            arrows: true,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
0
$('.autoplay').slick({
    centerMode: true,
    centerPadding: '60px',

    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    touchMove: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [

        {
            breakpoint: 1030,
            centerPadding: '10px',
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
    ]
});



$('.find__items-mobile').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
            }
        }
    ]
});