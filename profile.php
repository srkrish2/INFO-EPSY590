<?php
  $happiness = $_POST['happiness'];
  $aquaintance = $_POST['aquaintance'];
  $friends = $_POST['friends'];
  $stress = $_POST['stress'];
  $grades = $_POST['grades'];
  $money= $_POST['money'];
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Hobo Simulator (PC)</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"/>


      <link rel="stylesheet" href="css/profile_style.css"/>

          <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>

    <!-- D3.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js" charset="utf-8"></script>

</head>

<body>
  <!-- <div id="game"> -->
        <h1>Information</h1>
        <h2>Days till Graduation: 600 </h2>
      <p hidden id="h"> <?php echo $happiness; ?></p>
      <p hidden id="a"> <?php echo $aquaintance; ?></p>
      <p hidden id='g'> <?php echo $grades; ?></p>
      <p hidden id="s"> <?php echo $stress; ?></p>
      <p hidden id='m'> <?php echo $money; ?></p>
      <p hidden id='f'> <?php echo $friends; ?></p>
    <button id="back" onclick="send_main()"> Back </button>

  <div class="radarChart"></div>

    <script src="js/radar.js"></script> 
    <script>
      ////////////////////////////////////////////////////////////// 
      //////////////////////// Set-Up ////////////////////////////// 
      ////////////////////////////////////////////////////////////// 

      var margin = {top: 100, right: 100, bottom: 100, left: 100},
        width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
        height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
          
      ////////////////////////////////////////////////////////////// 
      ////////////////////////// Data ////////////////////////////// 
      ////////////////////////////////////////////////////////////// 

      var data = [
            [
            {axis:"Grades",value:.9},
            {axis:"Money",value:.7},
            {axis:"Friends",value:.6},
            {axis:"Aquaintances",value:.4},
            {axis:"Stress",value:.8},
            {axis:"Happiness",value:.1},     
            ]
          ];
      ////////////////////////////////////////////////////////////// 
      //////////////////// Draw the Chart ////////////////////////// 
      ////////////////////////////////////////////////////////////// 

      var color = d3.scale.ordinal().range(["#EDC951"]);
      // var color = "#EDC951";
        
      var radarChartOptions = {
        w: width,
        h: height,
        margin: margin,
        maxValue: 1.0,
        levels: 5,
        roundStrokes: true,
        color: color
      };
      //Call function to draw the Radar chart
      RadarChart(".radarChart", data, radarChartOptions);
    </script>

  <!-- </div> -->

  <form name="status" id="status" action="main_page.php" method="post">
    <input type="hidden" value="" name="happiness" />
    <input type="hidden" value="" name="aquaintance" />
    <input type="hidden" value="" name="friends"  />
    <input type="hidden" value="" name="stress" />
    <input type="hidden" value="" name="grades" />
    <input type="hidden" value="" name="money" />

  </form>

  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

  <script src="js/new_profile.js"></script>

</body>
</html>
