
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
myPicturesArray1[0]=new PicHolder(1,2,"1-0"," Img/portfolio/Caviar/Caviar.jpg"," Img/portfolio/Caviar/Caviar.jpg"),
myPicturesArray1[1]=new PicHolder(1,1,"1-1"," Img/portfolio/Caviar/Caviar.jpg"," Img/portfolio/Caviar/Caviar.jpg"),
myPicturesArray1[2]=new PicHolder(1,3,"1-2","Img/portfolio/Caviar/Caviar.jpg"," Img/portfolio/Caviar/Caviar.jpg"),
myPicturesArray1[3]=new PicHolder(1,4,"1-3"," Img/portfolio/Caviar/Caviar.jpg","Img/portfolio/Caviar/Caviar.jpg"),
myPicturesArray1[4]=new PicHolder(1,5,"1-4","Img/portfolio/Caviar/Caviar.jpg","Img/portfolio/Caviar/Caviar.jpg "),
myPicturesArray1[5]=new PicHolder(1,6,"1-5"," Img/portfolio/Caviar/Caviar.jpg","Img/portfolio/Caviar/Caviar.jpg"),
myPicturesArray2[0]=new PicHolder(1,1,'2-0)',"img/portfolio/Aroma/aroma.jpg"," img/portfolio/Aroma/aroma.jpg"),
myPicturesArray2[1]=new PicHolder(1,2,"2-1","img/portfolio/Aroma/aroma.jpg "," img/portfolio/Aroma/aroma.jpg"),
myPicturesArray2[2]=new PicHolder(1,3,"2-2"," img/portfolio/Aroma/aroma.jpg"," img/portfolio/Aroma/aroma.jpg"),
myPicturesArray2[3]=new PicHolder(1,3,"2-3"," img/portfolio/Aroma/aroma.jpg"," img/portfolio/Aroma/aroma.jpg"),
myPicturesArray2[4]=new PicHolder(1,5,"2-4"," img/portfolio/Aroma/aroma.jpg"," img/portfolio/Aroma/aroma.jpg"),
myPicturesArray2[5]=new PicHolder(1,6,"2-5","img/portfolio/Aroma/aroma.jpg "," img/portfolio/Aroma/aroma.jpg"),
myPicturesArray3[0]=new PicHolder(1,1,"3-0","img/portfolio/MeetUp/MeetUp.jpg"," img/portfolio/MeetUp/MeetUp.jpg"),
myPicturesArray3[1]=new PicHolder(1,2,"3-1","img/portfolio/MeetUp/MeetUp.jpg ","img/portfolio/MeetUp/MeetUp.jpg "),
myPicturesArray3[2]=new PicHolder(1,3,"3-2","img/portfolio/MeetUp/MeetUp.jpg ","img/portfolio/MeetUp/MeetUp.jpg "),
myPicturesArray3[3]=new PicHolder(1,4,"3-3"," img/portfolio/MeetUp/MeetUp.jpg","img/portfolio/MeetUp/MeetUp.jpg "),
myPicturesArray3[4]=new PicHolder(1,5,'"3-4',"img/portfolio/MeetUp/MeetUp.jpg "," img/portfolio/MeetUp/MeetUp.jpg"),
myPicturesArray3[5]=new PicHolder(1,6,"3-5","img/portfolio/MeetUp/MeetUp.jpg","img/portfolio/MeetUp/MeetUp.jpg"),
// myPicturesArray4[0]=new PicHolder(1,2,"4-0"," "," "),
// myPicturesArray4[1]=new PicHolder(1,1,"4-1","",""),
// myPicturesArray4[2]=new PicHolder(1,3,"4-2"," "," "),
// myPicturesArray4[3]=new PicHolder(1,4,"4-3"," "," "),
// myPicturesArray4[5]=new PicHolder(1,6,"4-5"," "," "),
// myPicturesArray4[4]=new PicHolder(1,5,"4-4"," "," ")
myPicturesArray5[0]=new PicHolder(1,2,"5-0","img/portfolio/Porto/Porto.jpg","img/portfolio/Porto/Porto.jpg"),
myPicturesArray5[1]=new PicHolder(1,1,"5-1","img/portfolio/Porto/Porto.jpg","img/portfolio/Porto/Porto.jpg"),
myPicturesArray5[2]=new PicHolder(1,3,"5-2","img/portfolio/Porto/Porto.jpg","img/portfolio/Porto/Porto.jpg"),
myPicturesArray5[3]=new PicHolder(1,4,"5-3","img/portfolio/Porto/Porto.jpg","img/portfolio/Porto/Porto.jpg"),
myPicturesArray5[4]=new PicHolder(1,5,"5-4","img/portfolio/Porto/Porto.jpg","img/portfolio/Porto/Porto.jpg"),
myPicturesArray5[5]=new PicHolder(1,6,"5-5","img/portfolio/Porto/Porto.jpg","img/portfolio/Porto/Porto.jpg");


var header = document.getElementById("buttonsDiv");
var btns = header.getElementsByClassName("albumBotton");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activee");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace("activee", "");
  }
  this.className += "activee";
  });

}






// 



