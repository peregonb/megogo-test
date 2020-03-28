$(window).on('load resize', () => {
    (function carousel() {
        let $carousel = $('#carousel');
        if ($carousel.length) {
            $carousel.fullpage({
                navigation: false,
            })
        }
    })();

    (function error() {
        let $error = $('.error');
        $(window).height() <= $(window).width() ?
            $error.addClass('active') :
            $error.removeClass('active');
    })();

    (function menu() {
        let $menu = $('.menu');
        $('.header-menu').on('click', () => {
            $menu.hasClass('active') ?
                $menu.removeClass('active') :
                $menu.addClass('active')
        });
    })();

    (function dots() {
        $(".subscription-excerpt").dotdotdot({
            // height: 126,
            fallbackToLetter: true,
            watch: true,
        });
    })();
});