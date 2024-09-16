<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer-6.9.1.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('info@altas-landing.ru', 'Посадочная страница');
$mail->addAddress('alexocean.e.k@gmail.com');
$mail->Subject = 'Запрос с сайта';

$connectionType = $_POST['connectionType']

$body = '<h1>Здравствуйте! Пишу с посадочной страницы по коррекции атланта в Улан-Удэ</h1>';

if(trim(!empty($_POST['name']))){
    $body .= '<p>Name:' . $_POST['name'] . '</p>';
}
if(trim(!empty($_POST['email']))){
    $body .= '<p>E-mail:' . $_POST['email'] . '</p>';
}
if(trim(!empty($_POST['comment']))){
    $body .= '<p>Comment:' . $_POST['comment'] . '</p>';
}

$body .= '<p>Preferable connection type: ' . $connectionType;

$mail->Body = $body;

// sending
if (!$mail->send()) {
    $message = 'Error';
} else {
    $message ='Success';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);