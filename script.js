$(document).ready(function() {
    changeTime(0);
    function getRandomSize(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }
  for (var i = 0; i < 25; i++) {
    var width = getRandomSize(200, 400);
    var height =  getRandomSize(200, 400);
    $('.photos').append('<img src="http://www.lorempixel.com/'+width+'/'+height+'/cats" alt="pretty kitty">');
  }
});

function changeTime(i) {
    $(".timeline").css("opacity", "0").css("z-index", "-1");
    $(".timeline:eq("+i+")").css("opacity", "1").css("z-index", "1");
    
    $(".photos").css("opacity", "0").css("z-index", "-10000");
    $(".photos:eq("+i+")").css("opacity", "1").css("z-index", "-1000");
    
}



