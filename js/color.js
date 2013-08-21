$(document).ready(function() {
	var all = new Date();
	var code = "#" + $.md5((all.getDate().toString() + all.getMonth().toString() + all.getFullYear().toString())).substr(0,6);
	var rgb = tinycolor(code).toRgbString();
	var hsv = tinycolor(code).toHsvString();
	$("body").css('background-color', code);
	$(".hex").append(code);
	$(".rgb").append(rgb);
	$(".hsv").append(hsv);
	var rgb = tinycolor(code).toRgb();
	var col = (rgb.r + rgb.g + rgb.b) / 3;
	if(col <= 128) {
		$("body").css('color', '#FFF');
		$("#link").attr("class","light");
	} else {
		$("body").css('color', '#000');
		$("#link").attr("class","dark");
	}
});