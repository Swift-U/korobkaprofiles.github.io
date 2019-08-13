var header = document.getElementById("buttonsDiv");
var btns = header.getElementsByClassName("nav_link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active_two");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active_two", "");
  }
  this.className += " active_two";
  });
}