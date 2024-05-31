<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $countryCode = $_POST['countryCode'];
    $phoneNumber = $_POST['phoneNumber'];
    $country = $_POST['country'];
    $address = $_POST['address'];
    $state = $_POST['state'];
    $startDate = $_POST['startDate'];
    $endDate = $_POST['endDate'];
    $adults = $_POST['adults'];
    $children = $_POST['children'];
    $messageContent = $_POST['message'];

    // Create a new PHPMailer instance
    $mail = new PHPMailer;

    // SMTP configuration
    $mail->isSMTP();
    $mail->Host = 'rbx107.truehost.cloud';
    $mail->SMTPAuth = true;
    $mail->Username = 'empowered360@qwixai.com';
    $mail->Password = 'Hassanku190$';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Construct email message
    $message = "New Booking Request:\n\n";
    $message .= "Name: " . $firstName . " " . $lastName . "\n";
    $message .= "Email: " . $email . "\n";
    $message .= "Phone Number: " . $countryCode . " " . $phoneNumber . "\n";
    $message .= "Country: " . $country . "\n";
    $message .= "Address: " . $address . "\n";
    $message .= "State / Province / Region: " . $state . "\n";
    $message .= "Start Date: " . $startDate . "\n";
    $message .= "End Date: " . $endDate . "\n";
    $message .= "Number of Adults: " . $adults . "\n";
    $message .= "Number of Children: " . $children . "\n";
    $message .= "Message: " . $messageContent . "\n\n";

    // Set email content
    $mail->setFrom('empowered360@qwixai.com', 'Empowered 360');
    $mail->addAddress('ramoshassan42@gmail.com'); // Replace with your email address
    $mail->Subject = "New Booking Request";
    $mail->Body = $message;

    // Send email
    if ($mail->send()) {
        echo 'Message has been sent successfully!';
    } else {
        echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
    }
}
?>
