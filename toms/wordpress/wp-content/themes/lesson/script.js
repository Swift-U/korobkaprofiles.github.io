$(document).ready(function(){
 $('.header').height($(window).height());
})
$(document).ready(function(){
 $('#section_two_col_one').height($(window).height());
})



$("#form").submit(function (e) { // Устанавливаем событие отправки для формы с id=form
           e.preventDefault();
            var form_data = $(this).serialize(); // Собираем все данные из формы
            $.ajax({
                type: "POST", // Метод отправки
                url: "mail.php", // Путь до php файла отправителя
                data: form_data,
                success: function () {
                    // Код в этом блоке выполняется при успешной отправке сообщения
                    alert("Спасибо");//
                }
            });
  
        });