var happiness = 0;
var aquaintance = 0;
var friends = 0;
var stress = 0;
var grades = 0;
var money = 0;
var accomplishment = [];

var rand_events = {};
var rand_events_list = ["exam"];
rand_events["exam"] = {h:0, a:0, f:0, s:50, g:0, m:0};

var point_dict = {};
point_dict["1"] = {h:-10, a:0, f:0, s:5, g:30, m:0};
point_dict["2"] = {h:10, a:5, f:10, s:5, g:20, m:0};
point_dict["3"] = {h:10, a:5, f:0, s:10, g:20, m:0};
point_dict["4"] = {h:0, a:5, f:0, s:10, g:30, m:-30};
point_dict["5"] = {h:-10, a:5, f:0, s:10, g:0, m:30};
point_dict["6"] = {h:10, a:0, f:0, s:20, g:30, m:0};
point_dict["7"] = {h:120, a:5, f:20, s:0, g:0, m:-10};
point_dict["8"] = {h:30, a:5, f:20, s:0, g:0, m:-30};
point_dict["9"] = {h:30, a:5, f:30, s:0, g:0, m:-20};
point_dict["10"] = {h:50, a:0, f:30, s:50, g:0, m:-40};
point_dict["11"] = {h:50, a:0, f:30, s:50, g:0, m:-40};
point_dict["12"] = {h:40, a:0, f:30, s:0, g:0, m:0};
point_dict["13"] = {h:10, a:30, f:30, s:0, g:0, m:0};
point_dict["14"] = {h:10, a:30, f:30, s:0, g:0, m:0};
point_dict["15"] = {h:10, a30:, f:30, s:0, g:-10, m:0};
point_dict["16"] = {h:50, a:200, f:20, s:100, g:-50, m:200};
point_dict["17"] = {h:20, a:20, f:20, s:10, g:-10, m:0};
point_dict["18"] = {h:40, a:20, f:40, s:10, g:-20, m:-100};
point_dict["19"] = {h:30, a:20, f:20, s:10, g:-10, m:-10};
point_dict["20"] = {h:10, a:0, f:30, s:0, g:0, m:-20};
point_dict["21"] = {h:30, a:10, f:10, s:0, g:-10, m:-30};
point_dict["22"] = {h:10, a:0, f:0, s:-10, g:0, m:0};
point_dict["23"] = {h:20, a:20, f:20, s:-10, g:-10, m:0};
point_dict["24"] = {h:20, a:20, f:20, s:-10, g:0, m:0};
point_dict["25"] = {h:20, a:20, f:20, s:-10, g:-10, m:0};
point_dict["26"] = {h:20, a:20, f:20, s:-10, g:0, m:0};
point_dict["27"] = {h:20, a:30, f:20, s:5, g:-5, m:0};
point_dict["28"] = {h:20, a:30, f:20, s:5, g:-5, m:0};
point_dict["29"] = {h:10, a:30, f:10, s:5, g:-5, m:0};
point_dict["30"] = {h:20, a:30, f:10, s:5, g:-5, m:0};
point_dict["31"] = {h:40, a:20, f:20, s:5, g:-5, m:10};
point_dict["32"] = {h:0, a:0, f:0, s:0, g:10, m:5};
point_dict["33"] = {h:20, a:0, f:0, s:0, g:0, m:0};
point_dict["34"] = {h:30, a:0, f:0, s:0, g:0, m:5};
point_dict["35"] = {h:15, a:10, f:10, s:-10, g:-5, m:0};
point_dict["36"] = {h:10, a:10, f:10, s:10, g:-5, m:0};
point_dict["37"] = {h:-10, a:10, f:10, s:0, g:-5, m:0};
point_dict["38"] = {h:-10, a:10, f:10, s:5, g:5, m:0};
point_dict["39"] = {h:10, a:10, f:0, s:10, g:-10, m:40};
point_dict["40"] = {h:-10, a:10, f:0, s:10, g:-10, m:40};
point_dict["41"] = {h:-20, a:10, f:0, s:10, g:-10, m:30};
point_dict["42"] = {h:-10, a:10, f:0, s:20, g:-10, m:40};
point_dict["43"] = {h:10, a:10, f:0, s:10, g:-10, m:40};
point_dict["44"] = {h:-10, a:0, f:0, s:10, g:-10, m:30};
point_dict["45"] = {h:0, a:10, f:0, s:20, g:-10, m:50};
point_dict["46"] = {h:-10, a:10, f:0, s:10, g:-10, m:30};
point_dict["47"] = {h:10, a:10, f:0, s:30, g:10, m:0};
point_dict["48"] = {h:10, a:10, f:0, s:30, g:10, m:0};
point_dict["49"] = {h:10, a:,20 f:0, s:5, g:-10, m:0};
point_dict["50"] = {h:40, a:30, f:20, s:30, g:-30, m:0};

var main = function(){
	var curItem = ["profile", "study","social","fun","work","leader","settings"];
	var startMenu = "settings";
	$(".sidebar .button."+startMenu).addClass("selected");
	$(".body .menus .menu."+startMenu).removeClass("hidden");
	$(".sidebar .button").click(function(){
		for(var i=0;i<$(".sidebar .button").length;i++){
			if($(this).hasClass(curItem[i])){
				$(".sidebar .button.selected").removeClass("selected");
				$(this).addClass("selected");
				$(".body .menus .menu").addClass("hidden");
				$(".body .menus .menu."+curItem[i]).removeClass("hidden");
			}
		}
	});
	alert("here");
	start_values();
};
$(document).ready(main);

function update_status(iden){
	var idd = iden;//iden.toString();
	happiness = happiness + point_dict[idd].h;
	aquaintance = aquaintance + point_dict[idd].a;
	grades = grades + point_dict[idd].g;
	money = money + point_dict[idd].m;
	stress = stress + point_dict[idd].s;
	friends = friends + point_dict[idd].f;
	if (happiness < 0){
		happiness = 0;
		alert();
	}
	if (aquaintance < 0){
		aquaintance = 0;
	}
	if (money < 0){
		money = 0;
	}
	if (grades < 0){
		grades = 0;
	}
	if (friends < 0){
		friends = 0;
	}
	if (stress < 0){
		stress = 0;
	}
	display_status();
}

function start_values(){
	alert("inhere");
	happiness = parseInt(document.getElementById("h").innerHTML,10);
	aquaintance = parseInt(document.getElementById("a").innerHTML,10);
	grades = parseInt(document.getElementById("g").innerHTML,10);
	money = parseInt(document.getElementById("m").innerHTML,10);
	stress = parseInt(document.getElementById("s").innerHTML,10);
	friends = parseInt(document.getElementById("f").innerHTML,10);
}

function display_status(){
	document.getElementById("h").innerHTML = happiness;
	document.getElementById("a").innerHTML = aquaintance;
	document.getElementById("g").innerHTML = grades;
	document.getElementById("m").innerHTML = money;
	document.getElementById("s").innerHTML = stress;
	document.getElementById("f").innerHTML = friends;
}

function start_over(){
	happiness = 50;
	aquaintance = 0;
	friends = 0;
	stress = 0;
	grades = 0;
	money=0;
	accomplishment = [];
	display_status();
}

function send_main(){
	$('input[name="happiness"]').val(happiness);
	$('input[name="aquaintance"]').val(aquaintance);
	$('input[name="grades"]').val(grades);
	$('input[name="money"]').val(money);
	$('input[name="stress"]').val(stress);
	$('input[name="friends"]').val(friends);
	$('#status').submit();
}
