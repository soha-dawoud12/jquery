$(document).ready(function(){
$("div").addClass("soha new").removeClass("new");
$("p:first").addClass("fuck");

var d=$(document).width();
console.log(d);
});
$(document).ready(function(){
  $("button").click(function(){
    console.log($("div").css("color"));
    $("input").val($("div").css("color"));
    $("p").css({"background":"#080","color":" #fff"});

  });





});

$(".test").click(function(){
  $(this).width("+=" + 20);
  $(this).text(  $(this).width());
  $(this).css({"background":"#00F","color":" #fff"});




});
