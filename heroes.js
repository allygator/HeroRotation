$(document).ready(function ( ) {
	$("#classinfo").hide();
	$(".currentweek").hide();
	$(".nextweek").hide();
	$("#currentweekbtn span").text(currWeekDate);
	$("#nextweekbtn span").text(nextWeekDate);
	mapHeroes();
});

var currWeekDate = "Oct 25 - Nov 1";
var nextWeekDate = "Sept 20 - 27";
var heroesArr = ["Raynor","Muradin","Xul","Uther","Kharazim","Johanna","Jaina","Greymane","Sgt. Hammer","Nova"];


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
        value = value.replace(' ', '');
        value = value.replace('.', '');
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
		["abilityDesc","Launch a particle grenade that deals 71 damage to enemies within the area. Deals 50% damage to Structures. Stores up to 4 charges."]
	],
	"w":[
		["url","assets/abilities/zarya/zarya_personalBarrier.png"],
		["abilityName","Personal Barrier"],
		["abilityDesc","Gain a Shield that absorbs 560 damage for 3 seconds."]
	],
	"e":[
		["url","assets/abilities/zarya/zarya_shieldAlly.png"],
		["abilityName","Shield Ally"],
		["abilityDesc","Grants an allied Hero a Shield that absorbs 420 damage for 3 seconds."]
	],
	"trait":[
		["url","assets/abilities/zarya/zarya_energy.png"],
		["abilityName","Energy"],
		["abilityDesc","Each time Zarya's Personal Barrier or Shield Ally absorbs 9 damage, her Energy is increased by 1. Each point of Energy increases Zarya's damage by 2%. After 0.5 seconds, Energy decays by 3 per second."]
	],
	"type":"Warrior"
};
var alarak = {
	"heroic1":[
		["url","assets/abilities/alarak/alarak_counterStrike.png"],
		["abilityName","Counter-Strike"],
		["abilityDesc","Alarak targets an area and channels for 1 second, becoming Protected and Unstoppable. After, if he took damage from an enemy Hero, he sends a shockwave that deals 275 damage."]
	],
	"heroic2":[
		["url","assets/abilities/alarak/alarak_deadlyCharge.png"],
		["abilityName","Deadly Charge"],
		["abilityDesc","After channeling, Alarak charges forward dealing 200 damage to all enemies in his path. Distance is increased based on the amount of time channeled, up to 1.6 seconds. Issuing a Move order while this is channeling will cancel it at no cost. Taking damage will interrupt the channeling."]
	],
	"q":[
		["url","assets/abilities/alarak/alarak_discordStrike.png"],
		["abilityName","Discord Strike"],
		["abilityDesc","After a 0.5 second delay, enemies in front of Alarak take 175 damage and are silenced for 1.5 seconds. "]
	],
	"w":[
		["url","assets/abilities/alarak/alarak_telekinesis.png"],
		["abilityName","Telekinesis"],
		["abilityDesc","Vector Targeting Create a force, pushing Alarak and all enemies hit from the targeted point towards the targeted direction. Deals 48 damage to enemies."]
	],
	"e":[
		["url","assets/abilities/alarak/alarak_lightningSurge.png"],
		["abilityName","Lightning Surge"],
		["abilityDesc","Deal 62 damage to an enemy and an additional 100% damage to enemies between Alarak and the target. Restore 70 health for each Hero hit."]
	],
	"trait":[
		["url","assets/abilities/alarak/alarak_sadism.png"],
		["abilityName","Sadism"],
		["abilityDesc","Alarak's Ability damage and self-healing are increased by 100% against enemy Heroes. Takedowns increase Sadism by 3%, up to 30%. Sadism gained from Takedowns is lost on death."]
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
		["abilityDesc","Channel on the spirit of a dead ally for 0.5 seconds. After a 5 second delay, they are brought back to life with 50% of their maximum Health at the location where they died."]
	],
	"q":[
		["url","assets/abilities/auriel/auriel_sacredSweep.png"],
		["abilityName","Sacred Sweep"],
		["abilityDesc","Sweep the area with sacred power, dealing 80 damage to enemies and an additional 160 damage to enemies caught in the center."]
	],
	"w":[
		["url","assets/abilities/auriel/auriel_rayofHeaven.png"],
		["abilityName","Ray of Heaven"],
		["abilityDesc","Consume Auriel's stored energy and heal allied Heroes in the area for the amount of energy consumed."]
	],
	"e":[
		["url","assets/abilities/auriel/auriel_detainmentStrike.png"],
		["abilityName","Detainment Strike"],
		["abilityDesc","Deal 115 damage to the first enemy Hero hit and knock them back. If they collide with terrain, they are also stunned for 1.25 seconds and take an additional 115 damage."]
	],
	"trait":[
		["url","assets/abilities/auriel/auriel_bestowHope.png"],
		["abilityName","Bestow Hope"],
		["abilityDesc","Passive: 40% of the damage Auriel deals to Heroes and 5% dealt to non-Heroes is stored as energy. Bestow an allied Hero with Hope. While they remain near Auriel, damage they deal causes her to gain energy. Auriel can only have Bestow Hope on 1 ally at a time. Auriel can store up to 505 energy."]
	],
	"type":"Support"
};
var guldan = {
	"heroic1":[
		["url","assets/abilities/guldan/guldan_horrify.png"],
		["abilityName","Horrify"],
		["abilityDesc","After 0.5 seconds, deal 120 damage to enemy Heroes in an area and Fear them for 2 seconds. While Feared, Heroes are Silenced and are forced to run away from Horrify's center."]
	],
	"heroic2":[
		["url","assets/abilities/guldan/guldan_rainofDestruction.png"],
		["abilityName","Rain of Destruction"],
		["abilityDesc","Channel to summon a rain of meteors in an area over 7 seconds. Each meteor deals 165 damage in a small area."]
	],
	"q":[
		["url","assets/abilities/guldan/guldan_felFlame.png"],
		["abilityName","Fel Flame"],
		["abilityDesc","Release a wave of flame, dealing 200 damage to enemies."]
	],
	"w":[
		["url","assets/abilities/guldan/guldan_drainLife.png"],
		["abilityName","Drain Life"],
		["abilityDesc","Drain the life from an enemy over 3 seconds, dealing 132 damage per second and healing Gul'dan for 188 Health per second."]
	],
	"e":[
		["url","assets/abilities/guldan/guldan_corruption.png"],
		["abilityName","Corruption"],
		["abilityDesc","Call forth three bursts of shadow energy, dealing 204 damage over 6 seconds. Corruption can stack up to 3 times on an enemy."]
	],
	"trait":[
		["url","assets/abilities/guldan/guldan_lifeTap.png"],
		["abilityName","Life Tap"],
		["abilityDesc","Gul'dan does not regenerate Mana. Activate to restore 25% mana."]
	],
	"type":"Assassin"
};
var medivh = {
	"heroic1":[
		["url","assets/abilities/medivh/medivh_polyBomb.png"],
		["abilityName","Poly Bomb"],
		["abilityDesc","Polymorph an enemy Hero for 2 seconds, Silencing them and making them unable to attack. On expiration, Poly Bomb spreads to other nearby enemy Heroes."]
	],
	"heroic2":[
		["url","assets/abilities/medivh/medivh_leyLineSeal.png"],
		["abilityName","Ley Line Seal"],
		["abilityDesc","After 0.5 seconds, unleash a wave of energy that places enemy Heroes in Time Stop for 3 seconds."]
	],
	"q":[
		["url","assets/abilities/medivh/medivh_arcaneRift.png"],
		["abilityName","Arcane Rift"],
		["abilityDesc","Launch a rift that deals 200 damage to enemies in its path. If an enemy Hero is hit, reduce its cooldown by 5 seconds and refund 50 Mana."]
	],
	"w":[
		["url","assets/abilities/medivh/medivh_forceofWill.png"],
		["abilityName","Force of Will"],
		["abilityDesc","Protect an allied Hero from all damage for 1.5 seconds."]
	],
	"e":[
		["url","assets/abilities/medivh/medivh_portal.png"],
		["abilityName","Portal"],
		["abilityDesc","Create a set of portals between Medivh and the target location, allowing allies to teleport between both. The portals last 6 seconds."]
	],
	"trait":[
		["url","assets/abilities/medivh/medivh_ravenForm.png"],
		["abilityName","Raven Form"],
		["abilityDesc","Instead of mounting, Medivh can transform into a raven, increasing Movement Speed by 20%. While transformed, Medivh can see and fly over all terrain and is immune to all effects."]
	],
	"type":"Specialist"
};
var chromie = {
	"heroic1":[
		["url","assets/abilities/chromie/chromie_slowingSands.png"],
		["abilityName","Slowing Sands"],
		["abilityDesc","Place a sand vortex that greatly slows enemies inside it. The longer it is active the more it slows, up to 60% after 3 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/chromie/chromie_temporalLoop.png"],
		["abilityName","Temporal Loop"],
		["abilityDesc","Choose an enemy Hero. After 3 seconds, they will teleport back to the location where Temporal Loop was cast on them."]
	],
	"q":[
		["url","assets/abilities/chromie/chromie_sandBlast.png"],
		["abilityName","Sand Blast"],
		["abilityDesc","After 1 second, fire a missile that deals 300 damage to the first enemy Hero hit. Quest: "]
	],
	"w":[
		["url","assets/abilities/chromie/chromie_dragon’sBreath.png"],
		["abilityName","Dragon’s Breath"],
		["abilityDesc","Fire a blast into the air that lands after 1.5 seconds, dealing 480 damage to enemies in an area. Enemies cannot see where the blast will land."]
	],
	"e":[
		["url","assets/abilities/chromie/chromie_timeTrap.png"],
		["abilityName","Time Trap"],
		["abilityDesc","Place a Time Trap that arms and Stealths after 2 seconds. The first enemy Hero to touch it is placed in Time Stop for 2 seconds. Only 1 trap can exist at once."]
	],
	"trait":[
		["url","assets/abilities/chromie/chromie_timewalker.png"],
		["abilityName","Timewalker"],
		["abilityDesc","Chromie has traveled to the future, and as such, will learn her Talents 2 levels earlier than her teammates!"]
	],
	"type":"Assassin"
};
var tracer = {
	"heroic1":[
		["url","assets/abilities/tracer/tracer_pulseBomb.png"],
		["abilityName","Pulse Bomb"],
		["abilityDesc","Fire a short range bomb that can attach to an enemy if it hits them. The bomb explodes after 2 seconds dealing 420 damage to them and 210 damage to other nearby enemies. This Ability is slowly charged over time by dealing damage to enemies with Basic Attacks and Melee."]
	],
	"heroic2":[
		["url","assets/abilities/tracer/tracer_blink.png"],
		["abilityName","Blink"],
		["abilityDesc","Dash towards an area. Stores up to 3 charges."]
	],
	"q":[
		["url","assets/abilities/tracer/tracer_melee.png"],
		["abilityName","Melee"],
		["abilityDesc","Deal 254 damage to a nearby enemy, prioritizing Heroes. Gain 5% Pulse Bomb charge when using Melee against an enemy, and 10% against Heroes."]
	],
	"w":[
		["url","assets/abilities/tracer/tracer_recall.png"],
		["abilityName","Recall"],
		["abilityDesc","Tracer returns to the position she was at 3 seconds ago, refilling her ammo, and removing all negative status effects from herself."]
	],
	"e":[
		["url","assets/abilities/tracer/tracer_reload.png"],
		["abilityName","Reload"],
		["abilityDesc","Tracer can Basic Attack while moving, and after attacking 10 times she needs to reload over 0.75 seconds. Tracer can manually reload early by activating Reload."]
	],
	"type":"Assassin"
};
var dehaka = {
	"heroic1":[
		["url","assets/abilities/dehaka/dehaka_isolation.png"],
		["abilityName","Isolation"],
		["abilityDesc","Launch biomass that hits the first enemy Hero dealing 200 damage, Silencing and Slowing them 30% for 3 seconds. Additionally, their vision radius is greatly reduced for 6 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/dehaka/dehaka_adaptation.png"],
		["abilityName","Adaptation"],
		["abilityDesc","After 4 seconds, heal for 100% of the damage Dehaka took over this period."]
	],
	"q":[
		["url","assets/abilities/dehaka/dehaka_drag.png"],
		["abilityName","Drag"],
		["abilityDesc","Dehaka lashes out his tongue, dealing 160 damage to the first enemy hit, stunning and dragging them with him for 1.75 seconds. If Dehaka is stunned or silenced while using Drag, the effect ends."]
	],
	"w":[
		["url","assets/abilities/dehaka/dehaka_darkSwarm.png"],
		["abilityName","Dark Swarm"],
		["abilityDesc","Deal 50 damage every 0.5 seconds to nearby enemies for 3.5 seconds. While active, you are able to move through units. Can be cast during Drag and Burrow."]
	],
	"e":[
		["url","assets/abilities/dehaka/dehaka_burrow.png"],
		["abilityName","Burrow"],
		["abilityDesc","Burrow into the ground, entering Stasis and becoming Invulnerable for 2 seconds."]
	],
	"trait":[
		["url","assets/abilities/dehaka/dehaka_essenceCollection.png"],
		["abilityName","Essence Collection"],
		["abilityDesc","Killing an enemy Hero will grant 10 Essence and Minion kills grant 2 Essence. Each Essence consumed heals 29 health over 5 seconds. A maximum of 50 Essence can be stored. Can be cast while channeling."]
	],
	"type":"Warrior"
};
var xul = {
	"heroic1":[
		["url","assets/abilities/xul/xul_poisonNova.png"],
		["abilityName","Poison Nova"],
		["abilityDesc","After 0.5 seconds, release poisonous missiles that deal 570 damage to all enemies hit over 10 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/xul/xul_skeletalMages.png"],
		["abilityName","Skeletal Mages"],
		["abilityDesc","Vector Targeting Summon 4 Frost Mages in a line that attack nearby enemies for 47 damage a second and Slow them by 30% for 2 seconds. Last up to 15 seconds."]
	],
	"q":[
		["url","assets/abilities/xul/xul_spectralScythe.png"],
		["abilityName","Spectral Scythe"],
		["abilityDesc","Summon a scythe that travels to Xul after 1 second, dealing 240 damage to enemies."]
	],
	"w":[
		["url","assets/abilities/xul/xul_cursedStrikes.png"],
		["abilityName","Cursed Strikes"],
		["abilityDesc","Xul's Basic Attacks deal damage in a wide area and reduce the Attack Speed of Heroes and Summons by 40% for 2 seconds. Lasts 4 seconds once triggered."]
	],
	"e":[
		["url","assets/abilities/xul/xul_bonePrison.png"],
		["abilityName","Bone Prison"],
		["abilityDesc","After a 2 second delay, deal 80 damage and Root the target enemy Hero for 1.75 seconds. All nearby Skeletal Warriors will fixate on the target for their duration."]
	],
	"trait":[
		["url","assets/abilities/xul/xul_raiseSkeleton.png"],
		["abilityName","Raise Skeleton"],
		["abilityDesc","When a nearby enemy Minion dies, it becomes a Skeletal Warrior with 270 Health that attacks for 23 damage and last up to 15 seconds. Up to 4 Skeletal Warriors can be active at once."]
	],
	"type":"Specialist"
};
var liming = {
	"heroic1":[
		["url","assets/abilities/li-ming/li-ming_disintegrate.png"],
		["abilityName","Disintegrate"],
		["abilityDesc","Channel a powerful beam, dealing 440 damage over 2.5 seconds to enemies while they are in it. The direction of the beam changes with your mouse cursor position."]
	],
	"heroic2":[
		["url","assets/abilities/li-ming/li-ming_waveOfForce.png"],
		["abilityName","Wave Of Force"],
		["abilityDesc","Knock away all enemies from an area and deal 160 damage."]
	],
	"q":[
		["url","assets/abilities/li-ming/li-ming_magicMissiles.png"],
		["abilityName","Magic Missiles"],
		["abilityDesc","Fire three missiles toward an area, each dealing 147 damage to the first enemy hit. These missiles do 50% damage to Structures."]
	],
	"w":[
		["url","assets/abilities/li-ming/li-ming_arcaneOrb.png"],
		["abilityName","Arcane Orb"],
		["abilityDesc","Fire an Orb that powers up as it travels, dealing 135 damage to the first enemy hit. The amount of damage dealt is increased the further it travels, up to 405 damage."]
	],
	"e":[
		["url","assets/abilities/li-ming/li-ming_teleport.png"],
		["abilityName","Teleport"],
		["abilityDesc","Teleport a short distance instantly."]
	],
	"trait":[
		["url","assets/abilities/li-ming/li-ming_criticalMass.png"],
		["abilityName","Critical Mass"],
		["abilityDesc","Getting a Takedown will refresh the cooldown on all of Li-Ming's Abilities."]
	],
	"type":"Assassin"
};
var greymane = {
	"heroic1":[
		["url","assets/abilities/greymane/greymane_gofortheThroat.png"],
		["abilityName","Go for the Throat"],
		["abilityDesc","Leap at an enemy Hero and shapeshift into a Worgen, slashing for 355 damage. If this kills them, the Ability can be used a second time within 10 seconds for free."]
	],
	"heroic2":[
		["url","assets/abilities/greymane/greymane_cursedBullet.png"],
		["abilityName","Cursed Bullet"],
		["abilityDesc","Greymane shapeshifts into a Human and fires a bullet that hits the first enemy Hero in its path, dealing 35% of their current Health in damage. Does not affect Vehicles."]
	],
	"q":[
		["url","assets/abilities/greymane/greymane_gilneanCocktail.png"],
		["abilityName","Gilnean Cocktail"],
		["abilityDesc","Hurl a flask that deals 59 damage to the first enemy hit and explodes for 236 damage to enemies in a cone behind them. Worgen: Razor Swipe Swipe forward, damaging enemies hit."]
	],
	"w":[
		["url","assets/abilities/greymane/greymane_innerBeast.png"],
		["abilityName","Inner Beast"],
		["abilityDesc","Gain 50% Attack Speed for 3 seconds. Basic Attacks refresh this duration, and reduce the cooldown of Inner Beast by 0.5 seconds."]
	],
	"e":[
		["url","assets/abilities/greymane/greymane_darkflight.png"],
		["abilityName","Darkflight"],
		["abilityDesc","Shapeshift into a Worgen and leap at an enemy dealing 88 damage. Worgen: Disengage Roll away and shapeshift into a Human."]
	],
	"trait":[
		["url","assets/abilities/greymane/greymane_curseoftheWorgen.png"],
		["abilityName","Curse of the Worgen"],
		["abilityDesc","Greymane can use certain Abilities to shapeshift between a Human and a Worgen. While Human, Greymane's Basic Attacks are ranged. While Worgen, Greymane gains 10 Armor, and his Basic Attacks become melee but deal 40% more damage."]
	],
		["url","assets/abilities/greymane/greymane_gofortheThroat.png"],
		["abilityName","Go for the Throat"],
		["abilityDesc","Leap at an enemy Hero and shapeshift into a Worgen, slashing for 355 damage. If this kills them, the Ability can be used a second time within 10 seconds for free."]
	],
		["url","assets/abilities/greymane/greymane_cursedBullet.png"],
		["abilityName","Cursed Bullet"],
		["abilityDesc","Greymane shapeshifts into a Human and fires a bullet that hits the first enemy Hero in its path, dealing 35% of their current Health in damage. Does not affect Vehicles."]
	],
		["url","assets/abilities/greymane/greymane_razorSwipe.png"],
		["abilityName","Razor Swipe"],
		["abilityDesc","Swipe in the targeted direction, dealing 135 damage to enemies hit. Human: Gilnean Cocktail Damage the first enemy hit and deal heavy damage behind them."]
	],
		["url","assets/abilities/greymane/greymane_innerBeast.png"],
		["abilityName","Inner Beast"],
		["abilityDesc","Gain 50% Attack Speed for 3 seconds. Basic Attacks refresh this duration, and reduce the cooldown of Inner Beast by 0.5 seconds."]
	],
		["url","assets/abilities/greymane/greymane_disengage.png"],
		["abilityName","Disengage"],
		["abilityDesc","Roll away and shapeshift into a Human. Human: Darkflight Leap at an enemy and shapeshift into a Worgen."]
	],
		["url","assets/abilities/greymane/greymane_curseoftheWorgen.png"],
		["abilityName","Curse of the Worgen"],
		["abilityDesc","Greymane can use certain Abilities to shapeshift between a Human and a Worgen. While Human, Greymane's Basic Attacks are ranged. While Worgen, Greymane gains 10 Armor, and his Basic Attacks become melee but deal 40% more damage."]
	],
	"type":"Assassin"
};
var lunara = {
	"heroic1":[
		["url","assets/abilities/lunara/lunara_thornwoodVine.png"],
		["abilityName","Thornwood Vine"],
		["abilityDesc","Send forth vines that deal 164 damage to all enemies in a line. Stores up to 3 charges."]
	],
	"heroic2":[
		["url","assets/abilities/lunara/lunara_leapingStrike.png"],
		["abilityName","Leaping Strike"],
		["abilityDesc","Leap over an enemy, slowing them by 80% for 0.35 seconds and dealing 271 damage. Stores up to 2 charges."]
	],
	"q":[
		["url","assets/abilities/lunara/lunara_noxiousBlossom.png"],
		["abilityName","Noxious Blossom"],
		["abilityDesc","After 0.5 seconds, cause an area to explode with pollen dealing 160 damage."]
	],
	"w":[
		["url","assets/abilities/lunara/lunara_cripplingSpores.png"],
		["abilityName","Crippling Spores"],
		["abilityDesc","Enemies currently afflicted by Nature's Toxin have its duration increased by 3 seconds and are slowed by 40% decaying over 3 seconds. "]
	],
	"e":[
		["url","assets/abilities/lunara/lunara_wisp.png"],
		["abilityName","Wisp"],
		["abilityDesc","Spawn a Wisp to scout an area. Can be redirected once active. Lasts 45 seconds."]
	],
	"trait":[
		["url","assets/abilities/lunara/lunara_naturesToxin.png"],
		["abilityName","Nature's Toxin"],
		["abilityDesc","Lunara's Basic Attacks and damaging Abilities poison their target, dealing 34 damage a second for 3 seconds. Every additional application increases the duration by 3 seconds, up to a maximum of 9 seconds."]
	],
	"type":"Assassin"
};
var chogall = {
	"heroic1":[
		["url","assets/abilities/chogall/chogall_hammerofTwilight.png"],
		["abilityName","Hammer of Twilight"],
		["abilityDesc","Activate to swing the Hammer of Twilight, dealing 150 damage, pushing enemies away, and Stunning them for 0.75 seconds. Passive: Cho's Basic Attacks deal 25% increased damage."]
	],
	"heroic2":[
		["url","assets/abilities/chogall/chogall_upheaval.png"],
		["abilityName","Upheaval"],
		["abilityDesc","After 1 second, pull enemies towards Cho'gall, slowing them by 25% for 3 seconds and dealing 175 damage."]
	],
	"q":[
		["url","assets/abilities/chogall/chogall_surgingFist.png"],
		["abilityName","Surging Fist"],
		["abilityDesc","Activate to begin charging Surging Fist. Activate again to dash forward, knocking aside enemies and dealing 46 damage. The dash range increases by up to 250%, depending on how long it is charged."]
	],
	"w":[
		["url","assets/abilities/chogall/chogall_consumingBlaze.png"],
		["abilityName","Consuming Blaze"],
		["abilityDesc","Ignite nearby enemies, dealing 150 damage over 5 seconds. Basic Attacking burning enemies re-Ignites them. Cho is healed for 40 when an enemy is Ignited."]
	],
	"e":[
		["url","assets/abilities/chogall/chogall_runeBomb.png"],
		["abilityName","Rune Bomb"],
		["abilityDesc","Roll a bomb dealing 91 damage to enemies in its path. Gall can use Runic Blast to detonate it to deal 233 damage in an area."]
	],
	"trait":[
		["url","assets/abilities/chogall/chogall_ogreHide.png"],
		["abilityName","Ogre Hide"],
		["abilityDesc","Activate to gain 25 Armor, but reduce Gall's damage by 25%."]
	],
		["url","assets/abilities/chogall/chogall_shadowBoltVolley.png"],
		["abilityName","Shadow Bolt Volley"],
		["abilityDesc","After 1 second, unleash 20 Shadow Bolts over 4 seconds, each dealing 87 damage to the first target hit. The bolts fire towards your mouse."]
	],
		["url","assets/abilities/chogall/chogall_twistingNether.png"],
		["abilityName","Twisting Nether"],
		["abilityDesc","After 1 second, nearby enemies are slowed by 50% while Gall channels, up to 5 seconds. Activate to deal 353 damage."]
	],
		["url","assets/abilities/chogall/chogall_shadowflame.png"],
		["abilityName","Shadowflame"],
		["abilityDesc","Deal 135 damage to enemies in the area."]
	],
		["url","assets/abilities/chogall/chogall_dreadOrb.png"],
		["abilityName","Dread Orb"],
		["abilityDesc","Throw a bomb that will bounce three times, dealing 126 damage to enemies."]
	],
		["url","assets/abilities/chogall/chogall_runicBlast.png"],
		["abilityName","Runic Blast"],
		["abilityDesc","Detonate Cho's Rune Bomb, dealing 233 damage around it."]
	],
		["url","assets/abilities/chogall/chogall_ogreRage.png"],
		["abilityName","Ogre Rage"],
		["abilityDesc","Activate to increase Gall's damage by 25%, but reduce Cho's Armor by 25. Passive: Gall is permanently immune to Stun and Silence effects."]
	],
	"type":"Assassin"
};
var artanis = {
	"heroic1":[
		["url","assets/abilities/artanis/artanis_suppressionPulse.png"],
		["abilityName","Suppression Pulse"],
		["abilityDesc","Fire a large area pulse from the Spear of Adun, dealing 114 damage and Blinding enemies for 4 seconds. Unlimited range."]
	],
	"heroic2":[
		["url","assets/abilities/artanis/artanis_purifierBeam.png"],
		["abilityName","Purifier Beam"],
		["abilityDesc","Target an enemy Hero with an orbital beam from the Spear of Adun, dealing 184 damage per second for 8 seconds. The beam will chase the target as they move. Unlimited range."]
	],
	"q":[
		["url","assets/abilities/artanis/artanis_bladeDash.png"],
		["abilityName","Blade Dash"],
		["abilityDesc","Dash forward and deal 57 damage to enemies, then return and deal 171 damage. Every enemy hit reduces the cooldown on Shield Overload by 1 second, and Heroes by 2 seconds."]
	],
	"w":[
		["url","assets/abilities/artanis/artanis_twinBlades.png"],
		["abilityName","Twin Blades"],
		["abilityDesc","Artanis's next Basic Attack immediately causes him to charge a short distance and strike the enemy 2 times."]
	],
	"e":[
		["url","assets/abilities/artanis/artanis_phasePrism.png"],
		["abilityName","Phase Prism"],
		["abilityDesc","Fire a Phase Prism that deals 66 damage to the first Hero hit and swaps Artanis's position with theirs. Can be used during Blade Dash."]
	],
	"trait":[
		["url","assets/abilities/artanis/artanis_shieldOverload.png"],
		["abilityName","Shield Overload"],
		["abilityDesc","After taking damage while below 75% Health grants Artanis a 375 point Shield for 5 seconds. Basic Attacks lower the cooldown of Shield Overload by 4 seconds."]
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
		["abilityDesc","Heal target ally for 180 Health per second as long as they are in range. After not channeling Healing Beam for 3 seconds, regenerate 6 Energy per second. Reactivate to switch targets, or self-cast to cancel channeling."]
	],
	"w":[
		["url","assets/abilities/lt-morales/lt-morales_safeguard.png"],
		["abilityName","Safeguard"],
		["abilityDesc","Grant target ally 25 Armor, reducing their damage taken by 25% for 3 seconds."]
	],
	"e":[
		["url","assets/abilities/lt-morales/lt-morales_displacementGrenade.png"],
		["abilityName","Displacement Grenade"],
		["abilityDesc","Fire a grenade that can be manually detonated, dealing 210 to nearby enemies and knocking them away."]
	],
	"trait":[
		["url","assets/abilities/lt-morales/lt-morales_caduceusReactor.png"],
		["abilityName","Caduceus Reactor"],
		["abilityDesc","While channeling Healing Beam, Lt. Morales regenerates 2% of her maximum Health per second."]
	],
	"type":"Support"
};
var rexxar = {
	"heroic1":[
		["url","assets/abilities/rexxar/rexxar_unleashtheBoars.png"],
		["abilityName","Unleash the Boars"],
		["abilityDesc","Release a herd of boars that track down all enemy Heroes in a direction, dealing 110 damage, revealing, and slowing enemies by 40% for 5 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/rexxar/rexxar_bestialWrath.png"],
		["abilityName","Bestial Wrath"],
		["abilityDesc","Increases Misha's Basic Attack damage by 150% for 12 seconds."]
	],
	"q":[
		["url","assets/abilities/rexxar/rexxar_spiritSwoop.png"],
		["abilityName","Spirit Swoop"],
		["abilityDesc","Deal 141 damage to enemies in a line, slowing them by 30% for 2 seconds."]
	],
	"w":[
		["url","assets/abilities/rexxar/rexxar_mishaCharge!.png"],
		["abilityName","Misha, Charge!"],
		["abilityDesc","Misha charges in a line, dealing 59 damage and stunning enemies for 1.25 seconds."]
	],
	"e":[
		["url","assets/abilities/rexxar/rexxar_mendPet.png"],
		["abilityName","Mend Pet"],
		["abilityDesc","Heal Misha for 714 Health over 5 seconds."]
	],
	"trait":[
		["url","assets/abilities/rexxar/rexxar_mishaFocus!.png"],
		["abilityName","Misha, Focus!"],
		["abilityDesc","Passive: Misha gains 15% move speed. Command Misha to attack a specific enemy or move to a point and wait. Targeting Rexxar commands Misha to retreat to his position, gaining 30% move speed until she reaches Rexxar. Targeting Misha commands her to hold her current position."]
	],
	"type":"Warrior"
};
var kharazim = {
	"heroic1":[
		["url","assets/abilities/kharazim/kharazim_sevenSidedStrike.png"],
		["abilityName","Seven-Sided Strike"],
		["abilityDesc","Become Invulnerable and strike 7 times over 2 seconds. Each strike hits the highest Health nearby Hero for 7% of their maximum Health."]
	],
	"heroic2":[
		["url","assets/abilities/kharazim/kharazim_divinePalm.png"],
		["abilityName","Divine Palm"],
		["abilityDesc","Protect an allied Hero from death, causing them to be healed for 1141 if they take fatal damage in the next 3 seconds."]
	],
	"q":[
		["url","assets/abilities/kharazim/kharazim_radiantDash.png"],
		["abilityName","Radiant Dash"],
		["abilityDesc","Jump to an allied or enemy unit. Enemies are immediately hit with a Basic Attack. Stores up to 2 charges."]
	],
	"w":[
		["url","assets/abilities/kharazim/kharazim_breathofHeaven.png"],
		["abilityName","Breath of Heaven"],
		["abilityDesc","Heal nearby Heroes for 290 and give them 15% Movement Speed for 3 seconds."]
	],
	"e":[
		["url","assets/abilities/kharazim/kharazim_deadlyReach.png"],
		["abilityName","Deadly Reach"],
		["abilityDesc","Kharazim's next Basic Attack increases his Attack Speed and Attack Range by 100% for 2 seconds."]
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
		["abilityDesc","Create an unpathable tomb for 4 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/leoric/leoric_marchoftheBlackKing.png"],
		["abilityName","March of the Black King"],
		["abilityDesc","Leoric becomes Unstoppable and swings his mace three times, healing himself for 12% of his maximum Health for each enemy Hero hit and dealing 250 damage."]
	],
	"q":[
		["url","assets/abilities/leoric/leoric_skeletalSwing.png"],
		["abilityName","Skeletal Swing"],
		["abilityDesc","Leoric swings his mace, dealing 150 damage and Slowing enemies by 40% for 2.5 seconds. If an enemy Hero is hit, refund 50% of the cooldown and Mana cost. Peasants!"]
	],
	"w":[
		["url","assets/abilities/leoric/leoric_drainHope.png"],
		["abilityName","Drain Hope"],
		["abilityDesc","Grab an enemy Hero's soul, dealing up to 20% of their maximum Health as damage and healing Leoric for up to 20% of his maximum Health while he is nearby, over 4 seconds. Leoric is Slowed by 20% while this is active."]
	],
	"e":[
		["url","assets/abilities/leoric/leoric_wraithWalk.png"],
		["abilityName","Wraith Walk"],
		["abilityDesc","Leoric separates from his body, becoming Unstoppable and gaining Movement Speed accelerating up to 50% over 2.5 seconds. When Wraith Walk ends or is canceled, his body jumps to his wraith."]
	],
	"trait":[
		["url","assets/abilities/leoric/leoric_undying.png"],
		["abilityName","Undying"],
		["abilityDesc","Leoric becomes a ghost when he dies, and resurrects upon reaching full Health. Leoric deals no damage while dead."]
	],
	"type":"Warrior"
};
var thebutcher = {
	"heroic1":[
		["url","assets/abilities/the-butcher/the-butcher_lambtotheSlaughter.png"],
		["abilityName","Lamb to the Slaughter"],
		["abilityDesc","Throw a hitching post that attaches to the nearest enemy Hero after a 1 second delay. This deals 171 damage and causes the enemy to be chained to the post and Silenced for 3 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/the-butcher/the-butcher_furnaceBlast.png"],
		["abilityName","Furnace Blast"],
		["abilityDesc","After a 3 second delay, fire explodes around The Butcher dealing 500 damage to enemies. Can be cast while using Ruthless Onslaught."]
	],
	"q":[
		["url","assets/abilities/the-butcher/the-butcher_hamstring.png"],
		["abilityName","Hamstring"],
		["abilityDesc","Deal 110 damage and slow enemies by 50% fading over 2 seconds. The Butcher's next Basic Attack will strike immediately."]
	],
	"w":[
		["url","assets/abilities/the-butcher/the-butcher_butchersBrand.png"],
		["abilityName","Butcher's Brand"],
		["abilityDesc","Deal 37 damage to an enemy and Brand them for 4 seconds. The Butcher's Basic Attacks against the Branded target heal him for 75% of the damage done. Basic Attacks against Branded Heroes heal for double and extend the duration of the Brand by 0.5 seconds."]
	],
	"e":[
		["url","assets/abilities/the-butcher/the-butcher_ruthlessOnslaught.png"],
		["abilityName","Ruthless Onslaught"],
		["abilityDesc","Charge at an enemy, becoming Unstoppable and gaining Movement Speed. If The Butcher reaches the target, they are stunned for 1 second and take 119 damage."]
	],
	"trait":[
		["url","assets/abilities/the-butcher/the-butcher_freshMeat.png"],
		["abilityName","Fresh Meat"],
		["abilityDesc","Upon dying, nearby enemy Minions drop 1 Fresh Meat and enemy Heroes drop 25 Fresh Meat. Fresh Meat can be picked up to gain 0.5 Attack Damage per Meat. The Butcher loses 10 Fresh Meat upon dying. Quest: Collect 200 Fresh Meat. Reward: Gain an additional 125 Attack Damage and 25% increased Attack Speed. Heroes continue to drop 10 Fresh Meat, Minions no longer drop Fresh Meat, and Fresh Meat is no longer lost on death."]
	],
	"type":"Assassin"
};
var johanna = {
	"heroic1":[
		["url","assets/abilities/johanna/johanna_fallingSword.png"],
		["abilityName","Falling Sword"],
		["abilityDesc","Johanna leaps towards an area. While in the air, she can steer the landing location by moving. After 2 seconds Johanna lands, dealing 365 damage to nearby enemies and knocking them into the air."]
	],
	"heroic2":[
		["url","assets/abilities/johanna/johanna_blessedShield.png"],
		["abilityName","Blessed Shield"],
		["abilityDesc","Deal 114 damage and stun the first enemy hit for 1.5 seconds. Blessed Shield then bounces to 2 nearby enemies, dealing 57 damage and stunning them for 0.75 seconds."]
	],
	"q":[
		["url","assets/abilities/johanna/johanna_punish.png"],
		["abilityName","Punish"],
		["abilityDesc","Step forward dealing 113 damage and Slowing enemies by 60% decaying over 2 seconds."]
	],
	"w":[
		["url","assets/abilities/johanna/johanna_condemn.png"],
		["abilityName","Condemn"],
		["abilityDesc","After 1 second, Johanna pulls nearby enemies toward her, stunning them for 0.25 seconds and dealing 55 damage. Deals 200% increased damage to Minions and Mercenaries."]
	],
	"e":[
		["url","assets/abilities/johanna/johanna_shieldGlare.png"],
		["abilityName","Shield Glare"],
		["abilityDesc","Deal 59 damage to enemies and cause them to miss Basic Attacks for 1.5 seconds."]
	],
	"trait":[
		["url","assets/abilities/johanna/johanna_ironSkin.png"],
		["abilityName","Iron Skin"],
		["abilityDesc","Activate to grant Johanna a Shield that absorbs 674 damage for 4 seconds. While this Shield is active, Johanna is Unstoppable."]
	],
	"type":"Warrior"
};
var kaelthas = {
	"heroic1":[
		["url","assets/abilities/kaelthas/kaelthas_phoenix.png"],
		["abilityName","Phoenix"],
		["abilityDesc","Launch a Phoenix to an area, dealing 78 damage to enemies along the way. The Phoenix persists for 7 seconds, attacking enemies for 78 damage and splashing for 50%."]
	],
	"heroic2":[
		["url","assets/abilities/kaelthas/kaelthas_pyroblast.png"],
		["abilityName","Pyroblast"],
		["abilityDesc","After 1.5 seconds, cast a slow-moving fireball that deals 810 damage to an enemy Hero and 405 damage to enemies nearby."]
	],
	"q":[
		["url","assets/abilities/kaelthas/kaelthas_flamestrike.png"],
		["abilityName","Flamestrike"],
		["abilityDesc","After 1 second, deal 320 damage in an area. Verdant Spheres increases the radius by 50%."]
	],
	"w":[
		["url","assets/abilities/kaelthas/kaelthas_livingBomb.png"],
		["abilityName","Living Bomb"],
		["abilityDesc","Deal 120 damage over 3 seconds to an enemy, then they explode dealing 200 damage to all nearby enemies. Other Heroes damaged by this explosion are also affected by Living Bomb, though the secondary explosions cannot spread. Verdant Spheres makes this Ability cost no Mana and have no cooldown."]
	],
	"e":[
		["url","assets/abilities/kaelthas/kaelthas_gravityLapse.png"],
		["abilityName","Gravity Lapse"],
		["abilityDesc","Stun the first enemy hit for 1 second. Verdant Spheres causes Gravity Lapse to stun the first 3 enemies hit and increases the stun duration by 50%."]
	],
	"trait":[
		["url","assets/abilities/kaelthas/kaelthas_verdantSpheres.png"],
		["abilityName","Verdant Spheres"],
		["abilityDesc","Activate to make Kael'thas's next Basic Ability more powerful."]
	],
	"type":"Assassin"
};
var sylvanas = {
	"heroic1":[
		["url","assets/abilities/sylvanas/sylvanas_wailingArrow.png"],
		["abilityName","Wailing Arrow"],
		["abilityDesc","Shoot an arrow that can be reactivated to deal 228 damage and silence enemies in an area making them unable to use Abilities for 2.5 seconds. The arrow detonates automatically if it reaches maximum range."]
	],
	"heroic2":[
		["url","assets/abilities/sylvanas/sylvanas_mindControl.png"],
		["abilityName","Mind Control"],
		["abilityDesc","After a 1 second cast, take control of an enemy Hero's movement, Silencing them and prevent them from doing anything else. Channel lasts 2.5 seconds."]
	],
	"q":[
		["url","assets/abilities/sylvanas/sylvanas_witheringFire.png"],
		["abilityName","Withering Fire"],
		["abilityDesc","Shoot the closest enemy for 48 damage, preferring Heroes. Gain 1 charge on nearby enemy Minion or Mercenary deaths, and 3 charges on nearby enemy Hero deaths. Stores up to 5 charges."]
	],
	"w":[
		["url","assets/abilities/sylvanas/sylvanas_shadowDagger.png"],
		["abilityName","Shadow Dagger"],
		["abilityDesc","Deals 37 damage and an additional 148 damage over 2 seconds to target unit. The effect spreads to nearby targets."]
	],
	"e":[
		["url","assets/abilities/sylvanas/sylvanas_hauntingWave.png"],
		["abilityName","Haunting Wave"],
		["abilityDesc","Send forth a wave of banshees dealing 114 damage to all targets. Reactivate to teleport to the banshees' location."]
	],
	"trait":[
		["url","assets/abilities/sylvanas/sylvanas_blackArrows.png"],
		["abilityName","Black Arrows"],
		["abilityDesc","Basic Attacks and Abilities stun Minions, Mercenaries, and Structures for 1 second."]
	],
	"type":"Specialist"
};
var thelostvikings = {
	"heroic1":[
		["url","assets/abilities/the-lost-vikings/the-lost-vikings_longboatRaid!.png"],
		["abilityName","Longboat Raid!"],
		["abilityDesc","Hop into an Unstoppable Longboat that fires at nearby enemies for 112 damage per second and can fire a mortar that deals 205 damage in an area. The boat has increased Health for each Viking inside. If the boat is destroyed by enemies, all Vikings are stunned for 1.5 seconds. Lasts 15 seconds. Requires all surviving Vikings to be nearby."]
	],
	"heroic2":[
		["url","assets/abilities/the-lost-vikings/the-lost-vikings_playAgain!.png"],
		["abilityName","Play Again!"],
		["abilityDesc","Summon, fully heal, and revive all Lost Vikings at target location after a Viking channels for 2 seconds. Only one Viking may attempt to summon at a time."]
	],
	"q":[
		["url","assets/abilities/the-lost-vikings/the-lost-vikings_jump!.png"],
		["abilityName","Jump!"],
		["abilityDesc","Makes all Vikings Invulnerable and able to pass over enemies for 1.5 seconds."]
	],
	"w":[
		["url","assets/abilities/the-lost-vikings/the-lost-vikings_spinToWin!.png"],
		["abilityName","Spin To Win!"],
		["abilityDesc","Activate to have each Viking deal 101 damage to nearby enemies."]
	],
	"e":[
		["url","assets/abilities/the-lost-vikings/the-lost-vikings_norseForce!.png"],
		["abilityName","Norse Force!"],
		["abilityDesc","All Vikings gain a 110 to 220 point Shield, increasing in strength for each Viking alive. Lasts 4 seconds."]
	],
	"trait":[
		["url","assets/abilities/the-lost-vikings/the-lost-vikings_vikingHoard.png"],
		["abilityName","Viking Hoard"],
		["abilityDesc","Gathering a Regeneration Globe with a Viking permanently increases all their Health Regeneration by 0.5 per second."]
	],
	"type":"Specialist"
};
var thrall = {
	"heroic1":[
		["url","assets/abilities/thrall/thrall_sundering.png"],
		["abilityName","Sundering"],
		["abilityDesc","After 0.5 seconds, sunder the earth in a long line, dealing 290 damage and shoving enemies to the side, Stunning them for 1 second."]
	],
	"heroic2":[
		["url","assets/abilities/thrall/thrall_earthquake.png"],
		["abilityName","Earthquake"],
		["abilityDesc","After 0.5 seconds, summon a massive Earthquake that pulses every 4 seconds. Each pulse lasts 2 seconds, Slowing all enemies in the area by 50%, and deals 50 damage to enemy Heroes. Does 3 pulses."]
	],
	"q":[
		["url","assets/abilities/thrall/thrall_chainLightning.png"],
		["abilityName","Chain Lightning"],
		["abilityDesc","Shock an enemy with lightning, dealing 178 damage. The lightning then bounces 3 times to nearby enemies, dealing 89 damage to each enemy hit."]
	],
	"w":[
		["url","assets/abilities/thrall/thrall_feralSpirit.png"],
		["abilityName","Feral Spirit"],
		["abilityDesc","Unleash a Feral Spirit that deals 153 damage to enemies in its path and Roots Heroes hit for 1 second. Each Hero hit increases the distance traveled by 25%."]
	],
	"e":[
		["url","assets/abilities/thrall/thrall_windfury.png"],
		["abilityName","Windfury"],
		["abilityDesc","Increase Thrall's Movement Speed by 30% for 4 seconds. His next 3 Basic Attacks occur 100% faster and generate stacks of Frostwolf Resilience."]
	],
	"trait":[
		["url","assets/abilities/thrall/thrall_frostwolfResilience.png"],
		["abilityName","Frostwolf Resilience"],
		["abilityDesc","Dealing damage with Abilities grants 1 stack of Frostwolf Resilience. At 5 stacks, Thrall is instantly healed for 223 Health."]
	],
	"type":"Assassin"
};
var jaina = {
	"heroic1":[
		["url","assets/abilities/jaina/jaina_ringofFrost.png"],
		["abilityName","Ring of Frost"],
		["abilityDesc","After a 1.5 second delay, create a Ring of Frost in an area that deals 310 damage and Roots enemies for 3 seconds. The ring persists for 3 seconds afterward, Chilling any enemies who touch it."]
	],
	"heroic2":[
		["url","assets/abilities/jaina/jaina_summonWaterElemental.png"],
		["abilityName","Summon Water Elemental"],
		["abilityDesc","Summon a Water Elemental at target location. The Water Elemental's Basic Attacks deal 78 damage, splash for 25% damage and Chill. The Ability can be reactivated to retarget the Water Elemental. Lasts 20 seconds."]
	],
	"q":[
		["url","assets/abilities/jaina/jaina_frostbolt.png"],
		["abilityName","Frostbolt"],
		["abilityDesc","Deal 190 damage and Chill the target."]
	],
	"w":[
		["url","assets/abilities/jaina/jaina_blizzard.png"],
		["abilityName","Blizzard"],
		["abilityDesc","Bombard an area with 3 waves of ice, dealing 142 damage each. Damaged enemies are Chilled."]
	],
	"e":[
		["url","assets/abilities/jaina/jaina_coneofCold.png"],
		["abilityName","Cone of Cold"],
		["abilityDesc","Deal 230 damage and Chill targets."]
	],
	"trait":[
		["url","assets/abilities/jaina/jaina_frostbite.png"],
		["abilityName","Frostbite"],
		["abilityDesc","Jaina's Abilities Chill targets, slowing Movement Speed by 25% and amplifying damage taken from her Abilities by 50%. Lasts 4 seconds. Quest: 0/15000 Ability damage dealt to Chilled Heroes Reward: Gain the Improved Ice Block ability."]
	],
	"type":"Assassin"
};
var anubarak = {
	"heroic1":[
		["url","assets/abilities/anubarak/anubarak_locustSwarm.png"],
		["abilityName","Locust Swarm"],
		["abilityDesc","Deal 62 damage per second to nearby enemies. Each enemy damaged restores 21 Health. Lasts 6 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/anubarak/anubarak_cocoon.png"],
		["abilityName","Cocoon"],
		["abilityDesc","Wraps target enemy Hero in a cocoon, rendering them unable to act or be targeted for 8 seconds. Allies of the Hero can attack the cocoon to break it and free them early."]
	],
	"q":[
		["url","assets/abilities/anubarak/anubarak_impale.png"],
		["abilityName","Impale"],
		["abilityDesc","Deals 100 damage. Stuns for 1 second."]
	],
	"w":[
		["url","assets/abilities/anubarak/anubarak_hardenCarapace.png"],
		["abilityName","Harden Carapace"],
		["abilityDesc","Gain a Shield that absorbs 315 damage over 3 seconds."]
	],
	"e":[
		["url","assets/abilities/anubarak/anubarak_burrowCharge.png"],
		["abilityName","Burrow Charge"],
		["abilityDesc","Burrow to the target location, dealing 96 damage and briefly stunning enemies in a small area upon surfacing, slowing them by 25% for 2.5 seconds. Burrow Charge can be reactivated to surface early."]
	],
	"trait":[
		["url","assets/abilities/anubarak/anubarak_scarabHost.png"],
		["abilityName","Scarab Host"],
		["abilityDesc","Using an Ability spawns a Beetle which lasts for 8 seconds, attacking nearby enemies for 20 damage."]
	],
	"type":"Warrior"
};
var azmodan = {
	"heroic1":[
		["url","assets/abilities/azmodan/azmodan_demonicInvasion.png"],
		["abilityName","Demonic Invasion"],
		["abilityDesc","Rain a small army of Demonic Grunts down on enemies, dealing 104 damage per impact. Demon Grunts deal 51 damage and have 365 health."]
	],
	"heroic2":[
		["url","assets/abilities/azmodan/azmodan_blackPool.png"],
		["abilityName","Black Pool"],
		["abilityDesc","Create a pool that empowers Azmodan, his Demons, and allied Minions, increasing their Basic Attack and Ability damage by 75%. Pools last 5 seconds. Stores up to 2 charges."]
	],
	"q":[
		["url","assets/abilities/azmodan/azmodan_globeOfAnnihilation.png"],
		["abilityName","Globe Of Annihilation"],
		["abilityDesc","Shoot a globe of destruction, dealing 164 damage on impact. Long range."]
	],
	"w":[
		["url","assets/abilities/azmodan/azmodan_summonDemonWarrior.png"],
		["abilityName","Summon Demon Warrior"],
		["abilityDesc","Spawn a Demon Warrior that marches toward a point. Warriors deal 37 damage per second and last for 10 seconds. Stores up to 2 charges."]
	],
	"e":[
		["url","assets/abilities/azmodan/azmodan_allShallBurn.png"],
		["abilityName","All Shall Burn"],
		["abilityDesc","Channel a death beam on an enemy, dealing 100 damage per second. Damage increases over time, to a max of 200 per second, and is increased by 25% against structures. Azmodan can move at 40% speed while channeling."]
	],
	"trait":[
		["url","assets/abilities/azmodan/azmodan_generalofHell.png"],
		["abilityName","General of Hell"],
		["abilityDesc","Summon a Demon Lieutenant at an allied Mercenary, Minion, or Azmodan's Summons. The Lieutenant will march with the target, granting 15% increased damage and 15% increased maximum Health to all nearby friendly Mercenaries, Minions, and Azmodan's Summons. Unlimited range."]
	],
	"type":"Specialist"
};
var chen = {
	"heroic1":[
		["url","assets/abilities/chen/chen_wanderingKeg.png"],
		["abilityName","Wandering Keg"],
		["abilityDesc","Roll around inside an Unstoppable barrel with 60% increased Movement Speed, dealing 59 damage to enemies in the way and knocking them back. Lasts for 5 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/chen/chen_stormEarthFire.png"],
		["abilityName","Storm, Earth, Fire"],
		["abilityDesc","After 1 second, Chen splits into three elemental spirits for 12 seconds, each with 75% of Chen's maximum Health and a unique ability. If all three spirits are killed, Chen will die as well. Storm can grant the spirits Movement Speed. Earth can leap to an area and slow enemies. Fire can grant the spirits Attack Speed."]
	],
	"q":[
		["url","assets/abilities/chen/chen_flyingKick.png"],
		["abilityName","Flying Kick"],
		["abilityDesc","Kick through target enemy, dealing 112 damage."]
	],
	"w":[
		["url","assets/abilities/chen/chen_kegSmash.png"],
		["abilityName","Keg Smash"],
		["abilityDesc","Smash Chen's keg, dealing 50 damage and drenching affected enemies in Brew, slowing them by 25% for 3 seconds."]
	],
	"e":[
		["url","assets/abilities/chen/chen_breathofFire.png"],
		["abilityName","Breath of Fire"],
		["abilityDesc","Breathe a cone of flames, dealing 96 damage. Enemies soaked in Brew are Ignited, dealing 96 additional damage over 3 seconds."]
	],
	"trait":[
		["url","assets/abilities/chen/chen_fortifyingBrew.png"],
		["abilityName","Fortifying Brew"],
		["abilityDesc","Chen drinks from his keg, instantly gaining 25 Brew. While drinking, Chen continues to gain 30 Brew and 212 temporary Shields per second, up to a maximum of 636 while drinking. Shields persist for 2 seconds after he stops drinking."]
	],
	"type":"Warrior"
};
var rehgar = {
	"heroic1":[
		["url","assets/abilities/rehgar/rehgar_ancestralHealing.png"],
		["abilityName","Ancestral Healing"],
		["abilityDesc","After 1 second, heal an allied Hero for 1552 Health. Cannot be used on Rehgar."]
	],
	"heroic2":[
		["url","assets/abilities/rehgar/rehgar_bloodlust.png"],
		["abilityName","Bloodlust"],
		["abilityDesc","Grant nearby allied Heroes 40% Attack Speed and 25% Movement Speed and causes them to heal for 30% of the Basic Attack damage to their primary target. Lasts for 8 seconds."]
	],
	"q":[
		["url","assets/abilities/rehgar/rehgar_chainHeal.png"],
		["abilityName","Chain Heal"],
		["abilityDesc","Heal an ally with a wave of healing for 334 Health. The wave then bounces 2 times to nearby allies within 8 range, restoring 167 Health to them. "]
	],
	"w":[
		["url","assets/abilities/rehgar/rehgar_lightningShield.png"],
		["abilityName","Lightning Shield"],
		["abilityDesc","Imbue an ally with lightning dealing 70 damage a second to nearby enemies. Lasts 5 seconds."]
	],
	"e":[
		["url","assets/abilities/rehgar/rehgar_earthbindTotem.png"],
		["abilityName","Earthbind Totem"],
		["abilityDesc","Create a totem that slows nearby enemies by 35%. The totem has 217 Health and lasts for 8 seconds."]
	],
	"trait":[
		["url","assets/abilities/rehgar/rehgar_ghostWolf.png"],
		["abilityName","Ghost Wolf"],
		["abilityDesc","Instead of using a mount, Rehgar transforms into a Ghost Wolf with 20% increased Movement Speed. Basic Attacks in Ghost Wolf form cause him to lunge at his target and deal 75% bonus damage. Dealing damage, using Abilities, and channeling cancels Ghost Wolf form."]
	],
	"type":"Support"
};
var zagara = {
	"heroic1":[
		["url","assets/abilities/zagara/zagara_devouringMaw.png"],
		["abilityName","Devouring Maw"],
		["abilityDesc","Summon a Devouring Maw that devours enemies for 4 seconds. Devoured enemies cannot fight and take 80 damage per second. Usable on Unstoppable enemies."]
	],
	"heroic2":[
		["url","assets/abilities/zagara/zagara_nydusNetwork.png"],
		["abilityName","Nydus Network"],
		["abilityDesc","Summon a Nydus Worm on Creep anywhere that Zagara has vision. Zagara can enter a Nydus Worm and travel to any other Nydus Worm by right-clicking near it. While inside a Nydus Worm, Zagara regenerates 10% Health and Mana per second. Stores up to 2 charges. Maximum of 10 Nydus Worms at a time. Passive: Creep spreads 15% farther. Passive: While on Creep, each Basic Attack reduces all of Zagara's cooldowns by .75 seconds."]
	],
	"q":[
		["url","assets/abilities/zagara/zagara_banelingBarrage.png"],
		["abilityName","Baneling Barrage"],
		["abilityDesc","Launch 1 Baneling that deals 86 damage to enemies it hits. Stores up to 4 charges."]
	],
	"w":[
		["url","assets/abilities/zagara/zagara_hunterKiller.png"],
		["abilityName","Hunter Killer"],
		["abilityDesc","Summon a Hydralisk to attack a single target, dealing 68 damage per second. Lasts 8 seconds."]
	],
	"e":[
		["url","assets/abilities/zagara/zagara_infestedDrop.png"],
		["abilityName","Infested Drop"],
		["abilityDesc","Bombard target area with a Zerg Drop Pod for 147 damage. The pod spawns 2 Roachlings that deal 29 damage per second and last for 8 seconds."]
	],
	"trait":[
		["url","assets/abilities/zagara/zagara_creepTumor.png"],
		["abilityName","Creep Tumor"],
		["abilityDesc","Lay a Creep Tumor that generates Creep. While on Creep, Zagara gains 20% additional attack range and both Zagara and her summons move 20% faster. Tumors last 240 seconds and reveal the surrounding area while active. Stores up to 3 charges."]
	],
	"type":"Specialist"
};
var murky = {
	"heroic1":[
		["url","assets/abilities/murky/murky_marchoftheMurlocs.png"],
		["abilityName","March of the Murlocs"],
		["abilityDesc","After 0.75 seconds, Murky commands a legion of Murlocs to march in a target direction, each one leaping onto the first enemy Hero or Structure they find. Each Murloc deals 125 damage and slows its target by 15% for 5 seconds. Murlocs deal 50% damage to Structures."]
	],
	"heroic2":[
		["url","assets/abilities/murky/murky_octoGrab.png"],
		["abilityName","Octo-Grab"],
		["abilityDesc","Murky summons an octopus to stun target enemy Hero for 3 seconds while he hits them for 1 damage a second."]
	],
	"q":[
		["url","assets/abilities/murky/murky_slime.png"],
		["abilityName","Slime"],
		["abilityDesc","Deal 86 damage and apply Slime on nearby enemies for 6 seconds, slowing them by 20%. Deal 210 damage to enemies who are already Slimed."]
	],
	"w":[
		["url","assets/abilities/murky/murky_pufferfish.png"],
		["abilityName","Pufferfish"],
		["abilityDesc","Spit out a Pufferfish with 225 health at the target point. After 3 seconds, the fish will blow up for 410 damage. Deals 50% less damage to Structures."]
	],
	"e":[
		["url","assets/abilities/murky/murky_safetyBubble.png"],
		["abilityName","Safety Bubble"],
		["abilityDesc","Becomes Invulnerable for 2 seconds. While active, Murky cannot attack or use abilities."]
	],
	"trait":[
		["url","assets/abilities/murky/murky_spawnEgg.png"],
		["abilityName","Spawn Egg"],
		["abilityDesc","Place an Egg at target location, revealing the nearby area. Upon dying, Murky respawns at the Egg after 8 seconds. Murky only grants 25% of a real Hero's experience upon dying. If Murky's Egg is killed, he is revealed to enemies for 15 seconds, and Spawn Egg is placed on cooldown. "]
	],
	"type":"Specialist"
};
var brightwing = {
	"heroic1":[
		["url","assets/abilities/brightwing/brightwing_blinkHeal.png"],
		["abilityName","Blink Heal"],
		["abilityDesc","Teleport to a nearby ally, healing them for 204. Stores up to 2 charges."]
	],
	"heroic2":[
		["url","assets/abilities/brightwing/brightwing_emeraldWind.png"],
		["abilityName","Emerald Wind"],
		["abilityDesc","After 0.5 seconds, create an expanding nova of wind, dealing 319 damage and pushing enemies away. Passive: Increases the healing of Soothing Mist by 8%."]
	],
	"q":[
		["url","assets/abilities/brightwing/brightwing_arcaneFlare.png"],
		["abilityName","Arcane Flare"],
		["abilityDesc","Deal 274 damage in a small area and 91 damage in a larger area."]
	],
	"w":[
		["url","assets/abilities/brightwing/brightwing_polymorph.png"],
		["abilityName","Polymorph"],
		["abilityDesc","Polymorph a target for 1.25 seconds, Slowing their Movement Speed by 25% and Silencing them. Targets are not able to attack while Polymorphed."]
	],
	"e":[
		["url","assets/abilities/brightwing/brightwing_pixieDust.png"],
		["abilityName","Pixie Dust"],
		["abilityDesc","Increase target's Movement Speed by 20%, and grant them 30 Spell Armor for 3 seconds, reducing Spell damage taken by 30%."]
	],
	"trait":[
		["url","assets/abilities/brightwing/brightwing_soothingMist.png"],
		["abilityName","Soothing Mist"],
		["abilityDesc","Brightwing heals nearby allied Heroes for 115 every 4 seconds."]
	],
	"type":"Support"
};
var tychus = {
	"heroic1":[
		["url","assets/abilities/tychus/tychus_commandeerOdin.png"],
		["abilityName","Commandeer Odin"],
		["abilityDesc","Call down an Odin to pilot. The Odin deals increased Damage, has 100% increased Basic Attack range, and uses different Abilities. The Odin has 25 Armor and lasts 23 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/tychus/tychus_drakkenLaserDrill.png"],
		["abilityName","Drakken Laser Drill"],
		["abilityDesc","Call down a Laser Drill to attack nearby enemies, dealing 142 damage every second. Reactivate to assign a new target. Lasts 22 seconds."]
	],
	"q":[
		["url","assets/abilities/tychus/tychus_overkill.png"],
		["abilityName","Overkill"],
		["abilityDesc","Deal 516 damage to the target and 252 damage to nearby targets over 4 seconds. Reactivate to select a new target. Can move and use Abilities while channeling."]
	],
	"w":[
		["url","assets/abilities/tychus/tychus_fragGrenade.png"],
		["abilityName","Frag Grenade"],
		["abilityDesc","Lob a grenade that deals 256 damage, knocking enemies away."]
	],
	"e":[
		["url","assets/abilities/tychus/tychus_runandGun.png"],
		["abilityName","Run and Gun"],
		["abilityDesc","Dash a short distance."]
	],
	"trait":[
		["url","assets/abilities/tychus/tychus_minigun.png"],
		["abilityName","Minigun"],
		["abilityDesc","Activate to have Basic Attacks against Heroes deal bonus damage equal to 2.5% of their maximum Health. Lasts 3 seconds."]
	],
	"type":"Assassin"
};
var abathur = {
	"heroic1":[
		["url","assets/abilities/abathur/abathur_ultimateEvolution.png"],
		["abilityName","Ultimate Evolution"],
		["abilityDesc","Clone target allied Hero and control it for 20 seconds. Abathur has perfected the clone, granting it 20% Spell Power, 20% bonus Attack Damage, and 10% bonus Movement Speed. Cannot use their Heroic Ability."]
	],
	"heroic2":[
		["url","assets/abilities/abathur/abathur_evolveMonstrosity.png"],
		["abilityName","Evolve Monstrosity"],
		["abilityDesc","Turn an allied Minion or Locust into a Monstrosity. When enemy Minions near the Monstrosity die, it gains 5% Health and 5% Basic Attack damage, stacking up to 40 times. The Monstrosity takes 50% less damage from non-Heroic enemies. Using Symbiote on the Monstrosity allows Abathur to control it, in addition to Symbiote's normal benefits. This Ability can be reactivated to automatically cast Symbiote on his Monstrosity."]
	],
	"q":[
		["url","assets/abilities/abathur/abathur_symbiote.png"],
		["abilityName","Symbiote"],
		["abilityDesc","Spawn and attach a Symbiote to a target ally or Structure. While active, Abathur controls the Symbiote, gaining access to new Abilities. The Symbiote is able to gain XP from nearby enemy deaths."]
	],
	"w":[
		["url","assets/abilities/abathur/abathur_toxicNest.png"],
		["abilityName","Toxic Nest"],
		["abilityDesc","Spawn a mine that becomes active after a short time. Deals 153 damage and reveals the enemy for 4 seconds. Lasts 90 seconds. Stores up to 3 charges."]
	],
	"e":[
		["url","assets/abilities/abathur/abathur_locustStrain.png"],
		["abilityName","Locust Strain"],
		["abilityDesc","Spawns a Locust to attack down the nearest lane every 15 seconds. Locusts last for 25 seconds, have 288 health and deal 34 damage with each Basic Attack."]
	],
	"type":"Specialist"
};
var arthas = {
	"heroic1":[
		["url","assets/abilities/arthas/arthas_armyoftheDead.png"],
		["abilityName","Army of the Dead"],
		["abilityDesc","Summons Ghouls that last 15 seconds. Sacrifice Ghouls to heal for 267 Health."]
	],
	"heroic2":[
		["url","assets/abilities/arthas/arthas_summonSindragosa.png"],
		["abilityName","Summon Sindragosa"],
		["abilityDesc","Deals 230 damage and slows enemies by 60% for 4 seconds. Also disables non-Heroic enemies and Structures for 20 seconds."]
	],
	"q":[
		["url","assets/abilities/arthas/arthas_deathCoil.png"],
		["abilityName","Death Coil"],
		["abilityDesc","Deals 164 damage to target enemy. Can be self-cast to heal for 262 Health."]
	],
	"w":[
		["url","assets/abilities/arthas/arthas_howlingBlast.png"],
		["abilityName","Howling Blast"],
		["abilityDesc","Root enemies within the target area for 1.25 seconds and deals 68 damage."]
	],
	"e":[
		["url","assets/abilities/arthas/arthas_frozenTempest.png"],
		["abilityName","Frozen Tempest"],
		["abilityDesc","Deal 40 damage per second to nearby enemies and Slow their Movement Speed by 10% per second, stacking up to 40%. Heroes hit also have their Attack Speed Slowed by 10% per second, stacking up to 40%. Frozen Tempest's effects last for 1.5 seconds."]
	],
	"trait":[
		["url","assets/abilities/arthas/arthas_frostmourneHungers.png"],
		["abilityName","Frostmourne Hungers"],
		["abilityDesc","Activate to make Arthas's next Basic Attack strike immediately, do 99 increased damage, and restore 30 Mana."]
	],
	"type":"Warrior"
};
var diablo = {
	"heroic1":[
		["url","assets/abilities/diablo/diablo_apocalypse.png"],
		["abilityName","Apocalypse"],
		["abilityDesc","Create a demonic rune under each enemy Hero on the battleground. After 1.75 seconds the rune explodes dealing 137 damage and stunning them for 1.75 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/diablo/diablo_lightningBreath.png"],
		["abilityName","Lightning Breath"],
		["abilityDesc","Become Unstoppable while channeling lightning that deals 800 damage over 4 seconds. The direction of the Lightning changes with your mouse cursor position."]
	],
	"q":[
		["url","assets/abilities/diablo/diablo_shadowCharge.png"],
		["abilityName","Shadow Charge"],
		["abilityDesc","Charge an enemy, knocking them back, dealing 75 damage and gaining 25 Armor for 2 seconds, reducing damage taken by 25%. If the enemy collides with terrain, they are stunned for 1 second and take an additional 150 damage."]
	],
	"w":[
		["url","assets/abilities/diablo/diablo_fireStomp.png"],
		["abilityName","Fire Stomp"],
		["abilityDesc","Unleashes fire waves in all directions that deal 54 damage each. Once they reach maximum range they return, dealing an additional 81 damage."]
	],
	"e":[
		["url","assets/abilities/diablo/diablo_overpower.png"],
		["abilityName","Overpower"],
		["abilityDesc","Grabs the target and slams it behind Diablo, dealing 73 damage and stunning for 0.25 seconds."]
	],
	"trait":[
		["url","assets/abilities/diablo/diablo_blackSoulstone.png"],
		["abilityName","Black Soulstone"],
		["abilityDesc","Gain 10 Souls per Hero killed and 1 Soul per Minion, up to 100. For each Soul, gain 0.4% maximum Health. If Diablo has 100 Souls upon dying, he will resurrect in 5 seconds but lose 100 Souls."]
	],
	"type":"Warrior"
};
var etc = {
	"heroic1":[
		["url","assets/abilities/etc/etc_moshPit.png"],
		["abilityName","Mosh Pit"],
		["abilityDesc","After 0.75 seconds, channel to stun nearby enemies for 4 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/etc/etc_stageDive.png"],
		["abilityName","Stage Dive"],
		["abilityDesc","Leap to target location, landing after 2.75 seconds, dealing 330 damage to enemies in the area, and slowing them by 50% for 3 seconds."]
	],
	"q":[
		["url","assets/abilities/etc/etc_powerslide.png"],
		["abilityName","Powerslide"],
		["abilityDesc","Slide to a location dealing 91 damage and stunning enemies hit for 1.25 second."]
	],
	"w":[
		["url","assets/abilities/etc/etc_faceMelt.png"],
		["abilityName","Face Melt"],
		["abilityDesc","Deals 68 damage to nearby enemies, knocking them back."]
	],
	"e":[
		["url","assets/abilities/etc/etc_guitarSolo.png"],
		["abilityName","Guitar Solo"],
		["abilityDesc","Regenerate 66 Health per second for 4 seconds."]
	],
	"trait":[
		["url","assets/abilities/etc/etc_rockstar.png"],
		["abilityName","Rockstar"],
		["abilityDesc","After E.T.C. uses a Basic or Heroic ability, he gains 20 Armor for 2 seconds. This effect does not stack with itself."]
	],
	"type":"Warrior"
};
var falstad = {
	"heroic1":[
		["url","assets/abilities/falstad/falstad_hinterlandBlast.png"],
		["abilityName","Hinterland Blast"],
		["abilityDesc","After 1 second, deal 475 damage to enemies within a long line. The cooldown is reduced by 25 seconds for every enemy Hero hit."]
	],
	"heroic2":[
		["url","assets/abilities/falstad/falstad_mightyGust.png"],
		["abilityName","Mighty Gust"],
		["abilityDesc","Push enemies away, and slow their Movement Speed by 40% decaying over 4 seconds."]
	],
	"q":[
		["url","assets/abilities/falstad/falstad_hammerang.png"],
		["abilityName","Hammerang"],
		["abilityDesc","Throw out a Hammer that returns to Falstad, dealing 121 damage and slowing enemies by 25% for 2 seconds."]
	],
	"w":[
		["url","assets/abilities/falstad/falstad_lightningRod.png"],
		["abilityName","Lightning Rod"],
		["abilityDesc","Deal 107 damage to an enemy, and an additional 75 damage per second for 4 seconds while close to the target."]
	],
	"e":[
		["url","assets/abilities/falstad/falstad_barrelRoll.png"],
		["abilityName","Barrel Roll"],
		["abilityDesc","Dashes forward and grants a 171 point Shield for 3 seconds."]
	],
	"trait":[
		["url","assets/abilities/falstad/falstad_tailwind.png"],
		["abilityName","Tailwind"],
		["abilityDesc","Gain 15% increased Movement Speed after not taking damage for 6 seconds."]
	],
	"type":"Assassin"
};
var gazlowe = {
	"heroic1":[
		["url","assets/abilities/gazlowe/gazlowe_roboGoblin.png"],
		["abilityName","Robo-Goblin"],
		["abilityDesc","Activate to gain 30 Armor and 30% Movement Speed for 4 seconds. Passive: Basic Attacks deal 100% bonus damage. "]
	],
	"heroic2":[
		["url","assets/abilities/gazlowe/gazlowe_gravOBomb3000.png"],
		["abilityName","Grav-O-Bomb 3000"],
		["abilityDesc","After a 2 second delay, pull enemies toward the center of an area and deal 251 damage."]
	],
	"q":[
		["url","assets/abilities/gazlowe/gazlowe_rockIt!Turret.png"],
		["abilityName","Rock-It! Turret"],
		["abilityDesc","Creates a turret that deals 62 damage. Lasts for 30 seconds. Stores up to 2 charges."]
	],
	"w":[
		["url","assets/abilities/gazlowe/gazlowe_dethLazor.png"],
		["abilityName","Deth Lazor"],
		["abilityDesc","Charged attack that deals 137 damage to enemies in a line. Damage and range increase the longer the Ability is charged, up to 100% after 3 seconds. Deth Lazor can be channeled indefinitely."]
	],
	"e":[
		["url","assets/abilities/gazlowe/gazlowe_xplodiumCharge.png"],
		["abilityName","Xplodium Charge"],
		["abilityDesc","Places a bomb that deals 233 damage to enemies within target area after 2.5 seconds, stunning them for 1.75 seconds."]
	],
	"trait":[
		["url","assets/abilities/gazlowe/gazlowe_salvager.png"],
		["abilityName","Salvager"],
		["abilityDesc","Destroyed enemy Structures and Rock-it! Turrets drop Scrap. Collecting Scrap restores 30 Mana and causes Abilities to recharge three times as fast over 3 seconds. Activate Salvager to dismantle a target Rock-it! Turret and turn it into Scrap."]
	],
	"type":"Specialist"
};
var illidan = {
	"heroic1":[
		["url","assets/abilities/illidan/illidan_metamorphosis.png"],
		["abilityName","Metamorphosis"],
		["abilityDesc","Transform into Demon Form at the target location, dealing 46 damage in the area. Temporarily increases maximum Health by 200 for each Hero hit by the initial impact. Lasts for 18 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/illidan/illidan_theHunt.png"],
		["abilityName","The Hunt"],
		["abilityDesc","Charge to target unit, dealing 251 damage on impact and stunning for 1 second."]
	],
	"q":[
		["url","assets/abilities/illidan/illidan_dive.png"],
		["abilityName","Dive"],
		["abilityDesc","Dive at the target, dealing 66 damage and flipping to the other side of the target."]
	],
	"w":[
		["url","assets/abilities/illidan/illidan_sweepingStrike.png"],
		["abilityName","Sweeping Strike"],
		["abilityDesc","Dash towards target point, dealing 119 damage to enemies along the way. Hitting an enemy increases Illidan's Basic Attack damage by 35% for 3 seconds."]
	],
	"e":[
		["url","assets/abilities/illidan/illidan_evasion.png"],
		["abilityName","Evasion"],
		["abilityDesc","Evade enemy Basic Attacks for 2.5 seconds."]
	],
	"trait":[
		["url","assets/abilities/illidan/illidan_betrayersThirst.png"],
		["abilityName","Betrayer's Thirst"],
		["abilityDesc","Basic Attacks heal for 30% of damage dealt and reduce Ability cooldowns by 1 second."]
	],
	"type":"Assassin"
};
var kerrigan = {
	"heroic1":[
		["url","assets/abilities/kerrigan/kerrigan_maelstrom.png"],
		["abilityName","Maelstrom"],
		["abilityDesc","Deals 74 damage per second to nearby enemies. Lasts for 7 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/kerrigan/kerrigan_summonUltralisk.png"],
		["abilityName","Summon Ultralisk"],
		["abilityDesc","Summon an Ultralisk that attacks the target to deal 100 damage. Attacks splash to nearby enemies for 50% damage. Can reactivate the Ability to retarget the Ultralisk. Lasts for 20 seconds."]
	],
	"q":[
		["url","assets/abilities/kerrigan/kerrigan_ravage.png"],
		["abilityName","Ravage"],
		["abilityDesc","Leap to a target, dealing 228 damage. If the enemy dies within 1.5 seconds, this cooldown is instantly reset."]
	],
	"w":[
		["url","assets/abilities/kerrigan/kerrigan_impalingBlades.png"],
		["abilityName","Impaling Blades"],
		["abilityDesc","After 1.25 seconds, deal 251 damage to enemies within the target area, stunning them for 1 second."]
	],
	"e":[
		["url","assets/abilities/kerrigan/kerrigan_primalGrasp.png"],
		["abilityName","Primal Grasp"],
		["abilityDesc","Pulls enemies within the target area towards Kerrigan, dealing 110 damage."]
	],
	"trait":[
		["url","assets/abilities/kerrigan/kerrigan_assimilation.png"],
		["abilityName","Assimilation"],
		["abilityDesc","Gain 10% of damage dealt from Basic Attacks and Abilities as Shields for 6 seconds. Shield amount gained doubled against Heroes. Current maximum: 1004"]
	],
	"type":"Assassin"
};
var malfurion = {
	"heroic1":[
		["url","assets/abilities/malfurion/malfurion_tranquility.png"],
		["abilityName","Tranquility"],
		["abilityDesc","Heals 80 Health per second to nearby allied Heroes over 10 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/malfurion/malfurion_twilightDream.png"],
		["abilityName","Twilight Dream"],
		["abilityDesc","After 0.5 seconds, deal 374 damage in a large area around Malfurion, Silencing enemies making them unable to use Abilities for 3 seconds."]
	],
	"q":[
		["url","assets/abilities/malfurion/malfurion_regrowth.png"],
		["abilityName","Regrowth"],
		["abilityDesc","Heal target ally for 150 Health instantly and an additional 420 Health over 15 seconds."]
	],
	"w":[
		["url","assets/abilities/malfurion/malfurion_moonfire.png"],
		["abilityName","Moonfire"],
		["abilityDesc","Deal 105 damage to enemies within target area and reveals them for 2 seconds."]
	],
	"e":[
		["url","assets/abilities/malfurion/malfurion_entanglingRoots.png"],
		["abilityName","Entangling Roots"],
		["abilityDesc","Root enemies within the target area for 1.25 seconds, and deals 117 damage over the duration. Affected area grows over 3 seconds."]
	],
	"trait":[
		["url","assets/abilities/malfurion/malfurion_innervate.png"],
		["abilityName","Innervate"],
		["abilityDesc","Grant an allied Hero 20% of their maximum Mana over 5 seconds. While affected by Innervate, their Basic Ability cooldowns recharge 50% faster. Cannot be used on Heroes that do not use Mana"]
	],
	"type":"Support"
};
var muradin = {
	"heroic1":[
		["url","assets/abilities/muradin/muradin_avatar.png"],
		["abilityName","Avatar"],
		["abilityDesc","Transform for 20 seconds, gaining 1053 Health."]
	],
	"heroic2":[
		["url","assets/abilities/muradin/muradin_haymaker.png"],
		["abilityName","Haymaker"],
		["abilityDesc","Stun target enemy Hero, and wind up a punch dealing 319 damage and knocking the target back, hitting enemies in the way for 319 damage and knocking them aside."]
	],
	"q":[
		["url","assets/abilities/muradin/muradin_stormBolt.png"],
		["abilityName","Storm Bolt"],
		["abilityDesc","Throw a hammer, dealing 110 damage to the first enemy hit and stunning it for 1.25 seconds."]
	],
	"w":[
		["url","assets/abilities/muradin/muradin_thunderClap.png"],
		["abilityName","Thunder Clap"],
		["abilityDesc","Blast nearby enemies for 96 damage and slow them by 25% for 2.5 seconds. Heroes hit also have their Attack Speed reduced by 25% for the duration."]
	],
	"e":[
		["url","assets/abilities/muradin/muradin_dwarfToss.png"],
		["abilityName","Dwarf Toss"],
		["abilityDesc","Leap to target location, dealing 59 damage to enemies on landing. Upon leaping, gain 25 Armor for 2 seconds, reducing damage taken by 25%."]
	],
	"trait":[
		["url","assets/abilities/muradin/muradin_secondWind.png"],
		["abilityName","Second Wind"],
		["abilityDesc","Muradin restores 53 Health per second when he has not taken damage for 4 seconds. When below 40% Health, increased to 106 Health per second."]
	],
	"type":"Warrior"
};
var nazeebo = {
	"heroic1":[
		["url","assets/abilities/nazeebo/nazeebo_gargantuan.png"],
		["abilityName","Gargantuan"],
		["abilityDesc","Summon a Gargantuan to guard an area for 20 seconds. Deals 100 damage when summoned, attacks for 150 damage, and can be ordered to stomp nearby enemies."]
	],
	"heroic2":[
		["url","assets/abilities/nazeebo/nazeebo_ravenousSpirit.png"],
		["abilityName","Ravenous Spirit"],
		["abilityDesc","Channel a Ravenous Spirit that deals 207 damage per second. Cannot move while channeling. Lasts for 8 seconds."]
	],
	"q":[
		["url","assets/abilities/nazeebo/nazeebo_corpseSpiders.png"],
		["abilityName","Corpse Spiders"],
		["abilityDesc","Hurl a jar of spiders that deals 50 damage. If it hits at least one enemy, create 3 Corpse Spiders that attack for 35 damage. Spiders last for 4 seconds."]
	],
	"w":[
		["url","assets/abilities/nazeebo/nazeebo_zombieWall.png"],
		["abilityName","Zombie Wall"],
		["abilityDesc","After 1 second, create a ring of Zombies surrounding the target area that deal 28 damage and last for 3 seconds."]
	],
	"e":[
		["url","assets/abilities/nazeebo/nazeebo_plagueofToads.png"],
		["abilityName","Plague of Toads"],
		["abilityDesc","Create a wave of 3 Toads that explode on contact, dealing 140 damage over 6 seconds. This effect stacks. Stores up to 2 charges."]
	],
	"trait":[
		["url","assets/abilities/nazeebo/nazeebo_voodooRitual.png"],
		["abilityName","Voodoo Ritual"],
		["abilityDesc","Nazeebo's Basic Attacks and Abilities poison Non-Heroic enemies, causing them to take 67 additional damage over 6 seconds. Quest: If a Minion dies while poisoned by Voodoo Ritual, Nazeebo permanently gains 4 Health and 1 Mana."]
	],
	"type":"Specialist"
};
var nova = {
	"heroic1":[
		["url","assets/abilities/nova/nova_tripleTap.png"],
		["abilityName","Triple Tap"],
		["abilityDesc","Locks in on the target Hero, then fires 3 shots that hit the first Hero or Structure they come in contact with for 338 damage each."]
	],
	"heroic2":[
		["url","assets/abilities/nova/nova_precisionStrike.png"],
		["abilityName","Precision Strike"],
		["abilityDesc","After a 1.5 second delay, deals 456 damage to enemies within an area. Unlimited range."]
	],
	"q":[
		["url","assets/abilities/nova/nova_snipe.png"],
		["abilityName","Snipe"],
		["abilityDesc","Deals 310 damage to the first enemy hit."]
	],
	"w":[
		["url","assets/abilities/nova/nova_pinningShot.png"],
		["abilityName","Pinning Shot"],
		["abilityDesc","Deal 110 damage to an enemy and slow it by 40% for 2.25 seconds."]
	],
	"e":[
		["url","assets/abilities/nova/nova_holoDecoy.png"],
		["abilityName","Holo Decoy"],
		["abilityDesc","Create a Decoy for 5 seconds that appears to attack enemies. Using this Ability does not break Cloak."]
	],
	"trait":[
		["url","assets/abilities/nova/nova_permanentCloakSniper.png"],
		["abilityName","Permanent Cloak, Sniper"],
		["abilityDesc","Nova gains Stealth when out of combat for 3 seconds. Taking damage, attacking, using Abilities, or channeling reveals her. Passive: Nova's Basic Attack range is 1 further than most other ranged Heroes."]
	],
	"type":"Assassin"
};
var raynor = {
	"heroic1":[
		["url","assets/abilities/raynor/raynor_hyperion.png"],
		["abilityName","Hyperion"],
		["abilityDesc","Order the Hyperion to make a strafing run dealing 66 damage a second, hitting up to 4 enemies. Also occasionally fires its Yamato Cannon on Structures for 794 damage. Lasts 12 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/raynor/raynor_raynorsRaiders.png"],
		["abilityName","Raynor's Raiders"],
		["abilityDesc","Summon two Stealthed Banshees that attack an enemy. Each Banshee deals 50 damage a second and lasts 22 seconds. Can reactivate the Ability to retarget the Banshees."]
	],
	"q":[
		["url","assets/abilities/raynor/raynor_penetratingRound.png"],
		["abilityName","Penetrating Round"],
		["abilityDesc","Deals 240 damage and knocks enemies back."]
	],
	"w":[
		["url","assets/abilities/raynor/raynor_inspire.png"],
		["abilityName","Inspire"],
		["abilityDesc","Gain 30% bonus Attack Speed for 6 seconds. Nearby allies gain half of the bonus."]
	],
	"e":[
		["url","assets/abilities/raynor/raynor_adrenalineRush.png"],
		["abilityName","Adrenaline Rush"],
		["abilityDesc","Automatically activates to heal for 440 when Raynor is below 30% Health."]
	],
	"trait":[
		["url","assets/abilities/raynor/raynor_advancedOptics.png"],
		["abilityName","Advanced Optics"],
		["abilityDesc","Raynor's Basic Attack range is 1 further than most other ranged Heroes, and his vision radius is 1 further as well."]
	],
	"type":"Assassin"
};
var sgthammer = {
	"heroic1":[
		["url","assets/abilities/sgt-hammer/sgt-hammer_bluntForceGun.png"],
		["abilityName","Blunt Force Gun"],
		["abilityDesc","Fire a missile across the battlefield, dealing 500 damage to enemies in its path."]
	],
	"heroic2":[
		["url","assets/abilities/sgt-hammer/sgt-hammer_napalmStrike.png"],
		["abilityName","Napalm Strike"],
		["abilityDesc","Deals 164 damage on impact, and leaves a napalm area that deals 50 damage per second. Lasts for 4 seconds."]
	],
	"q":[
		["url","assets/abilities/sgt-hammer/sgt-hammer_spiderMines.png"],
		["abilityName","Spider Mines"],
		["abilityDesc","Create 3 mines that deal 96 damage and slow enemies by 25% for 1.5 seconds."]
	],
	"w":[
		["url","assets/abilities/sgt-hammer/sgt-hammer_concussiveBlast.png"],
		["abilityName","Concussive Blast"],
		["abilityDesc","Deals 141 damage and pushes enemies away."]
	],
	"e":[
		["url","assets/abilities/sgt-hammer/sgt-hammer_siegeMode.png"],
		["abilityName","Siege Mode"],
		["abilityDesc","Sgt. Hammer becomes immobile to increase Basic Attack range by 5, deal 25% splash damage, and deal 30% bonus damage to Minions and Structures."]
	],
	"trait":[
		["url","assets/abilities/sgt-hammer/sgt-hammer_artillery.png"],
		["abilityName","Artillery"],
		["abilityDesc","Sgt. Hammer's Basic Attack range is 1 further than other ranged heroes. Her Basic Attacks deal 30% more damage to enemies that are at least 4 range away."]
	],
	"type":"Specialist"
};
var sonya = {
	"heroic1":[
		["url","assets/abilities/sonya/sonya_leap.png"],
		["abilityName","Leap"],
		["abilityDesc","Leap into the air, dealing 135 damage to nearby enemies, and stunning them for 1.25 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/sonya/sonya_wrathoftheBerserker.png"],
		["abilityName","Wrath of the Berserker"],
		["abilityDesc","Increase damage dealt by 40%. Reduce the duration of stuns, slows, and roots against Sonya by 50%. Lasts 15 seconds, and extends by 1 second for every 10 Fury gained."]
	],
	"q":[
		["url","assets/abilities/sonya/sonya_ancientSpear.png"],
		["abilityName","Ancient Spear"],
		["abilityDesc","Throw out a spear that pulls Sonya to the first enemy hit, dealing 173 damage and briefly stunning them. If this hits an enemy, generate 40 Fury."]
	],
	"w":[
		["url","assets/abilities/sonya/sonya_seismicSlam.png"],
		["abilityName","Seismic Slam"],
		["abilityDesc","Deals 176 damage to the target enemy, and 44 to enemies behind the target."]
	],
	"e":[
		["url","assets/abilities/sonya/sonya_whirlwind.png"],
		["abilityName","Whirlwind"],
		["abilityDesc","Deals 441 damage to nearby enemies over 3 seconds, and heals for 25% of damage dealt. Healing tripled versus Heroes."]
	],
	"trait":[
		["url","assets/abilities/sonya/sonya_fury.png"],
		["abilityName","Fury"],
		["abilityDesc","Use Fury instead of Mana, which is gained by taking or dealing damage. Using a Basic or Heroic Ability grants 10% Movement Speed for 4 seconds."]
	],
	"type":"Warrior"
};
var stitches = {
	"heroic1":[
		["url","assets/abilities/stitches/stitches_putridBile.png"],
		["abilityName","Putrid Bile"],
		["abilityDesc","Emit bile that deals 37 damage per second to enemies within, slowing them by 35%. Stitches gains 20% Movement Speed while emitting bile. Lasts 8 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/stitches/stitches_gorge.png"],
		["abilityName","Gorge"],
		["abilityDesc","Consume an enemy Hero, trapping them for 4 seconds. When Gorge ends, the enemy Hero takes 274 damage. The trapped Hero cannot move or act and doesn't take damage from other sources. Cannot be used on massive Heroes."]
	],
	"q":[
		["url","assets/abilities/stitches/stitches_hook.png"],
		["abilityName","Hook"],
		["abilityDesc","Pull the first enemy hit towards Stitches and deal 91 damage."]
	],
	"w":[
		["url","assets/abilities/stitches/stitches_slam.png"],
		["abilityName","Slam"],
		["abilityDesc","Deal 104 damage to enemies within the target area."]
	],
	"e":[
		["url","assets/abilities/stitches/stitches_devour.png"],
		["abilityName","Devour"],
		["abilityDesc","Deal 319 damage to non-Heroic units, or 114 damage to Heroes. Restores 20% of Stitches's maximum Health."]
	],
	"trait":[
		["url","assets/abilities/stitches/stitches_vileGas.png"],
		["abilityName","Vile Gas"],
		["abilityDesc","When damaged, Stitches emits a gas cloud that poisons nearby enemies for 68 damage over 3 seconds. "]
	],
	"type":"Warrior"
};
var tassadar = {
	"heroic1":[
		["url","assets/abilities/tassadar/tassadar_archon.png"],
		["abilityName","Archon"],
		["abilityDesc","Tassadar transforms into an Archon and gains a Plasma Shield. His Basic Attacks deal 166 damage, slow the target by 30% for 1 second and splash for 83 damage to enemies within 2.5 range. Lasts for 10 seconds. Passive: Archon refreshes the cooldown of Dimensional Shift."]
	],
	"heroic2":[
		["url","assets/abilities/tassadar/tassadar_forceWall.png"],
		["abilityName","Force Wall"],
		["abilityDesc","Create a wall that blocks all units from moving through it for 2 seconds. Passive: Increases the slow amount of Distortion Beam to 30%."]
	],
	"q":[
		["url","assets/abilities/tassadar/tassadar_plasmaShield.png"],
		["abilityName","Plasma Shield"],
		["abilityDesc","Grant a Shield that absorbs 475 damage over 4 seconds. If the target is a Hero, they heal for 40% of their Basic Attack damage done while Shielded."]
	],
	"w":[
		["url","assets/abilities/tassadar/tassadar_psionicStorm.png"],
		["abilityName","Psionic Storm"],
		["abilityDesc","Deal 88 damage per second to enemies in target area for 3 seconds. Damage increases by 12% for each consecutive instance of damage, up to 60%."]
	],
	"e":[
		["url","assets/abilities/tassadar/tassadar_dimensionalShift.png"],
		["abilityName","Dimensional Shift"],
		["abilityDesc","Tassadar becomes invulnerable and Unrevealable for 2 seconds. While shifted, he has 25% increased Movement Speed."]
	],
	"trait":[
		["url","assets/abilities/tassadar/tassadar_oracle.png"],
		["abilityName","Oracle"],
		["abilityDesc","Activate to greatly increase Tassadar's vision radius, allow him to see over obstacles, and detect stealthed units. Lasts for 5 seconds. Passive: Tassadar's Basic Attack is a Distortion Beam that slows enemy units by 20%."]
	],
	"type":"Support"
};
var tyrael = {
	"heroic1":[
		["url","assets/abilities/tyrael/tyrael_judgment.png"],
		["abilityName","Judgment"],
		["abilityDesc","After 0.75 seconds, charge an enemy Hero dealing 150 damage and stunning them for 1.5 seconds. Nearby enemies are knocked away and take 75 damage."]
	],
	"heroic2":[
		["url","assets/abilities/tyrael/tyrael_sanctification.png"],
		["abilityName","Sanctification"],
		["abilityDesc","After 0.5 seconds create a field of holy energy that makes allied Heroes Invulnerable. Lasts 3 seconds."]
	],
	"q":[
		["url","assets/abilities/tyrael/tyrael_eldruinsMight.png"],
		["abilityName","El'druin's Might"],
		["abilityDesc","Deals 110 damage to enemies within target area, slowing them by 25% for 2.5 seconds. Reactivating will teleport Tyrael to the blade and slow nearby enemies again."]
	],
	"w":[
		["url","assets/abilities/tyrael/tyrael_righteousness.png"],
		["abilityName","Righteousness"],
		["abilityDesc","Shields Tyrael for 336 damage and nearby allies for 135 damage for 4 seconds."]
	],
	"e":[
		["url","assets/abilities/tyrael/tyrael_smite.png"],
		["abilityName","Smite"],
		["abilityDesc","Rake target area for 144 damage. Allies moving through the targeted area gain 25% increased Movement Speed for 2 seconds."]
	],
	"trait":[
		["url","assets/abilities/tyrael/tyrael_archangelsWrath.png"],
		["abilityName","Archangel's Wrath"],
		["abilityDesc","Upon dying, become invulnerable and explode for 550 damage after 3.5 seconds."]
	],
	"type":"Warrior"
};
var tyrande = {
	"heroic1":[
		["url","assets/abilities/tyrande/tyrande_starfall.png"],
		["abilityName","Starfall"],
		["abilityDesc","Deal 91 damage per second and slow enemies by 20% in an area. Lasts 6 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/tyrande/tyrande_shadowstalk.png"],
		["abilityName","Shadowstalk"],
		["abilityDesc","Stealth and gain 30% Movement Speed. When Shadowstalk's Stealth is broken, gain 50% Attack Speed and retain its Movement Speed bonus for 5 seconds."]
	],
	"q":[
		["url","assets/abilities/tyrande/tyrande_lightofElune.png"],
		["abilityName","Light of Elune"],
		["abilityDesc","Heal target ally for 270 Health. Basic Attacks reduce the cooldown of this Ability by 2 seconds."]
	],
	"w":[
		["url","assets/abilities/tyrande/tyrande_sentinel.png"],
		["abilityName","Sentinel"],
		["abilityDesc","Send an Owl that travels across the battleground revealing its path. Deals 173 damage to the first enemy Hero hit and reveals them for 5 seconds. Repeatable Quest: Every 80 Heroes hit by Sentinel decrease its Mana cost by 10 and cause it to pierce an additional target."]
	],
	"e":[
		["url","assets/abilities/tyrande/tyrande_lunarFlare.png"],
		["abilityName","Lunar Flare"],
		["abilityDesc","After 0.75 seconds, deal 205 damage and Stun enemies in the target area for 0.75 seconds."]
	],
	"trait":[
		["url","assets/abilities/tyrande/tyrande_huntersMark.png"],
		["abilityName","Hunter's Mark"],
		["abilityDesc","Reveal a target enemy and lower their Armor by 25 for 4 seconds, increasing all damage taken by 25%. Cannot be used on Structures."]
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
		["abilityDesc","Deal 187 damage and Stun nearby enemies for 1.75 seconds."]
	],
	"q":[
		["url","assets/abilities/uther/uther_holyLight.png"],
		["abilityName","Holy Light"],
		["abilityDesc","Heal target ally for 360 Health. When used on a target other than Uther, also heal Uther for 180 Health."]
	],
	"w":[
		["url","assets/abilities/uther/uther_holyRadiance.png"],
		["abilityName","Holy Radiance"],
		["abilityDesc","Heal all allies in a line for 160 Health, dealing 160 damage to enemies."]
	],
	"e":[
		["url","assets/abilities/uther/uther_hammerofJustice.png"],
		["abilityName","Hammer of Justice"],
		["abilityDesc","Deal 114 damage and Stun the target for 0.75 seconds."]
	],
	"trait":[
		["url","assets/abilities/uther/uther_devotionEternalVanguard.png"],
		["abilityName","Devotion, Eternal Vanguard"],
		["abilityDesc","Heroes healed by Uther's Basic Abilities gain 25 Armor for 2 seconds. This effect does not stack with itself. Upon dying, Uther becomes an Invulnerable spirit for up to 8 seconds. While in spirit form, Uther can heal allies with Flash of Light."]
	],
	"type":"Support"
};
var valla = {
	"heroic1":[
		["url","assets/abilities/valla/valla_strafe.png"],
		["abilityName","Strafe"],
		["abilityDesc","Rapidly attack enemies within 10 range for 60 damage per hit, prioritizing Heroes over Minions. Valla is able to move and use Vault while strafing. Lasts for 4 seconds."]
	],
	"heroic2":[
		["url","assets/abilities/valla/valla_rainofVengeance.png"],
		["abilityName","Rain of Vengeance"],
		["abilityDesc","Launch a wave of Shadow Beasts that deals 250 damage and stuns enemies in the target area for 0.5 seconds. Stores up to 2 charges."]
	],
	"q":[
		["url","assets/abilities/valla/valla_hungeringArrow.png"],
		["abilityName","Hungering Arrow"],
		["abilityDesc","Fire an arrow that deals 151 damage to the first target hit, then seeks up to 2 additional enemies dealing 86 damage. Can hit an enemy multiple times."]
	],
	"w":[
		["url","assets/abilities/valla/valla_multishot.png"],
		["abilityName","Multishot"],
		["abilityDesc","Deal 165 damage to enemies within the target area."]
	],
	"e":[
		["url","assets/abilities/valla/valla_vault.png"],
		["abilityName","Vault"],
		["abilityDesc","Dash to the target area. Valla's next Basic Attack within 2 seconds deals 6% increased damage per stack of Hatred."]
	],
	"trait":[
		["url","assets/abilities/valla/valla_hatred.png"],
		["abilityName","Hatred"],
		["abilityDesc","Basic Attacks grant a stack of Hatred, up to 10. Each Hatred stack increases Basic Attack damage by 8% and Movement Speed by 1%. Lasts 6 seconds."]
	],
	"type":"Assassin"
};
var zeratul = {
	"heroic1":[
		["url","assets/abilities/zeratul/zeratul_voidPrison.png"],
		["abilityName","Void Prison"],
		["abilityDesc","Slows time in an area to a near standstill, placing allies and enemies in Time Stop for 5 seconds. Zeratul is not affected."]
	],
	"heroic2":[
		["url","assets/abilities/zeratul/zeratul_shadowAssault.png"],
		["abilityName","Shadow Assault"],
		["abilityDesc","Basic Attacks cause Zeratul to charge at enemies and have 20% increased Attack Speed. Lasts for 4 seconds."]
	],
	"q":[
		["url","assets/abilities/zeratul/zeratul_cleave.png"],
		["abilityName","Cleave"],
		["abilityDesc","Deal 200 damage to nearby enemies."]
	],
	"w":[
		["url","assets/abilities/zeratul/zeratul_singularitySpike.png"],
		["abilityName","Singularity Spike"],
		["abilityDesc","Flings a Singularity Spike that sticks to the first enemy hit. Deals 228 damage after 1 second and slows the enemy by 40% for 3 seconds."]
	],
	"e":[
		["url","assets/abilities/zeratul/zeratul_blink.png"],
		["abilityName","Blink"],
		["abilityDesc","Teleport to the target location. Using this Ability does not break cloak."]
	],
	"trait":[
		["url","assets/abilities/zeratul/zeratul_permanentCloak.png"],
		["abilityName","Permanent Cloak"],
		["abilityDesc","Gain Stealth when out of combat for 3 seconds. Taking damage, attacking, using Abilities, or channeling ends Permanent Cloak."]
	],
	"type":"Assassin"
};
