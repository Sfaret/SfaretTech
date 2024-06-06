<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phonenumber = htmlspecialchars($_POST["phone number"]);
    $password = htmlspecialchars($_POST["password"]);
    // Email details
    $to = 'info@sfarettech.com.ng';
    $subject = 'New Sign-Up';
    $message = "Name: $name/nEmail: $email/nPhonenumber: $phnonemumber/nPassword $password";
    $headers = 'From: www.sfarettech.com.ng' . "/r/n" .
                'Reply-To: sfarettech.com.ng' . "/r/n" .
                'X-Mailer: PHP/' . phpversion();

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Sign-up successful!";
    } else { 
        echo "Error sending email.";
    } 
    // Save the data to a file (or you can insert it into a database)
    $file = fopen("signups.txt", "a");
    fwrite($file, "Name: $name, Email: $email, Phone Number: $phonenumber, Password: $password\n");
    fclose($file);

    echo "Sign-up successful!";
}
?>