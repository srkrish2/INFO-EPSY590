var happiness = 0;
var aquaintance = 0;
var friends = 0;
var stress = 0;
var grades = 0;
var money=0;


var main = function(){
  recieve_main();
};
// $(document).ready(main);

function send_main(){
  alert(happiness);
  alert(stress);
  alert(money);
  alert(grades);
	$('#status').submit();
}

function recieve_main(){
  happiness = document.getElementById("happiness").innerHTML;
  aquaintance = document.getElementById("aquaintance").innerHTML;
  grades = document.getElementById("grades").innerHTML;
  money = document.getElementById("money").innerHTML;
  stress = document.getElementById("stress").innerHTML;
  friends = document.getElementById("friends").innerHTML;
  alert(happiness);
  alert(stress);
  alert(money);
  alert(grades);
}
