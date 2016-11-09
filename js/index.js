var main = function(){
	var curItem = ["info","food","medical","begging","work","education","home","business","politics","help","settings"];
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
	var setPence = function(amt){
		var test = amt+"";
		var formatted = test.replace(/(\d)(?=(?:\d{3}){1,}$)/gm, "$1,");
		$(".status-bar .currency.display .p").text("₽"+formatted);
	};
	setPence(10000);
	
};
$(document).ready(main);