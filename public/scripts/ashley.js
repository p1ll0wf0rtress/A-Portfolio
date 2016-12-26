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
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("case1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    console.log("clicked");
    modal.style.display = "block";
    $.fn.fullpage.controlArrows == false;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
