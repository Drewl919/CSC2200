<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <h1> Contact Information Received (Get)</h1>
    <?php
       $cont = $_GET['contact'];
       $e = $_GET['emailAddr'];
       print "<br /> <span style='color:red'>";
       print " Contact:$cont email:$e ";
       print "</span>";
       ?>
       <br /> This is also a note after PHP
</body>
</html>