var header = document.getElementById("buttonsDiv");
var btns = header.getElementsByClassName("nav_link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active_twoо");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active_twoо", "");
  }
  this.className += " active_twoо";
  });
}
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// 
$(document).ready(function(){
  $('span.day').html(function(){
    var date = new Date();
    return (date.getDate());
  });
  $('span.month').html(function(){
    var date = new Date();
    var month = ["января","февраля","марта","фпрель","мая","июня","июля","фвгуста","сентября","октября","ноября","декабря"][date.getMonth()];
    return month;
  });
});