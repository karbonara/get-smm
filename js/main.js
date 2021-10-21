var isScrolling = false;

$(window).on("DOMMouseScroll mousewheel", function (e) {

    if (!isScrolling) {
        isScrolling = true;

        var delta = parseInt(e.originalEvent.wheelDelta || -e.originalEvent.detail);

        if (delta >= 0) {
            isScrolling = false;

            $('.hidden').removeClass('hidden');

        } else {

            if ($(window).scrollTop() > 1) {
                $('.scroll').addClass('hidden');
            }

            isScrolling = false;

        }
    }

});

jQuery(window).scroll(function () {
    var $sections = $('section');
    $sections.each(function (i, el) {
        var top = $(el).offset().top - 100;
        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if (scroll > top && scroll < bottom) {
            $('a.active').removeClass('active');
            $('a[href="#' + id + '"]').addClass('active');

        }
    })
});

$("fix").on("click", "a", function (event) {
    // исключаем стандартную реакцию браузера
    event.preventDefault();

    // получем идентификатор блока из атрибута href
    var id = $(this).attr('href'),

        // находим высоту, на которой расположен блок
        top = $(id).offset().top;

    // анимируем переход к блоку, время: 800 мс
    $('body,html').animate({ scrollTop: top }, 800);
});