$(function(){
    $('.list-alfavit-mob > .burger').click(function(){

        function slider_menu($dp){
            $dpm = $dp.find('.dropdown-menu');
            $dpm.stop().slideToggle();
            bgcolor = $dp.parent().css('background-color');
            if(bgcolor != "rgb(249, 200, 2)" ){
                $dp.parent().css('background-color','rgb(249,200,2)');
                console.log($dp.children('.ialf').css('background','url(images/ialf-hover.png)'));
            }
            else{
                $dp.parent().css('background-color','rgba(0, 0, 0, 0)');
                $dp.children('.ialf').css('background','url(images/ialf.png)');
            }
        }

        if( $(this).find('.dropdown-menu').hasClass('open')){
            $(this).find('.dropdown-menu').removeClass('open');
            slider_menu($(this));
        }else{
            $('.dropdown-menu').each(function(i,elem) {
                if ($(this).hasClass('open')) {
                    $(this).removeClass('open');
                    slider_menu($(this).parent());
                }

            });
            slider_menu($(this));
            $(this).find('.dropdown-menu').addClass('open');

        }

    });
});