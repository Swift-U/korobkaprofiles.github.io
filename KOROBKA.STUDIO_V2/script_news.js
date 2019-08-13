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