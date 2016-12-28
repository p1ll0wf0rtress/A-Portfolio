//fullpage
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['top', 'about', 'work', 'contact']
    });
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
    minFont: 16,
    maxFont: 40,
});

//check for webp support
Modernizr.on('webp', function(result) {
    if (result == true) {
        console.log("Webp supported");
        $("#ashley").attr("src", "img/graphics/ashley.webp");
        $("#slide1").css({ "background-image": "url('img/renders/livingroom.webp')" });
        $("#slide2").css({ "background-image": "url('img/renders/courtYard.webp')" });
        $("#slide3").css({ "background-image": "url('img/renders/bar.webp')" });
        $("#slide4").css({ "background-image": "url('img/renders/window.webp')" });
    } else if (result == false) {
        $("#firstView").css({ "background-image": "url('img/renders/streetWindow.jpg')" });
    } else {
        alert("everything's broken!");
    }
});

//// Get the modal
var modal1 = document.getElementById('modal1');
var modal2 = document.getElementById('modal2');
var modal3 = document.getElementById('modal3');
var modal4 = document.getElementById('modal4');
// Get the button that opens the modal
var btn1 = document.getElementById("case1");
var btn2 = document.getElementById("case2");
var btn3 = document.getElementById("case3");
var btn4 = document.getElementById("case4");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn1.onclick = function() {
    console.log("clicked");
    modal1.style.display = "block";
    $.fn.fullpage.controlArrows = false;
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal1.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    else if (event.target == modal2) {
        modal2.style.display = "none";
    }
    else if (event.target == modal3) {
        modal3.style.display = "none";
    }
    else if (event.target == modal4) {
        moda4.style.display = "none";
    }
}
