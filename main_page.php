<?php
  session_start();
  if(isset($_POST["happiness"]) && !empty($_POST["happiness"])) {
    $happiness = $_POST['happiness'];
    $aquaintance = $_POST['aquaintance'];
    $friends = $_POST['friends'];
    $stress = $_POST['stress'];
    $grades = $_POST['grades'];
    $money= $_POST['money'];
    $time= $_POST['time'];
  }
  else{
    $happiness = 50;
    $aquaintance = 0;
    $friends = 0;
    $stress = 0;
    $grades = 0;
    $money=0;
    $time = 400;
  }
?>

<!DOCTYPE html>
<html >

<head>
  <meta charset="UTF-8">
  <title>Hobo Simulator (PC)</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">


      <link rel="stylesheet" href="css/style.css">


</head>

<body>
  <div id="game">

	<div class="sidebar blend">
    <div class="profile  button" onclick="send_main()"><p> Profile </p></div>
		<div class="study      button"><p> Study </p></div>
		<div class="social      button"><p>Social</p></div>
		<div class="fun   button"><p>Fun</p></div>
		<div class="work   button"><p>Work</p></div>
		<div class="leader      button"><p>Leadership</p></div>
    <div class="settings      button"><img src="http://i.imgur.com/AjRd8WQ.png"/></div>
	</div>

  <p hidden id='t'> <?php echo $time; ?></p>

	<div class="body blend">
		<div class="status-bar">
			<table class="status display">
        <tr>
  				<td class="happiness">
  					<div class="button progress">
  						<img src="images/icon-5.png">
              <div class="progress indicator" id='h'>
                <?php echo $happiness; ?>
  						</div>
  					</div>
  				</td>
  				<td class="stress">
  					<div class="button progress">
  						<img src="images/icon-2.png">
              <div class="progress indicator" id='s'>
                <?php echo $stress; ?>
  						</div>
  					</div>
  				</td>
  				<td class="aquaintances">
  					<div class="button progress">
  						<img src="images/icon-1.png">
              <div class="progress indicator" id='a'>
                <?php echo $aquaintance; ?>
  						</div>
  					</div>
  				</td>
  			</tr>
        <tr>
  				<td class="grades">
  					<div class="button progress">
  						<img src="images/icon-3.png">
              <div class="progress indicator" id='g'>
                <?php echo $grades; ?>
  						</div>
  					</div>
  				</td>
  				<td class="money">
  					<div class="button progress">
  						<img src="images/icon-6.png">
              <div class="progress indicator" id='m'>
                <?php echo $money; ?>
  						</div>
  					</div>
  				</td>
  				<td class="friends">
  					<div class="button progress">
  						<img src="images/icon-4.png">
              <div class="progress indicator" id='f'>
                <?php echo $friends; ?>
  						</div>
  					</div>
  				</td>
  			</tr>
      </table>
		</div>
		<div class="menus"><div class="wrapper">
			<div class="menu study hidden">
        <p class="action" onclick="update_status('1')" id = "1">Do Homework Alone</p>
        <p class="action" onclick="update_status('2')" id = "2">Do Homework With Friends</p>
        <p class="action" onclick="update_status('3')" id = "3">Talk to a Teacher</p>
        <p class="action" onclick="update_status('4')" id = "4">Get a Tutor</p>
        <p class="action" onclick="update_status('5')" id = "5">Tutor Somebody</p>
        <p class="action" onclick="update_status('6')" id = "6">Extra Credit</p>
			</div>
			<div class="menu social hidden">
				<h1>Eating</h1>
          <p class="action" onclick="update_status('7')" id = "7">Coffee with Friends</p>
          <p class="action" onclick="update_status('8')" id = "8">Lunch/Dinner with Friends</p>
				<h1>Adventure</h1>
          <p class="action" onclick="update_status('9')" id = "9">Go to the movies</p>
          <p class="action" onclick="update_status('10')" id = "10">Bungee Jumping</p>
          <p class="action" onclick="update_status('11')" id = "11">Sky Diving</p>
          <p class="action" onclick="update_status('12')" id = "12">Hiking</p>
				<h1>Social Media</h1>
          <p class="action" onclick="update_status('13')" id = "13">Facebook</p>
          <p class="action" onclick="update_status('14')" id = "14">Instagram</p>
          <p class="action" onclick="update_status('15')" id = "15">Twitter</p>
          <p class="action" onclick="update_status('16')" id = "16">Become an overnight Youtube Star</p>
        <h1>Party</h1>
          <p class="action" onclick="update_status('17')" id = "17">Play Board Games</p>
          <p class="action" onclick="update_status('18')" id = "18">Birthday Party</p>
          <p class="action" onclick="update_status('19')" id = "19">Lazer Tag</p>
        <h1>Shopping</h1>
          <p class="action" onclick="update_status('20')" id = "20">Buy a gift</p>
          <p class="action" onclick="update_status('21')" id = "21">Shopping for fun</p>
			</div>
			<div class="menu fun hidden">
				<h1>Sports</h1>
          <p class="action" onclick="update_status('22')" id = "22">Running</p>
          <p class="action" onclick="update_status('23')" id = "23">Basketball</p>
          <p class="action" onclick="update_status('24')" id = "24">Tennis</p>
          <p class="action" onclick="update_status('25')" id = "25">Football</p>
          <p class="action" onclick="update_status('26')" id = "26">Swimming</p>
				<h1>Student Clubs</h1>
          <p class="action" onclick="update_status('27')" id = "27">Robotics</p>
          <p class="action" onclick="update_status('28')" id = "28">Theatre</p>
          <p class="action" onclick="update_status('29')" id = "29">Model UN</p>
          <p class="action" onclick="update_status('30')" id = "30">Mock Trial</p>
        <h1>Independent Activities</h1>
          <p class="action" onclick="update_status('31')" id = "31">Study Magic</p>
          <p class="action" onclick="update_status('32')" id = "32">Read books</p>
          <p class="action" onclick="update_status('33')" id = "33">Learn a craft</p>
          <p class="action" onclick="update_status('34')" id = "34">Bake stuff</p>
        <h1>Volunteer</h1>
          <p class="action" onclick="update_status('35')" id = "35">At an animal shelter</p>
          <p class="action" onclick="update_status('36')" id = "36">At a hospital</p>
          <p class="action" onclick="update_status('37')" id = "37">To clean up a park/road</p>
			</div>
			<div class="menu work hidden">
        <h1>Work at Home</h1>
          <p class="action" onclick="update_status('38')" id = "38">Do your chores</p>
        <h1>Work at a Store</h1>
          <p class="action" onclick="update_status('39')" id = "39">Starbuck's Barista</p>
          <p class="action" onclick="update_status('40')" id = "40">Grocery Clerk</p>
          <p class="action" onclick="update_status('41')" id = "41">Janitor</p>
        <h1>As an entrepreneur/contractor</h1>
          <p class="action" onclick="update_status('42')" id = "42">Personal Shopper</p>
          <p class="action" onclick="update_status('43')" id = "43">Birthday Party Magician</p>
          <p class="action" onclick="update_status('44')" id = "44">Cleaning Attics</p>
          <p class="action" onclick="update_status('45')" id = "45">Babysitter</p>
          <p class="action" onclick="update_status('46')" id = "46">Mow Lawns</p>
          <p class="action" onclick="update_status('47')" id = "47">Set up a lemonade/baked goods stand</p>
			</div>
			<div class="menu leader hidden">
        <p class="action" onclick="update_status('48')" id = "48">Becaome a Teacher's Assistant for a class</p>
        <p class="action" onclick="update_status('49')" id = "49">Become treasurer of a club</p>
        <p class="action" onclick="update_status('50')" id = "50">Become president of a club</p>
			</div>
			<div class="menu settings hidden">
				<h1>Settings</h1>
				<p onclick="start_over()" id = "51">New Game</p>
			</div>

		</div></div>
	</div>

</div>

<form name="status" id="status" action="profile.php" method="post">
  <input type="hidden" value="" name="happiness"/>
  <input type="hidden" value="" name="aquaintance" />
  <input type="hidden" value="" name="friends" />
  <input type="hidden" value="" name="stress" />
  <input type="hidden" value="" name="grades" />
  <input type="hidden" value="" name="money" />
  <input type="hidden" value="" name="time" />
</form>

  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

  <script src="js/new_index.js"></script>


</body>
</html>
