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