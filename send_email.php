<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $phone = htmlspecialchars(trim($_POST["phone"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    $to = "sfameitteam@gmail.com";
    $subject = "New Enquiry from Website";
    $body = "You have received a new enquiry.\n\n".
            "Name: $name\n".
            "Email: $email\n".
            "Phone: $phone\n".
            "Message:\n$message";
    $headers = "From: info@sfarettech.com.ng"; // Update with your domain
    "Reply-To: $email\r\n" .
    "X-Mailer: PHP/" . phpversion()

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your enquiry has been sent.";
    } else {
        echo "Oops! Something went wrong, please try again.";
    }
} else {
    echo "Invalid request method.";
}
?>
