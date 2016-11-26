var happiness = 0;
var aquaintance = 0;
var friends = 0;
var stress = 0;
var grades = 0;
var money=0;


var main = function(){
  recieve_main();
};
$(document).ready(recieve_main);

function send_main(){
  $('input[name="happiness"]').val(happiness);
  $('input[name="aquaintance"]').val(aquaintance);
  $('input[name="grades"]').val(grades);
  $('input[name="money"]').val(money);
  $('input[name="stress"]').val(stress);
  $('input[name="friends"]').val(friends);
  // alert($('input[name="happiness"]').val());
  $('#status').submit();

}

function recieve_main(){
  happiness = '<?php echo $happiness; ?>'
  aquaintance = '<?php echo $aquaintance; ?>'
  grades = '<?php echo $grades; ?>'
  money = '<?php echo $money; ?>'
  stress = '<?php echo $stress; ?>'
  friends = '<?php echo $friends; ?>'
  // alert(happiness);
  // alert(stress);
  // alert(money);
  // alert(grades);
}
