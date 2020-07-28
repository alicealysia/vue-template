<?php
if (isset($_POST)) {
    $to = "sales@mitsignanddesign.com.au";
    $data = json_decode(file_get_contents('php://input'), true);
    $subject = $data['subject'];
    $message = $data['message'];
    $headers = "From: ".$data['email'];
    $success = mail($to, $subject, $message, $headers);
    if ($success) {
        echo "Success!";
    }
    else {
        echo "Fail";
    }
}
?>