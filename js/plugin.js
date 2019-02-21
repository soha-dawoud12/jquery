$(document).ready(function(){


$("button").click(function(){


    $("div.result").text($("input").val());
    $("a").attr({
      "href":"http://www.facebook.com"
    });
    $("input.in2").val($("a").attr("href"));
});
 $("p").prepend("all");

  });
