$(document).ready(function(){
	$("#classinfo").hide();
	$(".currentweek").hide();
	$(".nextweek").hide();
	$("#currentweekbtn span").text(currWeekDate);
	$("#nextweekbtn span").text(nextWeekDate);
	mapHeroes();
});

var currWeekDate = "Apr 19 - 26";
var nextWeekDate = "Apr 26 - May 3";
var heroesArr = ["Raynor","Muradin","Uther","Kerrigan","Tyrael","Nazeebo","Sonya","Arthas","Tassadar","Li-Ming"];

function mapHeroes(){
	for (i=0;i<heroesArr.length;i++){
		var heroid = "hid";
		var currHero = String(i);
		heroid = heroid.concat(currHero);
		var selector = '.'+heroid+' h5';
		$(selector).text(heroesArr[i]);
		selector = '.'+heroid;
		var value = (heroesArr[i]);
		value = value.replace(/'/g, '');
		value = value.replace(/-/g, '');
		value = value.toLowerCase();
		$(selector).attr('id',value);
	}
}

function populateAbilities(name){
	populateQ(name);
	populateW(name);
	populateE(name);
	populateH1(name);
	populateH2(name);
	populateT(name);
	
	//populateClass(name.type)
};

function drawAbilities() {
	var content = "<img src=\""+name.trait[0][1]+"\" style=\"width:100px\">";
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
	content+="<img src=\"assets/abilities/ability-icon-frame.png\" style=\"width:100px;position:absolute;top: 0;left: 2%;z-index: 1;\">";
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
	content+="<img src=\"assets/abilities/ability-icon-frame.png\" style=\"width:100px;position:absolute;top: 0;left: 2%;z-index: 1;\" class=\"overlayimg\">";
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
	content+="<img src=\"assets/abilities/ability-icon-frame.png\" style=\"width:100px;position:absolute;top: 0;left: 2%;z-index: 1;\">";
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
	content+="<img src=\"assets/abilities/ability-icon-frame.png\" style=\"width:100px;position:absolute;top: 0;left: 2%;z-index: 1;\">";
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
	content+="<img src=\"assets/abilities/ability-icon-frame.png\" style=\"width:100px;position:absolute;top: 0;left: 2%;z-index: 1;\">";
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

/*function populateClass(type) {
	var content = "";
	switch(type){
		case "Specialist":
			$(".class_img").css("height","200px");
			$(".class_img").css("width","200px");
			$(".class_img").css("background","url(assets/abilities/role-icons.png)");
			$(".class_img").css("background-position", "100% 0;");
			$(".class_img").html("TEST");
			break;
		case "Warrior":
			$(".class_img").css("height","200px");
			$(".class_img").css("width","200px");
			$(".class_img").css("background","url(assets/abilities/role-icons.png)");
			$(".class_img").css("background-position", "0 0;");
			$(".class_img").html("TEST");
			break;
		case "Support":
			$(".class_img").css("height","200px");
			$(".class_img").css("width","200px");
			$(".class_img").css("background","url(assets/abilities/role-icons.png)");
			$(".class_img").css("background-position", "66.66% 0;");
			$(".class_img").html("TEST");
			break;
		case "Assassin":
			$(".class_img").css("background","url(assets/abilities/role-icons.png)");
			console.log($(".class_img").css('background-position', '33.33% 0;'));
			break;
	}
};*/

function background(name){
	$("#classinfo").show();
	$("#heroimage").css("height", "740px");
	$("#heroimage").css("background", "url(assets/layout/trim-triangles-pink.png) bottom no-repeat, url(assets/heroes/" + name + ".jpg) top no-repeat");
}

$(".heroes").click(function(){
	var someElementID = $(this).attr("id");
	var name = eval(someElementID);
	populateAbilities(name);
	background(someElementID);
});

function showcurweek() {
	$(".nextweek").hide();
	$(".currentweek").show();
}

function shownextweek() {
	$(".currentweek").hide();
	$(".nextweek").show();
}


var raynor = {
	"heroic1":[
		["url","assets/abilities/raynor/raynor_hyperion.png"],
		["abilityName","Hyperion"],
		["abilityDesc","Order the Hyperion to make a strafing run dealing light damage each second, hitting up to 4 enemies. Also occasionally fires its Yamato Cannon on Structures for massive damage. Lasts 12 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/raynor/raynor_raynorsRaiders.png"],
		["abilityName","Raynor's Raiders"],
		["abilityDesc","Summons two cloaked Banshees that attack a targeted enemy. Each Banshee deals light damage. Last 22 seconds."]
	],
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
	"trait":[
		["url","assets/abilities/raynor/raynor_advancedOptics.png"],
		["abilityName","Advanced Optics"],
		["abilityDesc","Basic Attack range is 20% further than other ranged Heroes, and you see 10% further than other Heroes."]
	],
	"type":"Assassin"
};

var muradin = {
	"heroic1":[
		["url","assets/abilities/muradin/muradin_avatar.png"],
		["abilityName","Avatar"],
		["abilityDesc","Transform for 20 seconds, gaining a massive amount of Health and causing your Basic Attacks to stun enemies."]
	],
	"heroic2":[
		["url","assets/abilities/muradin/muradin_haymaker.png"],
		["abilityName","Haymaker"],
		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing massive damage and knocking the target back, hitting enemies in the way for moderate damage and knocking them aside."]
	],
	"q":[
		["url","assets/abilities/muradin/muradin_stormBolt.png"],
		["abilityName","Storm Bolt"],
		["abilityDesc","Throw a hammer, dealing moderate damage to the first enemy hit and stunning it for 1.5 seconds."]
	],
	"w":[
		["url","assets/abilities/muradin/muradin_thunderClap.png"],
		["abilityName","Thunder Clap"],
		["abilityDesc","Deals moderate damage and slows enemies by 25% for 2.5 seconds."]
	],
	"e":[
		["url","assets/abilities/muradin/muradin_dwarfToss.png"],
		["abilityName","Dwarf Toss"],
		["abilityDesc","Leap to target location, dealing moderate damage to enemies on landing."]
	],
	"trait":[
		["url","assets/abilities/muradin/muradin_secondWind.png"],
		["abilityName","Second Wind"],
		["abilityDesc","Restore a moderate amount of Health each second when you have not taken damage for 4 seconds. When below 40% Health, Health restored per second doubles."]
	],
	"type":"Warrior"
};

var uther = {
	"heroic1":[
		["url","assets/abilities/uther/uther_divineShield.png"],
		["abilityName","Divine Shield"],
		["abilityDesc","Make an allied Hero Invulnerable and increase their Movement Speed by 20% for 3 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/uther/uther_divineStorm.png"],
		["abilityName","Divine Storm"],
		["abilityDesc","Deal moderate damage and stun nearby enemies for 1.5 seconds."]
	],
	"q":[
		["url","assets/abilities/uther/uther_holyLight.png"],
		["abilityName","Holy Light"],
		["abilityDesc","Heal an ally for a large amount of Health."]
	],
	"w":[
		["url","assets/abilities/uther/uther_holyRadiance.png"],
		["abilityName","Holy Radiance"],
		["abilityDesc","Heal all allies in a line for a large amount of Health, dealing moderate damage to enemies."]
	],
	"e":[
		["url","assets/abilities/uther/uther_hammerofJustice.png"],
		["abilityName","Hammer of Justice"],
		["abilityDesc","Deals moderate damage and stuns the target for 1 second."]
	],
	"trait":[
		["url","assets/abilities/uther/uther_eternalDevotion.png"],
		["abilityName","Eternal Devotion"],
		["abilityDesc","Upon dying, become an Invulnerable spirit for up to 10 seconds. Your Abilities and Basic Attacks do 50% healing and damage."]
	],
	"type":"Support"
};

var kerrigan = {
	"heroic1":[
		["url","assets/abilities/kerrigan/kerrigan_maelstrom.png"],
		["abilityName","Maelstrom"],
		["abilityDesc","Deals moderate damage each second to nearby enemies. Lasts for 9 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/kerrigan/kerrigan_summonUltralisk.png"],
		["abilityName","Summon Ultralisk"],
		["abilityDesc","Summons an Ultralisk that attacks the target to deal moderate damage. Attacks splash to nearby enemies for 50% damage. Lasts for 20 seconds."]
	],
	"q":[
		["url","assets/abilities/kerrigan/kerrigan_ravage.png"],
		["abilityName","Ravage"],
		["abilityDesc","Leap to a target, dealing moderate damage. If this kills the target, its cooldown is instantly reset."]
	],
	"w":[
		["url","assets/abilities/kerrigan/kerrigan_impalingBlades.png"],
		["abilityName","Impaling Blades"],
		["abilityDesc","Deals heavy damage to enemies within the target area, stunning them for 1 second."]
	],
	"e":[
		["url","assets/abilities/kerrigan/kerrigan_primalGrasp.png"],
		["abilityName","Primal Grasp"],
		["abilityDesc","Pulls enemies within the target area towards you, dealing moderate damage."]
	],
	"trait":[
		["url","assets/abilities/kerrigan/kerrigan_assimilation.png"],
		["abilityName","Assimilation"],
		["abilityDesc","Gain 10% of damage dealt from Basic Attacks and Abilities as Shields for 6 seconds. Shield amount gained doubled against Heroes."]
	],
	"type":"Assassin"
};

var tyrael = {
	"heroic1":[
		["url","assets/abilities/tyrael/tyrael_judgment.png"],
		["abilityName","Judgment"],
		["abilityDesc","Charge the target, dealing moderate damage and stunning them for 1.5 seconds. Nearby enemies are knocked away and take moderate damage."]
	],
	"heroic2":[
		["url","assets/abilities/tyrael/tyrael_sanctification.png"],
		["abilityName","Sanctification"],
		["abilityDesc","While channeling, Tyrael makes all nearby allied Heroes invulnerable and unstoppable. Lasts 3 seconds.  Does not affect Tyrael."]
	],
	"q":[
		["url","assets/abilities/tyrael/tyrael_elDruinsMight.png"],
		["abilityName","El'Druin's Might"],
		["abilityDesc","Deals moderate damage to enemies within target area, slowing them by 25%. Reactivating will teleport you to the blade and slow nearby enemies by 25%."]
	],
	"w":[
		["url","assets/abilities/tyrael/tyrael_righteousness.png"],
		["abilityName","Righteousness"],
		["abilityDesc","Grants massive Shields to you and strong Shields to nearby allies. Lasts 4 seconds."]
	],
	"e":[
		["url","assets/abilities/tyrael/tyrael_smite.png"],
		["abilityName","Smite"],
		["abilityDesc","Rake target area for moderate damage. Allies moving through the targeted area gain 25% increased Movement Speed for 2 seconds."]
	],
	"trait":[
		["url","assets/abilities/tyrael/tyrael_archangelsWrath.png"],
		["abilityName","Archangel's Wrath"],
		["abilityDesc","When you die, become invulnerable and explode for massive damage after 3.5 seconds."]
	],
	"type":"Warrior"
};

var nazeebo = {
	"heroic1":[
		["url","assets/abilities/nazeebo/nazeebo_gargantuan.png"],
		["abilityName","Gargantuan"],
		["abilityDesc","Summon a Gargantuan that deals moderate impact damage when created. The Gargantuan's Basic Attacks deal heavy damage and splash for 50%. It can also grab enemy Minions, and will stomp nearby enemies for moderate damage and slow their Movement Speed by 30%. Lasts for 20 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/nazeebo/nazeebo_ravenousSpirit.png"],
		["abilityName","Ravenous Spirit"],
		["abilityDesc","Channel a Ravenous Spirit that deals moderate damage each second. Cannot move while channeling. Lasts for 8 seconds."]
	],
	"q":[
		["url","assets/abilities/nazeebo/nazeebo_corpseSpiders.png"],
		["abilityName","Corpse Spiders"],
		["abilityDesc","Deal moderate damage and create 3 Corpse Spiders that deal light damage. Spiders last for 4 seconds."]
	],
	"w":[
		["url","assets/abilities/nazeebo/nazeebo_zombieWall.png"],
		["abilityName","Zombie Wall"],
		["abilityDesc","After a short delay, create a ring of Zombies surrounding the target area that deal light damage and last for 3 seconds."]
	],
	"e":[
		["url","assets/abilities/nazeebo/nazeebo_plagueofToads.png"],
		["abilityName","Plague of Toads"],
		["abilityDesc","Create 5 Toads that deal moderate damage."]
	],
	"trait":[
		["url","assets/abilities/nazeebo/nazeebo_voodooRitual.png"],
		["abilityName","Voodoo Ritual"],
		["abilityDesc","Ability and attack damage poisons enemies for a small amount of additional damage over 4 seconds.   If a poisoned enemy dies, Nazeebo regenerates 2% Health and 1% Mana."]
	],
	"type":"Specialist"
};

var sonya = {
	"heroic1":[
		["url","assets/abilities/sonya/sonya_leap.png"],
		["abilityName","Leap"],
		["abilityDesc","Leap into the air, dealing moderate damage to nearby enemies, and stunning them for 1.5 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/sonya/sonya_wrathoftheBerserker.png"],
		["abilityName","Wrath of the Berserker"],
		["abilityDesc","Gain 40% Bonus Damage on all Basic Attacks and Abilities. Stuns, slows, silences, polymorphs and roots against you have 50% reduced duration. Lasts 15 seconds, and extends by 1 second for every 10 Fury gained while active."]
	],
	"q":[
		["url","assets/abilities/sonya/sonya_ancientSpear.png"],
		["abilityName","Ancient Spear"],
		["abilityDesc","Throw out a spear that pulls you to the first enemy hit, dealing heavy damage and briefly stunning them. If this hits, generate 40 Fury."]
	],
	"w":[
		["url","assets/abilities/sonya/sonya_seismicSlam.png"],
		["abilityName","Seismic Slam"],
		["abilityDesc","Deals heavy damage to the target enemy, and light damage to enemies behind the target."]
	],
	"e":[
		["url","assets/abilities/sonya/sonya_whirlwind.png"],
		["abilityName","Whirlwind"],
		["abilityDesc","Deals massive damage to nearby enemies over 4 seconds, and heals for 40% of damage dealt."]
	],
	"trait":[
		["url","assets/abilities/sonya/sonya_fury.png"],
		["abilityName","Fury"],
		["abilityDesc","Use Fury instead of Mana, which is gained by taking or dealing damage. Using an Ability grants 10% Movement Speed for 4 seconds."]
	],
	"type":"Warrior"
};

var arthas = {
	"heroic1":[
		["url","assets/abilities/arthas/arthas_armyoftheDead.png"],
		["abilityName","Army of the Dead"],
		["abilityDesc","Summons Ghouls that last 15 seconds. Sacrifice Ghouls to heal for a large amount of Health."]
	],
	"heroic2":[
		["url","assets/abilities/arthas/arthas_summonSindragosa.png"],
		["abilityName","Summon Sindragosa"],
		["abilityDesc","Deals heavy damage, slows enemy Heroes, and freezes Minions for 10 seconds and Structures for 20 seconds."]
	],
	"q":[
		["url","assets/abilities/arthas/arthas_deathCoil.png"],
		["abilityName","Death Coil"],
		["abilityDesc","Deals heavy damage to target enemy.  Can be self-cast to heal for a large amount of Health."]
	],
	"w":[
		["url","assets/abilities/arthas/arthas_howlingBlast.png"],
		["abilityName","Howling Blast"],
		["abilityDesc","Root enemies within the target area for 1.5 seconds and deals moderate damage."]
	],
	"e":[
		["url","assets/abilities/arthas/arthas_frozenTempest.png"],
		["abilityName","Frozen Tempest"],
		["abilityDesc","Deals moderate damage each second to nearby enemies. Slows enemy Move Speed by 6% per second, stacking up to 30%."]
	],
	"trait":[
		["url","assets/abilities/arthas/arthas_frostmourneHungers.png"],
		["abilityName","Frostmourne Hungers"],
		["abilityDesc","Activate to make your next Basic Attack strike immediately, do 100% increased damage, and restore a moderate amount of Mana."]
	],
	"type":"Warrior"
};

var tassadar = {
	"heroic1":[
		["url","assets/abilities/tassadar/tassadar_archon.png"],
		["abilityName","Archon"],
		["abilityDesc","Transform into an Archon, gaining a massive Shield, causing Basic Attacks to deal moderate damage and splash for half additional damage. Lasts for 12 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/tassadar/tassadar_forceWall.png"],
		["abilityName","Force Wall"],
		["abilityDesc","Create a wall that blocks all units from moving through it for 2.5 seconds."]
	],
	"q":[
		["url","assets/abilities/tassadar/tassadar_plasmaShield.png"],
		["abilityName","Plasma Shield"],
		["abilityDesc","Shield target ally, absorbing a massive amount of damage for 8 seconds."]
	],
	"w":[
		["url","assets/abilities/tassadar/tassadar_psionicStorm.png"],
		["abilityName","Psionic Storm"],
		["abilityDesc","Deal moderate damage each second to enemies in target area for 3 seconds."]
	],
	"e":[
		["url","assets/abilities/tassadar/tassadar_dimensionalShift.png"],
		["abilityName","Dimensional Shift"],
		["abilityDesc","Become invulnerable and fully invisible for 1.5 seconds."]
	],
	"trait":[
		["url","assets/abilities/tassadar/tassadar_oracle.png"],
		["abilityName","Oracle"],
		["abilityDesc","Greatly increases your vision radius and allows you to detect Stealthed enemy Heroes. Lasts for 5 seconds."]
	],
	"type":"Support"
};

var liming = {
	"heroic1":[
		["url","assets/abilities/li-ming/li-ming_disintegrate.png"],
		["abilityName","Disintegrate"],
		["abilityDesc","Channel a powerful beam, dealing massive damage over 2.5 seconds to enemies caught in it. The direction of the beam changes with your cursor’s position."]
	],
	"heroic2":[
		["url","assets/abilities/li-ming/li-ming_waveofForce.png"],
		["abilityName","Wave of Force"],
		["abilityDesc","Knock away all enemies from an area and deal heavy damage."]
	],
	"q":[
		["url","assets/abilities/li-ming/li-ming_magicMissiles.png"],
		["abilityName","Magic Missiles"],
		["abilityDesc","Fire three missiles toward an area, each dealing heavy damage to the first enemy hit."]
	],
	"w":[
		["url","assets/abilities/li-ming/li-ming_arcaneOrb.png"],
		["abilityName","Arcane Orb"],
		["abilityDesc","Fire an orb that powers up as it travels, dealing heavy damage to the first enemy hit. The further the orb travels, the harder it hits—up to massive damage at maximum range."]
	],
	"e":[
		["url","assets/abilities/li-ming/li-ming_teleport.png"],
		["abilityName","Teleport"],
		["abilityDesc","Teleport a short distance instantly."]
	],
	"trait":[
		["url","assets/abilities/li-ming/li-ming_criticalMass.png"],
		["abilityName","Critical Mass"],
		["abilityDesc","Getting a Takedown will refresh the cooldown on all of your Abilities."]
	],
	"type":"Assassin"
};
