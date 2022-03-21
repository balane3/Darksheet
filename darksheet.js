import ActorSheet5eCharacter from "../../../systems/dnd5e/module/actor/sheets/character.js";
import { DarkerActorSheet5eCharacter } from "./module/actor/sheets/DarkerActorSheet5eCharacter.js";
import { DarkerActor5e } from './module/actor/entity.js';
import { _getInitiativeFormula } from "./js/combat.js";

//Load Templates
Hooks.once('init', () => loadTemplates([
    'modules/darksheet/templates/actors/parts/actor-inventory.html',
    'modules/darksheet/templates/actors/parts/actor-spellbook.html',
    'modules/darksheet/templates/actors/parts/actor-features.html',
    'modules/darksheet/templates/items/parts/item-description.html'
]));

Hooks.once('init', function () {
    // darker dungeons encumbrance
    libWrapper.register('darksheet', 'game.dnd5e.entities.Actor5e.prototype._computeEncumbrance', function (wrapped, ...args) {
        if (game.settings.get("darksheet", "slotbasedinventory")) {
            return DarkerActor5e.computeSlotEncumbrance(args[0])
        } else {
            return wrapped(...args)
        }
    });
});

//Register Sheet
Hooks.once('init', function () {

    Actors.registerSheet('dnd5e', DarkerActorSheet5eCharacter, {
        types: ['character']
    });
    Items.registerSheet('dnd5e', ItemSheet5e);
    game.settings.register('darksheet', 'slotbasedinventory', {
        name: 'Slot based inventory',
        hint: 'This option determines on which value the bar at the bottom of the inventory uses, if his is enabled it will use slots instead of weight.',
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
    });
    game.settings.register('darksheet', 'ActiveInitiativeHadTurn', {
        name: 'Saves Turn Value',
        hint: 'Dont Touch',
        scope: 'world',
        config: false,
        default: "",
        type: String,
    });
    game.settings.register('darksheet', 'activeInitiative', {
        name: 'Active Initiative [TESTING]"',
        hint: 'Enables Active Initiative',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('darksheet', 'activeInitiativeDisplayTurns', {
        name: 'ActiveIni AdditionalDisplay',
        hint: 'Enable additional actors display during active initiativee',
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
    });
    game.settings.register('darksheet', 'savecantrips', {
        name: 'Variant Rule "Safe Cantrips"',
        hint: 'If this is checked it will disable the ability to select the d12 for the burnout die. ',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('darksheet', 'hidesettings', {
        name: 'Hide Settings from player character sheet',
        hint: 'This option hides the settings section from all character sheets',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('darksheet', 'hidenotches', {
        name: 'Hide Notches',
        hint: 'Enable to hide the notches from players inventories and from item-sheets',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('darksheet', 'disablefragility', {
        name: 'Disable Fragility',
        hint: 'Check to disable fragility and hide it from item-sheets',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('darksheet', 'disabletemper', {
        name: 'Disable Tempering',
        hint: 'Check to disable item-tempering and hide it from item-sheets',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('darksheet', 'hidedamageac', {
        name: 'Hide DAMAGE & AC',
        hint: 'Check to disable the display of the current damage/ac of an item behind that item',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('darksheet', 'disableitemquality', {
        name: 'Disable Item-Quality',
        hint: 'Check to disable item-quality and hide it from item-sheets',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('darksheet', 'hideammodie', {
        name: 'Hide Ammodie',
        hint: 'Enable to hide the ammodie-section from players inventories and from item-sheets',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('darksheet', 'hideSRDCOMP', {
        name: 'Unloads SRD compendiums (Recommended)',
        hint: 'This option unloads all redundant SRD compendiums (requires reload)',
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
    });
    game.settings.register('darksheet', 'hidechecks', {
        name: 'Hide "Checks"-Section from player Character sheet',
        hint: 'This option hides the checks section from all character sheets',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('darksheet', 'noheropoints', {
        name: 'NO Hero-Points',
        hint: 'Disables the use of Heropoints',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('darksheet', 'nonpcattack', {
        name: 'No NPC Attacks (Active Defense Instead!)',
        hint: '!Warning - Will Overwrite Actor Attacks ! Enable this if you want to only roll damage when using npc attacks ONLY SUPPORTS THE BetterNPCSheet5e',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('darksheet', 'smalldefense', {
        name: 'Variant: Small Defense',
        hint: 'If you want to use smaller modifiers while playing with Active Defense, try this Small Defense variant. Defense Rolls: When you make a defense roll, roll a d20 and add your AC minus 10. The opposing DC is 12 plus the attackers normal attack bonus.',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('darksheet', 'intmod', {
        name: 'Intelligent Initiative',
        hint: 'Enables the use of the intelligence modifier for the initiative roll',
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
    });
    game.settings.register('darksheet', 'destroyshatter', {
        name: 'Shattered items should NOT be destroyed.',
        hint: 'Enabling this will keep shattered items with [Shattered] in their name instead of deleting them',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('darksheet', 'shatterwhen1', {
        name: '[Houserule] Shatter when 1',
        hint: 'Enabling this will shatter items when they reach 1 AC or 1 damage regardless of fragility',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('darksheet', 'silverstandard', {
        name: '[Houserule] Silver Standart',
        hint: 'All items will have sp worth instead of gp',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('darksheet', 'darkscreennames', {
        name: 'names',
        hint: 'names',
        scope: 'world',
        config: false,
        default: 'no',
        type: String,
    });
    game.settings.register('darksheet', 'darkscreenval', {
        name: 'values',
        hint: 'values',
        scope: 'world',
        config: false,
        default: 'no',
        type: String,
    });
    game.settings.register('darksheet', 'questtable', {
        name: 'values',
        hint: 'values',
        scope: 'world',
        config: false,
        default: 'no',
        type: String,
    });

    game.settings.register('darksheet', 'globalTemp', {
        name: 'GM Managed Temperature',
        hint: 'Players can no longer select their temperature on their character sheets, you can still change the regional magic as gm or with the darkscreen',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('darksheet', 'globalRegMagic', {
        name: 'GM Managed Regional Magic',
        hint: 'Players can no longer select regional magic on their character sheets, you can still change the regional magic as gm or with the darkscreen',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
    game.settings.register('darksheet', 'afflictionFromComp', {
        name: 'Afflictions from Compendium',
        hint: 'Enabling this option will roll from the Afflictions compendium instead of the rollable table and display the compendium entry in chat.',
        scope: 'world',
        config: false,
        default: false,
        type: Boolean,
    });
    console.log("Darker Dungeons | Initializing Darker Dungeons for the D&D 5th Edition System\n", "_____________________________________________________________________________________________\n", "  ____                _                 ____                                                \n", " |  _ \\   __ _  _ __ | | __ ___  _ __  |  _ \\  _   _  _ __    __ _   ___   ___   _ __   ___ \n", " | | | | / _` || '__|| |/ // _ \| '__|  | | | || | | || '_ \\  / _` | / _ \\ / _ \\ | '_ \\ / __| \n", " | |_| || (_| || |   |   <|  __/| |    | |_| || |_| || | | || (_| ||  __/| (_) || | | |\\__ \\ \n", " |____/  \\__,_||_|   |_|\\_\\\\___||_|    |____/  \\__,_||_| |_| \\__, | \\___| \\___/ |_| |_||___/ \n", "                                                             |___/                          \n", "_____________________________________________________________________________________________");
    console.log();
});

async function rollBurnout(ActorToRollFor) {
    // Rolling table, from best to worst
    const rollings = ['12', '10', '8', '6', '4'];
    // Value of the burnoutdice
    let burnoutdie = ActorToRollFor.data.data.attributes.burnout.value;
    // find the table
    let table = game.tables.entities.find(t => t.data.name === "Burnout Consequence");
    if (table == undefined) {
        ui.notifications.warn("Darksheet | You need to import or create a 'Burnout Consequence' Table to roll from");
        return;
    }
    // burnoutsettings
    let bsettings = ActorToRollFor.data.data.attributes.burnout.value
    // magic region
    var regionmod = parseInt(ActorToRollFor.data.data.attributes.regionmod.value, 10);
    //console.log("Regionmod: "+regionmod);
    // burnoutdice changed through region
    if (regionmod < 0) {
        var regionmodz = rollings.indexOf(ActorToRollFor.data.data.attributes.burnout.value) - parseInt(regionmod);
        //console.log("Regionmodz step2 kleiner: "+regionmodz);
        if (regionmodz >= 5) {
            regionmodz = 4;
        }
    } else {
        var regionmodz = rollings.indexOf(ActorToRollFor.data.data.attributes.burnout.value) - parseInt(regionmod);
        //console.log("Regionmodz step3 gr��er: "+regionmodz);
        if (regionmodz <= 0) {
            regionmodz = 0;
        }
    }
    var burnoutARegion = rollings[regionmodz];

    let rollcon = burnoutARegion;
    let rollcona = "d" + rollcon
    let roll = new Roll(`${rollcona}`).roll();
    let result = await table.roll();
    //NEW BURNOUT DIE
    if (burnoutARegion == 4)
        var newBurnOutDie = "";
    else
        var newBurnOutDie = "-> d" + rollings[regionmodz + 1];

    if (burnoutdie === 0) { } else {
        let content = `
				<div class="dnd5e chat-card item-card" data-acor-id="${ActorToRollFor._id}">
					<header class="card-header flexrow">
						<img src="${ActorToRollFor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
						<h3>Burnoutdice(${rollcona}) - </h3>
					<h3><div class="burnoutDiceChatValue">${roll.result}</div></h3>
					</header>
				</div>`;
        let content2 = `
				<div class="dnd5e chat-card item-card" data-acor-id="${ActorToRollFor._id}">
					<header class="card-header flexrow">
						<img src="${ActorToRollFor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
						<h3>Burnoutdice(${rollcona}) ${newBurnOutDie} - </h3>
					<h3 style="color: #ff0000;text-shadow: 0 0 2px;"><div class="burnoutDiceChatValue">${roll.result}</div></h3>
					</header>
					</br>
					<h3 style="color: #ff0000;text-shadow: 0 0 2px; text-align: center;">${result.results[0].data.text}</h3>
				</div>`;
        let content3 = `
				<div class="dnd5e chat-card item-card" data-acor-id="${ActorToRollFor._id}">
					<header class="card-header flexrow">
						<img src="${ActorToRollFor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
						<h3>Burnoutdice(${rollcona}): </h3>
					<h3 style="color: #ff0000;text-shadow: 0 0 2px;"><div class="burnoutDiceChatValue">${roll.result}</div></h3>
					</header>
				</div>`;
        let rollWhisper = null;
        let rollBlind = false;
        let rollMode = game.settings.get("core", "rollMode");
        if (["gmroll", "blindroll"].includes(rollMode)) rollWhisper = ChatMessage.getWhisperRecipients("GM")
        if (rollMode === "blindroll") rollBlind = true;
        if (roll.result <= 2) {
            if (bsettings) {
                ChatMessage.create({
                    user: game.user._id,
                    content: content2,
                    speaker: {
                        actor: ActorToRollFor._id,
                        token: ActorToRollFor.token,
                        alias: ActorToRollFor.name
                    },

                    sound: CONFIG.sounds.dice,
                    flags: {
                        darksheet: {
                            outcome: 'bad'
                        }
                    }
                });
            } else {
                ChatMessage.create({
                    user: game.user._id,
                    content: content3,
                    speaker: {
                        actor: ActorToRollFor._id,
                        token: ActorToRollFor.token,
                        alias: ActorToRollFor.name
                    },

                    sound: CONFIG.sounds.dice,
                    flags: {
                        darksheet: {
                            outcome: 'bad'
                        }
                    }
                });
            }
            // Lower burnoutdie rank
            const new_burnoutdie = rollings.indexOf(ActorToRollFor.data.data.attributes.burnout.value) + 1;
            if (new_burnoutdie < rollings.length) {
                ActorToRollFor.update({ 'data.attributes.burnout.value': rollings[new_burnoutdie] });
            }
            this.render();
        } else {
            ChatMessage.create({
                user: game.user._id,
                content: content,
                speaker: {
                    actor: ActorToRollFor._id,
                    token: ActorToRollFor.token,
                    alias: ActorToRollFor.name
                },
                sound: CONFIG.sounds.dice
            });
        }
    }
}

//on Update Actor check for status
Hooks.on('updateActor', (actor, updates, options, userId) => {
    if (actor.data.type != "character") return;
    //UPDATE CUSTOM SHEET VALUE AND DISPLAY HIDDEN OPTIONS
    let customsheet;
    if (actor.data.data.attributes.color === undefined) { }
    else if (actor.data.data.attributes.color.value === "custom") {
        customsheet = true;
        actor.update({
            'data.attributes.color.custom': customsheet
        });
    } else {
        customsheet = false;
        actor.update({
            'data.attributes.color.custom': customsheet
        });
    }
    if (actor.data.data.attributes.automaticexhaust) {
        let newexhaustion = 0;
        let temp = actor.data.data.attributes.temp;
        let food = actor.data.data.attributes.saturation.value;
        let water = actor.data.data.attributes.thirst.value;
        let fatigue = actor.data.data.attributes.fatigue.value;
        let manualexhaustion = actor.data.data.attributes.exhaustion.value;
        let closedwounds = actor.data.data.attributes.wounds.value;
        let maxwounds = 0;
        if (actor.data.data.attributes.maxwounds != null) {
            maxwounds = actor.data.data.attributes.maxwounds.value;
        }
        else {
        }
        //console.log("ExhaustionTRACKINGGGGG");
        let woundexhaustion = maxwounds - closedwounds;
        newexhaustion += woundexhaustion;
        //Temperature Exhaustion
        if (temp === "exenegised") {
            newexhaustion += -1;
        } else if (temp === "exvsleepy" || temp === "exbarely") {
            newexhaustion += 1;
        }
        //Food Exhaustion
        if (food === "foodstuffed") {
            newexhaustion += -1;
        } else if (food === "foodravenous" || food === "foodstarving") {
            newexhaustion += 1;
        }
        //Water Exhaustion
        if (water === "wquenched") {
            newexhaustion += -1;
        } else if (water === "wdry" || water === "wdehydrated") {
            newexhaustion += 1;
        }
        //Fatigue Exhaustion
        if (fatigue === "exenegised") {
            newexhaustion += -1;
        } else if (fatigue === "exvsleepy" || fatigue === "exbarely") {
            newexhaustion += 1;
        }
        //exhaustion over 3?
        if (newexhaustion >= 4) {
            console.log("(DarkSheet): Maximum exhaustion achieved through needs. Total exhaustion from fron needs cannot exceed 3");
            newexhaustion = 3;
        }
        //adding manual exhaustion
        newexhaustion = (newexhaustion * 1 + manualexhaustion * 1);
        //exhaustion <0?
        if (newexhaustion <= 0) {
            newexhaustion = 0;
        }
        let exhaustion1 = false;
        let exhaustion2 = false;
        let exhaustion3 = false;
        let exhaustion4 = false;
        let exhaustion5 = false;
        if (newexhaustion === 1) {
            exhaustion1 = true;
        } else if (newexhaustion === 2) {
            exhaustion2 = true;
        } else if (newexhaustion === 3) {
            exhaustion3 = true;
        } else if (newexhaustion === 4) {
            exhaustion4 = true;
        } else if (newexhaustion === 5) {
            exhaustion5 = true;
        }
        if (actor.data.data.attributes.newexhaustion != newexhaustion) {
            actor.update({
                'data.attributes.newexhaustion': newexhaustion,
                'data.status.isExhaustion1': exhaustion1,
                'data.status.isExhaustion2': exhaustion2,
                'data.status.isExhaustion3': exhaustion3,
                'data.status.isExhaustion4': exhaustion4,
                'data.status.isExhaustion5': exhaustion5
            });
            console.log("(DarkSheet): New Exhaustion: " + actor.data.data.attributes.newexhaustion);
        }
    }
    //STATUS UPDATES
    if (updates.data && updates.data.status) {

        const blinded = "modules/combat-utility-belt/icons/blinded.svg";
        const charmed = "modules/combat-utility-belt/icons/charmed.svg";
        const deafened = "modules/combat-utility-belt/icons/deafened.svg";
        const dying = "icons/svg/skull.svg";
        const frightened = "modules/combat-utility-belt/icons/frightened.svg";
        const grappled = "modules/combat-utility-belt/icons/grappled.svg";
        const incapacitated = "modules/combat-utility-belt/icons/incapacitated.svg";
        const invisible = "modules/combat-utility-belt/icons/invisible.svg";
        const paralyzed = "modules/combat-utility-belt/icons/paralyzed.svg";
        const petrified = "modules/combat-utility-belt/icons/petrified.svg";
        const poisoned = "modules/combat-utility-belt/icons/poisoned.svg";
        const prone = "modules/combat-utility-belt/icons/prone.svg";
        const restrained = "modules/combat-utility-belt/icons/restrained.svg";
        const stunned = "modules/combat-utility-belt/icons/stunned.svg";
        const unconscious = "modules/combat-utility-belt/icons/unconscious.svg";
        const concentrating = "modules/combat-utility-belt/icons/concentrating.svg";

        const exhaustion1 = "modules/combat-utility-belt/icons/exhaustion1.svg";
        const exhaustion2 = "modules/combat-utility-belt/icons/exhaustion2.svg";
        const exhaustion3 = "modules/combat-utility-belt/icons/exhaustion3.svg";
        const exhaustion4 = "modules/combat-utility-belt/icons/exhaustion4.svg";
        const exhaustion5 = "modules/combat-utility-belt/icons/exhaustion5.svg";

        const actorData = actor.data;
        actor.getActiveTokens().forEach(async (t) => {
            if (t.data.actorLink && t.scene.id === game.scenes.active.id) {
                if (actorData.data.status.isBlinded && !t.data.effects.includes(blinded)) t.toggleEffect(blinded);
                if (!actorData.data.status.isBlinded && t.data.effects.includes(blinded)) t.toggleEffect(blinded);

                if (actorData.data.status.isCharmed && !t.data.effects.includes(charmed)) await t.toggleEffect(charmed);
                if (!actorData.data.status.isCharmed && t.data.effects.includes(charmed)) await t.toggleEffect(charmed);

                if (actorData.data.status.isDeafened && !t.data.effects.includes(deafened)) await t.toggleEffect(deafened);
                if (!actorData.data.status.isDeafened && t.data.effects.includes(deafened)) await t.toggleEffect(deafened);

                if (actorData.data.status.isDying && !t.data.effects.includes(dying)) await t.toggleEffect(dying);
                if (!actorData.data.status.isDying && t.data.effects.includes(dying)) await t.toggleEffect(dying);

                if (actorData.data.status.isFrightened && !t.data.effects.includes(frightened)) await t.toggleEffect(frightened);
                if (!actorData.data.status.isFrightened && t.data.effects.includes(frightened)) await t.toggleEffect(frightened);

                if (actorData.data.status.isGrappled && !t.data.effects.includes(grappled)) await t.toggleEffect(grappled);
                if (!actorData.data.status.isGrappled && t.data.effects.includes(grappled)) await t.toggleEffect(grappled);

                if (actorData.data.status.isIncapacitated && !t.data.effects.includes(incapacitated)) await t.toggleEffect(incapacitated);
                if (!actorData.data.status.isIncapacitated && t.data.effects.includes(incapacitated)) await t.toggleEffect(incapacitated);

                if (actorData.data.status.isInvisible && !t.data.effects.includes(invisible)) await t.toggleEffect(invisible);
                if (!actorData.data.status.isInvisible && t.data.effects.includes(invisible)) await t.toggleEffect(invisible);

                if (actorData.data.status.isParalyzed && !t.data.effects.includes(paralyzed)) await t.toggleEffect(paralyzed);
                if (!actorData.data.status.isParalyzed && t.data.effects.includes(paralyzed)) await t.toggleEffect(paralyzed);

                if (actorData.data.status.isPetrified && !t.data.effects.includes(petrified)) await t.toggleEffect(petrified);
                if (!actorData.data.status.isPetrified && t.data.effects.includes(petrified)) await t.toggleEffect(petrified);

                if (actorData.data.status.isPoisoned && !t.data.effects.includes(poisoned)) await t.toggleEffect(poisoned);
                if (!actorData.data.status.isPoisoned && t.data.effects.includes(poisoned)) await t.toggleEffect(poisoned);

                if (actorData.data.status.isProne && !t.data.effects.includes(prone)) await t.toggleEffect(prone);
                if (!actorData.data.status.isProne && t.data.effects.includes(prone)) await t.toggleEffect(prone);

                if (actorData.data.status.isRestrained && !t.data.effects.includes(restrained)) await t.toggleEffect(restrained);
                if (!actorData.data.status.isRestrained && t.data.effects.includes(restrained)) await t.toggleEffect(restrained);

                if (actorData.data.status.isStunned && !t.data.effects.includes(stunned)) await t.toggleEffect(stunned);
                if (!actorData.data.status.isStunned && t.data.effects.includes(stunned)) await t.toggleEffect(stunned);

                if (actorData.data.status.isUnconscious && !t.data.effects.includes(unconscious)) await t.toggleEffect(unconscious);
                if (!actorData.data.status.isUnconscious && t.data.effects.includes(unconscious)) await t.toggleEffect(unconscious);

                if (actorData.data.status.isConcentrating && !t.data.effects.includes(concentrating)) await t.toggleEffect(concentrating);
                if (!actorData.data.status.isConcentrating && t.data.effects.includes(concentrating)) await t.toggleEffect(concentrating);

                if (actorData.data.status.isExhaustion1 && !t.data.effects.includes(exhaustion1)) await t.toggleEffect(exhaustion1);
                if (!actorData.data.status.isExhaustion1 && t.data.effects.includes(exhaustion1)) await t.toggleEffect(exhaustion1);

                if (actorData.data.status.isExhaustion2 && !t.data.effects.includes(exhaustion2)) await t.toggleEffect(exhaustion2);
                if (!actorData.data.status.isExhaustion2 && t.data.effects.includes(exhaustion2)) await t.toggleEffect(exhaustion2);

                if (actorData.data.status.isExhaustion3 && !t.data.effects.includes(exhaustion3)) await t.toggleEffect(exhaustion3);
                if (!actorData.data.status.isExhaustion3 && t.data.effects.includes(exhaustion3)) await t.toggleEffect(exhaustion3);

                if (actorData.data.status.isExhaustion4 && !t.data.effects.includes(exhaustion4)) await t.toggleEffect(exhaustion4);
                if (!actorData.data.status.isExhaustion4 && t.data.effects.includes(exhaustion4)) await t.toggleEffect(exhaustion4);

                if (actorData.data.status.isExhaustion5 && !t.data.effects.includes(exhaustion5)) await t.toggleEffect(exhaustion5);
                if (!actorData.data.status.isExhaustion5 && t.data.effects.includes(exhaustion5)) await t.toggleEffect(exhaustion5);

                //EXHAUSTION STATUS
                await t.drawEffects();
            }
        });
    }
    //Intelligent Initiative
    if (game.settings.get('darksheet', 'intmod')) {
        actor.data.data.attributes.init.mod = actor.data.data.abilities.int.mod;
        actor.data.data.attributes.init.total = parseInt(actor.data.data.abilities.int.mod + actor.data.data.attributes.init.bonus + actor.data.data.attributes.init.prof);
        document.getElementById('initiativevalue').innerHTML = "+" + actor.data.data.attributes.init.total;
    }
});

//Check for preUpdateToken
Hooks.on('preUpdateToken', async (scene, sceneId, updates, tokenData) => {
    // if the update has no effects, return
    if (!sceneId.actorLink) return;
    const tokenActor = game.actors.entities.find(a => a.id == sceneId.actorId);
    if (!tokenActor) return;
    const blinded = "modules/combat-utility-belt/icons/blinded.svg";
    const charmed = "modules/combat-utility-belt/icons/charmed.svg";
    const deafened = "modules/combat-utility-belt/icons/deafened.svg";
    const dying = "icons/svg/skull.svg";
    const frightened = "modules/combat-utility-belt/icons/frightened.svg";
    const grappled = "modules/combat-utility-belt/icons/grappled.svg";
    const incapacitated = "modules/combat-utility-belt/icons/incapacitated.svg";
    const invisible = "modules/combat-utility-belt/icons/invisible.svg";
    const paralyzed = "modules/combat-utility-belt/icons/paralyzed.svg";
    const petrified = "modules/combat-utility-belt/icons/petrified.svg";
    const poisoned = "modules/combat-utility-belt/icons/poisoned.svg";
    const prone = "modules/combat-utility-belt/icons/prone.svg";
    const restrained = "modules/combat-utility-belt/icons/restrained.svg";
    const stunned = "modules/combat-utility-belt/icons/stunned.svg";
    const unconscious = "modules/combat-utility-belt/icons/unconscious.svg";
    const concentrating = "modules/combat-utility-belt/icons/concentrating.svg";
    const exhaustion1 = "modules/combat-utility-belt/icons/exhaustion1.svg";
    const exhaustion2 = "modules/combat-utility-belt/icons/exhaustion2.svg";
    const exhaustion3 = "modules/combat-utility-belt/icons/exhaustion3.svg";
    const exhaustion4 = "modules/combat-utility-belt/icons/exhaustion4.svg";
    const exhaustion5 = "modules/combat-utility-belt/icons/exhaustion5.svg";

    await tokenActor.update({
        "data.status.isBlinded": updates.effects.includes(blinded),
        "data.status.isDeafened": updates.effects.includes(deafened),
        "data.status.isDying": updates.effects.includes(dying),
        "data.status.isFrightened": updates.effects.includes(frightened),
        "data.status.isGrappled": updates.effects.includes(grappled),
        "data.status.isIncapacitated": updates.effects.includes(incapacitated),
        "data.status.isInvisible": updates.effects.includes(invisible),
        "data.status.isParalyzed": updates.effects.includes(paralyzed),
        "data.status.isPetrified": updates.effects.includes(petrified),
        "data.status.isPoisoned": updates.effects.includes(poisoned),
        "data.status.isProne": updates.effects.includes(prone),
        "data.status.isRestrained": updates.effects.includes(restrained),
        "data.status.isStunned": updates.effects.includes(stunned),
        "data.status.isUnconscious": updates.effects.includes(unconscious),
        "data.status.isConcentrating": updates.effects.includes(concentrating),
        "data.status.isExhaustion1": updates.effects.includes(exhaustion1),
        "data.status.isExhaustion2": updates.effects.includes(exhaustion2),
        "data.status.isExhaustion3": updates.effects.includes(exhaustion3),
        "data.status.isExhaustion4": updates.effects.includes(exhaustion4),
        "data.status.isExhaustion5": updates.effects.includes(exhaustion5),
    });

});

Hooks.on('createToken', async (scene, sceneId, tokenData, options, userId) => {
    if (!sceneId.actorLink) return;

    const actor = game.actors.entities.find(a => a.id == sceneId.actorId);

    // If this token has no actor, return
    if (!actor) return;

    const blinded = "modules/combat-utility-belt/icons/blinded.svg";
    const charmed = "modules/combat-utility-belt/icons/charmed.svg";
    const deafened = "modules/combat-utility-belt/icons/deafened.svg";
    const dying = "icons/svg/skull.svg";
    const frightened = "modules/combat-utility-belt/icons/frightened.svg";
    const grappled = "modules/combat-utility-belt/icons/grappled.svg";
    const incapacitated = "modules/combat-utility-belt/icons/incapacitated.svg";
    const invisible = "modules/combat-utility-belt/icons/invisible.svg";
    const paralyzed = "modules/combat-utility-belt/icons/paralyzed.svg";
    const petrified = "modules/combat-utility-belt/icons/petrified.svg";
    const poisoned = "modules/combat-utility-belt/icons/poisoned.svg";
    const prone = "modules/combat-utility-belt/icons/prone.svg";
    const restrained = "modules/combat-utility-belt/icons/restrained.svg";
    const stunned = "modules/combat-utility-belt/icons/stunned.svg";
    const unconscious = "modules/combat-utility-belt/icons/unconscious.svg";
    const concentrating = "modules/combat-utility-belt/icons/concentrating.svg";
    const exhaustion1 = "modules/combat-utility-belt/icons/exhaustion1.svg";
    const exhaustion2 = "modules/combat-utility-belt/icons/exhaustion2.svg";
    const exhaustion3 = "modules/combat-utility-belt/icons/exhaustion3.svg";
    const exhaustion4 = "modules/combat-utility-belt/icons/exhaustion4.svg";
    const exhaustion5 = "modules/combat-utility-belt/icons/exhaustion5.svg";

    const actorData = actor.data;
    actor.getActiveTokens().forEach(async (t) => {
        if (t.data.actorLink && t.scene.id === game.scenes.active.id) {
            if (actorData.data.status.isBlinded) await t.toggleEffect(blinded);

            if (actorData.data.status.isCharmed) await t.toggleEffect(charmed);

            if (actorData.data.status.isDeafened) await t.toggleEffect(deafened);

            if (actorData.data.status.isDying) await t.toggleEffect(dying);

            if (actorData.data.status.isFrightened) await t.toggleEffect(frightened);

            if (actorData.data.status.isGrappled) await t.toggleEffect(grappled);

            if (actorData.data.status.isIncapacitated) await t.toggleEffect(incapacitated);

            if (actorData.data.status.isInvisible) await t.toggleEffect(invisible);

            if (actorData.data.status.isParalyzed) await t.toggleEffect(paralyzed);

            if (actorData.data.status.isPetrified) await t.toggleEffect(petrified);

            if (actorData.data.status.isPoisoned) await t.toggleEffect(poisoned);

            if (actorData.data.status.isProne) await t.toggleEffect(prone);

            if (actorData.data.status.isRestrained) await t.toggleEffect(restrained);

            if (actorData.data.status.isStunned) await t.toggleEffect(stunned);

            if (actorData.data.status.isUnconscious) await t.toggleEffect(unconscious);

            if (actorData.data.status.isConcentrating) await t.toggleEffect(concentrating);

            if (actorData.data.status.isExhaustion1) await t.toggleEffect(exhaustion1);
            if (actorData.data.status.isExhaustion2) await t.toggleEffect(exhaustion2);
            if (actorData.data.status.isExhaustion3) await t.toggleEffect(exhaustion3);
            if (actorData.data.status.isExhaustion4) await t.toggleEffect(exhaustion4);
            if (actorData.data.status.isExhaustion5) await t.toggleEffect(exhaustion5);
            await t.drawEffects();
        }
    });
});

/**
 * Override and extend the core ItemSheet implementation to handle D&D5E specific item types
 * @type {ItemSheet}
 */
export class ItemSheet5e extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 560,
            height: 420,
            classes: ["dnd5e", "sheet", "item"],
            resizable: false,
            scrollY: [".tab.details"],
            tabs: [{
                navSelector: ".tabs",
                contentSelector: ".sheet-body",
                initial: "description"
            }]
        });
    }
    /**
     * Return a dynamic reference to the HTML template path used to render this Item Sheet
     * @return {string}
     */
    get template() {
        const path = "modules/darksheet/templates/items/";
        return `${path}/${this.item.data.type}.html`;
    } /* -------------------------------------------- */ /* -------------------------------------------- */

    /**
     * Prepare item sheet data
     * Start with the base item data and extending with additional properties for rendering.
     */
    getData() {
        const data = super.getData();
        const itemData = data.data;
        data.labels = this.item.labels;
        data.config = CONFIG.DND5E;

        // Include CONFIG values
        data.config = CONFIG.DND5E;

        // Item Type, Status, and Details
        data.itemType = game.i18n.localize(`ITEM.Type${data.item.type.titleCase()}`);
        data.itemStatus = this._getItemStatus(itemData);
        data.itemProperties = this._getItemProperties(itemData);
        data.isPhysical = itemData.data.hasOwnProperty("quantity");

        // Potential consumption targets
        data.abilityConsumptionTargets = this._getItemConsumptionTargets(itemData);

        // Action Details
        data.hasAttackRoll = this.item.hasAttack;
        data.isHealing = itemData.data.actionType === "heal";
        data.isFlatDC = getProperty(itemData, "data.save.scaling") === "flat";
        data.isLine = ["line", "wall"].includes(itemData.data.target?.type);

        // Original maximum uses formula
        const sourceMax = foundry.utils.getProperty(this.item.data._source, "data.uses.max");
        if (sourceMax) itemData.data.uses.max = sourceMax;


        // Re-define the template data references (backwards compatible)
        data.item = itemData;
        data.data = itemData.data;

        //DARKER DUNGEONS SPECIFIC
        data.hideammodie = game.settings.get('darksheet', 'hideammodie'); //
        data.hidenotches = game.settings.get('darksheet', 'hidenotches'); //
        data.disablefragility = game.settings.get('darksheet', 'disablefragility'); //
        data.disabletemper = game.settings.get('darksheet', 'disabletemper'); //
        data.disableitemquality = game.settings.get('darksheet', 'disableitemquality'); //
        data.hidedamageac = game.settings.get('darksheet', 'hidedamageac'); //
        data.savecantrips = game.settings.get('darksheet', 'savecantrips'); //
        data.silverstandard = game.settings.get('darksheet', 'silverstandard'); //
        data.slotbasedinventory = game.settings.get('darksheet', 'slotbasedinventory'); //

        return data;
    }
    /* -------------------------------------------- */

    /**
     * Get the valid item consumption targets which exist on the actor
     * @param {Object} item         Item data for the item being displayed
     * @return {{string: string}}   An object of potential consumption targets
     * @private
     */
    _getItemConsumptionTargets(item) {
        const consume = item.data.consume || {};
        if (!consume.type) return [];
        const actor = this.item.actor;
        if (!actor) return {};

        // Ammunition
        if (consume.type === "ammo") {
            return actor.itemTypes.consumable.reduce((ammo, i) => {
                if (i.data.data.consumableType === "ammo") {
                    ammo[i.id] = `${i.name} (${i.data.data.quantity})`;
                }
                return ammo;
            }, { [item._id]: `${item.name} (${item.data.quantity})` });
        }

        // Attributes
        else if (consume.type === "attribute") {
            const attributes = TokenDocument.getTrackedAttributes(actor.data.data);
            attributes.bar.forEach(a => a.push("value"));
            return attributes.bar.concat(attributes.value).reduce((obj, a) => {
                let k = a.join(".");
                obj[k] = k;
                return obj;
            }, {});
        }

        // Materials
        else if (consume.type === "material") {
            return actor.items.reduce((obj, i) => {
                if (["consumable", "loot"].includes(i.data.type) && !i.data.data.activation) {
                    obj[i.id] = `${i.name} (${i.data.data.quantity})`;
                }
                return obj;
            }, {});
        }

        // Charges
        else if (consume.type === "charges") {
            return actor.items.reduce((obj, i) => {

                // Limited-use items
                const uses = i.data.data.uses || {};
                if (uses.per && uses.max) {
                    const label = uses.per === "charges" ?
                        ` (${game.i18n.format("DND5E.AbilityUseChargesLabel", { value: uses.value })})` :
                        ` (${game.i18n.format("DND5E.AbilityUseConsumableLabel", { max: uses.max, per: uses.per })})`;
                    obj[i.id] = i.name + label;
                }

                // Recharging items
                const recharge = i.data.data.recharge || {};
                if (recharge.value) obj[i.id] = `${i.name} (${game.i18n.format("DND5E.Recharge")})`;
                return obj;
            }, {})
        }
        else return {};
    }

    /* -------------------------------------------- */

    /**
     * Get the text item status which is shown beneath the Item type in the top-right corner of the sheet
     * @return {string}
     * @private
     */
    _getItemStatus(item) {
        if (item.type === "spell") {
            return CONFIG.DND5E.spellPreparationModes[item.data.preparation];
        }
        else if (["weapon", "equipment"].includes(item.type)) {
            return game.i18n.localize(item.data.equipped ? "DND5E.Equipped" : "DND5E.Unequipped");
        }
        else if (item.type === "tool") {
            return game.i18n.localize(item.data.proficient ? "DND5E.Proficient" : "DND5E.NotProficient");
        }
    }
    /* -------------------------------------------- */

    /**
     * Get the Array of item properties which are used in the small sidebar of the description tab
     * @return {Array}
     * @private
     */
    _getItemProperties(item) {
        const props = [];
        const labels = this.item.labels;

        if (item.type === "weapon") {
            props.push(...Object.entries(item.data.properties)
                .filter(e => e[1] === true)
                .map(e => CONFIG.DND5E.weaponProperties[e[0]]));
        }

        else if (item.type === "spell") {
            props.push(
                labels.components,
                labels.materials,
                item.data.components.concentration ? game.i18n.localize("DND5E.Concentration") : null,
                item.data.components.ritual ? game.i18n.localize("DND5E.Ritual") : null
            )
        }

        else if (item.type === "equipment") {
            props.push(CONFIG.DND5E.equipmentTypes[item.data.armor.type]);
            props.push(labels.armor);
        }

        else if (item.type === "feat") {
            props.push(labels.featType);
        }

        // Action type
        if (item.data.actionType) {
            props.push(CONFIG.DND5E.itemActionTypes[item.data.actionType]);
        }

        // Action usage
        if ((item.type !== "weapon") && item.data.activation && !isObjectEmpty(item.data.activation)) {
            props.push(
                labels.activation,
                labels.range,
                labels.target,
                labels.duration
            )
        }
        return props.filter(p => !!p);
    }

    /* -------------------------------------------- */

    /*  Form Submission                             */
    /* -------------------------------------------- */
    /**
     * Extend the parent class _updateObject method to ensure that damage ends up in an Array
     * @private
     */
    _updateObject(event, formData) { // Handle Damage Array
        let damage = Object.entries(formData).filter(e => e[0].startsWith("data.damage.parts"));
        formData["data.damage.parts"] = damage.reduce((arr, entry) => {
            let [i, j] = entry[0].split(".").slice(3);
            if (!arr[i]) arr[i] = [];
            arr[i][j] = entry[1];
            return arr;
        }, []); // Update the Item
        super._updateObject(event, formData);
    } /* -------------------------------------------- */
    /**
     * Activate listeners for interactive item sheet events
     */
    activateListeners(html) {
        super.activateListeners(html); // Activate tabs
        // Save scroll position

        html.find(".damage-control").click(this._onDamageControl.bind(this));
    }

    /* -------------------------------------------- */
    /**
     * Add or remove a damage part from the damage formula
     * @param {Event} event     The original click event
     * @return {Promise}
     * @private
     */
    async _onDamageControl(event) {
        event.preventDefault();
        const a = event.currentTarget;

        // Add new damage component
        if (a.classList.contains("add-damage")) {
            await this._onSubmit(event); // Submit any unsaved changes
            const damage = this.item.data.data.damage;
            return this.item.update({
                "data.damage.parts": damage.parts.concat([
                    ["", ""]
                ])
            });
        } // Remove a damage component
        if (a.classList.contains("delete-damage")) {
            await this._onSubmit(event); // Submit any unsaved changes
            const li = a.closest(".damage-part");
            const damage = duplicate(this.item.data.data.damage);
            damage.parts.splice(Number(li.dataset.damagePart), 1);
            return this.item.update({
                "data.damage.parts": damage.parts
            });
        }
    }
}

class Darkscreen {
    static addChatControl() {
        const chatControlLeft = document.getElementsByClassName("chat-control-icon")[0];
        let tableNode = document.getElementById("DarkScreen-button");

        if (chatControlLeft && !tableNode) {
            const chatControlLeftNode = chatControlLeft.firstElementChild;
            const number = 4;
            tableNode = document.createElement("label");
            tableNode.innerHTML = `<i id="DarkScreen-button" class="fas fa-book-dead DarkScreen-button" style="text-shadow: 0 0 1px black; color:grey;" title="[Darkscreen] disabled until v0.9"></i>`;
            //tableNode.onclick = Darkscreen.initializeDarkscreen;
            chatControlLeft.insertBefore(tableNode, chatControlLeftNode);
        }
    }
    static initializeDarkscreen() {
        if (this.dsc === undefined) {
            this.dsc = new DSC();
        }
        this.dsc.openDialog();
    }
}

class DSC extends Application {
    constructor(options = {}) {
        super(options);
    }
    openDialog() {
        //LOAD TEMPLATE DATA
        let $dialog = $('.DSC-window');
        if ($dialog.length > 0) {
            $dialog.remove();
            return;
        }
        const templateData = {
            data: []
        };
        templateData.data = super.getData();
        templateData.title = "Darker Dungeons - Gamemaster Screen";
        templateData.darkscreenval = game.settings.get('darksheet', 'darkscreenval').split(",");
        templateData.darkscreennames = game.settings.get('darksheet', 'darkscreennames').split(",");
        for (let i = 0; i < templateData.darkscreenval.length; i++) {
            templateData[templateData.darkscreennames[i]] = templateData.darkscreenval[i];
        }
        //LOAD QUESTTABLE

        const templatePath = "modules/darksheet/templates/darkscreen.html";
        DSC.renderMenu(templatePath, templateData);

    }
    static renderMenu(path, data) {
        const dialogOptions = {
            width: 1134,
            top: event.clientY - 80,
            left: window.innerWidth - 510,
            classes: ['DSC-window resizable']
        };
        dialogOptions.resizable = true;
        renderTemplate(path, data).then(dlg => {
            new Dialog({
                title: game.i18n.localize('Darker Dungeons - Gamemaster Screen [WOP version 0.2]'),
                content: dlg,
                buttons: {}
            }, dialogOptions).render(true);
        });
    }
}
Hooks.on('canvasReady', function () {
    if (game.user.isGM) {
        Darkscreen.addChatControl();
        console.log("Darkscreen GM True");
    }
    if (game.settings.get('darksheet', 'hideSRDCOMP')) {
        document.querySelector('[data-pack="dnd5e.items"]').style.display = "none"
        document.querySelector('[data-pack="dnd5e.tradegoods"]').style.display = "none"
        document.querySelector('[data-pack="dnd5e.heroes"]').style.display = "none"
        console.log("Darksheet || SRD Packs are hidden");
    }
});
Hooks.on('createOwnedItem', (sheet, html, item) => {
    console.log("test");
    html.data.armor = "";
    console.log("test");
});

Hooks.on(`ready`, () => {
    Hooks.on('renderDarkerActorSheet5eCharacter', (sheet, html) => {
        //RENDER WOUNDS ON DARKSHEET
        let maxwounds = 0;
        if (sheet.actor.data.data.attributes.maxwounds != null) {
            maxwounds = sheet.actor.data.data.attributes.maxwounds.value;
        }
        if (sheet.actor.data.data.attributes.inventoryslots == null) {
            sheet.actor.update({
                'data.attributes.inventoryslots': "18",
            });
        }
        let woundcount = 0;
        let woundstreated = 0;
        let actorID = sheet.actor.data._id;
        for (let i = 1; i <= 20; i++) {
            if (document.getElementById(actorID + "-wounddes" + [i]).value != "") {
                document.getElementById(actorID + "-woundtr" + [i]).style = ""
                woundcount++;
                if (document.getElementById(actorID + "-woundcheck" + [i]).checked) {
                    woundstreated++;
                }
            }
        }
        for (let i = 1; i <= 20; i++) {
            if (document.getElementById(actorID + "-wounddes" + [i]).value == "" && maxwounds > woundcount) {
                document.getElementById(actorID + "-woundtr" + [i]).style = ""
                woundcount++;
                if (document.getElementById(actorID + "-woundcheck" + [i]).checked) {
                    woundstreated++;
                }
            }
        }
        if (sheet.actor.data.data.attributes.maxwounds == undefined || sheet.actor.data.data.attributes.wounds == undefined || sheet.actor.data.data.attributes.maxwounds.value == undefined) {
            sheet.actor.update({
                'data.attributes.wounds.value': "0",
                'data.attributes.maxwounds.value': "0",
            });
        }
        else if (sheet.actor.data.data.attributes.wounds.value != woundstreated) {
            sheet.actor.update({
                'data.attributes.wounds.value': woundstreated
            });
        }
        //Intelligent Initiative
        if (game.settings.get('darksheet', 'intmod')) {
            sheet.actor.data.data.attributes.init.mod = sheet.actor.data.data.abilities.int.mod;
            sheet.actor.data.data.attributes.init.total = parseInt(sheet.actor.data.data.abilities.int.mod + sheet.actor.data.data.attributes.init.bonus + sheet.actor.data.data.attributes.init.prof);
            document.getElementById('initiativevalue').innerHTML = "+" + sheet.actor.data.data.attributes.init.total;
        }
    });

    if (game.modules.get('betterrolls5e')?.active === true) {
        BetterRolls.hooks.addActorSheet("DarkerActorSheet5eCharacter");
        BetterRolls.hooks.addItemSheet("DarkItemSheet5e");
        console.log("Darksheet | BetterRolls detected and enabled");
    }
    if (game.modules.get('magicitems')?.active === true) {
        //console.log("Darksheet | Magicitems detected and enabled");
    }

    if (game.modules.get('SilverStandard')?.active === true) {
        Hooks.on('renderDarkSheet', (sheet, html) => {
            html.find('.denomination.ep').remove();
            html.find('[name="data.currency.ep"]').remove();
        });
        console.log("Darksheet | SilverStandard detected and enabled");
    }

    if (game.modules.get('betternpcsheet5e')?.active === true) {
        Hooks.on('renderBetterNPCActor5eSheet', (sheet, html) => {
            let actor = sheet.object;
            let DAC = 0;
            var profmod = actor.data.data.attributes.prof;
            var dexmod = actor.data.data.abilities.dex.mod;
            var strmod = actor.data.data.abilities.str.mod;
            let inventory = actor.data.items;
            let itemid;
            var i;
            let mod;

            for (i = 0; i < actor.data.items._source.length; i++) {
                itemid = actor.data.items._source[i]._id;
                if (actor.data.items._source[i].type === "weapon") {
                    mod = actor.data.items._source[i].data.ability;
                    if (mod === "str") {
                        DAC = strmod + profmod;
                    }
                    else if (mod === "dex") {
                        DAC = dexmod + profmod;
                    }
                    if (game.settings.get('darksheet', 'nonpcattack') && actor.data.items._source[i].data.actionType === "mwak" || game.settings.get('darksheet', 'nonpcattack') && actor.data.items._source[i].data.actionType === "rwak") {
                        if (actor.data.items._source[i].data.save.ability === "") {
                            actor.updateEmbeddedEntity('Item', {
                                _id: itemid,
                                "data.actionType": "util"
                            });
                        }
                        else {
                            actor.updateEmbeddedEntity('Item', {
                                _id: itemid,
                                "data.actionType": "save"
                            });
                        }
                        console.log("Darksheet | Attack " + actor.data.items._source[i].name + " from " + actor.data.name + " is now Util")
                    }
                }
            }
            if (game.settings.get('darksheet', 'smalldefense')) {
                DAC += 12;
            }
            else {
                DAC += 22;
            }
            console.log("Active Defense DC: " + DAC);
            html.find('[class="tab active"]').before(`<label style="margin-left: 2.5px;font-weight: bold;">Attack DC: ${DAC}</label>`);
        });
        console.log("Darksheet | BetterNPCActor5eSheet detected and enabled.");
    }

    Hooks.on('renderActorSheet5eNPC', (sheet, html) => {
        console.log("Loading NPC, adding Attack DC...");
        let actor = sheet.object;
        let DAC = 0;
        var profmod = actor.data.data.attributes.prof;
        var dexmod = actor.data.data.abilities.dex.mod;
        var strmod = actor.data.data.abilities.str.mod;
        let inventory = actor.data.items;
        let itemid;
        var i;
        let mod;

        for (i = 0; i < actor.data.items._source.length; i++) {
            itemid = actor.data.items._source[i]._id;
            if (actor.data.items._source[i].type === "weapon") {
                mod = actor.data.items._source[i].data.ability;
                if (mod === "str") {
                    DAC = strmod + profmod;
                }
                else if (mod === "dex") {
                    DAC = dexmod + profmod;
                }
                if (game.settings.get('darksheet', 'nonpcattack') && actor.data.items._source[i].data.actionType === "mwak" || game.settings.get('darksheet', 'nonpcattack') && actor.data.items._source[i].data.actionType === "rwak") {
                    if (actor.data.items._source[i].data.save.ability === "") {
                        actor.updateEmbeddedEntity('Item', {
                            _id: itemid,
                            "data.actionType": "util"
                        });
                    }
                    else {
                        actor.updateEmbeddedEntity('Item', {
                            _id: itemid,
                            "data.actionType": "save"
                        });
                    }
                    console.log("Darksheet | Attack " + actor.data.items._source[i].name + " from " + actor.data.name + " is now Util")
                }
            }
        }
        if (game.settings.get('darksheet', 'smalldefense')) {
            DAC += 12;
        }
        else {
            DAC += 22;
        }
        console.log("Active Defense DC: " + DAC);
        html.find('[class="attribute movement"]').before(`<li class="attribute armor">
                    <h4 class="attribute-name box-title">
                        Attack DC
                    </h4>
                    <div class="attribute-value attributable" data-property="attributes.ac">
                        <span>${DAC}</span>
                    </div>
                    <footer class="attribute-footer">
                        <span></span>
                    </footer>
                </li>`);
    });
    console.log("Darksheet | BetterNPCActor5eSheet detected and enabled.");

});

Hooks.on('createChatMessage', async (msg) => { //GM PUSHES SETTING
    if (!game.user.isGM) return;
    let HadTurn = [];
    HadTurn = game.settings.get('darksheet', 'ActiveInitiativeHadTurn').split(",");
    console.log("Chat Message Detected");
    let message = msg.data.content;
    let closestActorID = msg.data.flavor;
    if (message.includes("gave his turn to")) {
        if (!HadTurn.includes(closestActorID)) HadTurn.push(closestActorID);
        game.settings.set('darksheet', 'ActiveInitiativeHadTurn', HadTurn.toString());
        game.combat.setInitiative(closestActorID, game.combat.combatants.get(closestActorID).data.initiative + 1);
        game.combat.setInitiative(closestActorID, game.combat.combatants.get(closestActorID).data.initiative - 1);
        msg.delete();
    }
});
Hooks.on('createChatMessage', (userId) => {
    console.log("Chat Message Detected");

    let message = userId.data.content;
    let actor = game.actors.getName(userId.data.speaker.alias);
    let spellburnout = false;
    let iscantrip = false;
    let onlyonce = false;

    if (message.includes("<span>Cantrip</span>")) {
        iscantrip = true;
    }
    if (message.includes("<span>V") || message.includes("<span>M") || message.includes("<span>S") || message.includes("slots")) {
        spellburnout = true;
    }
    else { return; }

    if (iscantrip == false && spellburnout == true && actor.data.data.attributes.autmomaticburnout && game.user.character.data._id === actor.data._id || iscantrip == true && game.settings.get('darksheet', 'savecantrips') === false && actor.data.data.attributes.autmomaticburnout && game.user.character.data._id === actor.data._id) {
        console.log("[Darksheet] Rolling automatic burnout for " + actor.name);
        rollBurnout(game.actors.get(userId.data.speaker.actor));
    }
});

Hooks.on("renderCombatTracker", async function (_combatTracker, html) {

    if (!game.settings.get('darksheet', 'activeInitiative')) return;
    if (game.combat == undefined) return;
    //ui.notifications.notify("Rendering Combat");
    let HadTurn = [];
    if (game.settings.get('darksheet', 'ActiveInitiativeHadTurn') != "")
        HadTurn = game.settings.get('darksheet', 'ActiveInitiativeHadTurn').split(",");
    let HasToHaveTurn = [];

    let toAppend = '<div id="TurnOfTurnDebug"> Turn: ' + game.settings.get('darksheet', 'ActiveInitiativeHadTurn').split(",").length + '/' + game.combat.combatants.size + '</div>';
    if (document.getElementById("TurnOfTurnDebug") == undefined)//DISPLAY REMAINING ACTORS
        $("#combat-round").append(toAppend);

    for (let i = 0; i < document.getElementsByClassName("token-initiative").length; i++) {
        let closestActor = document.getElementsByClassName("token-initiative")[i].closest(".actor");
        let closestActorTID = game.combat.combatants.get(closestActor.getAttribute("data-combatant-id")).id;
        let compareIdTo;

        if (closestActorTID == game.combat.current.combatantId) {
            //document.getElementsByClassName("token-initiative")[i].innerHTML = '';
            continue;
        }

        if (HadTurn.includes(closestActorTID)) {
            document.getElementsByClassName("token-initiative")[i].innerHTML = 'DONE';
            document.getElementsByClassName("token-initiative")[i].parentElement.children[0].style.setProperty("filter", "grayscale(100%)");//CHANGE COLOR OF TOKEN ONLY
            if (game.user.isGM)
                document.getElementsByClassName("token-initiative")[i].innerHTML = '<button class="AIButton AiButtonGM" id="GiveTurn">DONE</button>';
            continue;
        }

        if (!game.user.isGM && game.combat.combatants.get(game.combat.current.combatantId).actor != game.user.character) {
            continue;
        }
        document.getElementsByClassName("token-initiative")[i].innerHTML = '<button class="AIButton" id="GiveTurn">Turn</button>';


    }
    /* //DEBUG TOKEN ID
    for(let i = 0; i < document.getElementsByClassName("token-name").length; i++){
        document.getElementsByClassName("token-name")[i].children[0].textContent += " (" + document.getElementsByClassName("token-name")[i].parentElement.dataset.combatantId + ")";
    }*/

    if (game.settings.get('darksheet', 'activeInitiativeDisplayTurns')) {
        if (game.combat.combatants.get(HadTurn[0]) != undefined) {
            $("#combat-round").append('<div style="line-break: anywhere;max-height: 97px;overflow: auto;"id="HadTurnDebug">');
            for (let h = 0; h < HadTurn.length; h++) {
                $("#HadTurnDebug").append('<div style="line-break: anywhere;"id="HadTurnDebug">' + game.combat.combatants.get(HadTurn[h]).name + '</div>');

            }
        }
    }

    function getPosition(elementToFind, arrayElements) {
        var i;
        for (i = 0; i < arrayElements.size; i += 1) {
            if (game.combat.combatants.document.turns[i] === elementToFind) {
                return i;
            }
        }
        return null; //not found
    }

    html.find('.AIButton').click(async event => {
        event.preventDefault();
        //ui.notifications.notify("Clicked Turn for " + game.combat.combatants.get(event.target.closest(".actor").getAttribute("data-combatant-id")).actor.name);
        let closestActorID = game.combat.combatants.get(event.target.closest(".actor").getAttribute("data-combatant-id")).id;
        if (!HadTurn.includes(closestActorID)) HadTurn.push(closestActorID);
        if (game.user.isGM)
            game.settings.set('darksheet', 'ActiveInitiativeHadTurn', HadTurn.toString());

        //console.log(HadTurn);

        let Test = getPosition(game.combat.combatants.get(closestActorID), game.combat.combatants);
        if (game.combat.current.turn < Test) {
            for (let n = game.combat.current.turn; n < Test; n++) {
                await game.combat.nextTurn();
            }
        }
        else if (game.combat.current.turn > Test) {
            for (let n = game.combat.current.turn; n > Test; n--) {
                await game.combat.previousTurn();
            }
        }

        if (!game.user.isGM) {//NON GM'S PUSH A MESSAGE
            ChatMessage.create({
                user: game.user._id,
                content: game.user.name + " gave his turn to " + game.combat.combatants.get(event.target.closest(".actor").getAttribute("data-combatant-id")).name,
                flavor: closestActorID,
                blind: true,
            })
        }
    });

    if (game.user.isGM) {//REMOVING SOME CONTROLS FROM THE COMBATTRACKER
        if (document.getElementsByClassName("combat-control")[4].text == "") {
            if (HadTurn.length >= game.combat.combatants.size)
                $(".combat").append('<a class="combat-control directory-footer flexrow" title="Next Round" data-control="nextRound" style="flex: 0.1;width: 100%;background: #0043ff4a;text-align: center;font-size: 20px;align-content: space-around;"><i class="fas fa-step-forward"></i></a>');
            if (document.getElementsByClassName("combat-control")[5].title == "Previous Turn")
                document.getElementsByClassName("combat-control")[5].remove()
            if (document.getElementsByClassName("combat-control")[6].title == "Next Turn");
            document.getElementsByClassName("combat-control")[6].remove()
        }
    }
    else {
        if (document.getElementById("combat-controls") != undefined)
            document.getElementById("combat-controls").remove()
    }
    if (!game.user.isGM) return;
    //NEW ROUND?
    if (game.combat.current.round != game.combat.previous.round) {
        let LastTurnID = game.settings.get('darksheet', 'ActiveInitiativeHadTurn').split(",")[game.settings.get('darksheet', 'ActiveInitiativeHadTurn').split(",").length - 1];
        if (game.settings.get('darksheet', 'ActiveInitiativeHadTurn') == "") return;
        game.settings.set('darksheet', 'ActiveInitiativeHadTurn', "");
        if (game.combat.current.combatantId == LastTurnID) {
            await game.combat.nextTurn();
            await game.combat.previousTurn();
        }
        while (game.combat.current.combatantId != LastTurnID) {//RESET TURN 
            await game.combat.nextTurn();
        }
    }

});
