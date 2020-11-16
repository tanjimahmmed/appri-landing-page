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
        fade: true,
        asNavFor: '.test_img_active'
      });
      $('.test_img_active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial_active',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px'
      });
    
})(jQuery);