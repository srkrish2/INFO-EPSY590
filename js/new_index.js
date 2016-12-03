var happiness = 0;
var aquaintance = 0;
var friends = 0;
var stress = 0;
var grades = 0;
var money = 0;
var time = 400;
var accomplishment = [];

var rand_events = {};
var rand_events_list = ["exam", "deadline", "relationship", "competition", "exam_success", "gift", "job_offer", "award", "trip"];
rand_events["exam"] = {h:-20, a:0, f:0, s:50, g:0, m:0};
rand_events["deadline"] = {h:-20, a:0, f:0, s:50, g:0, m:0};
rand_events["relationship"] = {h:-20, a:0, f:0, s:50, g:0, m:0};
rand_events["competition"] = {h:0, a:0, f:0, s:50, g:-20, m:0};
rand_events["exam_success"] = {h:20, a:0, f:0, s:10, g:20, m:0};
rand_events["gift"] = {h:10, a:10, f:10, s:0, g:0, m:0};
rand_events["award"] = {h:10, a:0, f:0, s:0, g:0, m:20};
rand_events["job_offer"] = {h:30, a:20, f:5, s:10, g:-20, m:50};
rand_events["trip"] = {h:40, a:20, f:20, s:-20, g:-10, m:0};


var point_dict = {};
point_dict["1"] = {h:-10, a:0, f:0, s:5, g:30, m:0};
point_dict["2"] = {h:10, a:10, f:5, s:5, g:20, m:0};
point_dict["3"] = {h:10, a:5, f:0, s:10, g:20, m:0};
point_dict["4"] = {h:0, a:5, f:0, s:10, g:30, m:-30};
point_dict["5"] = {h:-10, a:5, f:0, s:10, g:0, m:30};
point_dict["6"] = {h:10, a:0, f:0, s:20, g:30, m:0};
point_dict["7"] = {h:120, a:10, f:5, s:0, g:0, m:-10};
point_dict["8"] = {h:30, a:20, f:5, s:0, g:0, m:-30};
point_dict["9"] = {h:30, a:5, f:5, s:0, g:0, m:-20};
point_dict["10"] = {h:50, a:10, f:5, s:50, g:0, m:-40};
point_dict["11"] = {h:50, a:10, f:5, s:50, g:0, m:-40};
point_dict["12"] = {h:40, a:30, f:0, s:0, g:0, m:0};
point_dict["13"] = {h:10, a:20, f:5, s:0, g:0, m:0};
point_dict["14"] = {h:10, a:20, f:5, s:0, g:0, m:0};
point_dict["15"] = {h:10, a:20, f:5, s:0, g:-10, m:0};
point_dict["16"] = {h:50, a:200, f:20, s:100, g:-100, m:200};
point_dict["17"] = {h:20, a:20, f:10, s:10, g:-10, m:0};
point_dict["18"] = {h:40, a:40, f:10, s:10, g:-20, m:-100};
point_dict["19"] = {h:30, a:20, f:10, s:10, g:-10, m:-10};
point_dict["20"] = {h:10, a:10, f:10, s:0, g:-10, m:-20};
point_dict["21"] = {h:30, a:10, f:10, s:0, g:-10, m:-30};
point_dict["22"] = {h:10, a:0, f:0, s:-10, g:0, m:0};
point_dict["23"] = {h:20, a:20, f:10, s:-10, g:-10, m:0};
point_dict["24"] = {h:20, a:20, f:10, s:-10, g:0, m:0};
point_dict["25"] = {h:20, a:20, f:10, s:-10, g:-10, m:0};
point_dict["26"] = {h:20, a:0, f:0, s:-10, g:0, m:0};
point_dict["27"] = {h:20, a:30, f:20, s:5, g:-5, m:0};
point_dict["28"] = {h:20, a:30, f:20, s:5, g:-5, m:0};
point_dict["29"] = {h:10, a:30, f:10, s:5, g:-5, m:0};
point_dict["30"] = {h:20, a:30, f:10, s:5, g:-5, m:0};
point_dict["31"] = {h:40, a:20, f:10, s:5, g:-5, m:10};
point_dict["32"] = {h:0, a:0, f:0, s:0, g:10, m:5};
point_dict["33"] = {h:20, a:5, f:5, s:0, g:0, m:0};
point_dict["34"] = {h:30, a:5, f:5, s:0, g:0, m:5};
point_dict["35"] = {h:15, a:20, f:10, s:-10, g:-5, m:0};
point_dict["36"] = {h:10, a:20, f:10, s:10, g:-5, m:0};
point_dict["37"] = {h:-10, a:10, f:10, s:0, g:-5, m:0};
point_dict["38"] = {h:-10, a:0, f:0, s:5, g:5, m:0};
point_dict["39"] = {h:10, a:10, f:0, s:10, g:-10, m:40};
point_dict["40"] = {h:-10, a:10, f:0, s:10, g:-10, m:40};
point_dict["41"] = {h:-20, a:10, f:0, s:10, g:-10, m:30};
point_dict["42"] = {h:-10, a:10, f:0, s:20, g:-10, m:40};
point_dict["43"] = {h:10, a:10, f:0, s:10, g:-10, m:40};
point_dict["44"] = {h:-10, a:0, f:0, s:10, g:-10, m:30};
point_dict["45"] = {h:0, a:10, f:0, s:30, g:-10, m:50};
point_dict["46"] = {h:-10, a:10, f:0, s:10, g:-10, m:30};
point_dict["47"] = {h:10, a:10, f:0, s:30, g:10, m:0};
point_dict["48"] = {h:10, a:10, f:0, s:30, g:10, m:0};
point_dict["49"] = {h:10, a:20, f:0, s:5, g:-10, m:0};
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
	start_values();
};
$(document).ready(main);

function update_status(iden){
	time = time -1;
	var idd = iden;//iden.toString();

	//check if we have enough money to do this
	if(money + point_dict[idd].m < 0){
		alert("You do not have enough money for this action.");
		break;
	}
	//check rules for action

	//if so update all values
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
	if (grades < 0){
		grades = 0;
	}
	if (friends < 0){
		friends = 0;
	}
	if (stress < 0){
		stress = 0;
	}
	if(happiness > 100){
		happiness = 100;
	}
	if(aquaintance > 100){
		aquaintance = 100;
	}
	if(grades > 100){
		grades = 100;
	}
	if(friends > 100){
		friends = 100;
	}
	if(stress > 100){
		stress = 100;
	}
	display_status();
	rand_event();
}

function rand_event(){

}

function start_values(){
	happiness = document.getElementById("h").innerHTML*1;
	aquaintance = document.getElementById("a").innerHTML*1;
	grades = document.getElementById("g").innerHTML*1;
	money = document.getElementById("m").innerHTML*1;
	stress = document.getElementById("s").innerHTML*1;
	friends = document.getElementById("f").innerHTML*1;
	time = document.getElementById("t").innerHTML*1;
}

function display_status(){
	document.getElementById("h").innerHTML = happiness.toString() + "%";
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
	$('input[name="time"]').val(time);
	$('#status').submit();
}
