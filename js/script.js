$(document).ready(function () {
    $("#dance-masters").owlCarousel({
        items: 2,
        autoplay: true,
        smartspeed: 600,
        loop: true
    });
});

$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 500);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});


$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });

});

$(window).on('load', function () {
    var $grid = $('.grid').isotope({});
    // filter items on button click
    $('.portfolio-buttons').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
        $('.portfolio-buttons').find('.active').removeClass('active');
        $(this).addClass('active');


    });
});
$(function () {
    $('.portfolio-item').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

$(document).ready(function () {
    $("#testmonial-slidder").owlCarousel({
        items: 1,
        autoplay: true,
        smartspeed: 600,
        loop: true
    });
});

$(function () {
    jQuery(document).ready(function ($) {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    });

});
$(document).ready(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartspeed: 600,
        loop: true
    });
});
$(function () {
    $(window).scroll(function () {
        showHideWhiteNav()
    });


    function showHideWhiteNav() {
        if ($(window).scrollTop() > 50) {

            $("nav").addClass("white-nav-top");

            $("#back-to-top").fadeIn();


        } else {
            $("nav").removeClass("white-nav-top");

            $("#back-to-top").fadeOut();

        }

    }

});

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 85

        }, 1000, "easInOutQuint");
    });



});