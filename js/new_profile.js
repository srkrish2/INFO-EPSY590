function send_main(){
	alert(document.getElementById("s").innerHTML);
  	$('input[name="happiness"]').val(document.getElementById("h").innerHTML);
	$('input[name="aquaintance"]').val(document.getElementById("a").innerHTML);
	$('input[name="grades"]').val(document.getElementById("g").innerHTML);
	$('input[name="money"]').val(document.getElementById("m").innerHTML);
	$('input[name="stress"]').val(document.getElementById("s").innerHTML);
	$('input[name="friends"]').val(document.getElementById("f").innerHTML);
	$('input[name="time"]').val(document.getElementById("t").innerHTML);
	$('input[name="time_lose"]').val(document.getElementById("tl").innerHTML);
  	$('#status').submit();
}