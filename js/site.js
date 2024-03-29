$(document).ready(function () {
    var clientHeight = $(window).height();
    var width = $(window).width();
    //Header al 100% de la pantalla del cliente
    $('.fullHeightHeader').height(clientHeight);
    
    
    $('#menu-button, #menu-close-button').on('click touchend', function (e) {
        e.preventDefault();
        $('body').toggleClass('pushed-right');
        $('#menu-button').toggleClass('is-active');
    });
    if(width<= 767.9){ 
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            var blanco = false;
            $('.bg-white').each(function(index, element){
                if(scroll -$(element).offset().top>=0 && scroll- $(element).offset().top<=$(element).height()){
                    blanco=true;
                }
            });
            console.log(blanco);
            if (blanco) {
                $('.hamburger-inner').addClass('negative');
                $(".navbar-brand img").attr("src", "./images/icons/Group 26.svg");
                $('#fp-nav').addClass('fp-white');
            }
            else{
                $('.hamburger-inner').removeClass('negative');
                $(".navbar-brand img").attr("src", "./images/icons/Group 11.svg");
                $('#fp-nav').removeClass('fp-white');
            }
        });
    }
});