 <?php
$to = "ohackru@gmail.com"; // емайл получателя данных из формы
$tema = "Форма обратной связи Helix"; // тема полученного емайла
$message = "Ваше имя: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
$message .= "E-mail: ".$_POST['email']."<br>"; //полученное из формы name=email
$message .= "Номер телефона: ".$_POST['phone']."<br>"; //полученное из формы name=phone
$message .= "Сообщение: ".$_POST['message']."<br>"; //полученное из формы name=message
$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
?>


<?php

$name = $_POST['name'];
$email = $_POST['email'];

$message = $_POST['message'];

$token = "5222398819:AAGMY4Ri3ky_SSWl6RZ49bTnA1YYVS6zDnk";
$chat_id = "+ATFm6FfSCi0xM2Uy";
$arr = array(
  'Имя пользователя: ' => $name,
  'Email: ' => $email,

  'Сообщение: ' => $message
);
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>



<?php
  header("Location: https://charmua.com/");
  exit;
?>