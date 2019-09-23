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
    if(width<= 767){
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
            if (scroll > $('#change_header').offset().top) {
                $(".header").addClass("change"); // you don't need to add a "." in before your class name
            } else {
                $(".header").removeClass("change");
            }
        });
    }
});