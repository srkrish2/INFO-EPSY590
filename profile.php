<?php
echo "HELLO";
// if(array_key_exists('happiness',$_GET) && !empty($_SESSION['happiness'])) {
//   echo "here";
//   $happiness = $_GET['happiness'];
//   $aquaintance = $_GET['aquaintance'];
//   $friends = $_GET['friends'];
//   $stress = $_GET['stress'];
//   $grades = $_GET['grades'];
//   $money= $_GET['money'];
// }
// else{
//   echo "error";
// }

//   echo $_GET['happiness'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hobo Simulator (PC)</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">


      <link rel="stylesheet" href="css/profile_style.css">


</head>

<body>
  <!-- <div id="game">
    <button id="back" onclick="send_main()"> Back </button>

  </div> -->

  <form name="status" id="status" action="main_page.html" method="post">
    <input type="hidden" value="" name="happiness" id="happiness" />
    <input type="hidden" value="" name="aquaintance" id="aquaintance" />
    <input type="hidden" value="" name="friends" id="friends" />
    <input type="hidden" value="" name="stress" id="stress" />
    <input type="hidden" value="" name="grades" id="grades" />
    <input type="hidden" value="" name="money" id="money" />
  </form>

  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

      <script src="js/profile.js"></script>

</body>
</html>
