$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['project1', 'project2'],
        controlArrows: false,
        scrollingSpeed: 800,
        easingcss3: 'ease',
        onLeave: function(index, nextIndex, direction) {
            var leavingSection = $(this);

            //after leaving section 2
            if (index == 1) {
                if (document.getElementById('modal1').style.display == "block") {
                    closeModal1();
                } else {};
            }
            else if (index == 2) {
                if (document.getElementById('modal2').style.display == "block") {
                    closeModal2();
                } else {};
            }
        }
    });
});

function openModal1() {
    document.getElementById('modal1').style.display = "block";
}

function openModal2() {
    document.getElementById('modal2').style.display = "block";
}

function closeModal1() {
    document.getElementById('modal1').style.display = "none";
}

function closeModal2() {
    document.getElementById('modal2').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("demo2");
    var captionText = document.getElementById("caption2");
    if (n > slides.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2 - 1].style.display = "block";
    dots[slideIndex2 - 1].className += " active";
    captionText.innerHTML = dots[slideIndex2 - 1].alt;
}
