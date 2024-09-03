<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form input
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

    // Check if email is valid
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // If email is valid, you can proceed with saving to a database, sending an email, etc.
        // For demonstration purposes, we'll assume a simple success scenario.
        
        // Redirect back to the referring page with a success message
        header("Location: " . $_SERVER["HTTP_REFERER"] . "?subscribed=success");
    } else {
        // If email is invalid, redirect back with an error message
        header("Location: " . $_SERVER["HTTP_REFERER"] . "?subscribed=error");
    }
} else {
    // If the request method is not POST, redirect to the homepage or handle the error as needed
    header("Location: ../html/home.html");
    exit();
}
?>
