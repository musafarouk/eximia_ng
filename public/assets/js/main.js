var navigation = $('#nav-main').okayNav();
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
$('a[href^="#"]').click(function () {
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);

    return false;
});
var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);

    return false;
});