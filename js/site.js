$(document).ready(function () {

    $('#menu-button, #menu-close-button').on('click touchend', function (e) {
        e.preventDefault();
        $('body').toggleClass('pushed-right');
        $('#menu-button').toggleClass('is-active');
    });

    // Fullpage lib
        new fullpage('#fullpage', {
            anchors: ['page1', 'page2', 'page3', 'page4'],
            navigationTooltips: ['fullPage', 'Open', 'Easy', 'Touch'],
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

    //****************************
});