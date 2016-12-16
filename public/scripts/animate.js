var rect, about;

function setRect() {
    if ($(".header").position().top == 0) {
        //do nothing
    } else rect = $(".header").position().top;
}

function setAbout() {
    if ($(".about").position().top == 0) {
        //do nothing
    } else about = $(".about").position().top;
}

function widthHeight() {
    $('.sidebar').css({ "height": $(".about").outerHeight() });
    $('.logo').css({ "width": $('.sidebar').width() })
}

$(document).ready(function() {
    setRect();
    setAbout();
    widthHeight();
});

$(window).resize(function() {
    setRect();
    setAbout();
    widthHeight();

});

$(window).scroll(function() {
    var sticky = $(".header"),
        scroll = $(window).scrollTop();

    if (scroll >= rect) sticky.addClass("fix-header");
    else {
        sticky.removeClass("fix-header");
    }
});

//sticky animations
$(window).scroll(function() {
    var sticky = $(".header"),
        scroll = $(window).scrollTop();

    if (scroll >= rect) sticky.addClass("fix-header");
    else sticky.removeClass("fix-header");
});
////sidebar
var y,
    aboutText = $('.about'),
    sidebar = $('.sidebar'),
    logo = $("#logo"),
    startPosition = aboutText.offset().top,
    stopPosition = $('#projects').offset().top - $(window).height();

//back to home
$(".name").click(function() {
    if ($(".header").hasClass("fix-header") == true) {
        $("html, body").animate({
            scrollTop: $("#firstView").offset().top
        }, 500);
    } else {}
});

//link scrolls
$("#about").click(function() {
    $("html, body").animate({
        scrollTop: $(".about").offset().top
    }, 500);
});

$("#work").click(function() {
    $("html, body").animate({
        scrollTop: $("#projects").offset().top
    }, 500);
});

$("#contact").click(function() {
    $("html, body").animate({
        scrollTop: $(".contact").offset().top
    }, 500);
});
