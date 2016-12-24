$(document).ready(function() {
    $('#fullpage').fullpage();
});

$('.aboutText').flowtype({
    minFont: 16,
    maxFont: 40
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

function formValidator(name, email, desc) {
    name = $("#name"),
        email = $("#email"),
        desc = $("#description");
    if (name || email || desc == "") {
        error += "Please fill in the text element.\n";
    } else {

    }
}
//image fallbacks
Modernizr.on('webp', function(result) {
    if (result == true) {
        console.log("Webp supported");
    } else if (result == false) {
        $("#firstView").css({ "background-image": "url('img/renders/streetWindow.jpg')" });
    } else {
        alert("everything's broken!");
    }
});
