$(document).ready(function(){	$("#classinfo").hide();
    $(".currentweek").hide();
	$(".nextweek").hide()
});

var raynor = {
	"q":[
		["url","assets/abilities/raynor/raynor_penetratingRound.png"],
		["abilityName","Penetrating Round"],
		["abilityDesc","Deals heavy damage and knocks enemies back."]
	],
	"w":[
		["url","assets/abilities/raynor/raynor_inspire.png"],
		["abilityName","Inspire"],
		["abilityDesc","Gain 25% bonus Attack Speed for 8 seconds. Nearby allies gain half of the bonus."]
	],
	"e":[
		["url","assets/abilities/raynor/raynor_adrenalineRush.png"],
		["abilityName","Adrenaline Rush"],
		["abilityDesc","Automatically activates to heal for a large amount when you are below 30% Health."]
	],
	"heroic1":[
		["url","assets/abilities/raynor/raynor_hyperion.png"],
		["abilityName","Hyperion"],
		["abilityDesc","Order the Hyperion to make a strafing run dealing light damage a second, hitting up to 4 enemies. Also occasionally fires its Yamato Cannon on Structures for massive damage. Lasts 12 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/raynor/raynor_raynorsRaiders.png"],
		["abilityName","Raynor's Raiders"],
		["abilityDesc","Summon two cloaked Banshees that attack an enemy. Each Banshee deals light damage. Lasts 22 seconds."]
	],
	"trait":[
		["url","assets/abilities/raynor/raynor_advancedOptics.png"],
		["abilityName","Advanced Optics"],
		["abilityDesc","Basic Attack range is 20% further than other ranged Heroes, and you see 10% further than other Heroes."]

	]
};var muradin = {	"q":[		["url","assets/abilities/muradin/muradin_stormbolt.png"],		["abilityName","Storm Bolt"],		["abilityDesc","Throw a hammer, dealing moderate damage to the first enemy hit and stunning it for 1.5 seconds."]	],	"w":[		["url","assets/abilities/muradin/muradin_thunderclap.png"],		["abilityName","Thunder Clap"],		["abilityDesc","Deals moderate damage and slows enemies by 25% for 2.5 seconds."]	],	"e":[		["url","assets/abilities/muradin/muradin_dwarfToss.png"],		["abilityName","Dwarf Toss"],		["abilityDesc","Leap to target location, dealing moderate damage to enemies on landing."]	],	"heroic1":[		["url","assets/abilities/muradin/muradin_avatar.png"],		["abilityName","Avatar"],		["abilityDesc","Transform for 20 seconds, gaining a massive amount of Health and causing your Basic Attacks to stun enemies."]	],	"heroic2":[		["url","assets/abilities/muradin/muradin_haymaker.png"],		["abilityName","Haymaker"],		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing massive damage and knocking the target back, hitting enemies in the way for moderate damage and knocking them aside."]	],	"trait":[		["url","assets/abilities/muradin/muradin_secondWind.png"],		["abilityName","Second Wind"],		["abilityDesc","Restore a moderate amount of Health each second when you have not taken damage for 4 seconds. When below 40% Health, Health restored per second doubles."]	]};var muradin = {	"q":[		["url","assets/abilities/muradin/muradin_stormbolt.png"],		["abilityName","Storm Bolt"],		["abilityDesc","Throw a hammer, dealing moderate damage to the first enemy hit and stunning it for 1.5 seconds."]	],	"w":[		["url","assets/abilities/muradin/muradin_thunderclap.png"],		["abilityName","Thunder Clap"],		["abilityDesc","Deals moderate damage and slows enemies by 25% for 2.5 seconds."]	],	"e":[		["url","assets/abilities/muradin/muradin_dwarfToss.png"],		["abilityName","Dwarf Toss"],		["abilityDesc","Leap to target location, dealing moderate damage to enemies on landing."]	],	"heroic1":[		["url","assets/abilities/muradin/muradin_avatar.png"],		["abilityName","Avatar"],		["abilityDesc","Transform for 20 seconds, gaining a massive amount of Health and causing your Basic Attacks to stun enemies."]	],	"heroic2":[		["url","assets/abilities/muradin/muradin_haymaker.png"],		["abilityName","Haymaker"],		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing massive damage and knocking the target back, hitting enemies in the way for moderate damage and knocking them aside."]	],	"trait":[		["url","assets/abilities/muradin/muradin_secondWind.png"],		["abilityName","Second Wind"],		["abilityDesc","Restore a moderate amount of Health each second when you have not taken damage for 4 seconds. When below 40% Health, Health restored per second doubles."]	]};var uther = {	"q":[		["url","assets/abilities/muradin/muradin_stormbolt.png"],		["abilityName","Storm Bolt"],		["abilityDesc","Throw a hammer, dealing moderate damage to the first enemy hit and stunning it for 1.5 seconds."]	],	"w":[		["url","assets/abilities/muradin/muradin_thunderclap.png"],		["abilityName","Thunder Clap"],		["abilityDesc","Deals moderate damage and slows enemies by 25% for 2.5 seconds."]	],	"e":[		["url","assets/abilities/muradin/muradin_dwarfToss.png"],		["abilityName","Dwarf Toss"],		["abilityDesc","Leap to target location, dealing moderate damage to enemies on landing."]	],	"heroic1":[		["url","assets/abilities/muradin/muradin_avatar.png"],		["abilityName","Avatar"],		["abilityDesc","Transform for 20 seconds, gaining a massive amount of Health and causing your Basic Attacks to stun enemies."]	],	"heroic2":[		["url","assets/abilities/muradin/muradin_haymaker.png"],		["abilityName","Haymaker"],		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing massive damage and knocking the target back, hitting enemies in the way for moderate damage and knocking them aside."]	],	"trait":[		["url","assets/abilities/muradin/muradin_secondWind.png"],		["abilityName","Second Wind"],		["abilityDesc","Restore a moderate amount of Health each second when you have not taken damage for 4 seconds. When below 40% Health, Health restored per second doubles."]	]};var kerrigan = {	"q":[		["url","assets/abilities/muradin/muradin_stormbolt.png"],		["abilityName","Storm Bolt"],		["abilityDesc","Throw a hammer, dealing moderate damage to the first enemy hit and stunning it for 1.5 seconds."]	],	"w":[		["url","assets/abilities/muradin/muradin_thunderclap.png"],		["abilityName","Thunder Clap"],		["abilityDesc","Deals moderate damage and slows enemies by 25% for 2.5 seconds."]	],	"e":[		["url","assets/abilities/muradin/muradin_dwarfToss.png"],		["abilityName","Dwarf Toss"],		["abilityDesc","Leap to target location, dealing moderate damage to enemies on landing."]	],	"heroic1":[		["url","assets/abilities/muradin/muradin_avatar.png"],		["abilityName","Avatar"],		["abilityDesc","Transform for 20 seconds, gaining a massive amount of Health and causing your Basic Attacks to stun enemies."]	],	"heroic2":[		["url","assets/abilities/muradin/muradin_haymaker.png"],		["abilityName","Haymaker"],		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing massive damage and knocking the target back, hitting enemies in the way for moderate damage and knocking them aside."]	],	"trait":[		["url","assets/abilities/muradin/muradin_secondWind.png"],		["abilityName","Second Wind"],		["abilityDesc","Restore a moderate amount of Health each second when you have not taken damage for 4 seconds. When below 40% Health, Health restored per second doubles."]	]};var tyrael = {	"q":[		["url","assets/abilities/muradin/muradin_stormbolt.png"],		["abilityName","Storm Bolt"],		["abilityDesc","Throw a hammer, dealing moderate damage to the first enemy hit and stunning it for 1.5 seconds."]	],	"w":[		["url","assets/abilities/muradin/muradin_thunderclap.png"],		["abilityName","Thunder Clap"],		["abilityDesc","Deals moderate damage and slows enemies by 25% for 2.5 seconds."]	],	"e":[		["url","assets/abilities/muradin/muradin_dwarfToss.png"],		["abilityName","Dwarf Toss"],		["abilityDesc","Leap to target location, dealing moderate damage to enemies on landing."]	],	"heroic1":[		["url","assets/abilities/muradin/muradin_avatar.png"],		["abilityName","Avatar"],		["abilityDesc","Transform for 20 seconds, gaining a massive amount of Health and causing your Basic Attacks to stun enemies."]	],	"heroic2":[		["url","assets/abilities/muradin/muradin_haymaker.png"],		["abilityName","Haymaker"],		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing massive damage and knocking the target back, hitting enemies in the way for moderate damage and knocking them aside."]	],	"trait":[		["url","assets/abilities/muradin/muradin_secondWind.png"],		["abilityName","Second Wind"],		["abilityDesc","Restore a moderate amount of Health each second when you have not taken damage for 4 seconds. When below 40% Health, Health restored per second doubles."]	]};var nazeebo = {	"q":[		["url","assets/abilities/muradin/muradin_stormbolt.png"],		["abilityName","Storm Bolt"],		["abilityDesc","Throw a hammer, dealing moderate damage to the first enemy hit and stunning it for 1.5 seconds."]	],	"w":[		["url","assets/abilities/muradin/muradin_thunderclap.png"],		["abilityName","Thunder Clap"],		["abilityDesc","Deals moderate damage and slows enemies by 25% for 2.5 seconds."]	],	"e":[		["url","assets/abilities/muradin/muradin_dwarfToss.png"],		["abilityName","Dwarf Toss"],		["abilityDesc","Leap to target location, dealing moderate damage to enemies on landing."]	],	"heroic1":[		["url","assets/abilities/muradin/muradin_avatar.png"],		["abilityName","Avatar"],		["abilityDesc","Transform for 20 seconds, gaining a massive amount of Health and causing your Basic Attacks to stun enemies."]	],	"heroic2":[		["url","assets/abilities/muradin/muradin_haymaker.png"],		["abilityName","Haymaker"],		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing massive damage and knocking the target back, hitting enemies in the way for moderate damage and knocking them aside."]	],	"trait":[		["url","assets/abilities/muradin/muradin_secondWind.png"],		["abilityName","Second Wind"],		["abilityDesc","Restore a moderate amount of Health each second when you have not taken damage for 4 seconds. When below 40% Health, Health restored per second doubles."]	]};var sonya = {	"q":[		["url","assets/abilities/muradin/muradin_stormbolt.png"],		["abilityName","Storm Bolt"],		["abilityDesc","Throw a hammer, dealing moderate damage to the first enemy hit and stunning it for 1.5 seconds."]	],	"w":[		["url","assets/abilities/muradin/muradin_thunderclap.png"],		["abilityName","Thunder Clap"],		["abilityDesc","Deals moderate damage and slows enemies by 25% for 2.5 seconds."]	],	"e":[		["url","assets/abilities/muradin/muradin_dwarfToss.png"],		["abilityName","Dwarf Toss"],		["abilityDesc","Leap to target location, dealing moderate damage to enemies on landing."]	],	"heroic1":[		["url","assets/abilities/muradin/muradin_avatar.png"],		["abilityName","Avatar"],		["abilityDesc","Transform for 20 seconds, gaining a massive amount of Health and causing your Basic Attacks to stun enemies."]	],	"heroic2":[		["url","assets/abilities/muradin/muradin_haymaker.png"],		["abilityName","Haymaker"],		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing massive damage and knocking the target back, hitting enemies in the way for moderate damage and knocking them aside."]	],	"trait":[		["url","assets/abilities/muradin/muradin_secondWind.png"],		["abilityName","Second Wind"],		["abilityDesc","Restore a moderate amount of Health each second when you have not taken damage for 4 seconds. When below 40% Health, Health restored per second doubles."]	]};var arthas = {	"q":[		["url","assets/abilities/muradin/muradin_stormbolt.png"],		["abilityName","Storm Bolt"],		["abilityDesc","Throw a hammer, dealing moderate damage to the first enemy hit and stunning it for 1.5 seconds."]	],	"w":[		["url","assets/abilities/muradin/muradin_thunderclap.png"],		["abilityName","Thunder Clap"],		["abilityDesc","Deals moderate damage and slows enemies by 25% for 2.5 seconds."]	],	"e":[		["url","assets/abilities/muradin/muradin_dwarfToss.png"],		["abilityName","Dwarf Toss"],		["abilityDesc","Leap to target location, dealing moderate damage to enemies on landing."]	],	"heroic1":[		["url","assets/abilities/muradin/muradin_avatar.png"],		["abilityName","Avatar"],		["abilityDesc","Transform for 20 seconds, gaining a massive amount of Health and causing your Basic Attacks to stun enemies."]	],	"heroic2":[		["url","assets/abilities/muradin/muradin_haymaker.png"],		["abilityName","Haymaker"],		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing massive damage and knocking the target back, hitting enemies in the way for moderate damage and knocking them aside."]	],	"trait":[		["url","assets/abilities/muradin/muradin_secondWind.png"],		["abilityName","Second Wind"],		["abilityDesc","Restore a moderate amount of Health each second when you have not taken damage for 4 seconds. When below 40% Health, Health restored per second doubles."]	]};var tassadar = {	"q":[		["url","assets/abilities/muradin/muradin_stormbolt.png"],		["abilityName","Storm Bolt"],		["abilityDesc","Throw a hammer, dealing moderate damage to the first enemy hit and stunning it for 1.5 seconds."]	],	"w":[		["url","assets/abilities/muradin/muradin_thunderclap.png"],		["abilityName","Thunder Clap"],		["abilityDesc","Deals moderate damage and slows enemies by 25% for 2.5 seconds."]	],	"e":[		["url","assets/abilities/muradin/muradin_dwarfToss.png"],		["abilityName","Dwarf Toss"],		["abilityDesc","Leap to target location, dealing moderate damage to enemies on landing."]	],	"heroic1":[		["url","assets/abilities/muradin/muradin_avatar.png"],		["abilityName","Avatar"],		["abilityDesc","Transform for 20 seconds, gaining a massive amount of Health and causing your Basic Attacks to stun enemies."]	],	"heroic2":[		["url","assets/abilities/muradin/muradin_haymaker.png"],		["abilityName","Haymaker"],		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing massive damage and knocking the target back, hitting enemies in the way for moderate damage and knocking them aside."]	],	"trait":[		["url","assets/abilities/muradin/muradin_secondWind.png"],		["abilityName","Second Wind"],		["abilityDesc","Restore a moderate amount of Health each second when you have not taken damage for 4 seconds. When below 40% Health, Health restored per second doubles."]	]};var liming = {	"q":[		["url","assets/abilities/muradin/muradin_stormbolt.png"],		["abilityName","Storm Bolt"],		["abilityDesc","Throw a hammer, dealing moderate damage to the first enemy hit and stunning it for 1.5 seconds."]	],	"w":[		["url","assets/abilities/muradin/muradin_thunderclap.png"],		["abilityName","Thunder Clap"],		["abilityDesc","Deals moderate damage and slows enemies by 25% for 2.5 seconds."]	],	"e":[		["url","assets/abilities/muradin/muradin_dwarfToss.png"],		["abilityName","Dwarf Toss"],		["abilityDesc","Leap to target location, dealing moderate damage to enemies on landing."]	],	"heroic1":[		["url","assets/abilities/muradin/muradin_avatar.png"],		["abilityName","Avatar"],		["abilityDesc","Transform for 20 seconds, gaining a massive amount of Health and causing your Basic Attacks to stun enemies."]	],	"heroic2":[		["url","assets/abilities/muradin/muradin_haymaker.png"],		["abilityName","Haymaker"],		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing massive damage and knocking the target back, hitting enemies in the way for moderate damage and knocking them aside."]	],	"trait":[		["url","assets/abilities/muradin/muradin_secondWind.png"],		["abilityName","Second Wind"],		["abilityDesc","Restore a moderate amount of Health each second when you have not taken damage for 4 seconds. When below 40% Health, Health restored per second doubles."]	]};

function populateQ(name) {
	var content = "<img src=\""+name.q[0][1]+"\" style=\"width:100px\" \">";
	content+="<img src=\"assets/abilities/ability-icon-frame.png\" style=\"width:100px;position:absolute;top: 0;left: 1%;z-index: 1;\">";
	$("#q_img").html("");
	$("#q_img").append(content);
	content = "";
	content=name.q[1][1];
	$(".q_name").html("");
	$(".q_name").append(content+":");
	content = "";
	content=name.q[2][1];
	$(".q_desc").html("");
	$(".q_desc").append(content);
};

function populateW(name) {
	var content = "<img src=\""+name.w[0][1]+"\" style=\"width:100px\">";
	content+="<img src=\"assets/abilities/ability-icon-frame.png\" style=\"width:100px;position:absolute;top: 0;left: 1%;z-index: 1;\">";
	$("#w_img").html("");
	$("#w_img").append(content);
	content = "";
	content=name.w[1][1];
	$(".w_name").html("");
	$(".w_name").append(content+":");
	content = "";
	content=name.w[2][1];
	$(".w_desc").html("");
	$(".w_desc").append(content);
};

function populateE(name) {
	var content = "<img src=\""+name.e[0][1]+"\" style=\"width:100px\">";
	content+="<img src=\"assets/abilities/ability-icon-frame.png\" style=\"width:100px;position:absolute;top: 0;left: 1%;z-index: 1;\" class=\"overlayimg\">";
	$("#e_img").html("");
	$("#e_img").append(content);
	content = "";
	content=name.e[1][1];
	$(".e_name").html("");
	$(".e_name").append(content+":");
	content = "";
	content=name.e[2][1];
	$(".e_desc").html("");
	$(".e_desc").append(content);
};

function populateH1(name) {
	var content = "<img src=\""+name.heroic1[0][1]+"\" style=\"width:100px\">";
	content+="<img src=\"assets/abilities/ability-icon-frame.png\" style=\"width:100px;position:absolute;top: 0;left: 1%;z-index: 1;\">";
	$("#firstheroic_img").html("");
	$("#firstheroic_img").append(content);
	content = "";
	content=name.heroic1[1][1];
	$(".firstheroic_name").html("");
	$(".firstheroic_name").append(content+":");
	content = "";
	content=name.heroic1[2][1];
	$(".firstheroic_desc").html("");
	$(".firstheroic_desc").append(content);
};

function populateH2(name) {
	var content = "<img src=\""+name.heroic2[0][1]+"\" style=\"width:100px\">";
	content+="<img src=\"assets/abilities/ability-icon-frame.png\" style=\"width:100px;position:absolute;top: 0;left: 1%;z-index: 1;\">";
	$("#secondheroic_img").html("");
	$("#secondheroic_img").append(content);
	content = "";
	content=name.heroic2[1][1];
	$(".secondheroic_name").html("");
	$(".secondheroic_name").append(content+":");
	content = "";
	content=name.heroic2[2][1];
	$(".secondheroic_desc").html("");
	$(".secondheroic_desc").append(content);
};

function populateT(name) {
	var content = "<img src=\""+name.trait[0][1]+"\" style=\"width:100px\">";
	content+="<img src=\"assets/abilities/ability-icon-frame.png\" style=\"width:100px;position:absolute;top: 0;left: 1%;z-index: 1;\">";
	$("#trait_img").html("");
	$("#trait_img").append(content);
	content = "";
	content=name.trait[1][1];
	$(".trait_name").html("");
	$(".trait_name").append(content+":");
	content = "";
	content=name.trait[2][1];
	$(".trait_desc").html("");
	$(".trait_desc").append(content);
};

function populateAbilities(name){
	populateQ(name);
	populateW(name);
	populateE(name);
	populateH1(name);
	populateH2(name);
	populateT(name);
};

$("#abathur").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/abathur.jpg) right no-repeat");
});

$("#anubarak").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/anubarak.jpg) right no-repeat");
	
});

$("#artanis").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/artanis.jpg) right no-repeat");
});

$("#arthas").click(function(){	$("#classinfo").show();	populateAbilities(arthas);
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/arthas.jpg) right no-repeat");
});

$("#azmodan").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/azmodan.jpg) right no-repeat");
});

$("#brightwing").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/brightwing.jpg) right no-repeat");
});

$("#chen").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/chen.jpg) right no-repeat");
});

$("#chogall").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/chogall.jpg) right no-repeat");
});

$("#dehaka").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/dehaka.jpg) right no-repeat");
});

$("#diablo").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/diablo.jpg) right no-repeat");
});

$("#etc").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/etc.jpg) right no-repeat");
});

$("#falstad").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/falstad.jpg) right no-repeat");
});

$("#gazlowe").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/gazlowe.jpg) right no-repeat");
});

$("#greymane").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/greymane.jpg) right no-repeat");
});

$("#illidan").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/illidan.jpg) right no-repeat");
});

$("#jaina").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/jaina.jpg) right no-repeat");
});

$("#johanna").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/johanna.jpg) right no-repeat");
});

$("#kaelthas").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/kaelthas.jpg) right no-repeat");
});

$("#kerrigan").click(function(){	$("#classinfo").show();	populateAbilities(kerrigan);
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/kerrigan.jpg) right no-repeat");
});

$("#kharazim").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/kharazim.jpg) right no-repeat");
});

$("#leoric").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/leoric.jpg) right no-repeat");
});

$("#lili").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/lili.jpg) right no-repeat");
});

$("#liming").click(function(){	$("#classinfo").show();	populateAbilities(liming);
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/liming.jpg) right no-repeat");
});

$("#ltmorales").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/ltmorales.jpg) right no-repeat");
});

$("#lunara").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/lunara.jpg) right no-repeat");
});

$("#malfurion").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/malfurion.jpg) right no-repeat");
});

$("#muradin").click(function(){	$("#classinfo").show();	populateAbilities(muradin);
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/muradin.jpg) right no-repeat");
});

$("#murky").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/murky.jpg) right no-repeat");
});

$("#nazeebo").click(function(){	$("#classinfo").show();	populateAbilities(nazeebo);
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/nazeebo.jpg) right no-repeat");
});

$("#nova").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/nova.jpg) right no-repeat");
});

$("#raynor").click(function(){	$("#classinfo").show();
	populateAbilities(raynor);
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/raynor.jpg) right no-repeat");
});

$("#rehgar").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/rehgar.jpg) right no-repeat");
});

$("#rexxar").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/rexxar.jpg) right no-repeat");
});

$("#sgthammer").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/sgthammer.jpg) right no-repeat");
});

$("#sonya").click(function(){	$("#classinfo").show();	populateAbilities(sonya);
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/sonya.jpg) right no-repeat");
});

$("#stitches").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/stitches.jpg) right no-repeat");
});

$("#sylvanas").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/sylvanas.jpg) right no-repeat");
});

$("#tassadar").click(function(){	$("#classinfo").show();
	populateAbilities(tassadar);	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/tassadar.jpg) right no-repeat");
});

$("#thebutcher").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/thebutcher.jpg) right no-repeat");
});

$("#thelostvikings").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/thelostvikings.jpg) right no-repeat");
});

$("#thrall").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/thrall.jpg) right no-repeat");
});

$("#tracer").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/tracer.jpg) right no-repeat");
});

$("#tychus").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/tychus.jpg) right no-repeat");
});

$("#tyrael").click(function(){	$("#classinfo").show();
	populateAbilities(tyrael);	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/tyrael.jpg) right no-repeat");
});

$("#tyrande").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/tyrande.jpg) right no-repeat");
});

$("#uther").click(function(){	$("#classinfo").show();
	populateAbilities(uther);	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/uther.jpg) right no-repeat");
});

$("#valla").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/valla.jpg) right no-repeat");
});

$("#xul").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/xul.jpg) right no-repeat");
});

$("#zagara").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/zagara.jpg) right no-repeat");
});

$("#zeratul").click(function(){	$("#classinfo").show();
	$("#heroimage").css("height", "751px");
    $("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/zeratul.jpg) right no-repeat");
});

function showcurweek() {
	$(".nextweek").hide();
	$(".currentweek").show();
}

function shownextweek() {
	$(".currentweek").hide();
	$(".nextweek").show();
}


/*$(document).ready(function(){
	console.log(raynor.q[0][1]);
});*/

