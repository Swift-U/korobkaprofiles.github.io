var header = document.getElementById("buttonsDiv");
var btns = header.getElementsByClassName("nav_link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active_twoo");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active_twoo", "");
  }
  this.className += " active_twoo";
  });
}
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}