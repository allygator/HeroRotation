$(document).ready(function(){	$("#classinfo").hide();	$(".currentweek").hide();	$(".nextweek").hide();	$("#currentweekbtn span").text(currWeekDate);	$("#nextweekbtn span").text(nextWeekDate);	mapHeroes();});var currWeekDate = "Apr 12 - 26";var nextWeekDate = "Apr 26 - May 3";var h = ["Raynor","Muradin","Uther","Kerrigan","Tyrael","Nazeebo","Sonya","Arthas","Tassadar","Li-Ming"];function mapHeroes(){	for (i=0;i<h.length;i++){		var heroid = "hid";		var currHero = String(i);		heroid = heroid.concat(currHero);		var selector = '.'+heroid+' h5';		$(selector).text(h[i]);		selector = '.'+heroid;		var value = h[i];		value = value.replace(/'/g, '');		value = value.replace(/-/g, '');		value = value.toLowerCase();		console.log(value);		$(selector).attr('id',value);	}}var raynor = {	"q":[		["url","assets/abilities/raynor/raynor_penetratingRound.png"],		["abilityName","Penetrating Round"],		["abilityDesc","Deals heavy damage and knocks enemies back."]	],	"w":[		["url","assets/abilities/raynor/raynor_inspire.png"],		["abilityName","Inspire"],		["abilityDesc","Gain 25% bonus Attack Speed for 8 seconds. Nearby allies gain half of the bonus."]	],	"e":[		["url","assets/abilities/raynor/raynor_adrenalineRush.png"],		["abilityName","Adrenaline Rush"],		["abilityDesc","Automatically activates to heal for a large amount when you are below 30% Health."]	],	"heroic1":[		["url","assets/abilities/raynor/raynor_hyperion.png"],		["abilityName","Hyperion"],		["abilityDesc","Order the Hyperion to make a strafing run dealing light damage a second, hitting up to 4 enemies. Also occasionally fires its Yamato Cannon on Structures for massive damage. Lasts 12 seconds."]	],	"heroic2":[		["url","assets/abilities/raynor/raynor_raynorsRaiders.png"],		["abilityName","Raynor's Raiders"],		["abilityDesc","Summon two cloaked Banshees that attack an enemy. Each Banshee deals light damage. Lasts 22 seconds."]	],	"trait":[		["url","assets/abilities/raynor/raynor_advancedOptics.png"],		["abilityName","Advanced Optics"],		["abilityDesc","Basic Attack range is 20% further than other ranged Heroes, and you see 10% further than other Heroes."]	],	"type":"Assassin"};var muradin = {	"q":[		["url","assets/abilities/muradin/muradin_stormbolt.png"],		["abilityName","Storm Bolt"],		["abilityDesc","Throw a hammer, dealing moderate damage to the first enemy hit and stunning it for 1.5 seconds."]	],	"w":[		["url","assets/abilities/muradin/muradin_thunderclap.png"],		["abilityName","Thunder Clap"],		["abilityDesc","Deals moderate damage and slows enemies by 25% for 2.5 seconds."]	],	"e":[		["url","assets/abilities/muradin/muradin_dwarfToss.png"],		["abilityName","Dwarf Toss"],		["abilityDesc","Leap to target location, dealing moderate damage to enemies on landing."]	],	"heroic1":[		["url","assets/abilities/muradin/muradin_avatar.png"],		["abilityName","Avatar"],		["abilityDesc","Transform for 20 seconds, gaining a massive amount of Health and causing your Basic Attacks to stun enemies."]	],	"heroic2":[		["url","assets/abilities/muradin/muradin_haymaker.png"],		["abilityName","Haymaker"],		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing massive damage and knocking the target back, hitting enemies in the way for moderate damage and knocking them aside."]	],	"trait":[		["url","assets/abilities/muradin/muradin_secondWind.png"],		["abilityName","Second Wind"],		["abilityDesc","Restore a moderate amount of Health each second when you have not taken damage for 4 seconds. When below 40% Health, Health restored per second doubles."]	],	"type":"Warrior"};var uther = {	"q":[		["url","assets/abilities/muradin/muradin_stormbolt.png"],		["abilityName","Holy Light"],		["abilityDesc","Throw a hammer, dealing moderate damage to the first enemy hit and stunning it for 1.5 seconds."]	],	"w":[		["url","assets/abilities/muradin/muradin_thunderclap.png"],		["abilityName","Holy Radiance"],		["abilityDesc","Deals moderate damage and slows enemies by 25% for 2.5 seconds."]	],	"e":[		["url","assets/abilities/muradin/muradin_dwarfToss.png"],		["abilityName","Hammer of Justice"],		["abilityDesc","Leap to target location, dealing moderate damage to enemies on landing."]	],	"heroic1":[		["url","assets/abilities/muradin/muradin_avatar.png"],		["abilityName","Divine Shield"],		["abilityDesc","Transform for 20 seconds, gaining a massive amount of Health and causing your Basic Attacks to stun enemies."]	],	"heroic2":[		["url","assets/abilities/muradin/muradin_haymaker.png"],		["abilityName","Divine Storm"],		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing massive damage and knocking the target back, hitting enemies in the way for moderate damage and knocking them aside."]	],	"trait":[		["url","assets/abilities/muradin/muradin_secondWind.png"],		["abilityName","Eternal Devotion"],		["abilityDesc","Restore a moderate amount of Health each second when you have not taken damage for 4 seconds. When below 40% Health, Health restored per second doubles."]	],	"type":"Support"};var kerrigan = {	"q":[		["url","assets/abilities/muradin/muradin_stormbolt.png"],		["abilityName","Storm Bolt"],		["abilityDesc","Throw a hammer, dealing moderate damage to the first enemy hit and stunning it for 1.5 seconds."]	],	"w":[		["url","assets/abilities/muradin/muradin_thunderclap.png"],		["abilityName","Thunder Clap"],		["abilityDesc","Deals moderate damage and slows enemies by 25% for 2.5 seconds."]	],	"e":[		["url","assets/abilities/muradin/muradin_dwarfToss.png"],		["abilityName","Dwarf Toss"],		["abilityDesc","Leap to target location, dealing moderate damage to enemies on landing."]	],	"heroic1":[		["url","assets/abilities/muradin/muradin_avatar.png"],		["abilityName","Avatar"],		["abilityDesc","Transform for 20 seconds, gaining a massive amount of Health and causing your Basic Attacks to stun enemies."]	],	"heroic2":[		["url","assets/abilities/muradin/muradin_haymaker.png"],		["abilityName","Haymaker"],		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing massive damage and knocking the target back, hitting enemies in the way for moderate damage and knocking them aside."]	],	"trait":[		["url","assets/abilities/muradin/muradin_secondWind.png"],		["abilityName","Second Wind"],		["abilityDesc","Restore a moderate amount of Health each second when you have not taken damage for 4 seconds. When below 40% Health, Health restored per second doubles."]	],	"type":"Assassin"};var tyrael = {	"q":[		["url","assets/abilities/muradin/muradin_stormbolt.png"],		["abilityName","Storm Bolt"],		["abilityDesc","Throw a hammer, dealing moderate damage to the first enemy hit and stunning it for 1.5 seconds."]	],	"w":[		["url","assets/abilities/muradin/muradin_thunderclap.png"],		["abilityName","Thunder Clap"],		["abilityDesc","Deals moderate damage and slows enemies by 25% for 2.5 seconds."]	],	"e":[		["url","assets/abilities/muradin/muradin_dwarfToss.png"],		["abilityName","Dwarf Toss"],		["abilityDesc","Leap to target location, dealing moderate damage to enemies on landing."]	],	"heroic1":[		["url","assets/abilities/muradin/muradin_avatar.png"],		["abilityName","Avatar"],		["abilityDesc","Transform for 20 seconds, gaining a massive amount of Health and causing your Basic Attacks to stun enemies."]	],	"heroic2":[		["url","assets/abilities/muradin/muradin_haymaker.png"],		["abilityName","Haymaker"],		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing massive damage and knocking the target back, hitting enemies in the way for moderate damage and knocking them aside."]	],	"trait":[		["url","assets/abilities/muradin/muradin_secondWind.png"],		["abilityName","Second Wind"],		["abilityDesc","Restore a moderate amount of Health each second when you have not taken damage for 4 seconds. When below 40% Health, Health restored per second doubles."]	],	"type":"Warrior"};var nazeebo = {	"q":[		["url","assets/abilities/muradin/muradin_stormbolt.png"],		["abilityName","Storm Bolt"],		["abilityDesc","Throw a hammer, dealing moderate damage to the first enemy hit and stunning it for 1.5 seconds."]	],	"w":[		["url","assets/abilities/muradin/muradin_thunderclap.png"],		["abilityName","Thunder Clap"],		["abilityDesc","Deals moderate damage and slows enemies by 25% for 2.5 seconds."]	],	"e":[		["url","assets/abilities/muradin/muradin_dwarfToss.png"],		["abilityName","Dwarf Toss"],		["abilityDesc","Leap to target location, dealing moderate damage to enemies on landing."]	],	"heroic1":[		["url","assets/abilities/muradin/muradin_avatar.png"],		["abilityName","Avatar"],		["abilityDesc","Transform for 20 seconds, gaining a massive amount of Health and causing your Basic Attacks to stun enemies."]	],	"heroic2":[		["url","assets/abilities/muradin/muradin_haymaker.png"],		["abilityName","Haymaker"],		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing massive damage and knocking the target back, hitting enemies in the way for moderate damage and knocking them aside."]	],	"trait":[		["url","assets/abilities/muradin/muradin_secondWind.png"],		["abilityName","Second Wind"],		["abilityDesc","Restore a moderate amount of Health each second when you have not taken damage for 4 seconds. When below 40% Health, Health restored per second doubles."]	],	"type":"Specialist"};var sonya = {	"q":[		["url","assets/abilities/muradin/muradin_stormbolt.png"],		["abilityName","Storm Bolt"],		["abilityDesc","Throw a hammer, dealing moderate damage to the first enemy hit and stunning it for 1.5 seconds."]	],	"w":[		["url","assets/abilities/muradin/muradin_thunderclap.png"],		["abilityName","Thunder Clap"],		["abilityDesc","Deals moderate damage and slows enemies by 25% for 2.5 seconds."]	],	"e":[		["url","assets/abilities/muradin/muradin_dwarfToss.png"],		["abilityName","Dwarf Toss"],		["abilityDesc","Leap to target location, dealing moderate damage to enemies on landing."]	],	"heroic1":[		["url","assets/abilities/muradin/muradin_avatar.png"],		["abilityName","Avatar"],		["abilityDesc","Transform for 20 seconds, gaining a massive amount of Health and causing your Basic Attacks to stun enemies."]	],	"heroic2":[		["url","assets/abilities/muradin/muradin_haymaker.png"],		["abilityName","Haymaker"],		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing massive damage and knocking the target back, hitting enemies in the way for moderate damage and knocking them aside."]	],	"trait":[		["url","assets/abilities/muradin/muradin_secondWind.png"],		["abilityName","Second Wind"],		["abilityDesc","Restore a moderate amount of Health each second when you have not taken damage for 4 seconds. When below 40% Health, Health restored per second doubles."]	],	"type":"Warrior"};var arthas = {	"q":[		["url","assets/abilities/muradin/muradin_stormbolt.png"],		["abilityName","Storm Bolt"],		["abilityDesc","Throw a hammer, dealing moderate damage to the first enemy hit and stunning it for 1.5 seconds."]	],	"w":[		["url","assets/abilities/muradin/muradin_thunderclap.png"],		["abilityName","Thunder Clap"],		["abilityDesc","Deals moderate damage and slows enemies by 25% for 2.5 seconds."]	],	"e":[		["url","assets/abilities/muradin/muradin_dwarfToss.png"],		["abilityName","Dwarf Toss"],		["abilityDesc","Leap to target location, dealing moderate damage to enemies on landing."]	],	"heroic1":[		["url","assets/abilities/muradin/muradin_avatar.png"],		["abilityName","Avatar"],		["abilityDesc","Transform for 20 seconds, gaining a massive amount of Health and causing your Basic Attacks to stun enemies."]	],	"heroic2":[		["url","assets/abilities/muradin/muradin_haymaker.png"],		["abilityName","Haymaker"],		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing massive damage and knocking the target back, hitting enemies in the way for moderate damage and knocking them aside."]	],	"trait":[		["url","assets/abilities/muradin/muradin_secondWind.png"],		["abilityName","Second Wind"],		["abilityDesc","Restore a moderate amount of Health each second when you have not taken damage for 4 seconds. When below 40% Health, Health restored per second doubles."]	],	"type":"Warrior"};var tassadar = {	"q":[		["url","assets/abilities/muradin/muradin_stormbolt.png"],		["abilityName","Storm Bolt"],		["abilityDesc","Throw a hammer, dealing moderate damage to the first enemy hit and stunning it for 1.5 seconds."]	],	"w":[		["url","assets/abilities/muradin/muradin_thunderclap.png"],		["abilityName","Thunder Clap"],		["abilityDesc","Deals moderate damage and slows enemies by 25% for 2.5 seconds."]	],	"e":[		["url","assets/abilities/muradin/muradin_dwarfToss.png"],		["abilityName","Dwarf Toss"],		["abilityDesc","Leap to target location, dealing moderate damage to enemies on landing."]	],	"heroic1":[		["url","assets/abilities/muradin/muradin_avatar.png"],		["abilityName","Avatar"],		["abilityDesc","Transform for 20 seconds, gaining a massive amount of Health and causing your Basic Attacks to stun enemies."]	],	"heroic2":[		["url","assets/abilities/muradin/muradin_haymaker.png"],		["abilityName","Haymaker"],		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing massive damage and knocking the target back, hitting enemies in the way for moderate damage and knocking them aside."]	],	"trait":[		["url","assets/abilities/muradin/muradin_secondWind.png"],		["abilityName","Second Wind"],		["abilityDesc","Restore a moderate amount of Health each second when you have not taken damage for 4 seconds. When below 40% Health, Health restored per second doubles."]	],	"type":"Support"};var liming = {	"q":[		["url","assets/abilities/muradin/muradin_stormbolt.png"],		["abilityName","Storm Bolt"],		["abilityDesc","Throw a hammer, dealing moderate damage to the first enemy hit and stunning it for 1.5 seconds."]	],	"w":[		["url","assets/abilities/muradin/muradin_thunderclap.png"],		["abilityName","Thunder Clap"],		["abilityDesc","Deals moderate damage and slows enemies by 25% for 2.5 seconds."]	],	"e":[		["url","assets/abilities/muradin/muradin_dwarfToss.png"],		["abilityName","Dwarf Toss"],		["abilityDesc","Leap to target location, dealing moderate damage to enemies on landing."]	],	"heroic1":[		["url","assets/abilities/muradin/muradin_avatar.png"],		["abilityName","Avatar"],		["abilityDesc","Transform for 20 seconds, gaining a massive amount of Health and causing your Basic Attacks to stun enemies."]	],	"heroic2":[		["url","assets/abilities/muradin/muradin_haymaker.png"],		["abilityName","Haymaker"],		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing massive damage and knocking the target back, hitting enemies in the way for moderate damage and knocking them aside."]	],	"trait":[		["url","assets/abilities/muradin/muradin_secondWind.png"],		["abilityName","Second Wind"],		["abilityDesc","Restore a moderate amount of Health each second when you have not taken damage for 4 seconds. When below 40% Health, Health restored per second doubles."]	],	"type":"Assassin"	};function drawAbilities() {	var content = "<img src=\""+name.trait[0][1]+"\" style=\"width:100px\">";	$("#trait_img").html("");	$("#trait_img").append(content);	content = "";	content=name.trait[1][1];	$(".trait_name").html("");	$(".trait_name").append(content+":");	content = "";	content=name.trait[2][1];	$(".trait_desc").html("");	$(".trait_desc").append(content);};function populateQ(name) {	var content = "<img src=\""+name.q[0][1]+"\" style=\"width:100px\" \">";	content+="<img src=\"assets/abilities/ability-icon-frame.png\" style=\"width:100px;position:absolute;top: 0;left: 1%;z-index: 1;\">";	$("#q_img").html("");	$("#q_img").append(content);	content = "";	content=name.q[1][1];	$(".q_name").html("");	$(".q_name").append(content+":");	content = "";	content=name.q[2][1];	$(".q_desc").html("");	$(".q_desc").append(content);};function populateW(name) {	var content = "<img src=\""+name.w[0][1]+"\" style=\"width:100px\">";	content+="<img src=\"assets/abilities/ability-icon-frame.png\" style=\"width:100px;position:absolute;top: 0;left: 2%;z-index: 1;\">";	$("#w_img").html("");	$("#w_img").append(content);	content = "";	content=name.w[1][1];	$(".w_name").html("");	$(".w_name").append(content+":");	content = "";	content=name.w[2][1];	$(".w_desc").html("");	$(".w_desc").append(content);};function populateE(name) {	var content = "<img src=\""+name.e[0][1]+"\" style=\"width:100px\">";	content+="<img src=\"assets/abilities/ability-icon-frame.png\" style=\"width:100px;position:absolute;top: 0;left: 2%;z-index: 1;\" class=\"overlayimg\">";	$("#e_img").html("");	$("#e_img").append(content);	content = "";	content=name.e[1][1];	$(".e_name").html("");	$(".e_name").append(content+":");	content = "";	content=name.e[2][1];	$(".e_desc").html("");	$(".e_desc").append(content);};function populateH1(name) {	var content = "<img src=\""+name.heroic1[0][1]+"\" style=\"width:100px\">";	content+="<img src=\"assets/abilities/ability-icon-frame.png\" style=\"width:100px;position:absolute;top: 0;left: 2%;z-index: 1;\">";	$("#firstheroic_img").html("");	$("#firstheroic_img").append(content);	content = "";	content=name.heroic1[1][1];	$(".firstheroic_name").html("");	$(".firstheroic_name").append(content+":");	content = "";	content=name.heroic1[2][1];	$(".firstheroic_desc").html("");	$(".firstheroic_desc").append(content);};function populateH2(name) {	var content = "<img src=\""+name.heroic2[0][1]+"\" style=\"width:100px\">";	content+="<img src=\"assets/abilities/ability-icon-frame.png\" style=\"width:100px;position:absolute;top: 0;left: 2%;z-index: 1;\">";	$("#secondheroic_img").html("");	$("#secondheroic_img").append(content);	content = "";	content=name.heroic2[1][1];	$(".secondheroic_name").html("");	$(".secondheroic_name").append(content+":");	content = "";	content=name.heroic2[2][1];	$(".secondheroic_desc").html("");	$(".secondheroic_desc").append(content);};function populateT(name) {	var content = "<img src=\""+name.trait[0][1]+"\" style=\"width:100px\">";	content+="<img src=\"assets/abilities/ability-icon-frame.png\" style=\"width:100px;position:absolute;top: 0;left: 2%;z-index: 1;\">";	$("#trait_img").html("");	$("#trait_img").append(content);	content = "";	content=name.trait[1][1];	$(".trait_name").html("");	$(".trait_name").append(content+":");	content = "";	content=name.trait[2][1];	$(".trait_desc").html("");	$(".trait_desc").append(content);};/*function populateClass(type) {	var content = "";	switch(type){		case "Specialist":			$(".class_img").css("height","200px");			$(".class_img").css("width","200px");			$(".class_img").css("background","url(assets/abilities/role-icons.png)");			$(".class_img").css("background-position", "100% 0;");			$(".class_img").html("TEST");			break;		case "Warrior":			$(".class_img").css("height","200px");			$(".class_img").css("width","200px");			$(".class_img").css("background","url(assets/abilities/role-icons.png)");			$(".class_img").css("background-position", "0 0;");			$(".class_img").html("TEST");			break;		case "Support":			$(".class_img").css("height","200px");			$(".class_img").css("width","200px");			$(".class_img").css("background","url(assets/abilities/role-icons.png)");			$(".class_img").css("background-position", "66.66% 0;");			$(".class_img").html("TEST");			break;		case "Assassin":			$(".class_img").css("background","url(assets/abilities/role-icons.png)");			console.log($(".class_img").css('background-position', '33.33% 0;'));			break;	}};*/function populateAbilities(name){	populateQ(name);	populateW(name);	populateE(name);	populateH1(name);	populateH2(name);	populateT(name);		//populateClass(name.type)};function background(name){	$("#classinfo").show();	$("#heroimage").css("height", "740px");	$("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/" + name + ".jpg) top no-repeat");}$(".heroes").click(function(){	var someElementID = $(this).attr("id");	var name = eval(someElementID);	populateAbilities(name);	background(someElementID);});function showcurweek() {	$(".nextweek").hide();	$(".currentweek").show();}function shownextweek() {	$(".currentweek").hide();	$(".nextweek").show();}