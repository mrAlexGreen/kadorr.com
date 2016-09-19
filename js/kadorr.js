(function( $ ){

    if($("ul").is("#supersized")){
        $.supersized({

                        // Functionality
                        slideshow               :   1,          // Slideshow on/off
                        autoplay                :   1,          // Slideshow starts playing automatically
                        start_slide             :   1,          // Start slide (0 is random)
                        stop_loop               :   0,          // Pauses slideshow on last slide
                        random                  :   0,          // Randomize slide order (Ignores start slide)
                        slide_interval          :   3000,      // Length between transitions
                        transition              :   6,          // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
                        transition_speed        :   1000,       // Speed of transition
                        new_window              :   1,          // Image links open in new window/tab
                        pause_hover             :   0,          // Pause slideshow on hover
                        keyboard_nav            :   1,          // Keyboard navigation on/off
                        performance             :   1,          // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
                        image_protect           :   1,          // Disables image dragging and right click with Javascript

                        // Size & Position
                        min_width               :   0,          // Min width allowed (in pixels)
                        min_height              :   0,          // Min height allowed (in pixels)
                        vertical_center         :   1,          // Vertically center background
                        horizontal_center       :   1,          // Horizontally center background
                        fit_always              :   0,          // Image will never exceed browser width or height (Ignores min. dimensions)
                        fit_portrait            :   1,          // Portrait images will not exceed browser height
                        fit_landscape           :   0,          // Landscape images will not exceed browser width

                        // Components
                        slide_links             :   0,          // Individual links for each slide (Options: false, 'num', 'name', 'blank')
                        thumb_links             :   0,          // Individual thumb links for each slide
                        thumbnail_navigation    :   0,          // Thumbnail navigation
                        slides                  :   [           // Slideshow Images
                                                            {image : 'images/bg/first-section-bg.jpg' , title : 'Image Credit: Maria Kazvan', thumb : '../images/bg/first-section-bg.jpg'},
                                                            {image : 'images/bg/first-section-bg1.jpg', title : 'Image Credit: Maria Kazvan', thumb : '../images/bg/first-section-bg1.jpg'},
                                                            {image : 'images/bg/first-section-bg2.jpg', title : 'Image Credit: Maria Kazvan', thumb : '../images/bg/first-section-bg2.jpg'},
                                                            {image : 'images/bg/first-section-bg3.jpg', title : 'Image Credit: Maria Kazvan', thumb : '../images/bg/first-section-bg3.jpg'},
                                                            {image : 'images/bg/first-section-bg4.jpg', title : 'Image Credit: Maria Kazvan', thumb : '../images/bg/first-section-bg4.jpg'}
                                                    ],

                        // Theme Options
                        progress_bar            :   1,          // Timer for each slide
                        mouse_scrub             :   0

                    });
    }
    if($("input").is("#SliderYear")){
        $("#SliderYear").slider({ from: 2000, to: 2020, step: 1, smooth: true, round: 0,format: { format: '0'}, dimension: "г.", limits: true, skin: "year" });
    }
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = true;

    trigger.click(function () {
      hamburger_cross();
    });

    function hamburger_cross() {

      if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });

    //onhover image
        //установите непрозрачность до 0,4 для всех изображений
    //непрозрачность = 1 - полностью непрозрачным
    //непрозрачность = 0 - невидимая
    // $('.img img').css('opacity', 1);
    // когда наведете курсор на выбранном изображении изменить непрозрачность до 1
    // $('#house').hover(
    // function(){
    //  $('day').stop().fadeTo('slow', 0);
    // },
    // function(){
    //  $('night').stop().fadeTo('slow', 1);
    // });


    $('.toggle').each(function() {
        $(this).toggles({
            clickable: !$(this).hasClass('noclick'),
            dragable: !$(this).hasClass('nodrag'),
            click: ($(this).attr('rel')) ? $('.'+$(this).attr('rel')) : undefined,
            on: !$(this).hasClass('off'),
            checkbox: ($(this).data('checkbox')) ? $('.'+$(this).data('checkbox')) : undefined,
            ontext: $(this).data('ontext') || '',
            offtext: $(this).data('offtext') || ''
        });
    });

    $('.house img').css({opacity: 0.0});
    $('.house img:first').css({opacity: 1.0});

    function showDayNight(){

        // Берем первую картинку
        var current = ($('.house img.show')?  $('.house img.show') : $('.house img:first'));

        // Берем следующую картинку, когда дойдем до последней начинаем с начала
        var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('.house img:first') :current.next()) : $('.house img:first'));

        current.stop(1,1);
        // Подключаем эффект растворения/затухания для показа картинок, css-класс show имеет больший z-index
        next.css({opacity: 0.0})
        .addClass('show')
        .animate({opacity: 1.0}, 1400);

        // Прячем текущую картинку
        current.animate({opacity: 0.0}, 1400)
        .removeClass('show');
    }

    $('.toggle').on('toggle', function(e, active) {

      if (active) {
        $("#checkDay").toggleClass("day night");
        showDayNight();

      } else {
        $("#checkDay").toggleClass("night day");
        showDayNight();

      }
    });

    var scrollDownHolder = $('.js-scroll-down-holder');
    if (scrollDownHolder.length){// && !isTouch) {
        scrollDownHolder.click(function(){
            $('html,body').stop(1,1).animate({scrollTop: $(window).height()}, 400);
        });
        var isHidden = false;
        var watchScrollTopFn = function(){
            if (isHidden && $(window).scrollTop() < 1) {scrollDownHolder.fadeIn(); isHidden = false;}
            if (!isHidden && $(window).scrollTop() > 1){scrollDownHolder.fadeOut(); isHidden = true;}
        };
        setInterval(watchScrollTopFn , 100);
        watchScrollTopFn();
    }


    $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $(".toggled .hamburger.is-open").hover(
      function () {
        // $(this).find("span").css("background-color","white");
        $(this).find("span").toggleClass("is-on")
      },
      function () {
        // $(this).find("span").css("background-color","#2a483f");
        $(this).find("span").toggleClass("is-on")
      }
    );
})( jQuery );