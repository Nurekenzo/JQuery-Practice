function register() {
  var valuser = document.getElementById("user").value;
  var valpass = document.getElementById("pass").value;
  if (valuser == 0 || valpass == 0) {
    alert("No text entered");
    return false;
  }
  else {
    alert("Welcome");
    return true;
  }
}

$(document).ready(function() {
  $("#show").click(function() {
    if ($("#pass").attr("type") == "text") {
      $("#pass").attr("type", "password");
      $("#register").prop("disabled", true);
    } else {
      $("#pass").attr("type", "text");
      $("#register").prop("disabled", false);
    }
  });
});

$(document).ready(function(){
    $("#background").click(function(){
        $("body").css("background", "#b2ec5d");
    });
});

var max = 15;
$("textarea").keyup(function() {
  var len = max - $(this).val().length;
  $("#span").text(len);
});

$("#fade").click(function(){
  $("p").fadeTo('slow', 0.5);
  $("p").fadeTo('slow', 1);
});

$(document).ready(function(){
  $("#btn1").click(function(){
    $("#box").height(300);
    $("#box").width(300);
  });
});

$(document).ready(function(){
  $("#btn2").click(function(){
    $("#box").height(50);
    $("#box").width(50);
  });
});
