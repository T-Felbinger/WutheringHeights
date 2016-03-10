$(document).ready(function () {
	changeTime(0);
	setImages();
});

function setImages() {
	for (var time = 0; time < $(".timeline").length; time++) {
		for (var a = 0; a < 3; a++) {
			for (var i = 1; i <= 8; i++) {

				$('.photos:eq(' + time + ')').append('<img src="' + pickImage(time, i) + '">');
			}
		}
	}
}

function changeTime(i) {
	$(".timeline").css("opacity", "0").css("z-index", "-1");
	$(".timeline:eq(" + i + ")").css("opacity", "1").css("z-index", "1");

	$(".photos").css("opacity", "0").css("z-index", "-10000");
	$(".photos:eq(" + i + ")").css("opacity", "1").css("z-index", "-1000");


}

var dates = ["1750", "1760", "1770", "1780", "1790", "1800"];

function pickImage(time, i) {
	return "Images/" + dates[time] + "s/img " + i + ".jpg";
}