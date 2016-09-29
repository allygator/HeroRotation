$(document).ready(function ( ) {
	$("#classinfo").hide();
	$(".currentweek").hide();
	$(".nextweek").hide();
	$("#currentweekbtn span").text(currWeekDate);
	$("#nextweekbtn span").text(nextWeekDate);
	mapHeroes();
});

var currWeekDate = "Sept 27 - Oct 4";
var nextWeekDate = "Apr 26 - May 3";
var heroesArr = ["Li Li","ETC","Jaina","Sylvanas","The Butcher","Artanis","Rehgar","Diablo","Chromie","Zeratul"];

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
}

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
}

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
}

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
}

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
}

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
}

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

//Heroes-Arrays
var zarya = {
	"heroic1":[
		["url","assets/abilities/zarya/zarya_gravitonSurge.png"],
		["abilityName","Graviton Surge"],
		["abilityDesc","Launch a gravity bomb that detonates after 1 second and draws enemy Heroes toward the center for 2.5 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/zarya/zarya_expulsionZone.png"],
		["abilityName","Expulsion Zone"],
		["abilityDesc","Launch a gravity bomb that deals 124 damage and creates an expulsion zone for 3.5 seconds. Enemies who enter the affected area are knocked back and have their Movement Speed reduced by 50% for 1 second."]
	],
	"q":[
		["url","assets/abilities/zarya/zarya_particleGrenade.png"],
		["abilityName","Particle Grenade"],
		["abilityDesc","Launch a particle grenade that deals 62 damage to enemies within the area. Deals 50% damage to Structures."]
	],
	"w":[
		["url","assets/abilities/zarya/zarya_personalBarrier.png"],
		["abilityName","Personal Barrier"],
		["abilityDesc","Gain a shield that absorbs 560 damage for 3 seconds."]
	],
	"e":[
		["url","assets/abilities/zarya/zarya_shieldAlly.png"],
		["abilityName","Shield Ally"],
		["abilityDesc","Grants an allied Hero a shield that absorbs 420 damage for 3 seconds."]
	],
	"trait":[
		["url","assets/abilities/zarya/zarya_energy.png"],
		["abilityName","Energy"],
		["abilityDesc","Each time Zarya's Personal Barrier or Shield Ally absorbs 10 damage, her Energy is increased by 1. Each point of Energy increases Zarya's damage by 2%. After 0.5 seconds, Energy decays by 3 per second."]
	],
	"type":"Warrior"
}

var alarak = {
	"heroic1":[
		["url","assets/abilities/alarak/alarak_counter-Strike.png"],
		["abilityName","Counter-Strike"],
		["abilityDesc","Alarak becomes Protected and channels for 1 second. If an enemy Hero attacked Alarak during that time, Alarak sends a shockwave forward that deals 250 damage."]
	],
	"heroic2":[
		["url","assets/abilities/alarak/alarak_deadlyCharge.png"],
		["abilityName","Deadly Charge"],
		["abilityDesc","After channeling, Alarak charges forward dealing 200 damage to all enemies in the path. Distance is increased based on the amount of time channeled, up to 1.6 seconds. Issuing a Move order while this is channeling will cancel it at no cost. Taking damage will interrupt the channeling."]
	],
	"q":[
		["url","assets/abilities/alarak/alarak_discordStrike.png"],
		["abilityName","Discord Strike"],
		["abilityDesc","After a 0.5 second delay, enemies in front of Alarak take 175 damage and are silenced for 1.5 seconds."]
	],
	"w":[
		["url","assets/abilities/alarak/alarak_telekinesis.png"],
		["abilityName","Telekinesis"],
		["abilityDesc","Create a force, pushing yourself and all enemies hit from the targeted point towards the targeted direction. Deals 48 damage to enemies."]
	],
	"e":[
		["url","assets/abilities/alarak/alarak_lightningSurge.png"],
		["abilityName","Lightning Surge"],
		["abilityDesc","Deal 90 damage to an enemy and all enemies between you and the target. 75% of the damage dealt to enemy Heroes is returned as health."]
	],
	"trait":[
		["url","assets/abilities/alarak/alarak_sadism.png"],
		["abilityName","Sadism"],
		["abilityDesc","Alarak deals 100% more Ability damage versus enemy Heroes."]
	],
	"type":"Assassin"
};
var auriel = {
	"heroic1":[
		["url","assets/abilities/auriel/auriel_crystalAegis.png"],
		["abilityName","Crystal Aegis"],
		["abilityDesc","Place an allied Hero into Stasis for 2 seconds. Upon expiration, Crystal Aegis deals 270 damage to all nearby enemies."]
	],
	"heroic2":[
		["url","assets/abilities/auriel/auriel_resurrect.png"],
		["abilityName","Resurrect"],
		["abilityDesc","Channel on the spirit of a dead ally for 3 seconds, bringing them back to life with 50% of their maximum health at the location where they died."]
	],
	"q":[
		["url","assets/abilities/auriel/auriel_sacredSweep.png"],
		["abilityName","Sacred Sweep"],
		["abilityDesc","Sweep the area with sacred power, dealing 80 damage to enemies and an additional 160 damage to enemies caught in the center."]
	],
	"w":[
		["url","assets/abilities/auriel/auriel_rayOfHeaven.png"],
		["abilityName","Ray Of Heaven"],
		["abilityDesc","Consume your stored energy and heal allied Heroes in the area for the amount of energy consumed."]
	],
	"e":[
		["url","assets/abilities/auriel/auriel_detainmentStrike.png"],
		["abilityName","Detainment Strike"],
		["abilityDesc","Deal 100 damage to the first enemy Hero hit and knock them back. If they collide with terrain, they are also stunned for 1.25 seconds and take an additional 100 damage."]
	],
	"trait":[
		["url","assets/abilities/auriel/auriel_bestowHope.png"],
		["abilityName","Bestow Hope"],
		["abilityDesc","Bestow an allied Hero with Hope. While they remain near you, damage they deal causes you to gain energy. You can only have Bestow Hope on 1 ally at a time. 40% of damage dealt to Heroes and 8% dealt to non-Heroes is stored as energy. You can store up to 505 energy."]
	],
	"type":"Support"
};
var guldan = {
	"heroic1":[
		["url","assets/abilities/guldan/guldan_horrify.png"],
		["abilityName","Horrify"],
		["abilityDesc","After a short delay, deal heavy damage and cast Fear on enemy Heroes in the area for 2 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/guldan/guldan_rainofDestruction.png"],
		["abilityName","Rain of Destruction"],
		["abilityDesc","Summon a rain of meteors in an area for 7 seconds. Each meteor deals heavy damage in a small area."]
	],
	"q":[
		["url","assets/abilities/guldan/guldan_felFlame.png"],
		["abilityName","Fel Flame"],
		["abilityDesc","Release a wave of flame, dealing massive damage to enemies."]
	],
	"w":[
		["url","assets/abilities/guldan/guldan_drainLife.png"],
		["abilityName","Drain Life"],
		["abilityDesc","Drain the life from an enemy over 3 seconds, dealing heavy damage each second and healing Gul'dan for a large amount of Health."]
	],
	"e":[
		["url","assets/abilities/guldan/guldan_corruption.png"],
		["abilityName","Corruption"],
		["abilityDesc","Call forth 3 bursts of shadow energy, dealing massive damage over 6 seconds. Corruption can stack up to 3 times on an enemy."]
	],
	"trait":[
		["url","assets/abilities/guldan/guldan_lifeTap.png"],
		["abilityName","Life Tap"],
		["abilityDesc","Gul'dan does not regenerate Mana. Activate to restore 25% Mana at the cost of some of your Health."]
	],
	"type":"Assassin"
};
var medivh = {
	"heroic1":[
		["url","assets/abilities/medivh/medivh_polyBomb.png"],
		["abilityName","Poly Bomb"],
		["abilityDesc","Polymorph an enemy Hero, suppressing their attacks and Silencing them for 2 seconds. On expiration, Poly Bomb spreads to other nearby enemy Heroes."]
	],
	"heroic2":[
		["url","assets/abilities/medivh/medivh_leyLineSeal.png"],
		["abilityName","Ley Line Seal"],
		["abilityDesc","After 0.5 seconds, unleash a wave of energy that imprisons enemy Heroes in Stasis for 3 seconds."]
	],
	"q":[
		["url","assets/abilities/medivh/medivh_arcaneRift.png"],
		["abilityName","Arcane Rift"],
		["abilityDesc","Launch a Rift that deals moderate damage to enemies in its path. If an enemy Hero is hit, reduce Arcane Rift's cooldown by 5 seconds and refund a moderate amount of mana."]
	],
	"w":[
		["url","assets/abilities/medivh/medivh_forceofWill.png"],
		["abilityName","Force of Will"],
		["abilityDesc","Protect an allied Hero from all damage for 1.5 seconds."]
	],
	"e":[
		["url","assets/abilities/medivh/medivh_portal.png"],
		["abilityName","Portal"],
		["abilityDesc","Create a set of portals between you and the target location, allowing allies to teleport between both. The portals last 6 seconds."]
	],
	"trait":[
		["url","assets/abilities/medivh/medivh_ravenForm.png"],
		["abilityName","Raven Form"],
		["abilityDesc","Instead of mounting, Medivh can transform into a raven, increasing Movement Speed by 15%. While transformed, Medivh can see and fly over all terrain and is immune to all effects."]
	],
	"type":"Specialist"
};
var chromie = {
	"heroic1":[
		["url","assets/abilities/chromie/chromie_slowingSands.png"],
		["abilityName","Slowing Sands"],
		["abilityDesc","Place a sand vortex that greatly slows enemies inside it. The longer it is active, the more it slows, up to 50% after 5 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/chromie/chromie_temporalLoop.png"],
		["abilityName","Temporal Loop"],
		["abilityDesc","Choose an enemy Hero. After 3 seconds, they will be teleported back to the location where you cast Temporal Loop on them."]
	],
	"q":[
		["url","assets/abilities/chromie/chromie_sandBlast.png"],
		["abilityName","Sand Blast"],
		["abilityDesc","After 1 second, fire a missile that deals massive damage to the first enemy Hero hit."]
	],
	"w":[
		["url","assets/abilities/chromie/chromie_dragonsBreath.png"],
		["abilityName","Dragon's Breath"],
		["abilityDesc","Fire a blast into the air that lands after 1.5 seconds, dealing massive damage to enemies in an area. Enemies cannot see where the blast will land."]
	],
	"e":[
		["url","assets/abilities/chromie/chromie_timeTrap.png"],
		["abilityName","Time Trap"],
		["abilityDesc","Place a Time Trap that arms and Stealths after 2 seconds. The first enemy Hero to touch it will be put in Stasis for 2 seconds. Only 1 trap can exist at once."]
	],
	"trait":[
		["url","assets/abilities/chromie/chromie_timewalker.png"],
		["abilityName","Timewalker"],
		["abilityDesc","You’ve traveled to the future, and as such, will learn your Talents 1 level earlier than your teammates!"]
	],
	"type":"Assassin"
};
var tracer = {
	"heroic1":[
		["url","assets/abilities/tracer/tracer_pulseBomb.png"],
		["abilityName","Pulse Bomb"],
		["abilityDesc","Fire a short range bomb that attaches to enemy units if you hit them. The bomb explodes after 1.5 seconds dealing massive damage to them and heavy damage to other nearby enemies. This Ability is slowly charged over time by dealing damage to enemies with Basic Attacks and Melee."]
	],
	"heroic2":[
		["url","assets/abilities/tracer/tracer_blink.png"],
		["abilityName","Blink"],
		["abilityDesc","Dash towards an area. Stores 3 charges."]
	],
	"q":[
		["url","assets/abilities/tracer/tracer_melee.png"],
		["abilityName","Melee"],
		["abilityDesc","Deal heavy damage to a nearby enemy, prioritizing Heroes. Gain 5% Pulse Bomb charge when damaging an enemy, and 10% against Heroes."]
	],
	"w":[
		["url","assets/abilities/tracer/tracer_recall.png"],
		["abilityName","Recall"],
		["abilityDesc","Return to the position you were at 3 seconds ago, refill your ammo, and remove all negative status effects from yourself."]
	],
	"e":[
		["url","assets/abilities/tracer/tracer_reload.png"],
		["abilityName","Reload"],
		["abilityDesc","Tracer can Basic Attack while moving, and after attacking 10 times needs to reload. She can manually reload early by activating Reload."]
	],
	"type":"Assassin"
};
var dehaka = {
	"heroic1":[
		["url","assets/abilities/dehaka/dehaka_isolation.png"],
		["abilityName","Isolation"],
		["abilityDesc","Launch biomass that deals massive damage to the first enemy Hero hit, silencing and slowing them 30% for 3 seconds. Only allows them to see a very short distance for 6 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/dehaka/dehaka_adaptation.png"],
		["abilityName","Adaptation"],
		["abilityDesc","After 5 seconds, heal for 60% of the damage you took over this period."]
	],
	"q":[
		["url","assets/abilities/dehaka/dehaka_drag.png"],
		["abilityName","Drag"],
		["abilityDesc","Lash out with your tongue, dealing heavy damage to the first enemy hit and dragging them with you for 1.75 seconds."]
	],
	"w":[
		["url","assets/abilities/dehaka/dehaka_darkSwarm.png"],
		["abilityName","Dark Swarm"],
		["abilityDesc","Deal moderate damage each second to nearby enemies for 3 seconds, and become able to move through units. Deals double damage to Heroes. Can be cast during Drag and Burrow."]
	],
	"e":[
		["url","assets/abilities/dehaka/dehaka_burrow.png"],
		["abilityName","Burrow"],
		["abilityDesc","Burrow into the ground, entering Stasis and becoming Invulnerable for 2 seconds."]
	],
	"trait":[
		["url","assets/abilities/dehaka/dehaka_essenceCollection.png"],
		["abilityName","Essence Collection"],
		["abilityDesc","Gain 10 Essence from Takedowns and 2 Essence from nearby Minions dying. Activate to consume all Essence and heal yourself over 5 seconds, with more Health being restored the more Essence you consume. Maximum of 50 Essence. Can be cast during Drag and Burrow."]
	],
	"type":"Warrior"
};
var xul = {
	"heroic1":[
		["url","assets/abilities/xul/xul_poisonNova.png"],
		["abilityName","Poison Nova"],
		["abilityDesc","After a short delay, release poisonous missiles that deal massive damage to all enemies hit over 10 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/xul/xul_skeletalMages.png"],
		["abilityName","Skeletal Mages"],
		["abilityDesc","Summon 4 Frost Mages in a line that deal moderate damage to nearby enemies and slow them by 30% for 2 seconds. Lasts up to 15 seconds."]
	],
	"q":[
		["url","assets/abilities/xul/xul_spectralScythe.png"],
		["abilityName","Spectral Scythe"],
		["abilityDesc","Summon a scythe that travels to you after 1 second, dealing massive damage to enemies."]
	],
	"w":[
		["url","assets/abilities/xul/xul_cursedStrikes.png"],
		["abilityName","Cursed Strikes"],
		["abilityDesc","Your Basic Attacks deal damage in a wide area and reduce the Attack Speed of enemies by 50% for 2 seconds. Lasts 4 seconds once triggered."]
	],
	"e":[
		["url","assets/abilities/xul/xul_bonePrison.png"],
		["abilityName","Bone Prison"],
		["abilityDesc","After a 2 second delay, deals heavy damage and roots the target enemy Hero for 2 seconds."]
	],
	"trait":[
		["url","assets/abilities/xul/xul_raiseSkeleton.png"],
		["abilityName","Raise Skeleton"],
		["abilityDesc","When a nearby enemy Minion dies, it becomes a Skeletal Warrior that deals moderate damage and lasts up to 15 seconds. Up to 4 Skeletal Warriors can be active at once."]
	],
	"type":"Specialist"
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
var greymane = {
	"heroic1":[
		["url","assets/abilities/greymane/greymane_gofortheThroat.png"],
		["abilityName","Go for the Throat"],
		["abilityDesc","Leap at an enemy Hero and shapeshift into a Worgen, slashing 3 times for massive total damage. If this kills them, this ability can be used a second time within 10 seconds for free."]
	],
	"heroic2":[
		["url","assets/abilities/greymane/greymane_markedfortheKill.png"],
		["abilityName","Marked for the Kill"],
		["abilityDesc","Shapeshift into a Human and fire a shot hitting the first enemy Hero for moderate damage. For 5 seconds, they are Vulnerable, taking 25% more damage, and you can re-activate this to leap at them and shapeshift into a Worgen."]
	],
	"q":[
		["url","assets/abilities/greymane/greymane_gilneanCocktail.png"],
		["abilityName","Gilnean Cocktail"],
		["abilityDesc","Hurl a flask that does moderate damage to the  first enemy hit and explodes for massive damage to enemies in a cone behind them."]
	],
	"w":[
		["url","assets/abilities/greymane/greymane_innerBeast.png"],
		["abilityName","Inner Beast"],
		["abilityDesc","Gain 50% Attack Speed for 3 seconds. Basic Attacks refresh this duration."]
	],
	"e":[
		["url","assets/abilities/greymane/greymane_darkflight.png"],
		["abilityName","Darkflight"],
		["abilityDesc","Shapeshift into a Worgen and leap at an enemy dealing heavy damage."]
	],
	"trait":[
		["url","assets/abilities/greymane/greymane_curseoftheWorgen.png"],
		["abilityName","Curse of the Worgen"],
		["abilityDesc","Use certain Abilities to shift between a Human and a Worgen. While Human, your Basic Attack is ranged. While Worgen, your Basic Attack is melee but deals 40% more damage."]
	],
	"type":"Assassin"
};
var lunara = {
	"heroic1":[
		["url","assets/abilities/lunara/lunara_thornwoodVine.png"],
		["abilityName","Thornwood Vine"],
		["abilityDesc","Send forth vines that deal heavy damage to all enemies in a line. Can hold 3 charges."]
	],
	"heroic2":[
		["url","assets/abilities/lunara/lunara_leapingStrike.png"],
		["abilityName","Leaping Strike"],
		["abilityDesc","Leap over an enemy, slowing them by 80% for 0.35 seconds and dealing massive damage. Has 2 charges."]
	],
	"q":[
		["url","assets/abilities/lunara/lunara_noxiousBlossom.png"],
		["abilityName","Noxious Blossom"],
		["abilityDesc","After 0.5 seconds, cause an area to explode with pollen, dealing heavy damage."]
	],
	"w":[
		["url","assets/abilities/lunara/lunara_cripplingSpores.png"],
		["abilityName","Crippling Spores"],
		["abilityDesc","Enemies currently afflicted by Nature’s Toxin have its duration increased by 3 seconds and are slowed by 40% decaying over 3 seconds."]
	],
	"e":[
		["url","assets/abilities/lunara/lunara_wisp.png"],
		["abilityName","Wisp"],
		["abilityDesc","Spawn a Wisp to scout an area. Can be redirected once active. Lasts 45 seconds."]
	],
	"trait":[
		["url","assets/abilities/lunara/lunara_naturesToxin.png"],
		["abilityName","Nature's Toxin"],
		["abilityDesc","Your Basic Attacks and damaging Abilities poison their target, dealing light damage each second for 3 seconds. Every additional application increases the duration by 3 seconds, up to a maximum of 9 seconds."]
	],
	"type":"Assassin"
};
/*var chogall = {
	"heroic1":[
		["url","assets/abilities/chogall/chogall_hammerofTwilight.png"],
		["abilityName","Hammer of Twilight"],
		["abilityDesc","Passively increases Basic Attack damage by 25%. Activate to swing the Hammer and deal massive damage, push enemies away, and stun for 0.75 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/chogall/chogall_upheaval.png"],
		["abilityName","Upheaval"],
		["abilityDesc","After 1 second, pull enemies toward you, slowing them by 25% for 3 seconds and dealing moderate damage."]
	],
	"q":[
		["url","assets/abilities/chogall/chogall_surgingFist.png"],
		["abilityName","Surging Fist"],
		["abilityDesc","Wind up for at least 1 second temporarily slowing yourself, then reactivate to charge in a direction. Enemies in your path are knocked aside and take moderate damage."]
	],
	"w":[
		["url","assets/abilities/chogall/chogall_consumingBlaze.png"],
		["abilityName","Consuming Blaze"],
		["abilityDesc","Ignite nearby enemies, dealing heavy damage over 4 seconds. If this hits an enemy, gain a large amount of health over 4 seconds."]
	],
	"e":[
		["url","assets/abilities/chogall/chogall_runeBomb.png"],
		["abilityName","Rune Bomb"],
		["abilityDesc","Roll a bomb dealing heavy damage to enemies in its path. Gall can use Runic Blast to detonate it and deal massive area damage."]
	],
	"trait":[
		["url","assets/abilities/chogall/chogall_two-Headed.png"],
		["abilityName","Two-Headed"],
		["abilityDesc","Gall is permanently attached to you, going where you go."]
	],
		["url","assets/abilities/chogall/chogall_shadowBoltVolley.png"],
		["abilityName","Shadow Bolt Volley"],
		["abilityDesc","Unleash 20 Shadow Bolts over 4 seconds, each dealing heavy damage to the first target hit. The bolts fire towards your mouse pointer."]
	],
		["url","assets/abilities/chogall/chogall_twistingNether.png"],
		["abilityName","Twisting Nether"],
		["abilityDesc","After 1 second, nearby enemies are slowed by 40% while you channel, up to 5 seconds. Activate to deal massive damage."]
	],
		["url","assets/abilities/chogall/chogall_shadowflame.png"],
		["abilityName","Shadowflame"],
		["abilityDesc","Deal heavy damage to enemies in the area."]
	],
		["url","assets/abilities/chogall/chogall_dreadOrb.png"],
		["abilityName","Dread Orb"],
		["abilityDesc","Throw a bomb that will bounce three times, dealing heavy damage to enemies."]
	],
		["url","assets/abilities/chogall/chogall_runicBlast.png"],
		["abilityName","Runic Blast"],
		["abilityDesc","Detonate Cho’s Rune Bomb, dealing massive damage around it."]
	],
		["url","assets/abilities/chogall/chogall_two-Headed.png"],
		["abilityName","Two-Headed"],
		["abilityDesc","Your head is attached to Cho."]
	],
	"type":"Assassin"
};*/
var artanis = {
	"heroic1":[
		["url","assets/abilities/artanis/artanis_suppressionPulse.png"],
		["abilityName","Suppression Pulse"],
		["abilityDesc","Deals large damage to enemies in an area and blinds them for 4 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/artanis/artanis_purifierBeam.png"],
		["abilityName","Purifier Beam"],
		["abilityDesc","Fire an orbital beam that deals massive damage and chases its target for 8 seconds."]
	],
	"q":[
		["url","assets/abilities/artanis/artanis_bladeDash.png"],
		["abilityName","Blade Dash"],
		["abilityDesc","Dash forward, dealing moderate damage to all enemies along the way. Then turn and dash to your original position dealing large damage to all enemies in the way."]
	],
	"w":[
		["url","assets/abilities/artanis/artanis_twinBlades.png"],
		["abilityName","Twin Blades"],
		["abilityDesc","Your next basic attack strikes the enemy 2 times."]
	],
	"e":[
		["url","assets/abilities/artanis/artanis_phasePrism.png"],
		["abilityName","Phase Prism"],
		["abilityDesc","Swap positions with an enemy Hero, dealing moderate damage."]
	],
	"trait":[
		["url","assets/abilities/artanis/artanis_shieldOverload.png"],
		["abilityName","Shield Overload"],
		["abilityDesc","Automatically gain a powerful shield for 5 seconds when you take damage while below 50% health. Your basic attacks lower the shield’s cooldown by 4 seconds."]
	],
	"type":"Warrior"
};
var ltmorales = {
	"heroic1":[
		["url","assets/abilities/lt-morales/lt-morales_stimDrone.png"],
		["abilityName","Stim Drone"],
		["abilityDesc","Grant an allied Hero 75% Attack Speed and 25% Movement Speed for 10 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/lt-morales/lt-morales_medivacDropship.png"],
		["abilityName","Medivac Dropship"],
		["abilityDesc","Target a location for a Medivac transport. For up to 10 seconds before takeoff, allies can right-click to enter the Medivac."]
	],
	"q":[
		["url","assets/abilities/lt-morales/lt-morales_healingBeam.png"],
		["abilityName","Healing Beam"],
		["abilityDesc","Heal an ally for a very large amount of Health each second as long as they are in range."]
	],
	"w":[
		["url","assets/abilities/lt-morales/lt-morales_safeguard.png"],
		["abilityName","Safeguard"],
		["abilityDesc","Grant an ally Resistant, reducing damage taken by 25% for 3 seconds."]
	],
	"e":[
		["url","assets/abilities/lt-morales/lt-morales_displacementGrenade.png"],
		["abilityName","Displacement Grenade"],
		["abilityDesc","Fire a grenade that explodes on the first enemy hit, dealing massive damage, knocking enemies away."]
	],
	"trait":[
		["url","assets/abilities/lt-morales/lt-morales_caduceusReactor.png"],
		["abilityName","Caduceus Reactor"],
		["abilityDesc","Regenerate 3% of your maximum Health every second after not taking damage for 4 seconds."]
	],
	"type":"Support"
};
var rexxar = {
	"heroic1":[
		["url","assets/abilities/rexxar/rexxar_unleashtheBoars.png"],
		["abilityName","Unleash the Boars"],
		["abilityDesc","Release a herd of boars that track down all enemy Heroes in a direction, dealing moderate damage, revealing, and slowing enemies by 40% for 5 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/rexxar/rexxar_bestialWrath.png"],
		["abilityName","Bestial Wrath"],
		["abilityDesc","Increases Misha's basic attack damage by 150% for 12 seconds."]
	],
	"q":[
		["url","assets/abilities/rexxar/rexxar_spiritSwoop.png"],
		["abilityName","Spirit Swoop"],
		["abilityDesc","Deal moderate damage to enemies in a line, slowing them by 30% for 2 seconds."]
	],
	"w":[
		["url","assets/abilities/rexxar/rexxar_misha,Charge!.png"],
		["abilityName","Misha, Charge!"],
		["abilityDesc","Misha charges in a line, dealing moderate damage and stunning enemies for 1.25 seconds."]
	],
	"e":[
		["url","assets/abilities/rexxar/rexxar_mendPet.png"],
		["abilityName","Mend Pet"],
		["abilityDesc","Heal Misha for a large amount of Health over 5 seconds."]
	],
	"trait":[
		["url","assets/abilities/rexxar/rexxar_misha.png"],
		["abilityName","Misha"],
		["abilityDesc","Activate to command Misha to alternately stay by your side or attack your enemies."]
	],
	"type":"Warrior"
};
var kharazim = {
	"heroic1":[
		["url","assets/abilities/kharazim/kharazim_seven-SidedStrike.png"],
		["abilityName","Seven-Sided Strike"],
		["abilityDesc","Become Invulnerable while striking the highest health nearby enemy hero for 7% of their maximum health up to 7 times."]
	],
	"heroic2":[
		["url","assets/abilities/kharazim/kharazim_divinePalm.png"],
		["abilityName","Divine Palm"],
		["abilityDesc","If the target ally would be killed within the next 3 seconds they are instead healed for a large amount."]
	],
	"q":[
		["url","assets/abilities/kharazim/kharazim_radiantDash.png"],
		["abilityName","Radiant Dash"],
		["abilityDesc","Jump to target ally or enemy. Enemy targets are hit with a Basic Attack. 2 charges."]
	],
	"w":[
		["url","assets/abilities/kharazim/kharazim_breathofHeaven.png"],
		["abilityName","Breath of Heaven"],
		["abilityDesc","Heal yourself and nearby allies for a moderate amount and give 10% movement speed for 3 seconds."]
	],
	"e":[
		["url","assets/abilities/kharazim/kharazim_deadlyReach.png"],
		["abilityName","Deadly Reach"],
		["abilityDesc","Gain 100% attack speed and 100% attack range for 2 seconds. Bonuses and the cooldown activate on your next Basic Attack after casting Deadly Reach."]
	],
	"trait":[
		["url","assets/abilities/kharazim/kharazim_pickYourTrait.png"],
		["abilityName","Pick Your Trait"],
		["abilityDesc","Choose between Transcendence, Iron Fists, and Insight from the Talents panel."]
	],
	"type":"Support"
};
var leoric = {
	"heroic1":[
		["url","assets/abilities/leoric/leoric_entomb.png"],
		["abilityName","Entomb"],
		["abilityDesc","Create an unpathable, indestructible cul-de-sac of pain in front of you for 4 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/leoric/leoric_marchoftheBlackKing.png"],
		["abilityName","March of the Black King"],
		["abilityDesc","Swing your mace three times, healing yourself for 15% of your max Health for each enemy Hero hit and dealing massive damage."]
	],
	"q":[
		["url","assets/abilities/leoric/leoric_skeletalSwing.png"],
		["abilityName","Skeletal Swing"],
		["abilityDesc","Wind up a large attack that deals heavy damage and slows enemies by 40% for 2.5 seconds."]
	],
	"w":[
		["url","assets/abilities/leoric/leoric_drainHope.png"],
		["abilityName","Drain Hope"],
		["abilityDesc","Throw out a chain, attaching to the first enemy Hero hit, slowing your Movement Speed by 15%, dealing up to 20% of your target's max Health, while restoring up to 20% of your max Health."]
	],
	"e":[
		["url","assets/abilities/leoric/leoric_wraithWalk.png"],
		["abilityName","Wraith Walk"],
		["abilityDesc","Separate from your body, moving unhindered and gaining Movement Speed for 2.5 seconds. When Wraith Walk ends or is cancelled, your body jumps to your Ghost."]
	],
	"trait":[
		["url","assets/abilities/leoric/leoric_undying.png"],
		["abilityName","Undying"],
		["abilityDesc","Become a Ghost when you die, and resurrect upon reaching full health. Your abilities do not do damage while Undying."]
	],
	"type":"Warrior"
};
var thebutcher = {
	"heroic1":[
		["url","assets/abilities/the-butcher/the-butcher_lambtotheSlaughter.png"],
		["abilityName","Lamb to the Slaughter"],
		["abilityDesc","Throw a hitching post that attaches to the nearest enemy Hero after a 1 second delay. This deals heavy damage and causes the enemy to be chained to the post for 4 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/the-butcher/the-butcher_furnaceBlast.png"],
		["abilityName","Furnace Blast"],
		["abilityDesc","After a 3 second delay, fire explodes around you dealing massive damage to enemies. Can be cast while using Full Boar."]
	],
	"q":[
		["url","assets/abilities/the-butcher/the-butcher_hamstring.png"],
		["abilityName","Hamstring"],
		["abilityDesc","Slams your axe down into the ground, dealing moderate damage and slowing units by 50%. This slow fades over 2 seconds."]
	],
	"w":[
		["url","assets/abilities/the-butcher/the-butcher_butchersBrand.png"],
		["abilityName","Butcher's Brand"],
		["abilityDesc","Deal moderate damage to an enemy and cause your Basic Attacks against them to heal you for 75% of the damage done for 5 seconds. Healing doubled versus Heroes."]
	],
	"e":[
		["url","assets/abilities/the-butcher/the-butcher_ruthlessOnslaught.png"],
		["abilityName","Ruthless Onslaught"],
		["abilityDesc","Charge at an enemy, becoming Unstoppable and gaining Movement Speed. If you reach the target, they are stunned for 1 second and take moderate damage."]
	],
	"trait":[
		["url","assets/abilities/the-butcher/the-butcher_freshMeat.png"],
		["abilityName","Fresh Meat"],
		["abilityDesc","Nearby enemies drop Fresh meat upon death (Heroes drop triple), which you can pick up to gain 1% bonus Attack Damage. Can hold up to 25 Meat. All meat is lost on dying."]
	],
	"type":"Assassin"
};
var johanna = {
	"heroic1":[
		["url","assets/abilities/johanna/johanna_fallingSword.png"],
		["abilityName","Falling Sword"],
		["abilityDesc","You leap toward an area. While in the air, you can steer the landing location by moving. After 2 seconds you land, dealing heavy damage to nearby enemies and knocking them into the air."]
	],
	"heroic2":[
		["url","assets/abilities/johanna/johanna_blessedShield.png"],
		["abilityName","Blessed Shield"],
		["abilityDesc","Deal heavy damage and stun the first enemy hit for 2 seconds. Blessed Shield then bounces to nearby enemies, dealing moderate damage and stunning them for 1 second."]
	],
	"q":[
		["url","assets/abilities/johanna/johanna_punish.png"],
		["abilityName","Punish"],
		["abilityDesc","Deal moderate damage and slow enemies by 60% decaying over 2 seconds."]
	],
	"w":[
		["url","assets/abilities/johanna/johanna_condemn.png"],
		["abilityName","Condemn"],
		["abilityDesc","After 1 second, you pull nearby enemies toward you, stunning them for 0.25 seconds and dealing light damage."]
	],
	"e":[
		["url","assets/abilities/johanna/johanna_shieldGlare.png"],
		["abilityName","Shield Glare"],
		["abilityDesc","Deal moderate damage to enemies and cause them to miss their next 2 Basic Attacks within 4 seconds."]
	],
	"trait":[
		["url","assets/abilities/johanna/johanna_ironSkin.png"],
		["abilityName","Iron Skin"],
		["abilityDesc","Become unstoppable and gain a shield that absorbs a massive amount of damage for 4 seconds."]
	],
	"type":"Warrior"
};
var kaelthas = {
	"heroic1":[
		["url","assets/abilities/kaelthas/kaelthas_phoenix.png"],
		["abilityName","Phoenix"],
		["abilityDesc","Launch a Phoenix to an area, dealing light damage to enemies along the way. The Phoenix persists for 7 seconds, attacking enemies for light damage and splashing for 50%."]
	],
	"heroic2":[
		["url","assets/abilities/kaelthas/kaelthas_pyroblast.png"],
		["abilityName","Pyroblast"],
		["abilityDesc","After 2 seconds, cast a slow-moving fireball that deals massive damage to an enemy Hero and nearby enemies."]
	],
	"q":[
		["url","assets/abilities/kaelthas/kaelthas_flamestrike.png"],
		["abilityName","Flamestrike"],
		["abilityDesc","After a short delay, deal heavy damage in an area. Verdant Spheres increases the radius by 50% and also increases damage dealt."]
	],
	"w":[
		["url","assets/abilities/kaelthas/kaelthas_livingBomb.png"],
		["abilityName","Living Bomb"],
		["abilityDesc","Deal heavy damage over 3 seconds to an enemy, then they explode dealing moderate damage to all nearby enemies. Casting a second Living Bomb on an enemy causes the previous Living Bomb to explode immediately. Verdant Spheres makes this Ability cost no Mana and have no cooldown."]
	],
	"e":[
		["url","assets/abilities/kaelthas/kaelthas_gravityLapse.png"],
		["abilityName","Gravity Lapse"],
		["abilityDesc","Stun the first enemy hit for 1.5 seconds. Verdant Spheres causes Gravity Lapse to stun the first 3 enemies hit."]
	],
	"trait":[
		["url","assets/abilities/kaelthas/kaelthas_verdantSpheres.png"],
		["abilityName","Verdant Spheres"],
		["abilityDesc","Activate to make your next Basic Ability more powerful."]
	],
	"type":"Assassin"
};
var sylvanas = {
	"heroic1":[
		["url","assets/abilities/sylvanas/sylvanas_wailingArrow.png"],
		["abilityName","Wailing Arrow"],
		["abilityDesc","Shoot an arrow that explodes for massive damage and silences enemies for 2.5 seconds. Can be reactivated to detonate the arrow early."]
	],
	"heroic2":[
		["url","assets/abilities/sylvanas/sylvanas_mindControl.png"],
		["abilityName","Mind Control"],
		["abilityDesc","After 1 second, take control of an enemy Hero's movement and prevent them from doing anything else. Channel lasts 2.5 seconds."]
	],
	"q":[
		["url","assets/abilities/sylvanas/sylvanas_witheringFire.png"],
		["abilityName","Withering Fire"],
		["abilityDesc","Deal moderate damage to the closest enemy, preferring Heroes. Stores 5 charges. Gain 1 charge on nearby enemy Minion or Mercenary deaths, and 3 charges on nearby enemy Hero deaths."]
	],
	"w":[
		["url","assets/abilities/sylvanas/sylvanas_shadowDagger.png"],
		["abilityName","Shadow Dagger"],
		["abilityDesc","Deals light damage to a target initially, followed by moderate damage over the next 2 seconds. The effect spreads to nearby targets."]
	],
	"e":[
		["url","assets/abilities/sylvanas/sylvanas_hauntingWave.png"],
		["abilityName","Haunting Wave"],
		["abilityDesc","Send forth a wave of banshees dealing moderate damage to all targets. Reactivate to teleport to the banshees' location."]
	],
	"trait":[
		["url","assets/abilities/sylvanas/sylvanas_blackArrows.png"],
		["abilityName","Black Arrows"],
		["abilityDesc","Basic Attacks and Abilities stun Minions, Mercenaries, and Towers for 1 second."]
	],
	"type":"Specialist"
};
var thelostvikings = {
	"heroic1":[
		["url","assets/abilities/the-lost-vikings/the-lost-vikings_longboatRaid!.png"],
		["abilityName","Longboat Raid!"],
		["abilityDesc","All Vikings are fierce invaders at heart. With this ability, all the Lost Vikings hop in a longboat that shoots a rapid fire cannon at nearby enemies, as well as a long-range mortar to destroy a wide swath of targets."]
	],
	"heroic2":[
		["url","assets/abilities/the-lost-vikings/the-lost-vikings_playAgain!.png"],
		["abilityName","Play Again!"],
		["abilityDesc","The trio ensures no Viking is left behind with this heroic ability, which allows any one of them to quickly raise fallen Vikings and gather the whole group in one spot."]
	],
	"q":[
		["url","assets/abilities/the-lost-vikings/the-lost-vikings_spintoWin!.png"],
		["abilityName","Spin to Win!"],
		["abilityDesc","The Vikings use a highly advanced Nordic battle tactic, spinning wildly and giving every enemy caught within their whirl a solid knock on the head."]
	],
	"w":[
		["url","assets/abilities/the-lost-vikings/the-lost-vikings_jump!.png"],
		["abilityName","Jump!"],
		["abilityDesc","Physical fitness is core to the Viking lifestyle. Rigorous training allows the Vikings to leap out of harm's way, avoiding all damage and bounding over enemies trying to block them in."]
	],
	"e":[
		["url","assets/abilities/the-lost-vikings/the-lost-vikings_norseForce!.png"],
		["abilityName","Norse Force!"],
		["abilityDesc","The best thing about being a Viking is that someone always has your back. Using Norse Force, the Vikings armor up, gaining more armor when more Vikings are still standing."]
	],
	"trait":[
		["url","assets/abilities/the-lost-vikings/the-lost-vikings_vikingHoard.png"],
		["abilityName","Viking Hoard"],
		["abilityDesc","Gathering a Regeneration Globe with a Viking permanently increases all their Health Regeneration by 0.5 per second"]
	],
	"type":"Specialist"
};
var thrall = {
	"heroic1":[
		["url","assets/abilities/thrall/thrall_sundering.png"],
		["abilityName","Sundering"],
		["abilityDesc","After a short delay, sunder the earth in a long line. Deals massive damage and shoves enemies to the side, stunning them for 1.5 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/thrall/thrall_earthquake.png"],
		["abilityName","Earthquake"],
		["abilityDesc","Summon a massive earthquake that periodically slows enemies in the area by 70%. Lasts for 10 seconds."]
	],
	"q":[
		["url","assets/abilities/thrall/thrall_chainLightning.png"],
		["abilityName","Chain Lightning"],
		["abilityDesc","Deal moderate damage to an enemy and half that amount to 2 nearby enemies."]
	],
	"w":[
		["url","assets/abilities/thrall/thrall_feralSpirit.png"],
		["abilityName","Feral Spirit"],
		["abilityDesc","Send out a Feral Spirit that does moderate damage to enemies in its path. Upon hitting an enemy Hero, the wolf stops and roots that hero in place for 1 second."]
	],
	"e":[
		["url","assets/abilities/thrall/thrall_windfury.png"],
		["abilityName","Windfury"],
		["abilityDesc","Increase your movement speed by 25% for 4 seconds. Your next 3 Basic Attacks occur 100% faster."]
	],
	"trait":[
		["url","assets/abilities/thrall/thrall_frostwolfResilience.png"],
		["abilityName","Frostwolf Resilience"],
		["abilityDesc","Dealing damage with Abilities grants 1 stack of Frostwolf Resilience. At 5 stacks, you are instantly healed for a large amount of Health."]
	],
	"type":"Assassin"
};
var jaina = {
	"heroic1":[
		["url","assets/abilities/jaina/jaina_ringofFrost.png"],
		["abilityName","Ring of Frost"],
		["abilityDesc","After a short delay, create a Ring of Frost at target location that deals massive damage and roots enemies for 3 seconds. The ring persists for 3 seconds afterward, Chilling any enemies who touch it."]
	],
	"heroic2":[
		["url","assets/abilities/jaina/jaina_summonWaterElemental.png"],
		["abilityName","Summon Water Elemental"],
		["abilityDesc","Summons a Water Elemental at target location, dealing moderate damage and Chilling nearby enemies. The Water Elemental's Basic Attacks splash for 25% damage and Chill."]
	],
	"q":[
		["url","assets/abilities/jaina/jaina_frostbolt.png"],
		["abilityName","Frostbolt"],
		["abilityDesc","Deal moderate damage and Chill the target."]
	],
	"w":[
		["url","assets/abilities/jaina/jaina_blizzard.png"],
		["abilityName","Blizzard"],
		["abilityDesc","Bombard an area with 2 waves of ice, dealing moderate damage. Damaged enemies are Chilled."]
	],
	"e":[
		["url","assets/abilities/jaina/jaina_coneofCold.png"],
		["abilityName","Cone of Cold"],
		["abilityDesc","Deal moderate damage in a cone and Chill targets."]
	],
	"trait":[
		["url","assets/abilities/jaina/jaina_frostbite.png"],
		["abilityName","Frostbite"],
		["abilityDesc","All abilities Chill targets, slowing Movement Speed by 25% and amplifying damage from your abilities by 50%. Lasts 4 seconds."]
	],
	"type":"Assassin"
};
var anubarak = {
	"heroic1":[
		["url","assets/abilities/anubarak/anubarak_locustSwarm.png"],
		["abilityName","Locust Swarm"],
		["abilityDesc","Deal light periodic damage in an area around Anub'arak. Each enemy damaged heals Anub'arak for a small amount of health."]
	],
	"heroic2":[
		["url","assets/abilities/anubarak/anubarak_cocoon.png"],
		["abilityName","Cocoon"],
		["abilityDesc","Wraps target enemy Hero in a cocoon for 8 seconds. Enemies wrapped in the cocoon are unable to act and are untargetable. Allies of the Hero can attack the cocoon to break it and free them early."]
	],
	"q":[
		["url","assets/abilities/anubarak/anubarak_impale.png"],
		["abilityName","Impale"],
		["abilityDesc","Deals moderate damage. Stuns for 1 second."]
	],
	"w":[
		["url","assets/abilities/anubarak/anubarak_hardenCarapace.png"],
		["abilityName","Harden Carapace"],
		["abilityDesc","Gain a strong shield."]
	],
	"e":[
		["url","assets/abilities/anubarak/anubarak_burrowCharge.png"],
		["abilityName","Burrow Charge"],
		["abilityDesc","Burrows to location, dealing moderate damage and briefly stunning enemies in a small area upon surfacing. Can reactivate the Ability to surface early."]
	],
	"trait":[
		["url","assets/abilities/anubarak/anubarak_scarabHost.png"],
		["abilityName","Scarab Host"],
		["abilityDesc","Spawn a Beetle at Anub'arak's location whenever he casts a spell. Beetles last for 10 seconds, attacking nearby enemies for light damage."]
	],
	"type":"Warrior"
};
var azmodan = {
	"heroic1":[
		["url","assets/abilities/azmodan/azmodan_demonicInvasion.png"],
		["abilityName","Demonic Invasion"],
		["abilityDesc","Rain a small army of Demonic Grunts down on enemies, each impact dealing light damage. Demon Grunts deal light damage which is doubled against non-Heroic targets."]
	],
	"heroic2":[
		["url","assets/abilities/azmodan/azmodan_blackPool.png"],
		["abilityName","Black Pool"],
		["abilityDesc","Create a pool that empowers Azmodan, his Demons, and allied Minions, increasing their attack and ability damage by 75%. Pools last 5 seconds."]
	],
	"q":[
		["url","assets/abilities/azmodan/azmodan_globeofAnnihilation.png"],
		["abilityName","Globe of Annihilation"],
		["abilityDesc","Shoot a Globe of Destruction, dealing heavy damage on impact. Long range."]
	],
	"w":[
		["url","assets/abilities/azmodan/azmodan_summonDemonWarrior.png"],
		["abilityName","Summon Demon Warrior"],
		["abilityDesc","Spawn a Demon Warrior that marches toward a point. Warriors deal light damage and last 10 seconds."]
	],
	"e":[
		["url","assets/abilities/azmodan/azmodan_allShallBurn.png"],
		["abilityName","All Shall Burn"],
		["abilityDesc","Channel a death beam of moderately increasing damage on an enemy. Does 25% more damage to Structures."]
	],
	"trait":[
		["url","assets/abilities/azmodan/azmodan_generalofHell.png"],
		["abilityName","General of Hell"],
		["abilityDesc","Summon a Demon Lieutenant at an allied Mercenary, Minion, or Summon. The lieutenant will march with the target, granting 15% increased damage and 15% increased maximum health to all nearby friendly Mercenaries, Minions, and Summons. Unlimited range."]
	],
	"type":"Specialist"
};
var chen = {
	"heroic1":[
		["url","assets/abilities/chen/chen_wanderingKeg.png"],
		["abilityName","Wandering Keg"],
		["abilityDesc","Roll around inside the barrel, dealing moderate damage to enemies in the way and knocking them back. Lasts for 5 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/chen/chen_storm,Earth,Fire.png"],
		["abilityName","Storm, Earth, Fire"],
		["abilityDesc","Split into 3 elemental spirits for 15 seconds, each with 50% of your maximum Health, and enables two new leaping attacks for use.   Storm attacks  at range for moderate damage. Earth attacks slowly for light damage and slows enemies by 25%. Fire attacks quickly for light damage."]
	],
	"q":[
		["url","assets/abilities/chen/chen_flyingKick.png"],
		["abilityName","Flying Kick"],
		["abilityDesc","Kick through target enemy, dealing moderate damage."]
	],
	"w":[
		["url","assets/abilities/chen/chen_kegSmash.png"],
		["abilityName","Keg Smash"],
		["abilityDesc","Smash your keg, dealing light damage and drenching affected enemies in Brew, slowing them by 25% for 2.5 seconds."]
	],
	"e":[
		["url","assets/abilities/chen/chen_breathofFire.png"],
		["abilityName","Breath of Fire"],
		["abilityDesc","Breathe a cone of flames, dealing moderate damage. Enemies soaked in Brew are set on fire, dealing additional moderate damage over 3 seconds."]
	],
	"trait":[
		["url","assets/abilities/chen/chen_fortifyingBrew.png"],
		["abilityName","Fortifying Brew"],
		["abilityDesc","Drink from your keg, gaining 40 Brew and temporary Shields each second, eventually resulting in a massive Shield that persists for 2 seconds after you stop drinking."]
	],
	"type":"Warrior"
};
var rehgar = {
	"heroic1":[
		["url","assets/abilities/rehgar/rehgar_ancestralHealing.png"],
		["abilityName","Ancestral Healing"],
		["abilityDesc","After a short delay, heals target allied Hero for a massive amount of Health."]
	],
	"heroic2":[
		["url","assets/abilities/rehgar/rehgar_bloodlust.png"],
		["abilityName","Bloodlust"],
		["abilityDesc","Give nearby allied Heroes 40% Attack Speed and 30% Movement Speed. Lasts for 10 seconds."]
	],
	"q":[
		["url","assets/abilities/rehgar/rehgar_chainHeal.png"],
		["abilityName","Chain Heal"],
		["abilityDesc","Heal an ally for a large amount of Health, then heal up to two other nearby allies for a moderate amount of Health each."]
	],
	"w":[
		["url","assets/abilities/rehgar/rehgar_lightningShield.png"],
		["abilityName","Lightning Shield"],
		["abilityDesc","Imbue an ally with lightning dealing light damage to nearby enemies and additional light periodic damage. Lasts 5 seconds."]
	],
	"e":[
		["url","assets/abilities/rehgar/rehgar_earthbindTotem.png"],
		["abilityName","Earthbind Totem"],
		["abilityDesc","Create a totem that slows nearby enemies by 35%. The totem has a moderate amount of Health and lasts for 8 seconds."]
	],
	"trait":[
		["url","assets/abilities/rehgar/rehgar_ghostWolf.png"],
		["abilityName","Ghost Wolf"],
		["abilityDesc","Instead of using a mount, Rehgar transforms into a Ghost Wolf, increasing movement speed by 30%. Transformation is instant and can be used while moving. Basic Attacks while in Ghost Wolf cancel the form but deal 100% increased damage."]
	],
	"type":"Support"
};
var zagara = {
	"heroic1":[
		["url","assets/abilities/zagara/zagara_devouringMaw.png"],
		["abilityName","Devouring Maw"],
		["abilityDesc","Summons a Devouring Maw that deals moderate damage and devours enemies for 4 seconds. Devoured enemies cannot fight."]
	],
	"heroic2":[
		["url","assets/abilities/zagara/zagara_nydusNetwork.png"],
		["abilityName","Nydus Network"],
		["abilityDesc","Summon a Nydus Worm at target location that you can enter by right-clicking. While inside, you exit by targeting a Nydus Worm with R or right-clicking near the Worm. Maximum 4 Nydus Worms."]
	],
	"q":[
		["url","assets/abilities/zagara/zagara_banelingBarrage.png"],
		["abilityName","Baneling Barrage"],
		["abilityDesc","Launch 4 Banelings that deal moderate splash damage each."]
	],
	"w":[
		["url","assets/abilities/zagara/zagara_hunterKiller.png"],
		["abilityName","Hunter Killer"],
		["abilityDesc","Summon a Hydralisk to attack a single target, dealing moderate damage. Lasts 8 seconds."]
	],
	"e":[
		["url","assets/abilities/zagara/zagara_infestedDrop.png"],
		["abilityName","Infested Drop"],
		["abilityDesc","Bombard target area with a Zerg Drop Pod for moderate damage.  The pod spawns 2 Roachlings that deal light damage and last for 8 seconds."]
	],
	"trait":[
		["url","assets/abilities/zagara/zagara_creepTumor.png"],
		["abilityName","Creep Tumor"],
		["abilityDesc","Lay a Creep Tumor that generates Creep. You and your summons move 20% faster on Creep and restore a small amount of Health each second. Tumors last 240 seconds."]
	],
	"type":"Specialist"
};
var murky = {
	"heroic1":[
		["url","assets/abilities/murky/murky_marchoftheMurlocs.png"],
		["abilityName","March of the Murlocs"],
		["abilityDesc","Command a legion of Murlocs to march into a target direction, each one leaping onto the first enemy Hero or Structure they find. Each Murloc deals moderate damage and slows its target by 15% for 5 seconds. Does half damage to Structures."]
	],
	"heroic2":[
		["url","assets/abilities/murky/murky_octo-Grab.png"],
		["abilityName","Octo-Grab"],
		["abilityDesc","Summon an octopus to stun target enemy Hero for 3 seconds while you hit them for light damage."]
	],
	"q":[
		["url","assets/abilities/murky/murky_slime.png"],
		["abilityName","Slime"],
		["abilityDesc","Deal moderate damage and apply Slime on nearby enemies for 8 seconds, slowing enemies by 20%.  Does heavy damage to enemies who are already slimed."]
	],
	"w":[
		["url","assets/abilities/murky/murky_pufferfish.png"],
		["abilityName","Pufferfish"],
		["abilityDesc","Spit out a Pufferfish at the target point. After 3 seconds, the fish will blow up for massive damage. Enemies can attack the fish to prevent it from exploding."]
	],
	"e":[
		["url","assets/abilities/murky/murky_safetyBubble.png"],
		["abilityName","Safety Bubble"],
		["abilityDesc","Becomes Invulnerable for 2 seconds. While active, you cannot attack or use abilities."]
	],
	"trait":[
		["url","assets/abilities/murky/murky_spawnEgg.png"],
		["abilityName","Spawn Egg"],
		["abilityDesc","Place an Egg at target location, revealing the nearby area. Upon dying, you respawn at the Egg after 5 seconds. If your Egg is killed, you are revealed to enemies for 15 seconds. You only grant 25% of a Hero's experience upon dying."]
	],
	"type":"Specialist"
};
var brightwing = {
	"heroic1":[
		["url","assets/abilities/brightwing/brightwing_blinkHeal.png"],
		["abilityName","Blink Heal"],
		["abilityDesc","Teleport to nearby ally, healing them for a large amount of Health. Can store 2 charges."]
	],
	"heroic2":[
		["url","assets/abilities/brightwing/brightwing_emeraldWind.png"],
		["abilityName","Emerald Wind"],
		["abilityDesc","Create an expanding nova of wind, dealing heavy damage and pushing enemies away."]
	],
	"q":[
		["url","assets/abilities/brightwing/brightwing_arcaneFlare.png"],
		["abilityName","Arcane Flare"],
		["abilityDesc","Deal heavy damage in a small area and moderate damage in a larger area."]
	],
	"w":[
		["url","assets/abilities/brightwing/brightwing_polymorph.png"],
		["abilityName","Polymorph"],
		["abilityDesc","Deal light damage. Target cannot attack or use Abilities for 2 seconds."]
	],
	"e":[
		["url","assets/abilities/brightwing/brightwing_pixieDust.png"],
		["abilityName","Pixie Dust"],
		["abilityDesc","Increase targets Movement Speed by 20% and block 1 Hero Basic Attack, reducing their damage by 50%. Lasts 3 seconds."]
	],
	"trait":[
		["url","assets/abilities/brightwing/brightwing_soothingMist.png"],
		["abilityName","Soothing Mist"],
		["abilityDesc","Brightwing heals nearby allied Heroes for a moderate amount every 5 seconds."]
	],
	"type":"Support"
};
var lili = {
	"heroic1":[
		["url","assets/abilities/lili/lili_jugof1,000Cups.png"],
		["abilityName","Jug of 1,000 Cups"],
		["abilityDesc","Rapidly tosses brew to the most injured nearby allies, prioritizing Heroes, restoring a massive amount of Health over 6 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/lili/lili_waterDragon.png"],
		["abilityName","Water Dragon"],
		["abilityDesc","Summon a Water Dragon that after a delay hits the nearest enemy Hero and all enemies near them, dealing heavy damage and slowing their Movement Speed by 70% for 4 seconds."]
	],
	"q":[
		["url","assets/abilities/lili/lili_healingBrew.png"],
		["abilityName","Healing Brew"],
		["abilityDesc","Heal lowest Health ally (prioritizing Heroes) for a moderate amount of Health."]
	],
	"w":[
		["url","assets/abilities/lili/lili_cloudSerpent.png"],
		["abilityName","Cloud Serpent"],
		["abilityDesc","Summon a Cloud Serpent on target allied Hero that automatically attacks nearby enemies, doing light damage. Heroes can only have 1 Cloud Serpent at a time. Lasts for 8 seconds."]
	],
	"e":[
		["url","assets/abilities/lili/lili_blindingWind.png"],
		["abilityName","Blinding Wind"],
		["abilityDesc","Throw a cloud of Blinding Wind at the 2 nearest enemies (prioritizing Heroes), dealing moderate damage. Targets miss their next 2 Basic Attacks in the next 4 seconds."]
	],
	"trait":[
		["url","assets/abilities/lili/lili_fastFeet.png"],
		["abilityName","Fast Feet"],
		["abilityDesc","Upon taking damage, gain 10% Movement Speed for 1 second."]
	],
	"type":"Support"
};
var tychus = {
	"heroic1":[
		["url","assets/abilities/tychus/tychus_commandeerOdin.png"],
		["abilityName","Commandeer Odin"],
		["abilityDesc","Call down an Odin to pilot. The Odin deals increased Damage, has 100% increased Basic Attack range, and uses different Abilities. Lasts 23 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/tychus/tychus_drakkenLaserDrill.png"],
		["abilityName","Drakken Laser Drill"],
		["abilityDesc","Call down a Laser Drill to attack nearby enemies, dealing moderate damage. Reactivate to assign a new target. Lasts 22 seconds."]
	],
	"q":[
		["url","assets/abilities/tychus/tychus_overkill.png"],
		["abilityName","Overkill"],
		["abilityDesc","Deal massive damage to the target and heavy damage to nearby targets over 5 seconds. Reactivate to select a new target. Can move and use Abilities while channeling."]
	],
	"w":[
		["url","assets/abilities/tychus/tychus_fragGrenade.png"],
		["abilityName","Frag Grenade"],
		["abilityDesc","Lob a grenade that deals moderate damage, knocking enemies away."]
	],
	"e":[
		["url","assets/abilities/tychus/tychus_runandGun.png"],
		["abilityName","Run and Gun"],
		["abilityDesc","Charge forward and instantly wind up the Minigun."]
	],
	"trait":[
		["url","assets/abilities/tychus/tychus_minigun.png"],
		["abilityName","Minigun"],
		["abilityDesc","Your Attack Speed increases the longer that you attack, becoming fully wound up after 4 Basic Attacks. Lasts 3 seconds."]
	],
	"type":"Assassin"
};
var abathur = {
	"heroic1":[
		["url","assets/abilities/abathur/abathur_ultimateEvolution.png"],
		["abilityName","Ultimate Evolution"],
		["abilityDesc","Clone target allied Hero and control it for 20 seconds. Abathur has perfected the clone, granting it 20% Ability Power, 20% bonus Attack Damage, and 10% bonus Movement Speed. Cannot use their Heroic Ability."]
	],
	"heroic2":[
		["url","assets/abilities/abathur/abathur_evolveMonstrosity.png"],
		["abilityName","Evolve Monstrosity"],
		["abilityDesc","Turn an allied Minion or Locust into a Monstrosity. When enemy Minions near the Monstrosity die, it gains 5% Health and 5% Basic Attack damage, stacking up to 30 times. The Monstrosity takes 50% less damage from Minions and Structures.  Using Symbiote on the Monstrosity allows you to control it, in addition to Symbiote's normal benefits."]
	],
	"q":[
		["url","assets/abilities/abathur/abathur_symbiote.png"],
		["abilityName","Symbiote"],
		["abilityDesc","Assist another allied Unit or Combat Structure, allowing you to shield them and use new Abilities.  Cannot be used on another Hero's Summons."]
	],
	"w":[
		["url","assets/abilities/abathur/abathur_toxicNest.png"],
		["abilityName","Toxic Nest"],
		["abilityDesc","Spawn a mine that becomes active after a short time. Deals moderate damage and reveals the enemy for 4 seconds. Lasts 90 seconds."]
	],
	"e":[
		["url","assets/abilities/abathur/abathur_locustStrain.png"],
		["abilityName","Locust Strain"],
		["abilityDesc","Spawns a Locust to attack down the nearest lane every 15 seconds. Locusts last for 25 seconds."]
	],
	"type":"Specialist"
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
var diablo = {
	"heroic1":[
		["url","assets/abilities/diablo/diablo_apocalypse.png"],
		["abilityName","Apocalypse"],
		["abilityDesc","Create a demonic rune under each enemy Hero on the battleground. After a short period the rune explodes dealing heavy damage and stunning for 2 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/diablo/diablo_lightningBreath.png"],
		["abilityName","Lightning Breath"],
		["abilityDesc","Channel lightning that deals massive damage over 4 seconds. The direction of the Lightning changes with your mouse cursor position."]
	],
	"q":[
		["url","assets/abilities/diablo/diablo_shadowCharge.png"],
		["abilityName","Shadow Charge"],
		["abilityDesc","Charge an enemy, dealing moderate damage and stunning them for 0.5 seconds. If the enemy hits an unpathable location, they are stunned for 1 second."]
	],
	"w":[
		["url","assets/abilities/diablo/diablo_fireStomp.png"],
		["abilityName","Fire Stomp"],
		["abilityDesc","Unleashes fire waves in all directions that each deal moderate damage."]
	],
	"e":[
		["url","assets/abilities/diablo/diablo_overpower.png"],
		["abilityName","Overpower"],
		["abilityDesc","Grabs the target and slams it behind Diablo, dealing moderate damage and stunning for 0.25 seconds."]
	],
	"trait":[
		["url","assets/abilities/diablo/diablo_blackSoulstone.png"],
		["abilityName","Black Soulstone"],
		["abilityDesc","Gain 10 Souls per Hero killed, or 1 per Minion. For each Soul, increase maximum Health by a small amount. If you have 100 Souls upon dying, you resurrect in 5 seconds and lose 100 Souls. Maximum 100 Souls."]
	],
	"type":"Warrior"
};
var etc = {
	"heroic1":[
		["url","assets/abilities/etc/etc_moshPit.png"],
		["abilityName","Mosh Pit"],
		["abilityDesc","After a short delay, channel to stun nearby enemies for 4 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/etc/etc_stageDive.png"],
		["abilityName","Stage Dive"],
		["abilityDesc","Leap to any location. Deals heavy damage to enemies in the area, slowing them for 3 seconds."]
	],
	"q":[
		["url","assets/abilities/etc/etc_powerslide.png"],
		["abilityName","Powerslide"],
		["abilityDesc","Slide to a location dealing moderate damage and stunning enemies hit for 1 second."]
	],
	"w":[
		["url","assets/abilities/etc/etc_faceMelt.png"],
		["abilityName","Face Melt"],
		["abilityDesc","Deals moderate damage to nearby enemies, knocking them back."]
	],
	"e":[
		["url","assets/abilities/etc/etc_guitarSolo.png"],
		["abilityName","Guitar Solo"],
		["abilityDesc","Regenerate a small amount of Health each second for 4 seconds."]
	],
	"trait":[
		["url","assets/abilities/etc/etc_rockstar.png"],
		["abilityName","Rockstar"],
		["abilityDesc","When you use a Basic or Heroic ability, give 20% Attack Speed for 3 seconds to all nearby allies. Minions gain half the bonus."]
	],
	"type":"Warrior"
};
var falstad = {
	"heroic1":[
		["url","assets/abilities/falstad/falstad_hinterlandBlast.png"],
		["abilityName","Hinterland Blast"],
		["abilityDesc","After a short delay, deals massive damage to enemies within a long line."]
	],
	"heroic2":[
		["url","assets/abilities/falstad/falstad_mightyGust.png"],
		["abilityName","Mighty Gust"],
		["abilityDesc","Push enemies away and slow their Movement Speed by 60%, decaying over 3 seconds."]
	],
	"q":[
		["url","assets/abilities/falstad/falstad_hammerang.png"],
		["abilityName","Hammerang"],
		["abilityDesc","Throws out a Hammer that returns to you, dealing moderate damage and slowing enemies by 25% for 2 seconds."]
	],
	"w":[
		["url","assets/abilities/falstad/falstad_lightningRod.png"],
		["abilityName","Lightning Rod"],
		["abilityDesc","Deals moderate damage to an enemy and additional light damage each second for 4 seconds if you remain close to the target."]
	],
	"e":[
		["url","assets/abilities/falstad/falstad_barrelRoll.png"],
		["abilityName","Barrel Roll"],
		["abilityDesc","Dashes forward and grants a strong Shield for 2 seconds."]
	],
	"trait":[
		["url","assets/abilities/falstad/falstad_tailwind.png"],
		["abilityName","Tailwind"],
		["abilityDesc","Gain 20% increased Movement Speed after not taking damage for 6 seconds."]
	],
	"type":"Assassin"
};
var gazlowe = {
	"heroic1":[
		["url","assets/abilities/gazlowe/gazlowe_robo-Goblin.png"],
		["abilityName","Robo-Goblin"],
		["abilityDesc","Basic Attacks deal an additional 150% damage to Minions, Mercenaries, and Structures."]
	],
	"heroic2":[
		["url","assets/abilities/gazlowe/gazlowe_grav-O-Bomb3000.png"],
		["abilityName","Grav-O-Bomb 3000"],
		["abilityDesc","After a short delay, pulls enemies towards the center of the target area and deals heavy damage."]
	],
	"q":[
		["url","assets/abilities/gazlowe/gazlowe_rock-It!Turret.png"],
		["abilityName","Rock-It! Turret"],
		["abilityDesc","Creates a turret that deals moderate damage. Lasts for 30 seconds."]
	],
	"w":[
		["url","assets/abilities/gazlowe/gazlowe_dethLazor.png"],
		["abilityName","Deth Lazor"],
		["abilityDesc","Charged attack that deals moderate to heavy damage to enemies in a line. Damage and range increase the longer the ability is charged up."]
	],
	"e":[
		["url","assets/abilities/gazlowe/gazlowe_xplodiumCharge.png"],
		["abilityName","Xplodium Charge"],
		["abilityDesc","Places a bomb that deals moderate damage to enemies within target area after 2.5 seconds, stunning them for 2 seconds."]
	],
	"trait":[
		["url","assets/abilities/gazlowe/gazlowe_salvager.png"],
		["abilityName","Salvager"],
		["abilityDesc","Destroyed enemy Structures and your Rock-it! Turrets drop scrap. Collecting scrap restores a moderate amount of Mana and causes your Abilities to cooldown twice as fast for 3 seconds.  Activate Salvager to dismantle a target Rock-it! Turret and turn it into scrap."]
	],
	"type":"Specialist"
};
var illidan = {
	"heroic1":[
		["url","assets/abilities/illidan/illidan_metamorphosis.png"],
		["abilityName","Metamorphosis"],
		["abilityDesc","Transform into demon form at the target location, dealing massive damage in the area. Gain a large amount of temporary max Health for each Hero hit and 20% increased Attack Speed. Lasts for 18 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/illidan/illidan_theHunt.png"],
		["abilityName","The Hunt"],
		["abilityDesc","Charge to target unit, dealing heavy damage on impact and stunning for 1 second."]
	],
	"q":[
		["url","assets/abilities/illidan/illidan_dive.png"],
		["abilityName","Dive"],
		["abilityDesc","Dive at the target, dealing moderate damage and flipping over them."]
	],
	"w":[
		["url","assets/abilities/illidan/illidan_sweepingStrike.png"],
		["abilityName","Sweeping Strike"],
		["abilityDesc","Dash towards target point, dealing moderate damage to enemies along the way. If you hit an enemy, Basic Attacks do 35% more damage for 4 seconds."]
	],
	"e":[
		["url","assets/abilities/illidan/illidan_evasion.png"],
		["abilityName","Evasion"],
		["abilityDesc","Evade enemy Basic Attacks for 2 seconds."]
	],
	"trait":[
		["url","assets/abilities/illidan/illidan_betrayersThirst.png"],
		["abilityName","Betrayer's Thirst"],
		["abilityDesc","Basic Attacks heal for 20% of damage dealt and reduce your Ability cooldowns by 1 second."]
	],
	"type":"Assassin"
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
var malfurion = {
	"heroic1":[
		["url","assets/abilities/malfurion/malfurion_tranquility.png"],
		["abilityName","Tranquility"],
		["abilityDesc","Heals a moderate amount of Health each second to nearby allies over 10 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/malfurion/malfurion_twilightDream.png"],
		["abilityName","Twilight Dream"],
		["abilityDesc","After a short delay, deal massive damage in a large area around you, silencing enemies for 3 seconds."]
	],
	"q":[
		["url","assets/abilities/malfurion/malfurion_regrowth.png"],
		["abilityName","Regrowth"],
		["abilityDesc","Heal target ally for a moderate amount of Health instantly and an additional large amount of Health over 10 seconds."]
	],
	"w":[
		["url","assets/abilities/malfurion/malfurion_moonfire.png"],
		["abilityName","Moonfire"],
		["abilityDesc","Deals light damage to enemies within target area and reveals them for 2 seconds."]
	],
	"e":[
		["url","assets/abilities/malfurion/malfurion_entanglingRoots.png"],
		["abilityName","Entangling Roots"],
		["abilityDesc","Root enemies within the target area for 1.5 seconds, and deals light damage over the duration. Affected area grows over 3 seconds."]
	],
	"trait":[
		["url","assets/abilities/malfurion/malfurion_innervate.png"],
		["abilityName","Innervate"],
		["abilityDesc","Grant target allied Hero a large amount of Mana over 10 seconds."]
	],
	"type":"Support"
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
var nova = {
	"heroic1":[
		["url","assets/abilities/nova/nova_tripleTap.png"],
		["abilityName","Triple Tap"],
		["abilityDesc","Locks in on the target Hero, then fires 3 shots that hit the first Hero or Structure they come in contact with for moderate damage each."]
	],
	"heroic2":[
		["url","assets/abilities/nova/nova_precisionStrike.png"],
		["abilityName","Precision Strike"],
		["abilityDesc","After a short delay, deals massive damage to enemies within an area. Unlimited range."]
	],
	"q":[
		["url","assets/abilities/nova/nova_snipe.png"],
		["abilityName","Snipe"],
		["abilityDesc","Deals heavy damage to the first enemy hit."]
	],
	"w":[
		["url","assets/abilities/nova/nova_pinningShot.png"],
		["abilityName","Pinning Shot"],
		["abilityDesc","Deals moderate damage to an enemy and slows it by 30% for 2.25 seconds."]
	],
	"e":[
		["url","assets/abilities/nova/nova_holoDecoy.png"],
		["abilityName","Holo Decoy"],
		["abilityDesc","Creates a Decoy for 5 seconds that appears to attack enemies.   Using this Ability does not break cloak."]
	],
	"trait":[
		["url","assets/abilities/nova/nova_permanentCloak,Sniper.png"],
		["abilityName","Permanent Cloak, Sniper"],
		["abilityDesc","Cloak when out of combat for 3 seconds. Taking damage, attacking, or channeling reveals you.  Basic Attack range is 20% further than other ranged Heroes, and you see 10% further than other Heroes."]
	],
	"type":"Assassin"
};
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
var sgthammer = {
	"heroic1":[
		["url","assets/abilities/sgt-hammer/sgt-hammer_bluntForceGun.png"],
		["abilityName","Blunt Force Gun"],
		["abilityDesc","Fire a missile across the battlefield, dealing massive damage to enemies in its path."]
	],
	"heroic2":[
		["url","assets/abilities/sgt-hammer/sgt-hammer_napalmStrike.png"],
		["abilityName","Napalm Strike"],
		["abilityDesc","Deals moderate damage on impact and light area damage each second. Lasts for 4 seconds."]
	],
	"q":[
		["url","assets/abilities/sgt-hammer/sgt-hammer_spiderMines.png"],
		["abilityName","Spider Mines"],
		["abilityDesc","Create 3 mines that deal moderate damage and slow enemies by 25% for 1.5 seconds."]
	],
	"w":[
		["url","assets/abilities/sgt-hammer/sgt-hammer_concussiveBlast.png"],
		["abilityName","Concussive Blast"],
		["abilityDesc","Deals moderate damage and pushes enemies away."]
	],
	"e":[
		["url","assets/abilities/sgt-hammer/sgt-hammer_siegeMode.png"],
		["abilityName","Siege Mode"],
		["abilityDesc","Become immobile to increase Basic Attack range by 90%, deal 25% splash damage, and deal 30% bonus damage to Minions and Structures."]
	],
	"trait":[
		["url","assets/abilities/sgt-hammer/sgt-hammer_artillery.png"],
		["abilityName","Artillery"],
		["abilityDesc","Basic Attacks deal 20% more damage to distant enemies."]
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
var stitches = {
	"heroic1":[
		["url","assets/abilities/stitches/stitches_putridBile.png"],
		["abilityName","Putrid Bile"],
		["abilityDesc","Emit bile that deals light damage each second to enemies within, slowing them by 35%. You gain 20% Movement Speed while emitting bile. Lasts 8 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/stitches/stitches_gorge.png"],
		["abilityName","Gorge"],
		["abilityDesc","Consume an enemy Hero, trapping them for 3.5 seconds. When Gorge ends, the enemy Hero takes heavy damage. The trapped Hero cannot move or act and doesn't take damage from other sources. Stitches' Movement Speed is reduced by 15% while an enemy is Gorged.  Cannot be used on massive Heroes."]
	],
	"q":[
		["url","assets/abilities/stitches/stitches_hook.png"],
		["abilityName","Hook"],
		["abilityDesc","Pull the first enemy hit towards you, dealing moderate damage."]
	],
	"w":[
		["url","assets/abilities/stitches/stitches_slam.png"],
		["abilityName","Slam"],
		["abilityDesc","Deal moderate damage to enemies within the target area."]
	],
	"e":[
		["url","assets/abilities/stitches/stitches_devour.png"],
		["abilityName","Devour"],
		["abilityDesc","Deal massive damage to Minions or moderate damage to Heroes. Restores 20% of your maximum Health."]
	],
	"trait":[
		["url","assets/abilities/stitches/stitches_vileGas.png"],
		["abilityName","Vile Gas"],
		["abilityDesc","When damaged, Stitches emits a gas cloud that persists for 4 seconds. Enemies who enter it are poisoned, taking light damage each second for 3 seconds."]
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
var tyrande = {
	"heroic1":[
		["url","assets/abilities/tyrande/tyrande_starfall.png"],
		["abilityName","Starfall"],
		["abilityDesc","Deal light damage each second and slow enemies by 20% in an area. Lasts 8 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/tyrande/tyrande_shadowstalk.png"],
		["abilityName","Shadowstalk"],
		["abilityDesc","Cloak you and all allied Heroes for 8 seconds. Reveal all enemy Heroes for 3 seconds."]
	],
	"q":[
		["url","assets/abilities/tyrande/tyrande_lightofElune.png"],
		["abilityName","Light of Elune"],
		["abilityDesc","Heal yourself for a moderate amount. If cast on an ally, also heals them for a large amount of Health."]
	],
	"w":[
		["url","assets/abilities/tyrande/tyrande_sentinel.png"],
		["abilityName","Sentinel"],
		["abilityDesc","Send an Owl that travels across the battleground revealing its path. Deals moderate damage to the first enemy Hero hit and reveals them for 5 seconds."]
	],
	"e":[
		["url","assets/abilities/tyrande/tyrande_lunarFlare.png"],
		["abilityName","Lunar Flare"],
		["abilityDesc","After a short delay, deal heavy damage and stun enemies in the target area for 1 second."]
	],
	"trait":[
		["url","assets/abilities/tyrande/tyrande_huntersMark.png"],
		["abilityName","Hunter's Mark"],
		["abilityDesc","Marks a target enemy, increasing all damage taken by 25% and revealing them for 4 seconds. Cannot be used on Structures."]
	],
	"type":"Support"
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
var valla = {
	"heroic1":[
		["url","assets/abilities/valla/valla_strafe.png"],
		["abilityName","Strafe"],
		["abilityDesc","Rapidly attack nearby visible enemies with each hit dealing light damage, prioritizing heroes over minions. Valla is able to move and use Vault while strafing. Lasts for 4 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/valla/valla_rainofVengeance.png"],
		["abilityName","Rain of Vengeance"],
		["abilityDesc","Launch 2 waves of Shadow Beasts that deal heavy damage to enemies within the target area, stunning for 0.5 seconds per wave."]
	],
	"q":[
		["url","assets/abilities/valla/valla_hungeringArrow.png"],
		["abilityName","Hungering Arrow"],
		["abilityDesc","Fire an arrow that deals moderate damage to the first target hit, then seeks up to 2 additional enemies dealing half the initial damage. Can hit an enemy multiple times."]
	],
	"w":[
		["url","assets/abilities/valla/valla_multishot.png"],
		["abilityName","Multishot"],
		["abilityDesc","Deal moderate damage to enemies within the target area."]
	],
	"e":[
		["url","assets/abilities/valla/valla_vault.png"],
		["abilityName","Vault"],
		["abilityDesc","Dash to the target area."]
	],
	"trait":[
		["url","assets/abilities/valla/valla_hatred.png"],
		["abilityName","Hatred"],
		["abilityDesc","Basic Attacks grant a stack of Hatred, up to 10. Each Hatred stack increases Basic Attack damage by 2% and Movement Speed by 1%."]
	],
	"type":"Assassin"
};
var zeratul = {
	"heroic1":[
		["url","assets/abilities/zeratul/zeratul_shadowAssault.png"],
		["abilityName","Shadow Assault"],
		["abilityDesc","Your Basic Attacks cause you to charge at enemies and have 20% increased Attack Speed. Lasts for 6 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/zeratul/zeratul_voidPrison.png"],
		["abilityName","Void Prison"],
		["abilityDesc","Slows time in an area to a near standstill, making allies and enemies invulnerable and unable to act for 5 seconds. You are not affected."]
	],
	"q":[
		["url","assets/abilities/zeratul/zeratul_cleave.png"],
		["abilityName","Cleave"],
		["abilityDesc","Deal heavy damage to nearby enemies."]
	],
	"w":[
		["url","assets/abilities/zeratul/zeratul_singularitySpike.png"],
		["abilityName","Singularity Spike"],
		["abilityDesc","Flings a Singularity Spike that sticks to the first enemy hit. Deals heavy damage after 1 second and slows the enemy by 40% for 3 seconds."]
	],
	"e":[
		["url","assets/abilities/zeratul/zeratul_blink.png"],
		["abilityName","Blink"],
		["abilityDesc","Teleport to the target location. Using this Ability does not break cloak."]
	],
	"trait":[
		["url","assets/abilities/zeratul/zeratul_permanentCloak.png"],
		["abilityName","Permanent Cloak"],
		["abilityDesc","Automatically cloak when out of combat for 3 seconds.   Taking damage, attacking, or channeling reveals you."]
	],
	"type":"Assassin"
};