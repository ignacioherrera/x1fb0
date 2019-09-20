$(document).ready(function () {
    var clientHeight = $(window).height();
    var width = $(window).width();
    //Header al 100% de la pantalla del cliente
    if (width >= 768) {
        $('.fullHeightHeader').height(clientHeight);
        // Fullpage lib
        new fullpage('#fullpage', {
            anchors: ['page1', 'page2', 'page3', 'page4'],
            navigationTooltips: ['Home', 'Orders', 'Easy', 'Touch'],
            css3: true,
            scrollingSpeed: 1000,
            navigationPosition: 'left',
            navigation: true,
            slidesNavigation: true,
            responsiveHeight: 330,
            dragAndMove: true,
            dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
            controlArrows: false
        });
    }
    $(window).resize(function () {
        clientHeight = $(window).height();
        width = $(window).width();
        $('.fullHeightHeader').height(clientHeight);
        // Fullpage lib
        new fullpage('#fullpage', {
            anchors: ['page1', 'page2', 'page3', 'page4'],
            navigationTooltips: ['Home', 'Orders', 'Easy', 'Touch'],
            css3: true,
            scrollingSpeed: 1000,
            navigationPosition: 'left',
            navigation: true,
            slidesNavigation: true,
            responsiveHeight: 330,
            dragAndMove: true,
            dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
            controlArrows: false
        });
    });

    $('#menu-button, #menu-close-button').on('click touchend', function (e) {
        e.preventDefault();
        $('body').toggleClass('pushed-right');
        $('#menu-button').toggleClass('is-active');
    });
});