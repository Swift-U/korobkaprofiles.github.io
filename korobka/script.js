
var header = document.getElementById("buttonsDiv");
var btns = header.getElementsByClassName("albumBotton");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active_two");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active_two", "");
  }
  this.className += " active_two";
  });
}



function addListeners(){
document.querySelector("#button1").addEventListener("click",showImagesAlbum(myPicturesArray1))
document.querySelector("#button2").addEventListener("click",showImagesAlbum(myPicturesArray2))
document.querySelector("#button3").addEventListener("click",showImagesAlbum(myPicturesArray3))
// document.querySelector("#button4").addEventListener("click",showImagesAlbum(myPicturesArray4))
document.querySelector("#button5").addEventListener("click",showImagesAlbum(myPicturesArray5));
}function showImagesAlbum(i){return function(){console.
log("invoked by showImages");let e=document.querySelector("#albumDiv");e.innerHTML="",i.forEach((i,o,a)=>{let t=document.createElement("img");t.src=i.thumbnailUrl,t.alt=i.title,t.title=i.title,t.id=i.id,t.addEventListener("click",showFullImage(i)),t.classList.add("picHold"),e.append(t)}),showFullImage(i[0])()}}function showFullImage(i){return function(){let e=document.querySelector("#fullImg");e.src=i.url,e.classList.add("fullImgClass")}}window.onload=function(){addListeners(),showImagesAlbum(myPicturesArray1)()};
class PicHolder{constructor(i,e,o,a,t){this.albumId=i,this.id=e,this.title=o,this.url=a,this.thumbnailUrl=t}}let
myPicturesArray1=[],myPicturesArray2=[], myPicturesArray3=[],myPicturesArray4=[],myPicturesArray5=[];
myPicturesArray1[0]=new PicHolder(1,2,"1-0","Img/body/Caviar.jpg"," Img/body/Caviar.jpg"),
myPicturesArray1[1]=new PicHolder(1,1,"1-1"," Img/body/Caviar.jpg"," Img/body/Caviar.jpg"),
myPicturesArray1[2]=new PicHolder(1,3,"1-2","Img/body/Caviar.jpg"," Img/body/Caviar.jpg"),
myPicturesArray1[3]=new PicHolder(1,4,"1-3"," Img/body/Caviar.jpg","Img/body/Caviar.jpg"),
myPicturesArray1[4]=new PicHolder(1,5,"1-4","Img/body/Caviar.jpg","Img/body/Caviar.jpg "),
myPicturesArray1[5]=new PicHolder(1,6,"1-5"," Img/body/Caviar.jpg","Img/body/Caviar.jpg"),
myPicturesArray2[0]=new PicHolder(1,1,'2-0)'," Img/body/Arz.jpg"," Img/body/Arz.jpg"),
myPicturesArray2[1]=new PicHolder(1,2,"2-1","Img/body/Arz.jpg "," Img/body/Arz.jpg"),
myPicturesArray2[2]=new PicHolder(1,3,"2-2"," Img/body/Arz.jpg"," Img/body/Arz.jpg"),
myPicturesArray2[3]=new PicHolder(1,3,"2-3"," Img/body/Arz.jpg"," Img/body/Arz.jpg"),
myPicturesArray2[4]=new PicHolder(1,5,"2-4"," Img/body/Arz.jpg"," Img/body/Arz.jpg"),
myPicturesArray2[5]=new PicHolder(1,6,"2-5","Img/body/Arz.jpg "," Img/body/Arz.jpg"),
myPicturesArray3[0]=new PicHolder(1,1,"3-0"," Img/body/MeetUp.jpg"," Img/body/MeetUp.jpg"),
myPicturesArray3[1]=new PicHolder(1,2,"3-1","Img/body/MeetUp.jpg ","Img/body/MeetUp.jpg "),
myPicturesArray3[2]=new PicHolder(1,3,"3-2","Img/body/MeetUp.jpg ","Img/body/MeetUp.jpg "),
myPicturesArray3[3]=new PicHolder(1,4,"3-3"," Img/body/MeetUp.jpg","Img/body/MeetUp.jpg "),
myPicturesArray3[4]=new PicHolder(1,5,'"3-4',"Img/body/MeetUp.jpg "," Img/body/MeetUp.jpg"),
myPicturesArray3[5]=new PicHolder(1,6,"3-5","Img/body/MeetUp.jpg","Img/body/MeetUp.jpg"),
// myPicturesArray4[0]=new PicHolder(1,2,"4-0"," "," "),
// myPicturesArray4[1]=new PicHolder(1,1,"4-1","",""),
// myPicturesArray4[2]=new PicHolder(1,3,"4-2"," "," "),
// myPicturesArray4[3]=new PicHolder(1,4,"4-3"," "," "),
// myPicturesArray4[5]=new PicHolder(1,6,"4-5"," "," "),
// myPicturesArray4[4]=new PicHolder(1,5,"4-4"," "," ")
myPicturesArray5[0]=new PicHolder(1,2,"5-0","Img/body/Porto.jpg","Img/body/Porto.jpg"),
myPicturesArray5[1]=new PicHolder(1,1,"5-1","Img/body/Porto.jpg","Img/body/Porto.jpg"),
myPicturesArray5[2]=new PicHolder(1,3,"5-2","Img/body/Porto.jpg","Img/body/Porto.jpg"),
myPicturesArray5[3]=new PicHolder(1,4,"5-3","Img/body/Porto.jpg","Img/body/Porto.jpg"),
myPicturesArray5[4]=new PicHolder(1,5,"5-4","Img/body/Porto.jpg","Img/body/Porto.jpg"),
myPicturesArray5[5]=new PicHolder(1,6,"5-5","Img/body/Porto.jpg","Img/body/Porto.jpg");


  // 
  function selectQuote(){
  var randomNumber=Math.floor(Math.random()*arguments[0].length);
document.getElementById("quote").innerHTML = arguments[0][randomNumber];
  document.getElementById("source").innerHTML = arguments[1][randomNumber];
};
// Маркитинг
var dertaArr=[`
<ul>
<li class="nav_link"><a href="#" class="nav_link">Настрока рекламы</a></li>
<li class="nav_link"><a href="#" class="nav_link">Настрока SEO</a></li>
<li class="nav_link"><a href="#" class="nav_link">...</a></li>
<li class="nav_link"><a href="#" class="nav_link">...</a></li>
<li class="nav_link"><a href="#" class="nav_link">...</a></li>
</ul>
`];
  var dertaSrc=[""];
  // 
var famousArr=[`
<ul>
<li class="nav_link"><a href="#" class="nav_link">Дизайн сайта</a></li>
<li class="nav_link"><a href="#" class="nav_link">Логотип</a></li>
<li class="nav_link"><a href="#" class="nav_link">Дизайн визитки</a></li>
<li class="nav_link"><a href="#" class="nav_link">Банеры</a></li>
<li class="nav_link"><a href="#" class="nav_link">Иной дизайн</a></li>
</ul>
`];
// Дизайн
  var famousSrc =[""];
var moviesArr=[`
<ul>
<li class="nav_link"><a href="#" class="nav_link">Разработка логотипа</a></li>
<li class="nav_link"><a href="#" class="nav_link">Дизайн сайта</a></li>
<li class="nav_link"><a href="#" class="nav_link">Дизайн визитки</a></li>
</ul>
`];
// разработка
  var moviesSrc=[""];
var famousArr=[`
<ul>
<li class="nav_link"><a href="#" class="nav_link">Сайт под ключ</a></li>
<li class="nav_link"><a href="#" class="nav_link">Лендинг</a></li>
<li class="nav_link"><a href="#" class="nav_link">Магазин</a></li>
</ul>
`];
// Подержка
 var booksSrc=[""];
 var booksArr=[`
<ul>
<li class="nav_link"><a href="#" class="nav_link">Устранения неполоадок</a></li>
<li class="nav_link"><a href="#" class="nav_link">Модернизация сайта</a></li>
<li class="nav_link"><a href="#" class="nav_link">Оптимизация</a></li>
</ul>
`];

function tweetIt () {
  var phrase = document.getElementById('quote').innerText;
  var quotesrc = document.getElementById('source').innerText;
    ;  
  window.open(tweetUrl);
}



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



// box black

var autoplay = 5000;
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    watchSlidesProgress: true,
    autoplay: autoplay,
    onProgress: move
});
function move() {
    var elem = document.getElementById("progress"); 
    var width = 1;
    var autoplayTime = autoplay / 50 ;
    var id = setInterval(frame, autoplayTime);
    function frame() {
        if (width >= 50) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
console.log(swiper)

// dddd

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
    var month = ["Января","Февраля","Марта","Апрель","Мая","Июнь","Июля","Августа","Сентября","Октября","Ноября","Декабря"][date.getMonth()];
    return month;
  });
});








