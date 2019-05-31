function selectQuote(){
  var randomNumber=Math.floor(Math.random()*arguments[0].length);
document.getElementById("quote").innerHTML = arguments[0][randomNumber];
  document.getElementById("source").innerHTML = arguments[1][randomNumber];
};
var dertaArr=["1. Географическое, физико-географическое положение."];
  var dertaSrc=["Red Dead Redemption"];

var famousArr=["2.  Экономическая география. Геополитическое положение России."];
  var famousSrc =["Marilyn Monroe"];

var moviesArr=["3.  Разница во времени часовых поясов."];
  var moviesSrc=["Yoda, Star Wars","Love Story"];

var a4Arr=["4.  Моря России. Природа, хозяйственное значение."];
 var a4Src=["J.R.R. Tolkien, "];

 var a5Arr=["5. Заселение Русской Равнины."];
 var a5Src=['<p>Факторы рельефообразования<br>Рельеф формируется в результате <br>взаимодействия внутренних (эндогенных) и внешних (экзогенных) сил. Эндогенные и экзогенные процессы рельефообразования действуют постоянно. При этом эндогенные процессы в основном создают главные черты рельефа, а экзогенные пытаются выровнять рельеф.<br><br>Основными источниками энергии при рельефообразовании являются:<br><br>Внутренняя энергия Земли;<br><br>Энергия Солнца;<br><br>Сила тяжести<br><br>Влияние космоса.<br><br>Источником энергии эндогенных процессов является тепловая энергия Земли, связанная с процессами, происходящими в мантии (радиоактивный распад). За счет эндогенных сил произошло выделение земной коры из мантии с образованием двух ее типов: континентальной и океанической.<br><br>Эндогенные силы вызывают: движения литосферы, образование складок и разломов, землетрясения и вулканизм. Все эти движения отражаются в рельефе и приводят к образованию гор и прогибов земной коры.</p>'];

 var a6Arr=["6. Рельеф. Факторы рельефообразования."];
 var a6Src=["J.R.R. Tolkien, "];

 var a7Arr=["7. Значение рельефа в хозяйстве."];
 var a7Src=["J.R.R. Tolkien, "];

 var a8Arr=["8. Климат России и его особенности."];
 var a8Src=["J.R.R. Tolkien, "];

 var a9Arr=["9. Типы климатов ."];
 var a9Src=["J.R.R. Tolkien, "];

 var a10Arr=["10. Водные ресурсы России ."];
 var a10Src=["J.R.R. Tolkien, "];

 var a11Arr=["11. Почвенные ресурсы России."];
 var a11Src=["J.R.R. Tolkien, "];

 var a12Arr=["12. Минерально-сырьевые ресурсы России."];
 var a12Src=["J.R.R. Tolkien, "];

 var a13Arr=["13. Растительность России ."];
 var a13Src=["J.R.R. Tolkien, "];

 var a14Arr=["14. Животный мир России."];
 var a14Src=["J.R.R. Tolkien, "];

 var a15Arr=["15. Природно-территориальные комплексы России ."];
 var a15Src=["J.R.R. Tolkien, "];

 var a16Arr=["16. Природные зоны России. Зоны тундры, тайги ."];
 var a16Src=["J.R.R. Tolkien, "];

 var a17Arr=["17. Зоны лесостепной, степной и пустынь ."];
 var a17Src=["J.R.R. Tolkien, "];

 var a18Arr=["18. Природные районы России. Восточно-европейская равнина ."];
 var a18Src=["J.R.R. Tolkien, "];

 var a19Arr=["19. Большой Кавказ, Урал."];
 var a19Src=["J.R.R. Tolkien, "];

 var a20Arr=["20. Западная Сибирь ."];
 var a20Src=["J.R.R. Tolkien, "];

 var a21Arr=["21. Восточная Сибирь ."];
 var a21Src=["J.R.R. Tolkien, "];

 var a22Arr=["22. Дальний Восток."];
 var a22Src=["J.R.R. Tolkien, "];

 var a23Arr=["23. Горы Юга Сибири. ."];
 var a23Src=["J.R.R. Tolkien, "];

 var a24Arr=["24. Предмет, методы исследования социально-экономической географии ."];
 var a24Src=["J.R.R. Tolkien, "];

 var a25Arr=["25. Экономическое районирование ."];
 var a25Src=["J.R.R. Tolkien, "];

 var a26Arr=["26. История становления социально-экономической географии. Вклад крупнейших ученых."];
 var a26Src=["J.R.R. Tolkien, "];

 var a27Arr=["27. Экономическое районирование."];
 var a27Src=["J.R.R. Tolkien, "];

 var a28Arr=["28. Значение и принципы экономического районирование ."];
 var a28Src=["J.R.R. Tolkien, "];

 var a29Arr=["29. Экономические районы России."];
 var a29Src=["J.R.R. Tolkien, "];

 var a30Arr=["30. Положение России в мире: пространственные и экономические изменения."];
 var a30Src=["J.R.R. Tolkien, "];

 var a31Arr=["31. Роль России в мировых ресурсах, численности населения и мировой экономике."];
 var a31Src=["J.R.R. Tolkien, "];

 var a32Arr=["32. Особенности заселения и хозяйственного освоения России ."];
 var a32Src=["J.R.R. Tolkien, "];

 var a33Arr=["33. Численность и воспроизводство России ."];
 var a33Src=["J.R.R. Tolkien, "];

 var a34Arr=["34. Размещение населения ."];
 var a34Src=["J.R.R. Tolkien, "];

 var a35Arr=["35. Трудовые ресурсы, занятость ."];
 var a35Src=["J.R.R. Tolkien, "];

 var a36Arr=["36. Топливно-энергетические комплексы ."];
 var a36Src=["J.R.R. Tolkien, "];

 var a37Arr=["37. Металлургический комплекс."];
 var a37Src=["J.R.R. Tolkien, "];

 var a38Arr=["38. Машиностроительный комплекс."];
 var a38Src=["J.R.R. Tolkien, "];

 var a39Arr=["39. Химический комплекс ."];
 var a39Src=["J.R.R. Tolkien, "];

 var a40Arr=["40. Лесопромышленный комплекс."];
 var a40Src=["J.R.R. Tolkien, "];

 var a41Arr=["41. Агропромышленный ."];
 var a41Src=["J.R.R. Tolkien, "];

  var a42Arr=["42.  Внешнеэкономические связи России."];
 var a42Src=["J.R.R. Tolkien, "];

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
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}