<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['first-name'];
    $lastName = $_POST['last-name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "dsnmurty1999@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission from $firstName $lastName";
    $body = "Name: $firstName $lastName\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?>
