(function ($) {
    "use strict";

    //   counter area

    $(".couterup span").counterUp({
        delay: 10,
        time: 1000
    });

    // modal video
    $(".popup_video").modalVideo();
    $(".popup_video").on('click', function () {
        return false;
    });

    $('.testimonial_active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.test_img_active'
      });
      $('.test_img_active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial_active',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        arrows: false,
      });

      $(".brand_active").owlCarousel({
        items:4,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    
})(jQuery);