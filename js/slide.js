$(document).ready(function() {
	var clicked = false;
	$("#link").click(function() {
		if(clicked == true) {
			$("#credits").animate({bottom: "-160px"}, 300);
			clicked = false
		} else {
			$("#credits").animate({bottom: "70px"}, 300);
			clicked = true
		}
	});
});