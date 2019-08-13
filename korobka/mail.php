<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$budget = $_POST['budget'];
$country = $_POST['country'];
$comments = $_POST['comments'];
$gender_male = $_POST['gender_male'];
$gender_female = $_POST['gender_female'];
// 
$checkbox1 = $_POST['checkbox1'];
$checkbox2 = $_POST['checkbox2'];
$checkbox3 = $_POST['checkbox3'];
$checkbox4 = $_POST['checkbox4'];
$checkbox5 = $_POST['checkbox5'];
$checkbox6 = $_POST['checkbox6'];
$checkbox7 = $_POST['checkbox7'];
$checkbox8 = $_POST['checkbox8'];
// 



//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'smtp.korobka.studio@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'TYMqJp!rt&Q0'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('smtp.korobka.studio@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('rodion193993@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$email;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header(text(Спасибо));
}
?>