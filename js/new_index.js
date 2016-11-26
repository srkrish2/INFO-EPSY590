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
point_dict["1"] = {h:0, a:0, f:0, s:-10, g:30, m:0};
point_dict["2"] = {h:0, a:1, f:0, s:0, g:20, m:0};
point_dict["3"] = {h:0, a:0, f:0, s:0, g:40, m:0};
point_dict["4"] = {h:0, a:0, f:0, s:0, g:0, m:0};
point_dict["5"] = {h:0, a:0, f:0, s:0, g:0, m:10};
// point_dict["6"] = {h:0, a:0, f:0, s:0, g:0, m:0};
// point_dict["7"] = {h:, a:, f:, s:, g:, m:};
// point_dict["8"] = {h:, a:, f:, s:, g:, m:};
// point_dict["9"] = {h:, a:, f:, s:, g:, m:};
// point_dict["10"] = {h:, a:, f:, s:, g:, m:};
// point_dict["11"] = {h:, a:, f:, s:, g:, m:};
// point_dict["12"] = {h:, a:, f:, s:, g:, m:};
// point_dict["13"] = {h:, a:, f:, s:, g:, m:};
// point_dict["14"] = {h:, a:, f:, s:, g:, m:};
// point_dict["15"] = {h:, a:, f:, s:, g:, m:};
// point_dict["16"] = {h:, a:, f:, s:, g:, m:};
// point_dict["17"] = {h:, a:, f:, s:, g:, m:};
// point_dict["18"] = {h:, a:, f:, s:, g:, m:};
// point_dict["19"] = {h:, a:, f:, s:, g:, m:};
// point_dict["20"] = {h:, a:, f:, s:, g:, m:};
// point_dict["21"] = {h:, a:, f:, s:, g:, m:};
// point_dict["22"] = {h:, a:, f:, s:, g:, m:};
// point_dict["23"] = {h:, a:, f:, s:, g:, m:};
// point_dict["24"] = {h:, a:, f:, s:, g:, m:};
// point_dict["25"] = {h:, a:, f:, s:, g:, m:};
// point_dict["26"] = {h:, a:, f:, s:, g:, m:};
// point_dict["27"] = {h:, a:, f:, s:, g:, m:};
// point_dict["28"] = {h:, a:, f:, s:, g:, m:};
// point_dict["29"] = {h:, a:, f:, s:, g:, m:};
// point_dict["30"] = {h:, a:, f:, s:, g:, m:};
// point_dict["31"] = {h:, a:, f:, s:, g:, m:};
// point_dict["32"] = {h:, a:, f:, s:, g:, m:};
// point_dict["33"] = {h:, a:, f:, s:, g:, m:};
// point_dict["34"] = {h:, a:, f:, s:, g:, m:};
// point_dict["35"] = {h:, a:, f:, s:, g:, m:};
// point_dict["36"] = {h:, a:, f:, s:, g:, m:};
// point_dict["37"] = {h:, a:, f:, s:, g:, m:};
// point_dict["38"] = {h:, a:, f:, s:, g:, m:};
// point_dict["39"] = {h:, a:, f:, s:, g:, m:};
// point_dict["40"] = {h:, a:, f:, s:, g:, m:};
// point_dict["41"] = {h:, a:, f:, s:, g:, m:};
// point_dict["42"] = {h:, a:, f:, s:, g:, m:};
// point_dict["43"] = {h:, a:, f:, s:, g:, m:};
// point_dict["44"] = {h:, a:, f:, s:, g:, m:};
// point_dict["45"] = {h:, a:, f:, s:, g:, m:};
// point_dict["46"] = {h:, a:, f:, s:, g:, m:};
// point_dict["47"] = {h:, a:, f:, s:, g:, m:};
// point_dict["48"] = {h:, a:, f:, s:, g:, m:};
// point_dict["49"] = {h:, a:, f:, s:, g:, m:};
// point_dict["50"] = {h:, a:, f:, s:, g:, m:};

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
	display_status();
}

function start_values(){
	happiness = document.getElementById("h").innerHTML*1;
	aquaintance = document.getElementById("a").innerHTML*1;
	grades = document.getElementById("g").innerHTML*1;
	money = document.getElementById("m").innerHTML*1;
	stress = document.getElementById("s").innerHTML*1;
	friends = document.getElementById("f").innerHTML*1;
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
