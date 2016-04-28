<?php

$post = (!empty($_POST)) ? true : false;
if($post) {
  $tel = $_POST['tel'];
  $name = $_POST['name'];
  $error = '';
  if(!$name) {$error .= 'Укажите свое имя. ';}
  if(!$tel) {$error .= 'Укажите ваш телефон. ';}
  if(!$error) {
    $address = "saharock@list.ru";
    $mes = "Имя: ".$name."\n\nТелефон: ".$tel."\n\n";
    $sub =  '=?utf-8?B?' . base64_encode("клиент") . '?=';
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: site\r\n";
    $send = mail($address,$sub,$mes, $headers);

    if($send) {echo 'OK';}
  }
  else {echo '<div class="err">'.$error.'</div>';}
}
?>