<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['text'];

$token = "5222398819:AAGMY4Ri3ky_SSWl6RZ49bTnA1YYVS6zDnk";
$chat_id = "217498334";

$arr = [
  'Имя пользователя:' => $name,
  'Email:' => $email,
  'Сообщение:' => $message
];


foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");