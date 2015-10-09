$(document).ready(function() {
	$(".navigation").addClass("mobile");
	$(".mobile").css('display','none');
    $(".icon").click(function() {
    	$(".navigation").toggle();
    });
});