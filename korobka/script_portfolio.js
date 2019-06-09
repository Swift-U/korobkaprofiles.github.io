var header = document.getElementById("btn-bar");
var btns = header.getElementsByClassName("btn-default");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active_one");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active_one", "");
  }
  this.className += " active_one";
  });
}



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
// 

// Open popup
$('.text').click(function() {
    $('.popup').css('opacity', 1);
    $('.overlay').css('opacity', 0.8);
    $('.popup').css('display', 'block');
    $('.overlay').css('display', 'block'); 
});
// close popup
$('.popup-close').click(function() {
    $('.popup').css('opacity', 0);
    $('.overlay').css('opacity', 0);
    setTimeout(function() {
        $('.popup').css('display', 'none');
        $('.overlay').css('display', 'none'); 
    }, 0);
    
});


// 
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}