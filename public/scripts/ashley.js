//fullpage
var slideTimeout;
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['top', 'about', 'work', 'contact'],
        controlArrows: false,
        scrollingSpeed: 800,
        easingcss3: 'ease',
        afterRender: function() {
            // $.fn.fullpage.setScrollingSpeed(1600);
            setInterval(function() {
                $.fn.fullpage.moveSlideRight();
            }, 7500);
        }
    });
});
//links
$("#viewProjects").click(function(){
    window.location.href = "/projects.html";
});

$(".about").click(function() {
    console.log("about clicked");
    $.fn.fullpage.moveTo(2);
});
$(".work").click(function() {
    console.log("work clicked");
    $.fn.fullpage.moveTo(3);
});
$(".contact").click(function() {
    console.log("contact clicked");
    $.fn.fullpage.moveTo(4);
});

//flowtype
$('.aboutText').flowtype({
    minFont: 8,
    maxFont: 40,
});

//check for webp support
Modernizr.on('webp', function(result) {
    if (result == true) {
        console.log("Webp supported");
        $("#ashley").attr("src", "https://rawgithub.com/p1ll0wf0rtress/A-Portfolio/master/public/img/graphics/ashley.webp");
        $("#slide1").css({ "background-image": "url('https://rawgithub.com/p1ll0wf0rtress/A-Portfolio/master/public/img/renders/livingroom.webp')" });
        $("#slide2").css({ "background-image": "url('https://rawgithub.com/p1ll0wf0rtress/A-Portfolio/master/public/img/renders/courtYard.webp')" });
        $("#slide3").css({ "background-image": "url('https://rawgithub.com/p1ll0wf0rtress/A-Portfolio/master/public/img/renders/bar.webp')" });
        $("#slide4").css({ "background-image": "url('https://rawgithub.com/p1ll0wf0rtress/A-Portfolio/master/public/img/renders/window.webp')" });
    } else if (result == false) {
        $("#firstView").css({ "background-image": "url('https://rawgithub.com/p1ll0wf0rtress/A-Portfolio/master/public/img/renders/streetWindow.jpg')" });
    } else {
        alert("everything's broken!");
    }
});
