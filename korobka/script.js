
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
document.querySelector("#button4").addEventListener("click",showImagesAlbum(myPicturesArray4))
document.querySelector("#button5").addEventListener("click",showImagesAlbum(myPicturesArray5));
}function showImagesAlbum(i){return function(){console.
log("invoked by showImages");let e=document.querySelector("#albumDiv");e.innerHTML="",i.forEach((i,o,a)=>{let t=document.createElement("img");t.src=i.thumbnailUrl,t.alt=i.title,t.title=i.title,t.id=i.id,t.addEventListener("click",showFullImage(i)),t.classList.add("picHold"),e.append(t)}),showFullImage(i[0])()}}function showFullImage(i){return function(){let e=document.querySelector("#fullImg");e.src=i.url,e.classList.add("fullImgClass")}}window.onload=function(){addListeners(),showImagesAlbum(myPicturesArray1)()};
class PicHolder{constructor(i,e,o,a,t){this.albumId=i,this.id=e,this.title=o,this.url=a,this.thumbnailUrl=t}}let
myPicturesArray1=[],myPicturesArray2=[], myPicturesArray3=[],myPicturesArray4=[],myPicturesArray5=[];
myPicturesArray1[0]=new PicHolder(1,2,"1-0","https://mir-s3-cdn-cf.behance.net/project_modules/1400/8227a279600985.5cc85d14590d8.png "," https://mir-s3-cdn-cf.behance.net/project_modules/1400/8227a279600985.5cc85d14590d8.png"),
myPicturesArray1[1]=new PicHolder(1,1,"1-1"," https://mir-s3-cdn-cf.behance.net/project_modules/1400/f4f3ae79600985.5cc85d1457ec0.jpg"," https://mir-s3-cdn-cf.behance.net/project_modules/1400/f4f3ae79600985.5cc85d1457ec0.jpg"),
myPicturesArray1[2]=new PicHolder(1,3,"1-2","https://mir-s3-cdn-cf.behance.net/project_modules/1400/8227a279600985.5cc85d14590d8.png "," https://mir-s3-cdn-cf.behance.net/project_modules/1400/8227a279600985.5cc85d14590d8.png"),
myPicturesArray1[3]=new PicHolder(1,4,"1-3"," https://mir-s3-cdn-cf.behance.net/project_modules/1400/f4f3ae79600985.5cc85d1457ec0.jpg"," https://mir-s3-cdn-cf.behance.net/project_modules/1400/f4f3ae79600985.5cc85d1457ec0.jpg"),
myPicturesArray1[4]=new PicHolder(1,5,"1-4","https://mir-s3-cdn-cf.behance.net/project_modules/1400/8227a279600985.5cc85d14590d8.png ","https://mir-s3-cdn-cf.behance.net/project_modules/1400/8227a279600985.5cc85d14590d8.png "),
myPicturesArray1[5]=new PicHolder(1,6,"1-5"," https://mir-s3-cdn-cf.behance.net/project_modules/1400/f4f3ae79600985.5cc85d1457ec0.jpg","https://mir-s3-cdn-cf.behance.net/project_modules/1400/f4f3ae79600985.5cc85d1457ec0.jpg "),
myPicturesArray2[0]=new PicHolder(1,1,'2-0)'," "," "),
myPicturesArray2[1]=new PicHolder(1,2,"2-1"," "," "),
myPicturesArray2[2]=new PicHolder(1,3,"2-2"," "," "),
myPicturesArray2[3]=new PicHolder(1,3,"2-3"," "," "),
myPicturesArray2[4]=new PicHolder(1,5,"2-4"," "," "),
myPicturesArray2[5]=new PicHolder(1,6,"2-5"," "," "),
myPicturesArray3[0]=new PicHolder(1,1,"3-0"," "," "),
myPicturesArray3[1]=new PicHolder(1,2,"3-1"," "," "),
myPicturesArray3[2]=new PicHolder(1,3,"3-2"," "," "),
myPicturesArray3[3]=new PicHolder(1,4,"3-3"," "," "),
myPicturesArray3[4]=new PicHolder(1,5,'"3-4'," "," "),
myPicturesArray3[5]=new PicHolder(1,6,"3-5","",""),
myPicturesArray4[0]=new PicHolder(1,2,"4-0"," "," "),
myPicturesArray4[1]=new PicHolder(1,1,"4-1","",""),
myPicturesArray4[2]=new PicHolder(1,3,"4-2"," "," "),
myPicturesArray4[3]=new PicHolder(1,4,"4-3"," "," "),
myPicturesArray4[5]=new PicHolder(1,6,"4-5"," "," "),
myPicturesArray4[4]=new PicHolder(1,5,"4-4"," "," ")
myPicturesArray5[0]=new PicHolder(1,2,"5-0","https://mir-s3-cdn-cf.behance.net/project_modules/1400/f4f3ae79600985.5cc85d1457ec0.jpg","https://mir-s3-cdn-cf.behance.net/project_modules/1400/f4f3ae79600985.5cc85d1457ec0.jpg"),
myPicturesArray5[1]=new PicHolder(1,1,"5-1","https://mir-s3-cdn-cf.behance.net/project_modules/1400/f4f3ae79600985.5cc85d1457ec0.jpg","https://mir-s3-cdn-cf.behance.net/project_modules/1400/f4f3ae79600985.5cc85d1457ec0.jpg"),
myPicturesArray5[2]=new PicHolder(1,3,"5-2","https://mir-s3-cdn-cf.behance.net/project_modules/1400/8227a279600985.5cc85d14590d8.png","https://mir-s3-cdn-cf.behance.net/project_modules/1400/8227a279600985.5cc85d14590d8.png"),
myPicturesArray5[3]=new PicHolder(1,4,"5-3","https://mir-s3-cdn-cf.behance.net/project_modules/1400/f4f3ae79600985.5cc85d1457ec0.jpg","https://mir-s3-cdn-cf.behance.net/project_modules/1400/f4f3ae79600985.5cc85d1457ec0.jpg"),
myPicturesArray5[4]=new PicHolder(1,5,"5-4","https://mir-s3-cdn-cf.behance.net/project_modules/1400/f8c21479600985.5cc85d1455a67.png","https://mir-s3-cdn-cf.behance.net/project_modules/1400/f8c21479600985.5cc85d1455a67.png"),
myPicturesArray5[5]=new PicHolder(1,6,"5-5","https://mir-s3-cdn-cf.behance.net/project_modules/1400/8227a279600985.5cc85d14590d8.png","https://mir-s3-cdn-cf.behance.net/project_modules/1400/8227a279600985.5cc85d14590d8.png");


  // 
  function selectQuote(){
  var randomNumber=Math.floor(Math.random()*arguments[0].length);
document.getElementById("quote").innerHTML = arguments[0][randomNumber];
  document.getElementById("source").innerHTML = arguments[1][randomNumber];
};
var dertaArr=[`
<ul>
<li class="nav_link"><a href="#" class="nav_link">Лендинг</a></li>
<li class="nav_link"><a href="#" class="nav_link">Сайт под ключ</a></li>
<li class="nav_link"><a href="#" class="nav_link">Сайт визитка</a></li>
<li class="nav_link"><a href="#" class="nav_link">Корпаративный сайт</a></li>
<li class="nav_link"><a href="#" class="nav_link">Готовые решения</a></li>
</ul>
`];
  var dertaSrc=[""];
var famousArr=[`
<ul>
<li class="nav_link"><a href="#" class="nav_link">Дизайн сайта</a></li>
<li class="nav_link"><a href="#" class="nav_link">Логотип</a></li>
<li class="nav_link"><a href="#" class="nav_link">Дизайн визитки</a></li>
<li class="nav_link"><a href="#" class="nav_link">Банеры</a></li>
<li class="nav_link"><a href="#" class="nav_link">Иной дизайн</a></li>
</ul>
`];
  var famousSrc =[""];
var moviesArr=[`
<ul>
<li class="nav_link"><a href="#" class="nav_link">Настрока SEO</a></li>
<li class="nav_link"><a href="#" class="nav_link">Link 2</a></li>
<li class="nav_link"><a href="#" class="nav_link">Link 3</a></li>
</ul>
`];
  var moviesSrc=[""];
var famousArr=[`
<ul>
<li class="nav_link"><a href="#" class="nav_link">Link 1</a></li>
<li class="nav_link"><a href="#" class="nav_link">Link 2</a></li>
<li class="nav_link"><a href="#" class="nav_link">Link 3</a></li>
</ul>
`];
 var booksSrc=[""];

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






// 


