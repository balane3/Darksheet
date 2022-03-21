import ActorSheet5eCharacter from "../../../../../systems/dnd5e/module/actor/sheets/character.js";

export class DarkerActorSheet5eCharacter extends ActorSheet5eCharacter {
    get template() {
        return 'modules/darksheet/templates/character-sheet.html';
    }

    getData() {
        const data = super.getData();
        //settings
        data.noheropoints = game.settings.get('darksheet', 'noheropoints'); //
        data.slotbasedinventory = game.settings.get('darksheet', 'slotbasedinventory'); //
        data.hidesettings = game.settings.get('darksheet', 'hidesettings'); //
        data.hidechecks = game.settings.get('darksheet', 'hidechecks'); //
        data.hideammodie = game.settings.get('darksheet', 'hideammodie'); //
        data.hidenotches = game.settings.get('darksheet', 'hidenotches'); //
        data.disablefragility = game.settings.get('darksheet', 'disablefragility'); //
        data.disabletemper = game.settings.get('darksheet', 'disabletemper'); //
        data.disableitemquality = game.settings.get('darksheet', 'disableitemquality'); //
        data.hidedamageac = game.settings.get('darksheet', 'hidedamageac'); //
        data.savecantrips = game.settings.get('darksheet', 'savecantrips'); //
        data.silverstandard = game.settings.get('darksheet', 'silverstandard'); //
        data.globalTemp = game.settings.get('darksheet', 'globalTemp'); //
        data.globalRegMagic = game.settings.get('darksheet', 'globalRegMagic'); //

        return data;
    }

    activateListeners(html) {
        super.activateListeners(html);

        html.find('.removewoundbutton').click(async event => {
            //update the actor
            let newwound = parseFloat(this.actor.data.data.attributes.maxwounds.value) - 1;
            let newtext = "";
            let button = event.toElement.id;
            let target = 'data.attributes.darksheet-wounds.' + button;
            let newcheck = false;
            switch (button) {
                case "wound1": this.actor.update({ 'data.attributes.darksheet-wounds.wound1': newtext, 'data.attributes.maxwounds.value': newwound, 'data.attributes.darksheet-wounds.wound1treated.value': newcheck, }); break;
                case "wound2": this.actor.update({ 'data.attributes.darksheet-wounds.wound2': newtext, 'data.attributes.maxwounds.value': newwound, 'data.attributes.darksheet-wounds.wound2treated.value': newcheck, }); break;
                case "wound3": this.actor.update({ 'data.attributes.darksheet-wounds.wound3': newtext, 'data.attributes.maxwounds.value': newwound, 'data.attributes.darksheet-wounds.wound3treated.value': newcheck, }); break;
                case "wound4": this.actor.update({ 'data.attributes.darksheet-wounds.wound4': newtext, 'data.attributes.maxwounds.value': newwound, 'data.attributes.darksheet-wounds.wound4treated.value': newcheck, }); break;
                case "wound5": this.actor.update({ 'data.attributes.darksheet-wounds.wound5': newtext, 'data.attributes.maxwounds.value': newwound, 'data.attributes.darksheet-wounds.wound5treated.value': newcheck, }); break;
                case "wound6": this.actor.update({ 'data.attributes.darksheet-wounds.wound6': newtext, 'data.attributes.maxwounds.value': newwound, 'data.attributes.darksheet-wounds.wound61treated.value': newcheck, }); break;
                case "wound7": this.actor.update({ 'data.attributes.darksheet-wounds.wound7': newtext, 'data.attributes.maxwounds.value': newwound, 'data.attributes.darksheet-wounds.wound7treated.value': newcheck, }); break;
                case "wound8": this.actor.update({ 'data.attributes.darksheet-wounds.wound8': newtext, 'data.attributes.maxwounds.value': newwound, 'data.attributes.darksheet-wounds.wound8treated.value': newcheck, }); break;
                case "wound9": this.actor.update({ 'data.attributes.darksheet-wounds.wound9': newtext, 'data.attributes.maxwounds.value': newwound, 'data.attributes.darksheet-wounds.wound9treated.value': newcheck, }); break;
                case "wound10": this.actor.update({ 'data.attributes.darksheet-wounds.wound10': newtext, 'data.attributes.maxwounds.value': newwound, 'data.attributes.darksheet-wounds.wound10treated.value': newcheck, }); break;
                case "wound11": this.actor.update({ 'data.attributes.darksheet-wounds.wound11': newtext, 'data.attributes.maxwounds.value': newwound, 'data.attributes.darksheet-wounds.wound11treated.value': newcheck, }); break;
                case "wound12": this.actor.update({ 'data.attributes.darksheet-wounds.wound12': newtext, 'data.attributes.maxwounds.value': newwound, 'data.attributes.darksheet-wounds.wound12treated.value': newcheck, }); break;
                case "wound13": this.actor.update({ 'data.attributes.darksheet-wounds.wound13': newtext, 'data.attributes.maxwounds.value': newwound, 'data.attributes.darksheet-wounds.wound13treated.value': newcheck, }); break;
                case "wound14": this.actor.update({ 'data.attributes.darksheet-wounds.wound14': newtext, 'data.attributes.maxwounds.value': newwound, 'data.attributes.darksheet-wounds.wound14treated.value': newcheck, }); break;
                case "wound15": this.actor.update({ 'data.attributes.darksheet-wounds.wound15': newtext, 'data.attributes.maxwounds.value': newwound, 'data.attributes.darksheet-wounds.wound15treated.value': newcheck, }); break;
                case "wound16": this.actor.update({ 'data.attributes.darksheet-wounds.wound16': newtext, 'data.attributes.maxwounds.value': newwound, 'data.attributes.darksheet-wounds.wound16treated.value': newcheck, }); break;
                case "wound17": this.actor.update({ 'data.attributes.darksheet-wounds.wound17': newtext, 'data.attributes.maxwounds.value': newwound, 'data.attributes.darksheet-wounds.wound17treated.value': newcheck, }); break;
                case "wound18": this.actor.update({ 'data.attributes.darksheet-wounds.wound18': newtext, 'data.attributes.maxwounds.value': newwound, 'data.attributes.darksheet-wounds.wound18treated.value': newcheck, }); break;
                case "wound19": this.actor.update({ 'data.attributes.darksheet-wounds.wound19': newtext, 'data.attributes.maxwounds.value': newwound, 'data.attributes.darksheet-wounds.wound19treated.value': newcheck, }); break;
                case "wound20": this.actor.update({ 'data.attributes.darksheet-wounds.wound20': newtext, 'data.attributes.maxwounds.value': newwound, 'data.attributes.darksheet-wounds.wound20treated.value': newcheck, }); break;
            }
        })
        html.find('.addwoundbutton').click(async event => {
            event.preventDefault();
            if (this.actor.data.data.attributes.maxwounds.value >= 20) {
                ui.notifications.warn("Darksheet | You can not have more than 20 wounds.");

            }
            else {
                let newwound = parseFloat(this.actor.data.data.attributes.maxwounds.value) + 1;
                this.actor.update({
                    'data.attributes.maxwounds.value': newwound
                });
            }
        });
        html.find('.exhaustioncalc').click(async event => {
            event.preventDefault();
            let newexhaustion = 0;
            let temp = this.actor.data.data.attributes.temp;
            let food = this.actor.data.data.attributes.saturation.value;
            let water = this.actor.data.data.attributes.thirst.value;
            let fatigue = this.actor.data.data.attributes.fatigue.value;
            let manualexhaustion = this.actor.data.data.attributes.exhaustion.value;
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

            this.actor.update({
                'data.attributes.newexhaustion': newexhaustion,
                'data.status.isExhaustion1': exhaustion1,
                'data.status.isExhaustion2': exhaustion2,
                'data.status.isExhaustion3': exhaustion3,
                'data.status.isExhaustion4': exhaustion4,
                'data.status.isExhaustion5': exhaustion5,
            });
            this.render();
        });

        /*RICH TEXT EDITOR CUSTOM CSS*/
        window.createEditor = (function () {
            const cached = window.createEditor;
            return function () {
                arguments[0].content_css = 'css/mce.css,modules/darksheet/css/darksheet-mce.css';
                return cached.apply(this, arguments);
            };
        })();
        /*END RICH TEXT EDITOR CUSTOM CSS END*/
        /*LOOK FOR AMMODIE*/
        html.find('.applybutton').click(async event => {
            event.preventDefault();
            this.actor.update({
                'data.color.custom.color': $('input[name="data.color.custom.color"]').val(),
                'data.color.custom.textcolor': $('input[name="data.color.custom.textcolor"]').val(),
            });
            this.render();
        });

        html.find('.darksheetbuttonplus').click(async event => {
            event.preventDefault();
            const itemID = event.currentTarget.closest('.item').dataset.itemId;
            let darkitem = this.actor.items.get(itemID);
            let name = darkitem.name;
            let notches = darkitem.data.flags.darksheet.item.notches;
            let fragility = darkitem.data.flags.darksheet.item.fragility;
            let maxnotches = darkitem.data.flags.darksheet.item.maxnotches;
            let basenotchdamage;
            let temper = darkitem.data.flags.darksheet.item.temper;
            if (temper === "" || temper === undefined) {
                temper = 1;
            } else if (temper === "Pure") {
                temper = 0.5;
            } else if (temper === "Royal") {
                temper = 0.25;
            } else if (temper === "Astral") {
                temper = 0.125;
            }
            if (game.settings.get('darksheet', 'disabletemper')) {
                temper = 1;
            }
            if (darkitem.name.includes("[Shattered]")) {
                ui.notifications.warn("This item is [Shattered], you need to rename it first...");
            } else {

                if (notches === undefined) {
                    notches = temper;
                } else {
                    notches = Number(notches) + temper;
                }

                if (fragility === undefined || fragility === "" || fragility === "indestructible") {
                    fragility = 999;
                } else if (fragility === "custom") {
                    fragility = maxnotches;
                } else if (notches >= parseInt(darkitem.data.flags.darksheet.item.fragility) && game.settings.get('darksheet', 'disablefragility') == false) {

                    if (game.settings.get('darksheet', 'destroyshatter')) {
                        let newname = "[Shattered] " + darkitem.name;
                        this.actor.updateEmbeddedEntity('Item', {
                            _id: darkitem.data._id,
                            'name': newname
                        });
                    } else {
                        this.actor.deleteEmbeddedEntity("OwnedItem", darkitem._id);
                    }
                    ui.notifications.notify("<b>Your " + name + " has shattered</b>");
                    console.log(name + " should be destroyed");
                    let content = `
						<div class="dnd5e chat-card item-card">
							<header class="card-header flexrow">
								<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/> <h3>${this.actor.name}'s </h3>
							</header>
							<label style="font-size: 14px;">${name} just shattered</label>
						</div>`;
                    let rollWhisper = null;
                    let rollBlind = false;
                    let rollMode = game.settings.get("core", "rollMode");
                    if (["gmroll", "blindroll"].includes(rollMode)) rollWhisper = ChatMessage.getWhisperRecipients("GM")
                    if (rollMode === "blindroll") rollBlind = true;
                    ChatMessage.create({
                        user: game.user._id,
                        content: content,
                        speaker: {
                            actor: this.actor._id,
                            token: this.actor.token,
                            alias: this.actor.name
                        },
                        sound: CONFIG.sounds.dice,
                    });

                }

            }
            //VALUE CALCULATION==========================================
            let quality = darkitem.data.flags.darksheet.item.quality;
            if (quality === undefined || quality === "") {
                quality = "pristine";
            }
            if (notches >= 4) {
                quality = "scarred";
            } else if (notches >= 2 && quality === "worn") {
                quality = "well-worn";
            } else if (notches >= 1 && quality === "pristine") {
                quality = "worn";
            }
            this.actor.updateEmbeddedEntity('Item', {
                _id: darkitem.data._id,
                'flags.darksheet.item.quality': quality
            });

            if (darkitem.type === "equipment") { //ARMOR CALCULATION==========================================
                let AC = darkitem.data.data.armor.value;
                let newBaseAC = 0;
                if (darkitem.data.data.basearmor != null)
                    newBaseAC = darkitem.data.data.basearmor.value;
                if (newBaseAC == 0) {
                    newBaseAC = AC;
                }
                if (Number.isInteger(notches)) {
                    let newAC = AC - 1;
                    if (newAC <= 0) {
                        newAC = 0
                    };
                    if (newAC >= basenotchdamage) {
                        newAC = basenotchdamage
                    }

                    this.actor.updateEmbeddedEntity('Item', {
                        _id: darkitem.data._id,
                        'data.armor.value': newAC,
                        'data.basearmor.value': newBaseAC
                    });
                    this.actor.updateEmbeddedEntity('Item', {
                        _id: darkitem.data._id,
                        'data.damage.basenotchdamage': basenotchdamage
                    });
                    if (newAC <= 1) { //SHATTER IF AC 1 OR SLOWER
                        if (game.settings.get('darksheet', 'shatterwhen1') && game.settings.get('darksheet', 'disablefragility') == false && quality === "scarred") {
                            if (game.settings.get('darksheet', 'destroyshatter')) {
                                let newname = "[Shattered] " + darkitem.name;
                                this.actor.updateEmbeddedEntity('Item', {
                                    _id: darkitem.data._id,
                                    'name': newname
                                });
                            } else {
                                this.actor.deleteEmbeddedEntity("OwnedItem", darkitem._id);
                            }
                        }
                    }
                }
            }
            if (darkitem.type === "tool") {
                this.actor.updateEmbeddedEntity('Item', {
                    _id: darkitem.data._id,
                    'data.notchpen': notches
                });
            }
            if (darkitem.type === "weapon") { //WEAPON CALCULATION==========================================
                let updatedamage;
                //DAMAGE CALCULATION PLUS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                if (Number.isInteger(notches)) {
                    let damage1 = darkitem.data.data.damage.parts[0][0];
                    //			console.log(damage1);
                    let dicenumber = damage1.charAt(0); //2
                    let d = damage1.charAt(1); //d 
                    let damage = damage1.charAt(2) + damage1.charAt(3); //6
                    let mod = " + @mod";

                    let weapondamage;
                    if (darkitem.data.data.damage.currentweapondamage) {
                        weapondamage = darkitem.data.data.damage.currentweapondamage;
                    } else {
                        weapondamage = dicenumber + d + damage; //"2d6 "
                    }
                    //			console.log("Darksheet-Dev:" + dicenumber, d, damage);
                    //			console.log("Darksheet-Dev:" +weapondamage);
                    if (weapondamage[weapondamage.length - 1] == " ")
                        weapondamage = weapondamage.substring(0, weapondamage.length - 1);
                    let baseweapondamage = darkitem.data.data.damage.baseweapondamage;
                    if (baseweapondamage === "") {
                        baseweapondamage = weapondamage;
                        this.actor.updateEmbeddedEntity('Item', {
                            _id: darkitem.data._id,
                            'data.damage.baseweapondamage': baseweapondamage
                        });
                    }

                    //WEAPONDAMAGE  PLUS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                    switch (weapondamage) {
                        //CASES FOR 2 DAMAGE DICE
                        case "2d20":
                            weapondamage = "1d20 + 1d12";
                            break;
                        case "1d20 + 1d12":
                            weapondamage = "2d12";
                            break;
                        case "2d12":
                            weapondamage = "1d12 + 1d10";
                            break;
                        case "1d12 + 1d10":
                            weapondamage = "2d10";
                            break;
                        case "2d10":
                            weapondamage = "1d10 + 1d6";
                            break;
                        case "1d10 + 1d6":
                            weapondamage = "2d6";
                            break;
                        case "2d6":
                            weapondamage = "1d6 + 1d4";
                            break;
                        case "1d6 + 1d4":
                            weapondamage = "2d4";
                            this.actor.updateEmbeddedEntity('Item', {
                                _id: darkitem.data._id,
                                'data.damage.basenotchdamage': notches
                            });
                            break;
                        case "2d4":
                            weapondamage = "1d4 + 1";
                            break;
                        case "1d4 + 1":
                            weapondamage = "2";
                            this.actor.updateEmbeddedEntity('Item', {
                                _id: darkitem.data._id,
                                'data.damage.basenotchdamage': notches
                            });
                            break;
                        case "2":
                            weapondamage = "(1)";
                            this.actor.updateEmbeddedEntity('Item', {
                                _id: darkitem.data._id,
                                'data.damage.basenotchdamage': notches
                            });
                            if (game.settings.get('darksheet', 'shatterwhen1') && game.settings.get('darksheet', 'disablefragility') == false && quality === "scarred") {
                                if (game.settings.get('darksheet', 'destroyshatter')) {
                                    let newname = "[Shattered] " + darkitem.name;
                                    this.actor.updateEmbeddedEntity('Item', {
                                        _id: darkitem.data._id,
                                        'name': newname
                                    });
                                } else {
                                    this.actor.deleteEmbeddedEntity("OwnedItem", darkitem._id);
                                }
                            }
                            break;
                        //CASES FOR single dice damage
                        case "1d20":
                            weapondamage = "1d12";
                            break;
                        case "1d12":
                            weapondamage = "1d10";
                            break;
                        case "1d10":
                            weapondamage = "1d8";
                            break;
                        case "1d8":
                            weapondamage = "1d6";
                            break;
                        case "1d6":
                            weapondamage = "1d4";
                            this.actor.updateEmbeddedEntity('Item', {
                                _id: darkitem.data._id,
                                'data.damage.basenotchdamage': notches
                            });
                            break;
                        case "1d4":
                            weapondamage = "1";
                            this.actor.updateEmbeddedEntity('Item', {
                                _id: darkitem.data._id,
                                'data.damage.basenotchdamage': notches
                            });
                            if (game.settings.get('darksheet', 'shatterwhen1') && game.settings.get('darksheet', 'disablefragility') == false && quality === "scarred") {
                                if (game.settings.get('darksheet', 'destroyshatter')) {
                                    let newname = "[Shattered] " + darkitem.name;
                                    this.actor.updateEmbeddedEntity('Item', {
                                        _id: darkitem.data._id,
                                        'name': newname
                                    });
                                } else {
                                    this.actor.deleteEmbeddedEntity("OwnedItem", darkitem._id);
                                }
                            }
                            break;
                        default:
                        // code block
                    }
                    updatedamage = weapondamage + mod;
                    const parts = duplicate(darkitem.data.data.damage.parts);
                    parts[0][0] = updatedamage;
                    this.actor.updateEmbeddedEntity('Item', {
                        _id: darkitem.data._id,
                        'data.damage.parts': parts
                    });
                    this.render();

                    //UPDATE WEAPON DAMAGE ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                    this.actor.updateEmbeddedEntity('Item', {
                        _id: darkitem.data._id,
                        'data.damage.currentweapondamage': weapondamage
                    });
                    this.actor.updateEmbeddedEntity('Item', {
                        _id: darkitem.data._id,
                        'data.damage.basenotchdamage': basenotchdamage
                    });

                }
            }
            this.actor.updateEmbeddedEntity('Item', {
                _id: darkitem.data._id,
                'flags.darksheet.item.notches': notches
            });
            this.render();
        });
        html.find('.darksheetbutton-').click(async event => {
            event.preventDefault();
            const itemID = event.currentTarget.closest('.item').dataset.itemId;
            let darkitem = this.actor.items.get(itemID);
            let basenotchdamage = darkitem.data.data.damage.basenotchdamage;
            let notches = darkitem.data.flags.darksheet.item.notches;
            let newnotches = notches - 1;
            let updatedamage;
            if (notches === undefined) {
                newnotches = "";
            }
            if (newnotches <= 0) {
                newnotches = "";
            }
            if (darkitem.name.includes("[Shattered]")) {
                ui.notifications.warn("This item is [Shattered], you need to rename it first...");
            } else {
                this.actor.updateEmbeddedEntity('Item', {
                    _id: darkitem.data._id,
                    'flags.darksheet.item.notches': newnotches
                });
                if (darkitem.type === "equipment") { //ARMOR CALCULATION==========================================
                    let AC = darkitem.data.data.armor.value;
                    let BaseAC = 0;
                    if (darkitem.data.data.basearmor != null)
                        BaseAC = darkitem.data.data.basearmor.value;
                    if (BaseAC == 0) {
                        BaseAC = AC;
                    }
                    if (AC < BaseAC) { //IF AC SMALLER THEN BASE AC
                        AC++;
                    } else {
                        AC = BaseAC;
                    }
                    this.actor.updateEmbeddedEntity('Item', {
                        _id: darkitem.data._id,
                        'data.damage.basenotchdamage': basenotchdamage,
                        'data.armor.value': AC,
                        'data.basearmor.value': BaseAC
                    });
                }
                if (darkitem.type === "tool") {
                    if (basenotchdamage === undefined || basenotchdamage === "") {
                        basenotchdamage = newnotches;
                    }
                    this.actor.updateEmbeddedEntity('Item', {
                        _id: darkitem.data._id,
                        'data.notchpen': newnotches
                    });
                }
                //DAMAGE CALCULATION MINUS-------------------------------------------------------------------
                if (darkitem.type === "weapon") {
                    let damage1 = darkitem.data.data.damage.parts[0][0];
                    //			console.log(damage1);
                    let dicenumber = damage1.charAt(0); //2
                    let d = damage1.charAt(1); //d 
                    let damage = damage1.charAt(2) + damage1.charAt(3); //6
                    let mod = " + @mod";
                    let weapondamage;
                    if (darkitem.data.data.damage.currentweapondamage) {
                        weapondamage = darkitem.data.data.damage.currentweapondamage;
                    } else {
                        weapondamage = dicenumber + d + damage; //"2d6 "
                    }
                    //			console.log("Darksheet-Dev:" + dicenumber, d, damage);
                    //			console.log("Darksheet-Dev:" +weapondamage);

                    let baseweapondamage = darkitem.data.data.damage.baseweapondamage;
                    if (darkitem.data.data.damage.baseweapondamage === undefined) {
                        baseweapondamage = weapondamage;
                        this.actor.updateEmbeddedEntity('Item', {
                            _id: darkitem.data._id,
                            'data.damage.baseweapondamage': baseweapondamage
                        });
                    }

                    if (weapondamage === baseweapondamage) {
                        weapondamage = baseweapondamage;
                    } else if (Math.floor(notches) > basenotchdamage) { //More notches than basenotches?
                    } else {
                        switch (weapondamage) {
                            //CASES FOR 2 DAMAGE DICE
                            case "2":
                                weapondamage = "1d4 + 1";
                                break;
                            case "1d4 + 1":
                                weapondamage = "2d4";
                                break;
                            case "2d4":
                                weapondamage = "1d6 + 1d4";
                                break;
                            case "1d6 + 1d4":
                                weapondamage = "2d6";
                                break;
                            case "2d6":
                                weapondamage = "1d8 + 1d6";
                                break;
                            case "1d8 + 1d6":
                                weapondamage = "2d8";
                                break;
                            case "2d8":
                                weapondamage = "1d10 + 1d8";
                                break;
                            case "1d10 + 1d8":
                                weapondamage = "2d10";
                                break;
                            case "2d10":
                                weapondamage = "1d12 + 1d10";
                                break;
                            case "1d12 + 1d10":
                                weapondamage = "2d12";
                                break;
                            case "2d12":
                                weapondamage = "1d20 + 1d12";
                                break;
                            case "1d20 + 1d12":
                                weapondamage = "2d20";
                                break;
                            //CASES FOR SINGLE DAMAGEDICE
                            case "1":
                                weapondamage = "1d4";
                                break;
                            case "(1)":
                                weapondamage = "2";
                                break;
                            case "1d4":
                                weapondamage = "1d6";
                                break;
                            case "1d6":
                                weapondamage = "1d8";
                                break;
                            case "1d8":
                                weapondamage = "1d10";
                                break;
                            case "1d10":
                                weapondamage = "1d12";
                                break;
                            case "1d12":
                                weapondamage = "1d20";
                                break;
                            default:
                                if (darkitem.data.data.damage.baseweapondamage) weapondamage = darkitem.data.data.damage.baseweapondamage;
                                break;
                        }
                    }
                    updatedamage = weapondamage + mod;
                    const parts = duplicate(darkitem.data.data.damage.parts);
                    parts[0][0] = updatedamage;
                    if (newnotches <= 0) {
                        basenotchdamage = "";
                    }
                    if (darkitem.name.includes("[Shattered]")) {
                        newnotches = notches
                    }
                    //NOTCH CALCULATION MINUS-------------------------------------------------------------------
                    this.actor.updateEmbeddedEntity('Item', {
                        _id: darkitem.data._id,
                        'data.damage.basenotchdamage': basenotchdamage
                    });
                    this.actor.updateEmbeddedEntity('Item', {
                        _id: darkitem.data._id,
                        'data.damage.parts': parts
                    });
                    this.actor.updateEmbeddedEntity('Item', {
                        _id: darkitem.data._id,
                        'data.damage.currentweapondamage': weapondamage
                    }); //Weapon Damage On Name
                }
            }
            this.render();
        });
        html.find('.ammodice').click(async event => {
            event.preventDefault(); // Rolling table, from best to worst
            const rollings = ['d12', 'd10', 'd8', 'd6', 'd4', 'd2', '1', '']; // Getting item
            let item = this.actor.items.get(($(event.currentTarget).parents('[data-item-id]').attr("data-item-id")));
            // Seeting and creating chatMessage
            const itemID = event.currentTarget.closest('.item').dataset.itemId;
            let darkitem = this.actor.items.get(itemID);
            let title = `<header><h3>${this.actor.data.name} rolls ${this.actor.data.data.attributes.adress} ammodie for ${darkitem.name}<h3></header>`;
            let roll = new Roll('@ammodie', {
                ammodie: darkitem.data.flags.darksheet.item.ammodie
            }).roll();
            let rollWhisper = null;
            let rollMode = game.settings.get("core", "rollMode");
            let currentdie = darkitem.data.flags.darksheet.item.ammodie;
            if (["gmroll", "blindroll"].includes(rollMode)) rollWhisper = ChatMessage.getWhisperRecipients("GM")
            roll.toMessage({
                speaker: ChatMessage.getSpeaker({
                    actor: this
                }),
                flavor: title,
                rollMode: rollMode
            }); // If Epic fail
            let newammodie;
            if (roll.result === "1" || roll.result === "2") {
                if (currentdie === "d20") {
                    newammodie = "d12";
                } else if (currentdie === "d12") {
                    newammodie = "d10";
                } else if (currentdie === "d10") {
                    newammodie = "d8";
                } else if (currentdie === "d8") {
                    newammodie = "d6";
                } else if (currentdie === "d6") {
                    newammodie = "d4";
                } else if (currentdie === "d4") {
                    newammodie = "1";
                } else {
                    newammodie = "";
                }
                this.actor.updateEmbeddedEntity('Item', {
                    _id: darkitem.data._id,
                    'flags.darksheet.item.ammodie': newammodie
                });
                this.render();
            }
        });
        html.find('.randomnotch').click(async event => {
            let array = this.actor.items.filter(i => i.type !== "feat" && i.type !== "class" && i.type !== "spell");
            let numberino = 0;
            let randomItem = array[Math.floor(Math.random(numberino) * array.length)];
            let randomID = randomItem.id;
            let darkitem = this.actor.getEmbeddedEntity('OwnedItem', randomID);
            let name = darkitem.name;

            let notches = 0;
            let fragility = "";
            let maxnotches = "";
            let temper = "";
            let quality = "";

            if (darkitem.data.flags.darksheet != undefined) {
                if (darkitem.data.flags.darksheet.item.notches != undefined) notches = darkitem.data.flags.darksheet.item.notches;
                if (darkitem.data.flags.darksheet.item.fragility != undefined) fragility = darkitem.data.flags.darksheet.item.fragility;
                if (darkitem.data.flags.darksheet.item.maxnotches != undefined) maxnotches = darkitem.data.flags.darksheet.item.maxnotches;
                if (darkitem.data.flags.darksheet.item.temper != undefined) temper = darkitem.data.flags.darksheet.item.temper;
                if (darkitem.data.flags.darksheet.item.quality != undefined) quality = darkitem.data.flags.darksheet.item.quality;
            }

            let basenotchdamage;


            if (temper === "" || temper === undefined) {
                temper = 1;
            } else if (temper === "Pure") {
                temper = 0.5;
            } else if (temper === "Royal") {
                temper = 0.25;
            } else if (temper === "Astral") {
                temper = 0.125;
            }
            if (game.settings.get('darksheet', 'disabletemper')) {
                temper = 1;
            }
            if (darkitem.name.includes("[Shattered]")) {
                ui.notifications.warn("This item is [Shattered], you need to rename it first...");
            } else {

                if (notches === undefined) {
                    notches = temper;
                } else {
                    notches = Number(notches) + temper;
                }

                if (fragility === undefined || fragility === "" || fragility === "indestructible") {
                    fragility = 999;
                } else if (fragility === "custom") {
                    fragility = maxnotches;
                } else if (notches >= fragility && game.settings.get('darksheet', 'disablefragility') == false) {

                    if (game.settings.get('darksheet', 'destroyshatter')) {
                        let newname = "[Shattered] " + darkitem.name;
                        this.actor.updateEmbeddedEntity('Item', {
                            _id: darkitem.data._id,
                            'name': newname
                        });
                    } else {
                        this.actor.deleteEmbeddedEntity("OwnedItem", darkitem._id);
                    }
                    ui.notifications.notify("<b>Your " + name + " has shattered</b>");
                    console.log(name + " should be destroyed");
                    let content = `
						<div class="dnd5e chat-card item-card">
							<header class="card-header flexrow">
								<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/> <h3>${this.actor.name}'s </h3>
								</br>
							</header>
							<label style="font-size: 14px;">${name} just shattered</label>
						</div>`;
                    let rollWhisper = null;
                    let rollBlind = false;
                    let rollMode = game.settings.get("core", "rollMode");
                    if (["gmroll", "blindroll"].includes(rollMode)) rollWhisper = ChatMessage.getWhisperRecipients("GM")
                    if (rollMode === "blindroll") rollBlind = true;
                    ChatMessage.create({
                        user: game.user._id,
                        content: content,
                        speaker: {
                            actor: this.actor._id,
                            token: this.actor.token,
                            alias: this.actor.name
                        },
                        sound: CONFIG.sounds.dice,
                    });

                }

            }
            //VALUE CALCULATION==========================================
            if (quality === undefined || quality === "") {
                quality = "pristine";
            }
            if (notches >= 4) {
                quality = "scarred";
            } else if (notches >= 2 && quality === "worn") {
                quality = "well-worn";
            } else if (notches >= 1 && quality === "pristine") {
                quality = "worn";
            }
            this.actor.updateEmbeddedEntity('Item', {
                _id: darkitem.data._id,
                'flags.darksheet.item.quality': quality
            });

            if (darkitem.type == "equipment") { //ARMOR CALCULATION==========================================
                let AC = darkitem.data.data.armor.value;
                if (Number.isInteger(notches)) {
                    let newAC = AC - 1;
                    if (newAC <= 0) {
                        newAC = 0
                    };
                    if (Math.floor(notches) === 1) {
                        basenotchdamage = AC;
                    }
                    if (newAC >= basenotchdamage) {
                        newAC = basenotchdamage
                    }
                    this.actor.updateEmbeddedEntity('Item', {
                        _id: darkitem.data._id,
                        'data.armor.value': newAC
                    });
                    this.actor.updateEmbeddedEntity('Item', {
                        _id: darkitem.data._id,
                        'data.damage.basenotchdamage': basenotchdamage
                    });
                    if (newAC <= 1) { //SHATTER IF AC 1 OR SLOWER
                        if (game.settings.get('darksheet', 'shatterwhen1') && game.settings.get('darksheet', 'disablefragility') == false && quality === "scarred") {
                            if (game.settings.get('darksheet', 'destroyshatter')) {
                                let newname = "[Shattered] " + darkitem.name;
                                this.actor.updateEmbeddedEntity('Item', {
                                    _id: darkitem.data._id,
                                    'name': newname
                                });
                            } else {
                                this.actor.deleteEmbeddedEntity("OwnedItem", darkitem._id);
                            }
                        }
                    }
                }
            }
            if (darkitem.type === "tool") {
                this.actor.updateEmbeddedEntity('Item', {
                    _id: darkitem.data._id,
                    'data.notchpen': notches
                });
            }
            if (darkitem.type === "weapon") { //WEAPON CALCULATION==========================================
                let updatedamage;
                //DAMAGE CALCULATION PLUS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                if (Number.isInteger(notches)) {
                    let damage1 = darkitem.data.data.damage.parts[0][0];
                    //			console.log(damage1);
                    let dicenumber = damage1.charAt(0); //2
                    let d = damage1.charAt(1); //d 
                    let damage = damage1.charAt(2) + damage1.charAt(3); //6
                    let mod = " + @mod";

                    let weapondamage;
                    if (darkitem.data.data.damage.currentweapondamage) {
                        weapondamage = darkitem.data.data.damage.currentweapondamage;
                    } else {
                        weapondamage = dicenumber + d + damage; //"2d6 "
                    }
                    //			console.log("Darksheet-Dev:" + dicenumber, d, damage);
                    //			console.log("Darksheet-Dev:" +weapondamage);

                    let baseweapondamage = darkitem.data.data.damage.baseweapondamage;
                    if (baseweapondamage === "") {
                        baseweapondamage = weapondamage;
                        this.actor.updateEmbeddedEntity('Item', {
                            _id: darkitem.data._id,
                            'data.damage.baseweapondamage': baseweapondamage
                        });
                    }

                    //WEAPONDAMAGE  PLUS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                    switch (weapondamage) {
                        //CASES FOR 2 DAMAGE DICE
                        case "2d20":
                            weapondamage = "1d20 + 1d12";
                            break;
                        case "1d20 + 1d12":
                            weapondamage = "2d12";
                            break;
                        case "2d12":
                            weapondamage = "1d12 + 1d10";
                            break;
                        case "1d12 + 1d10":
                            weapondamage = "2d10";
                            break;
                        case "2d10":
                            weapondamage = "1d10 + 1d6";
                            break;
                        case "1d10 + 1d6":
                            weapondamage = "2d6";
                            break;
                        case "2d6":
                            weapondamage = "1d6 + 1d4";
                            break;
                        case "1d6 + 1d4":
                            weapondamage = "2d4";
                            this.actor.updateEmbeddedEntity('Item', {
                                _id: darkitem.data._id,
                                'data.damage.basenotchdamage': notches
                            });
                            break;
                        case "2d4":
                            weapondamage = "1d4 + 1";
                            break;
                        case "1d4 + 1":
                            weapondamage = "2";
                            this.actor.updateEmbeddedEntity('Item', {
                                _id: darkitem.data._id,
                                'data.damage.basenotchdamage': notches
                            });
                            break;
                        case "2":
                            weapondamage = "(1)";
                            this.actor.updateEmbeddedEntity('Item', {
                                _id: darkitem.data._id,
                                'data.damage.basenotchdamage': notches
                            });
                            if (game.settings.get('darksheet', 'shatterwhen1') && game.settings.get('darksheet', 'disablefragility') == false && quality === "scarred") {
                                if (game.settings.get('darksheet', 'destroyshatter')) {
                                    let newname = "[Shattered] " + darkitem.name;
                                    this.actor.updateEmbeddedEntity('Item', {
                                        _id: darkitem.data._id,
                                        'name': newname
                                    });
                                } else {
                                    this.actor.deleteEmbeddedEntity("OwnedItem", darkitem._id);
                                }
                            }
                            break;
                        //CASES FOR single dice damage
                        case "1d20":
                            weapondamage = "1d12";
                            break;
                        case "1d12":
                            weapondamage = "1d10";
                            break;
                        case "1d10":
                            weapondamage = "1d8";
                            break;
                        case "1d8":
                            weapondamage = "1d6";
                            break;
                        case "1d6":
                            weapondamage = "1d4";
                            this.actor.updateEmbeddedEntity('Item', {
                                _id: darkitem.data._id,
                                'data.damage.basenotchdamage': notches
                            });
                            break;
                        case "1d4":
                            weapondamage = "1";
                            this.actor.updateEmbeddedEntity('Item', {
                                _id: darkitem.data._id,
                                'data.damage.basenotchdamage': notches
                            });
                            if (game.settings.get('darksheet', 'shatterwhen1') && game.settings.get('darksheet', 'disablefragility') == false && quality === "scarred") {
                                if (game.settings.get('darksheet', 'destroyshatter')) {
                                    let newname = "[Shattered] " + darkitem.name;
                                    this.actor.updateEmbeddedEntity('Item', {
                                        _id: darkitem.data._id,
                                        'name': newname
                                    });
                                } else {
                                    this.actor.deleteEmbeddedEntity("OwnedItem", darkitem._id);
                                }
                            }
                            break;
                        default:
                        // code block
                    }
                    updatedamage = weapondamage + mod;
                    const parts = duplicate(darkitem.data.data.damage.parts);
                    parts[0][0] = updatedamage;
                    this.actor.updateEmbeddedEntity('Item', {
                        _id: darkitem.data._id,
                        'data.damage.parts': parts
                    });
                    this.render();

                    //UPDATE WEAPON DAMAGE ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                    this.actor.updateEmbeddedEntity('Item', {
                        _id: darkitem.data._id,
                        'data.damage.currentweapondamage': weapondamage
                    });
                    this.actor.updateEmbeddedEntity('Item', {
                        _id: darkitem.data._id,
                        'data.damage.basenotchdamage': basenotchdamage
                    });

                }
            }
            this.actor.updateEmbeddedEntity('Item', {
                _id: darkitem.data._id,
                'flags.darksheet.item.notches': notches
            });
            ui.notifications.notify("Your item " + darkitem.name + " gained a notch, it now has a total of [" + notches + "] Notches.");
            this.render();
        });
        /*LOOK FOR Stresscheckbox*/
        html.find('.stressroll').click(async event => {
            event.preventDefault();
            if (!game.settings.get('darksheet', 'afflictionFromComp')) {
                // Rolling table, from best to worst
                let table = game.tables.entities.find(t => t.data.name === "Afflictions");
                if (table == undefined) {
                    ui.notifications.warn("Darksheet | You need to import or create a 'Afflictions' Table to roll from");
                }
                else { table.draw(); }
            }
            else {
                let afflictions = game.packs.get("darksheet.afflictions").index;
                const rndInt = Math.floor(Math.random() * game.packs.get("darksheet.afflictions").index.size) - 1;
                let ThisAffliction = game.packs.get("darksheet.afflictions").index.contents[rndInt];
                let AfflictionID = game.packs.get("darksheet.afflictions").index.contents[rndInt]._id;
                let AfflictionName = game.packs.get("darksheet.afflictions").index.contents[rndInt].name.replace("Affliction: ", "");
                ChatMessage.create({
                    user: game.user._id,
                    content: "Gained an @Compendium[darksheet.afflictions." + AfflictionID + "]",
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
                    },
                    sound: CONFIG.sounds.dice,
                    flags: {
                        darksheet: {
                            outcome: 'bad'
                        }
                    }
                });
                //FIGURE OUT WHICH AFFLICTION TO Set
                if (!this.actor.data.data.attributes.break1) {
                    this.actor.update({
                        'data.attributes.break1': true,
                        'data.attributes.affliction1.value': AfflictionName
                    });
                }
                else if (!this.actor.data.data.attributes.break2) {
                    this.actor.update({
                        'data.attributes.break2': true,
                        'data.attributes.affliction2.value': AfflictionName
                    });
                }
                else if (this.actor.data.data.attributes.break3) {
                    this.actor.update({
                        'data.attributes.break2': true,
                        'data.attributes.affliction2.value': AfflictionName
                    });
                }
                const itemData = await game.packs.get("darksheet.afflictions").index.get(AfflictionID);
                this.actor.createEmbeddedDocuments("Item", [itemData]);
                //this.actor.items.document.createOwnedItem(itemData, {parent: this.actor});
                //await this.actor.createOwnedItem(ThisAffliction);
            }


        });
        html.find('.darksheetbuttonHDplus').click(async event => {
            event.preventDefault();
            const itemID = event.currentTarget.closest('.item').dataset.itemId;
            let darkitem = this.actor.items.get(itemID);
            //console.log(darkitem);
            let used = darkitem.data.data.hitDiceUsed + 1;
            //INVALID VALUE CHECK
            if (used > darkitem.data.data.levels) {
                used = darkitem.data.data.levels;
            }
            else if (used < 0) {
                used = 0;
            }
            this.actor.updateEmbeddedEntity('Item', {
                _id: darkitem.data._id,
                'data.hitDiceUsed': used
            });

        });
        html.find('.darksheetbuttonHDmin').click(async event => {
            event.preventDefault();
            const itemID = event.currentTarget.closest('.item').dataset.itemId;
            let darkitem = this.actor.items.get(itemID);
            console.log(darkitem);
            let used = darkitem.data.data.hitDiceUsed - 1;

            //INVALID VALUE CHECK
            if (used > darkitem.data.data.levels) {
                used = darkitem.data.data.levels;
            }
            else if (used < 0) {
                used = 0;
            }

            this.actor.updateEmbeddedEntity('Item', {
                _id: darkitem.data._id,
                'data.hitDiceUsed': used
            });
        });

        html.find('.minusspellslot-spell1').click(async event => {
            event.preventDefault();
            let actor = this.actor.data.data.spells.spell1.value;
            if (actor >= 1) {
                actor -= 1;
                this.actor.update({
                    'data.spells.spell1.value': actor
                });
            }
        });
        html.find('.minusspellslot-spell2').click(async event => {
            event.preventDefault();
            let actor = this.actor.data.data.spells.spell2.value;
            if (actor >= 1) {
                actor -= 1;
                this.actor.update({
                    'data.spells.spell2.value': actor
                });
            }
        });
        html.find('.minusspellslot-spell3').click(async event => {
            event.preventDefault();
            let actor = this.actor.data.data.spells.spell3.value;
            if (actor >= 1) {
                actor -= 1;
                this.actor.update({
                    'data.spells.spell3.value': actor
                });
            }
        });
        html.find('.minusspellslot-spell4').click(async event => {
            event.preventDefault();
            let actor = this.actor.data.data.spells.spell4.value;
            if (actor >= 1) {
                actor -= 1;
                this.actor.update({
                    'data.spells.spell4.value': actor
                });
            }
        });
        html.find('.minusspellslot-spell5').click(async event => {
            event.preventDefault();
            let actor = this.actor.data.data.spells.spell5.value;
            if (actor >= 1) {
                actor -= 1;
                this.actor.update({
                    'data.spells.spell5.value': actor
                });
            }
        });
        html.find('.minusspellslot-spell6').click(async event => {
            event.preventDefault();
            let actor = this.actor.data.data.spells.spell2.value;
            if (actor >= 1) {
                actor -= 1;
                this.actor.update({
                    'data.spells.spell6.value': actor
                });
            }
        });
        html.find('.minusspellslot-spell7').click(async event => {
            event.preventDefault();
            let actor = this.actor.data.data.spells.spell7.value;
            if (actor >= 1) {
                actor -= 1;
                this.actor.update({
                    'data.spells.spell7.value': actor
                });
            }
        });
        html.find('.minusspellslot-spell8').click(async event => {
            event.preventDefault();
            let actor = this.actor.data.data.spells.spell8.value;
            if (actor >= 1) {
                actor -= 1;
                this.actor.update({
                    'data.spells.spell8.value': actor
                });
            }
        });
        html.find('.minusspellslot-spell9').click(async event => {
            event.preventDefault();
            let actor = this.actor.data.data.spells.spell9.value;
            if (actor >= 1) {
                actor -= 1;
                this.actor.update({
                    'data.spells.spell9.value': actor
                });
            }
        });
        html.find('.minusspellslot-pact').click(async event => {
            event.preventDefault();
            let spellamount = this.actor.data.data.spells.pact.value;
            if (spellamount > 0) {
                spellamount -= 1;
                this.actor.update({
                    'data.spells.pact.value': spellamount
                });
            }
        });
        //============================================================================================PLUS
        html.find('.plusspellslot-spell1').click(async event => {
            event.preventDefault();
            let maxamount = this.actor.data.data.spells.spell1.max;;
            let spellamount = this.actor.data.data.spells.spell1.value;
            if (spellamount < maxamount) {
                spellamount += 1;
                this.actor.update({
                    'data.spells.spell1.value': spellamount
                });
            }
        });
        html.find('.plusspellslot-spell2').click(async event => {
            event.preventDefault();
            let maxamount = this.actor.data.data.spells.spell2.max;;
            let spellamount = this.actor.data.data.spells.spell2.value;
            if (spellamount < maxamount) {
                spellamount += 1;
                this.actor.update({
                    'data.spells.spell2.value': spellamount
                });
            }
        });
        html.find('.plusspellslot-spell3').click(async event => {
            event.preventDefault();
            let maxamount = this.actor.data.data.spells.spell3.max;;
            let spellamount = this.actor.data.data.spells.spell3.value;
            if (spellamount < maxamount) {
                spellamount += 1;
                this.actor.update({
                    'data.spells.spell3.value': spellamount
                });
            }
        });
        html.find('.plusspellslot-spell4').click(async event => {
            event.preventDefault();
            let maxamount = this.actor.data.data.spells.spell4.max;;
            let spellamount = this.actor.data.data.spells.spell4.value;
            if (spellamount < maxamount) {
                spellamount += 1;
                this.actor.update({
                    'data.spells.spell4.value': spellamount
                });
            }
        });
        html.find('.plusspellslot-spell5').click(async event => {
            event.preventDefault();
            let maxamount = this.actor.data.data.spells.spell5.max;;
            let spellamount = this.actor.data.data.spells.spell5.value;
            if (spellamount < maxamount) {
                spellamount += 1;
                this.actor.update({
                    'data.spells.spell5.value': spellamount
                });
            }
        });
        html.find('.plusspellslot-spell6').click(async event => {
            event.preventDefault();
            let maxamount = this.actor.data.data.spells.spell6.max;;
            let spellamount = this.actor.data.data.spells.spell6.value;
            if (spellamount < maxamount) {
                spellamount += 1;
                this.actor.update({
                    'data.spells.spell6.value': spellamount
                });
            }
        });
        html.find('.plusspellslot-spell7').click(async event => {
            event.preventDefault();
            let maxamount = this.actor.data.data.spells.spell7.max;;
            let spellamount = this.actor.data.data.spells.spell7.value;
            if (spellamount < maxamount) {
                spellamount += 1;
                this.actor.update({
                    'data.spells.spell7.value': spellamount
                });
            }
        });
        html.find('.plusspellslot-spell8').click(async event => {
            event.preventDefault();
            let maxamount = this.actor.data.data.spells.spell8.max;;
            let spellamount = this.actor.data.data.spells.spell8.value;
            if (spellamount < maxamount) {
                spellamount += 1;
                this.actor.update({
                    'data.spells.spell8.value': spellamount
                });
            }
        });
        html.find('.plusspellslot-spell9').click(async event => {
            event.preventDefault();
            let maxamount = this.actor.data.data.spells.spell9.max;;
            let spellamount = this.actor.data.data.spells.spell9.value;
            if (spellamount < maxamount) {
                spellamount += 1;
                this.actor.update({
                    'data.spells.spell9.value': spellamount
                });
            }
        });
        html.find('.plusspellslot-pact').click(async event => {
            event.preventDefault();
            let pactamount = this.actor.data.data.spells.pact.max;
            let spellamount = this.actor.data.data.spells.pact.value;
            if (spellamount < pactamount) {
                spellamount += 1;
                this.actor.update({
                    'data.spells.pact.value': spellamount
                });
            }
        });
        /*LOOK FOR BURNOUTDIE*/
        html.find('.burnoutdie').click(async event => {
            event.preventDefault();
            rollBurnout(this.actor);
        });
        //AUTOMATIC EXHAUSTION CALCULATION
        html.find('.exhaustioncalc').click(async event => {
            event.preventDefault();
            let newexhaustion = 0;
            let temp = this.actor.data.data.attributes.temp;
            let food = this.actor.data.data.attributes.saturation.value;
            let water = this.actor.data.data.attributes.thirst.value;
            let fatigue = this.actor.data.data.attributes.fatigue.value;
            let manualexhaustion = this.actor.data.data.attributes.exhaustion.value;
            let closedwounds = this.actor.data.data.attributes.wounds.value;
            let maxwounds = 0;
            if (this.actor.data.data.attributes.maxwounds != null) {
                maxwounds = this.actor.data.data.attributes.maxwounds.value;
            }
            let woundexhaustion = maxwounds - closedwounds;
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
            //addding wound exhaustion
            newexhaustion += woundexhaustion;
            this.actor.data.data.attributes.newexhaustion = newexhaustion;
            console.log("(DarkSheet): New Exhaustion: " + this.actor.data.data.attributes.newexhaustion);
            this.render();
        });
        html.find('.staminacheck').click(async event => {
            event.preventDefault();
            const roll = new Roll(`1d6`).roll();
            let content = `
				<div class="dnd5e chat-card" data-acor-id="${this.actor._id}">
					<header class="card-header flexrow">
						<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
						<h3 style=" color: Orange; margin-top: 7px;">Stamina Check</h3>
					<h3 class="white" style= " margin-top: 7px;"> +1 Hunger</h3>
					</header>
				</div>`;
            let content2 = `
				<div class="dnd5e chat-card" data-acor-id="${this.actor._id}">
					<header class="card-header flexrow">
						<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
						<h3 style=" color: Orange; margin-top: 7px;">Stamina Check</h3>
					<h3 class="white" style= " margin-top: 7px;">+1 Thirst</h3>
					</header>
				</div>`;
            let content3 = `
				<div class="dnd5e chat-card" data-acor-id="${this.actor._id}">
					<header class="card-header flexrow">
						<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
						<h3 style=" color: Orange; margin-top: 7px;">Stamina Check</h3>
					<h3 class="white" style= " margin-top: 7px;">+1 Fatigue</h3>
					</header>
				</div>`;
            let rollWhisper = null;
            let rollBlind = false;
            let rollMode = game.settings.get("core", "rollMode");
            if (["gmroll", "blindroll"].includes(rollMode)) rollWhisper = ChatMessage.getWhisperRecipients("GM")
            if (rollMode === "blindroll") rollBlind = true;
            if (roll.result <= 2) {
                console.log("(DarkSheet): Hunger");
                ChatMessage.create({
                    user: game.user._id,
                    content: content,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
                    },

                    sound: CONFIG.sounds.dice,
                    flags: {
                        darksheet: {
                            outcome: 'bad'
                        }
                    }
                });
                let food;
                if (this.actor.data.data.attributes.saturation.value === "foodstuffed") {
                    console.log("(DarkSheet): Your stuffed character is now well-fed");
                    food = "foodwellfed";
                } else if (this.actor.data.data.attributes.saturation.value === "foodwellfed") {
                    console.log("(DarkSheet): Your well-fed character is now ok");
                    food = "foodok";
                } else if (this.actor.data.data.attributes.saturation.value === "foodok") {
                    console.log("(DarkSheet): Your ok character is now pekish");
                    food = "foodpekish";
                } else if (this.actor.data.data.attributes.saturation.value === "foodpekish") {
                    console.log("(DarkSheet): Your pekish character is now hungry");
                    food = "foodhungry";
                } else if (this.actor.data.data.attributes.saturation.value === "foodhungry") {
                    console.log("(DarkSheet): Your hungry character is now ravenous");
                    food = "foodravenous";
                } else if (this.actor.data.data.attributes.saturation.value === "foodravenous") {
                    console.log("(DarkSheet): Your foodravenous character is now foodstarving");
                    food = "foodstarving";
                } else {
                    console.log("(DarkSheet): You are starving");
                }
                this.actor.update({
                    'data.attributes.saturation.value': food
                });
                this.render();
            } else if (roll.result <= 4) {
                ChatMessage.create({
                    user: game.user._id,
                    content: content2,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
                    },

                    sound: CONFIG.sounds.dice,
                    flags: {
                        darksheet: {
                            outcome: 'bad'
                        }
                    }
                });
                let water;
                if (this.actor.data.data.attributes.thirst.value === "wquenched") {
                    console.log("(DarkSheet): Your quenched character is now refreshed");
                    water = "wrefreshed";
                } else if (this.actor.data.data.attributes.thirst.value === "wrefreshed") {
                    console.log("(DarkSheet): Your refreshed character is now ok");
                    water = "wok";
                } else if (this.actor.data.data.attributes.thirst.value === "wok") {
                    console.log("(DarkSheet): Your ok character is now parched");
                    water = "wparched";
                } else if (this.actor.data.data.attributes.thirst.value === "wparched") {
                    console.log("(DarkSheet): Your parched character is now thirsty");
                    water = "wthirsty";
                } else if (this.actor.data.data.attributes.thirst.value === "wthirsty") {
                    console.log("(DarkSheet): Your thirsty character is now dry");
                    water = "wdry";
                } else if (this.actor.data.data.attributes.thirst.value === "wdry") {
                    console.log("(DarkSheet): Your dry character is now dehydrated");
                    water = "wdehydrated";
                } else {
                    console.log("(DarkSheet): You are dehydrating");
                }
                this.actor.update({
                    'data.attributes.thirst.value': water
                });
                this.render();
            } else {
                ChatMessage.create({
                    user: game.user._id,
                    content: content3,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
                    },

                    sound: CONFIG.sounds.dice,
                    flags: {
                        darksheet: {
                            outcome: 'bad'
                        }
                    }
                });
                let fatigue;
                if (this.actor.data.data.attributes.fatigue.value === "exenegised") {
                    console.log("(DarkSheet): Your energised character is now well-rested");
                    fatigue = "exwell";
                } else if (this.actor.data.data.attributes.fatigue.value === "exwell") {
                    console.log("(DarkSheet): Your well-rested character is now ok");
                    fatigue = "exok";
                } else if (this.actor.data.data.attributes.fatigue.value === "exok") {
                    console.log("(DarkSheet): Your ok character is now tired");
                    fatigue = "extired";
                } else if (this.actor.data.data.attributes.fatigue.value === "extired") {
                    console.log("(DarkSheet): Your tired character is now sleepy");
                    fatigue = "exsleepy";
                } else if (this.actor.data.data.attributes.fatigue.value === "exsleepy") {
                    console.log("(DarkSheet): Your sleepy character is now very sleepy");
                    fatigue = "exvsleepy";
                } else if (this.actor.data.data.attributes.fatigue.value === "exvsleepy") {
                    console.log("(DarkSheet): Your very sleepy character is now barely awake");
                    fatigue = "exbarely";
                } else {
                    console.log("(DarkSheet): You are barely awake");
                }
                this.actor.update({
                    'data.attributes.fatigue.value': fatigue
                });
                this.render();
            }
            let newexhaustion = 0;
            let temp = this.actor.data.data.attributes.temp;
            let food = this.actor.data.data.attributes.saturation.value;
            let water = this.actor.data.data.attributes.thirst.value;
            let fatigue = this.actor.data.data.attributes.fatigue.value;
            let manualexhaustion = this.actor.data.data.attributes.exhaustion.value;
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
            console.log("(DarkSheet): New Exhaustion: " + this.actor.data.data.attributes.newexhaustion);
            this.actor.update({
                'data.attributes.newexhaustion': newexhaustion
            });
            this.render();
        });

        html.find('.exhaustionstatus').click(async event => {
            event.preventDefault();
            let newexhaustion = 0;
            let temp = this.actor.data.data.attributes.temp;
            let food = this.actor.data.data.attributes.saturation.value;
            let water = this.actor.data.data.attributes.thirst.value;
            let fatigue = this.actor.data.data.attributes.fatigue.value;
            let manualexhaustion = this.actor.data.data.attributes.exhaustion.value;
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
            //adding wound exhaustion
            let closedwounds = this.actor.data.data.attributes.wounds.value;
            let maxwounds = 0;
            if (this.actor.data.data.attributes.maxwounds != null) {
                maxwounds = this.actor.data.data.attributes.maxwounds.value;
            }
            let woundexhaustion = maxwounds - closedwounds;
            newexhaustion += woundexhaustion;
            console.log("(DarkSheet): New Exhaustion: " + this.actor.data.data.attributes.newexhaustion);

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

            this.actor.update({
                'data.status.isExhaustion1': exhaustion1
            });
            this.actor.update({
                'data.status.isExhaustion2': exhaustion2
            });
            this.actor.update({
                'data.status.isExhaustion3': exhaustion3
            });
            this.actor.update({
                'data.status.isExhaustion4': exhaustion4
            });
            this.actor.update({
                'data.status.isExhaustion5': exhaustion5
            });
            this.actor.update({
                'data.attributes.newexhaustion': newexhaustion
            });
            let exhaustion = this.actor.data.data.attributes.newexhaustion;
            let content = `
				<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
					<header class="card-header flexrow">
						<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
						<h3>Exhaustion 1</h3>
					</header>
					</br>
					<h3 style="text-shadow: 0 0 4px; text-align: center;">Disadvantage on Ability Checks</h3>
				</div>`;
            let content2 = `
				<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
					<header class="card-header flexrow">
						<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
						<h3>Exhaustion 2</h3>
					</header>
					</br>
					<h3 style="text-shadow: 0 0 4px; text-align: center;">Disadvantage on Ability Checks</h3>
					<h3 style="text-shadow: 0 0 4px; text-align: center;">Speed halved</h3>
				</div>`;
            let content3 = `
				<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
					<header class="card-header flexrow">
						<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
						<h3>Exhaustion 3</h3>
					</header>
					</br>
					<h3 style="text-shadow: 0 0 4px; text-align: center;">Disadvantage on Ability Checks</h3>
					<h3 style="text-shadow: 0 0 4px; text-align: center;">Speed halved</h3>
					<h3 style="text-shadow: 0 0 4px; text-align: center;">Disadvantage on Attack rolls and Saving Throws</h3>
				</div>`;
            let content4 = `
				<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
					<header class="card-header flexrow">
						<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
						<h3>Exhaustion 4</h3>
					</header>
					</br>
					<h3 style="text-shadow: 0 0 4px; text-align: center;">Disadvantage on Ability Checks</h3>
					<h3 style="text-shadow: 0 0 4px; text-align: center;">Speed halved</h3>
					<h3 style="text-shadow: 0 0 4px; text-align: center;">Disadvantage on Attack rolls and Saving Throws</h3>
					<h3 style="text-shadow: 0 0 4px; text-align: center;">Hit point maximum halved</h3>
				</div>`;
            let content5 = `
				<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
					<header class="card-header flexrow">
						<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
						<h3>Exhaustion 5</h3>
					</header>
					</br>
					<h3 style="text-shadow: 0 0 4px; text-align: center;">Disadvantage on Ability Checks</h3>
					<h3 style="text-shadow: 0 0 4px; text-align: center;">Speed halved</h3>
					<h3 style="text-shadow: 0 0 4px; text-align: center;">Disadvantage on Attack rolls and Saving Throws</h3>
					<h3 style="text-shadow: 0 0 4px; text-align: center;">Hit point maximum halved</h3>
					<h3 style="text-shadow: 0 0 4px; text-align: center;">Speed reduced to 0</h3>
				</div>`;
            let content6 = `
				<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
					<header class="card-header flexrow">
						<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
						<h3>Exhaustion 6</h3>
					</header>
					</br>
					<h3 style="text-shadow: 0 0 4px; text-align: center;">Death</h3>
				</div>`;
            let rollWhisper = null;
            let rollBlind = false;
            let rollMode = game.settings.get("core", "rollMode");
            if (["gmroll", "blindroll"].includes(rollMode)) rollWhisper = ChatMessage.getWhisperRecipients("GM")
            if (rollMode === "blindroll") rollBlind = true;
            if (newexhaustion === 0) {
                ui.notifications.notify("You don't have any exhaustion.");
            }
            else if (newexhaustion === 1) {
                ChatMessage.create({
                    user: game.user._id,
                    content: content,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
                    },
                    blind: rollBlind,
                    sound: CONFIG.sounds.dice,
                    flags: {
                        darksheet: {
                            outcome: 'table'
                        }
                    }
                });
            } else if (newexhaustion === 2) {
                ChatMessage.create({
                    user: game.user._id,
                    content: content2,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
                    },
                    blind: rollBlind,
                    sound: CONFIG.sounds.dice,
                    flags: {
                        darksheet: {
                            outcome: 'table'
                        }
                    }
                });
            } else if (newexhaustion === 3) {
                ChatMessage.create({
                    user: game.user._id,
                    content: content3,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
                    },
                    blind: rollBlind,
                    sound: CONFIG.sounds.dice,
                    flags: {
                        darksheet: {
                            outcome: 'bad'
                        }
                    }
                });
            } else if (newexhaustion === 4) {
                ChatMessage.create({
                    user: game.user._id,
                    content: content4,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
                    },
                    blind: rollBlind,
                    sound: CONFIG.sounds.dice,
                    flags: {
                        darksheet: {
                            outcome: 'bad'
                        }
                    }
                });
            } else if (newexhaustion === 5) {
                ChatMessage.create({
                    user: game.user._id,
                    content: content5,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
                    },
                    blind: rollBlind,
                    sound: CONFIG.sounds.dice,
                    flags: {
                        darksheet: {
                            outcome: 'bad'
                        }
                    }
                });
            } else if (newexhaustion === 6) {
                ChatMessage.create({
                    user: game.user._id,
                    content: content6,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
                    },
                    blind: rollBlind,
                    sound: CONFIG.sounds.dice,
                    flags: {
                        darksheet: {
                            outcome: 'bad'
                        }
                    }
                });
            }
        });

        html.find('.deathsaveroll').click(async event => {
            event.preventDefault();
            let result = ["You fail two death saving throws.", "You fail one death saving throw.", "No change.", "You regain 1 hit point."]
            let finalresult = 0;
            let deathsavevalue = 0;
            if (this.actor.data.data.attributes.deathsave1.value) {
                deathsavevalue++;
            }
            if (this.actor.data.data.attributes.deathsave2.value) {
                deathsavevalue++;
            }
            if (this.actor.data.data.attributes.deathsave3.value) {
                deathsavevalue++;
            }

            let newDSV = deathsavevalue;

            let roll = new Roll(`1d20`).roll().total;
            if (roll <= 1) {
                newDSV = newDSV + 2;
            } else if (roll <= 9) {
                finalresult = 1;
                newDSV++;
            } else if (roll <= 19) {
                finalresult = 2;
            } else if (roll == 20) {
                finalresult = 3;
            }

            if (newDSV === 0) {
                this.actor.update({
                    'data.attributes.deathsave1.value': false
                });
                this.actor.update({
                    'data.attributes.deathsave2.value': false
                });
                this.actor.update({
                    'data.attributes.deathsave3.value': false
                });
            } else if (newDSV === 1) {
                this.actor.update({
                    'data.attributes.deathsave1.value': true
                });
                this.actor.update({
                    'data.attributes.deathsave2.value': false
                });
                this.actor.update({
                    'data.attributes.deathsave3.value': false
                });
            } else if (newDSV === 2) {
                this.actor.update({
                    'data.attributes.deathsave1.value': true
                });
                this.actor.update({
                    'data.attributes.deathsave2.value': true
                });
                this.actor.update({
                    'data.attributes.deathsave3.value': false
                });
            } else if (newDSV >= 2) {
                this.actor.update({
                    'data.attributes.deathsave1.value': true
                });
                this.actor.update({
                    'data.attributes.deathsave2.value': true
                });
                this.actor.update({
                    'data.attributes.deathsave3.value': true
                });
            }

            let content = `
				<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
					<header class="card-header flexrow">
						<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
						<h3>Death Saving Throw</h3>
					</header>
					</br>
					<h3 style="text-shadow: 0 0 4px; text-align: center;">${result[finalresult]}</h3>
				</div>`;
            let dead = `
				<div style="filter:grayscale(1);" class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
					<header class="card-header flexrow">
						<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
						<h3>${this.actor.data.name} just died</h3>
					</header>
				</div>`;
            let rollWhisper = null;
            let rollBlind = false;
            let rollMode = game.settings.get("core", "rollMode");
            if (["gmroll", "blindroll"].includes(rollMode)) rollWhisper = ChatMessage.getWhisperRecipients("GM")
            if (rollMode === "blindroll") rollBlind = true;

            ChatMessage.create({
                user: game.user._id,
                content: content,
                speaker: {
                    actor: this.actor._id,
                    token: this.actor.token,
                    alias: this.actor.name
                },
                blind: rollBlind,
                sound: CONFIG.sounds.dice,
                flags: {
                    darksheet: {
                        outcome: 'bad'
                    }
                }
            });
            if (newDSV >= 3) {
                ChatMessage.create({
                    user: game.user._id,
                    content: dead,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
                    },
                    blind: rollBlind,
                    sound: CONFIG.sounds.dice,
                    flags: {
                        darksheet: {
                            outcome: 'bad'
                        }
                    }
                });
                this.actor.update({
                    'data.attributes.isdead': true
                });
            }
            this.render();
        });
        //Inspiration
        html.find('.useInspiration').click(async event => {
            event.preventDefault();
            let rollWhisper = null;
            let rollBlind = false;
            let rollMode = game.settings.get("core", "rollMode");
            if (["gmroll", "blindroll"].includes(rollMode)) rollWhisper = ChatMessage.getWhisperRecipients("GM")
            if (rollMode === "blindroll") rollBlind = true;
            if (this.actor.data.data.attributes.inspirations.value <= 0) {
                ChatMessage.create({
                    user: game.user._id,
                    content: `<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
						<header class="card-header flexrow">
							<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
							<h3 style="color:red">You don't have any Inspiration</h3>
							</header>
							You can spend inspiration to make an attack roll, saving throw, or ability check with advantage-though you must declare this before you make the roll.</br> You can spend inspiration take the turn of an enemy.
						</br>
					</div>`,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
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
                    content: `<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
						<header class="card-header flexrow">
							<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
							<h3 class="white" style= "text-shadow: 0 0 2px;">${this.actor.name} Uses an Inspiration</h3>
							</header>
							You can spend inspiration to make an attack roll, saving throw, or ability check with advantage-though you must declare this before you make the roll.</br> You can spend inspiration take the turn of an enemy.
						</br>
					</div>`,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
                    },

                    sound: CONFIG.sounds.dice,
                    flags: {
                        darksheet: {
                            outcome: 'bad'
                        }
                    }
                });
                let val = this.actor.data.data.attributes.inspirations.value - 1;
                this.actor.update({
                    'data.attributes.inspirations.value': val
                });
                this.render();
            }

        });
        //Hero Points
        html.find('.useHeroPoint').click(async event => {
            event.preventDefault();
            let rollWhisper = null;
            let rollBlind = false;
            let rollMode = game.settings.get("core", "rollMode");
            if (["gmroll", "blindroll"].includes(rollMode)) rollWhisper = ChatMessage.getWhisperRecipients("GM")
            if (rollMode === "blindroll") rollBlind = true;
            if (this.actor.data.data.attributes.heropoints.value <= 0) {
                ChatMessage.create({
                    user: game.user._id,
                    content: `<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
						<header class="card-header flexrow">
							<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
							<h3 style="color:red">You don't have any Hero Point's</h3>
							</header>
							<div>You can use a hero point to give yourself (1d6) bonus on one roll
							</br>- To turn a critical failure into a normal one
							</br>- To turn a critical strike against you into a normal
							</br>- To immediately reduce your stress by 5
							</br>- To improve one of your conditions temporarily by 2 (1d4) hours
							</br>- You can use 2 points to give you +6 on any roll.
							</div>
						</br>
					</div>`,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
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
                    content: `<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
						<header class="card-header flexrow">
							<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
							<h3 class="white" style= "text-shadow: 0 0 2px;">${this.actor.name} Uses an Hero Point</h3>
							</header>
							<div>You can use a hero point to give yourself [[/r 1d6 bonus]] on one roll
							</br>- To turn a critical failure into a normal one
							</br>- To turn a critical strike against you into a normal
							</br>- To immediately reduce your stress by 5
							</br>- To improve one of your conditions temporarily by 2 [[/r 1d4 hours]]
							</br>- You can use 2 points to give you +6 on any roll.
							</div>
						</br>
					</div>`,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
                    },

                    sound: CONFIG.sounds.dice,
                    flags: {
                        darksheet: {
                            outcome: 'bad'
                        }
                    }
                });
                let val = this.actor.data.data.attributes.heropoints.value - 1;
                this.actor.update({
                    'data.attributes.heropoints.value': val
                });
                this.render();
            }

        });
        // LOOK FOR WOUNDROLL
        html.find('.woundroll').click(async event => {
            event.preventDefault();
            let table = game.tables.entities.find(t => t.data.name === "Reopening Wounds");
            let wounds = this.actor.data.data.attributes.wounds.value;
            if (wounds == 0) {
                ui.notifications.warn("You don't have any CLOSED wounds to reopen.");
                return;
            }
            let i = 0;
            let subtractVal = 0;
            let woundstreated
            let newcheck = false;
            for (let i = 1; i <= 20; i++) {
                if (document.getElementById(this.actor._id + "-woundcheck" + [i]).checked) {
                    //let result = table.roll()
                    let roll = new Roll(`1d20`).roll().total;
                    let Woundname = "";
                    if (document.getElementById(this.actor._id + "-wounddes" + [i]).value != "") {
                        Woundname = document.getElementById(this.actor._id + "-wounddes" + [i]).value;
                    }
                    let epicfail = `
					<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
						<header class="card-header flexrow">
							<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
							<h3>Woundroll#${i} : ${Woundname}</h3>
						</header>
						</br>
						<b><i style="color: #ff0000">The wound reopens +1 Exhaustion and you lose a hit die
					</div>`;
                    let fail = `
					<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
						<header class="card-header flexrow">
							<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
							<h3>Woundroll#${i} : ${Woundname}</h3>
						</header>
						</br>
						<i style="color: #ff0000">The wound reopens + 1 Exhaustion
					</div>`;
                    let success = `
					<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
						<header class="card-header flexrow">
							<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
							<h3>Woundroll#${i} : ${Woundname}</h3>
						</header>
						</br>
						The wound remains closed
					</div>`;
                    let rollWhisper = null;
                    let rollBlind = false;
                    let rollMode = game.settings.get("core", "rollMode");
                    if (["gmroll", "blindroll"].includes(rollMode)) rollWhisper = ChatMessage.getWhisperRecipients("GM")
                    if (rollMode === "blindroll") rollBlind = true;
                    if (roll <= 1) {
                        ChatMessage.create({
                            user: game.user._id,
                            content: epicfail,
                            speaker: {
                                actor: this.actor._id,
                                token: this.actor.token,
                                alias: this.actor.name
                            },
                            blind: rollBlind,
                            sound: CONFIG.sounds.dice,
                            flags: {
                                darksheet: {
                                    outcome: 'table'
                                }
                            }
                        });
                        switch (i) {
                            case 1: this.actor.update({ 'data.attributes.darksheet-wounds.wound1treated.value': newcheck, }); break;
                            case 2: this.actor.update({ 'data.attributes.darksheet-wounds.wound2treated.value': newcheck, }); break;
                            case 3: this.actor.update({ 'data.attributes.darksheet-wounds.wound3treated.value': newcheck, }); break;
                            case 4: this.actor.update({ 'data.attributes.darksheet-wounds.wound4treated.value': newcheck, }); break;
                            case 5: this.actor.update({ 'data.attributes.darksheet-wounds.wound5treated.value': newcheck, }); break;
                            case 6: this.actor.update({ 'data.attributes.darksheet-wounds.wound61treated.value': newcheck, }); break;
                            case 7: this.actor.update({ 'data.attributes.darksheet-wounds.wound7treated.value': newcheck, }); break;
                            case 8: this.actor.update({ 'data.attributes.darksheet-wounds.wound8treated.value': newcheck, }); break;
                            case 9: this.actor.update({ 'data.attributes.darksheet-wounds.wound9treated.value': newcheck, }); break;
                            case 10: this.actor.update({ 'data.attributes.darksheet-wounds.wound10treated.value': newcheck, }); break;
                            case 11: this.actor.update({ 'data.attributes.darksheet-wounds.wound11treated.value': newcheck, }); break;
                            case 12: this.actor.update({ 'data.attributes.darksheet-wounds.wound12treated.value': newcheck, }); break;
                            case 13: this.actor.update({ 'data.attributes.darksheet-wounds.wound13treated.value': newcheck, }); break;
                            case 14: this.actor.update({ 'data.attributes.darksheet-wounds.wound14treated.value': newcheck, }); break;
                            case 15: this.actor.update({ 'data.attributes.darksheet-wounds.wound15treated.value': newcheck, }); break;
                            case 16: this.actor.update({ 'data.attributes.darksheet-wounds.wound16treated.value': newcheck, }); break;
                            case 17: this.actor.update({ 'data.attributes.darksheet-wounds.wound17treated.value': newcheck, }); break;
                            case 18: this.actor.update({ 'data.attributes.darksheet-wounds.wound18treated.value': newcheck, }); break;
                            case 19: this.actor.update({ 'data.attributes.darksheet-wounds.wound19treated.value': newcheck, }); break;
                            case 20: this.actor.update({ 'data.attributes.darksheet-wounds.wound20treated.value': newcheck, }); break;

                        }
                    } else if (roll <= 8) {
                        ChatMessage.create({
                            user: game.user._id,
                            content: fail,
                            speaker: {
                                actor: this.actor._id,
                                token: this.actor.token,
                                alias: this.actor.name
                            },

                            blind: rollBlind,
                            sound: CONFIG.sounds.dice,
                            flags: {
                                darksheet: {
                                    outcome: 'table'
                                }
                            }
                        });
                        switch (i) {
                            case 1: this.actor.update({ 'data.attributes.darksheet-wounds.wound1treated.value': newcheck, }); break;
                            case 2: this.actor.update({ 'data.attributes.darksheet-wounds.wound2treated.value': newcheck, }); break;
                            case 3: this.actor.update({ 'data.attributes.darksheet-wounds.wound3treated.value': newcheck, }); break;
                            case 4: this.actor.update({ 'data.attributes.darksheet-wounds.wound4treated.value': newcheck, }); break;
                            case 5: this.actor.update({ 'data.attributes.darksheet-wounds.wound5treated.value': newcheck, }); break;
                            case 6: this.actor.update({ 'data.attributes.darksheet-wounds.wound61treated.value': newcheck, }); break;
                            case 7: this.actor.update({ 'data.attributes.darksheet-wounds.wound7treated.value': newcheck, }); break;
                            case 8: this.actor.update({ 'data.attributes.darksheet-wounds.wound8treated.value': newcheck, }); break;
                            case 9: this.actor.update({ 'data.attributes.darksheet-wounds.wound9treated.value': newcheck, }); break;
                            case 10: this.actor.update({ 'data.attributes.darksheet-wounds.wound10treated.value': newcheck, }); break;
                            case 11: this.actor.update({ 'data.attributes.darksheet-wounds.wound11treated.value': newcheck, }); break;
                            case 12: this.actor.update({ 'data.attributes.darksheet-wounds.wound12treated.value': newcheck, }); break;
                            case 13: this.actor.update({ 'data.attributes.darksheet-wounds.wound13treated.value': newcheck, }); break;
                            case 14: this.actor.update({ 'data.attributes.darksheet-wounds.wound14treated.value': newcheck, }); break;
                            case 15: this.actor.update({ 'data.attributes.darksheet-wounds.wound15treated.value': newcheck, }); break;
                            case 16: this.actor.update({ 'data.attributes.darksheet-wounds.wound16treated.value': newcheck, }); break;
                            case 17: this.actor.update({ 'data.attributes.darksheet-wounds.wound17treated.value': newcheck, }); break;
                            case 18: this.actor.update({ 'data.attributes.darksheet-wounds.wound18treated.value': newcheck, }); break;
                            case 19: this.actor.update({ 'data.attributes.darksheet-wounds.wound19treated.value': newcheck, }); break;
                            case 20: this.actor.update({ 'data.attributes.darksheet-wounds.wound20treated.value': newcheck, }); break;
                        }
                    } else {
                        ChatMessage.create({
                            user: game.user._id,
                            content: success,
                            speaker: {
                                actor: this.actor._id,
                                token: this.actor.token,
                                alias: this.actor.name
                            },

                            blind: rollBlind,
                            sound: CONFIG.sounds.dice,
                            flags: {
                                darksheet: {
                                    outcome: 'table'
                                }
                            }
                        });
                    }
                }
            };
            let newexhaustion = 0;
            let temp = this.actor.data.data.attributes.temp;
            let food = this.actor.data.data.attributes.saturation.value;
            let water = this.actor.data.data.attributes.thirst.value;
            let fatigue = this.actor.data.data.attributes.fatigue.value;
            let manualexhaustion = this.actor.data.data.attributes.exhaustion.value;
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
            this.actor.data.data.attributes.newexhaustion = newexhaustion;
            console.log("(DarkSheet): New Exhaustion: " + this.actor.data.data.attributes.newexhaustion);
            if (this.actor.data.data.attributes.newexhaustion != newexhaustion) {
                this.actor.update({
                    'data.attributes.newexhaustion': newexhaustion
                });
            }
            this.render();
        });

        html.find('.treatwound').click(async event => {
            event.preventDefault();
            let table = game.tables.entities.find(t => t.data.name === "Treatwounds");
            if (table == undefined) {
                ui.notifications.warn("Darksheet | You need to import or create a 'Treatwounds' Table to roll from");
            }
            else {
                const result = await table.roll()
                let content = `
						<h3 style="text-align: center;">${result.results[0].data.text}</h3>
					</div>`;
                let rollWhisper = null;
                let rollBlind = false;
                let rollMode = game.settings.get("core", "rollMode");
                if (["gmroll", "blindroll"].includes(rollMode)) rollWhisper = ChatMessage.getWhisperRecipients("GM")
                if (rollMode === "blindroll") rollBlind = true;

                ChatMessage.create({
                    user: game.user._id,
                    content: content,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
                    },
                    blind: rollBlind,
                    sound: CONFIG.sounds.dice,
                    flags: {
                        darksheet: {
                            outcome: 'table'
                        }
                    }
                });
            }
        });

        html.find('.gday').click(async event => {
            event.preventDefault();
            console.log("test");
        });

        html.find('.healwound').click(async event => {
            event.preventDefault();
            let conmod = this.actor.data.data.abilities.con.mod;
            let healtotal = 0;
            let wounds = this.actor.data.data.attributes.wounds.value;
            let maxwounds = 0;
            if (this.actor.data.data.attributes.maxwounds != null) {
                maxwounds = this.actor.data.data.attributes.maxwounds.value;
            }
            let i = 0;
            for (i = maxwounds; i > 0; i = i - 1) {
                let roll = new Roll(`1d20`).roll().total;
                let rolltotal = roll + conmod;
                if (rolltotal >= 15) {
                    healtotal++;
                }
            }
            let newwound = this.actor.data.data.attributes.maxwounds.value - healtotal;
            this.actor.update({
                'data.attributes.maxwounds.value': newwound
            });
            if (wounds >= newwound) {
                this.actor.update({
                    'data.attributes.wounds.value': newwound
                });
            }
            this.render();

            let rollWhisper = null;
            let rollBlind = false;
            let rollMode = game.settings.get("core", "rollMode");
            if (["gmroll", "blindroll"].includes(rollMode)) rollWhisper = ChatMessage.getWhisperRecipients("GM")
            if (rollMode === "blindroll") rollBlind = true;
            ChatMessage.create({
                user: game.user._id,
                content: `<div class="messagecards">
				<b style=" color: #315000; margin-left: 17%;">Wound Heal (Long Rest) DC 15:</b> <br><i>
						<h4 style="text-shadow: 0 0 0px; text-align: center;"> You heal a total of ${healtotal} wounds</h4>
					</div>
				</div>`,
                speaker: {
                    actor: this.actor._id,
                    token: this.actor.token,
                    alias: this.actor.name
                },

                blind: rollBlind,
                sound: CONFIG.sounds.dice
            });
        });
        html.find('.criticalS').click(async event => {
            event.preventDefault();
            let table = game.tables.entities.find(t => t.data.name === "Critical Success Boons");
            let rollMode = game.settings.get("core", "rollMode");
            let isWhisper = false;
            if (["gmroll", "blindroll"].includes(rollMode)) {
                isWhisper = ChatMessage.getWhisperRecipients("GM")
            }
            if (table == undefined) {
                ui.notifications.warn("Darksheet | You need to import or create a 'Critical Success Boons' Table to roll from");
            }
            else {
                const result = await table.roll();
                let content = `
					<div class="dnd5e chat-ca rd item-card" data-acor-id="${this.actor._id}">
						<h3 style="text-shadow: 0 0 1px; text-align: center;">${result.results[0].data.text}</h3>
					</div>`;

                ChatMessage.create({
                    user: game.user._id,
                    content: content,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
                    },
                    sound: CONFIG.sounds.dice,
                    rollMode: rollMode,
                    whisper: isWhisper
                });
            }
        });
        html.find('.criticalF').click(async event => {
            event.preventDefault();
            let table = game.tables.entities.find(t => t.data.name === "Critical Failure Consequences");
            if (table == undefined) {
                ui.notifications.warn("Darksheet | You need to import or create a 'Critical Failure Consequences' Table to roll from");
            }
            else {
                const result = await table.roll();
                let content = `
					<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
						<h3 style="text-shadow: 0 0 1px; text-align: center;">${result.results[0].data.text}</h3>
					</div>`;
                let rollWhisper = null;
                let rollBlind = false;
                let rollMode = game.settings.get("core", "rollMode");
                if (["gmroll", "blindroll"].includes(rollMode)) rollWhisper = ChatMessage.getWhisperRecipients("GM")
                if (rollMode === "blindroll") rollBlind = true;

                ChatMessage.create({
                    user: game.user._id,
                    content: content,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
                    },
                    blind: rollBlind,
                    sound: CONFIG.sounds.dice,
                    flags: {
                        darksheet: {
                            outcome: 'bad'
                        }
                    }
                });
            }
        });
        html.find('.successatcost').click(async event => {
            event.preventDefault();
            let table = game.tables.entities.find(t => t.data.name === "Success at a Cost - Offerings");
            if (table == undefined) {
                ui.notifications.warn("Darksheet | You need to import or create a 'Success at a Cost - Offerings' Table to roll from");
            }
            else {
                const result = table.roll()
                let content = `
					<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
						<h3 style="text-shadow: 0 0 0px; text-align: center;">${result.results[0].data.text}</h3>
					</div>`;
                let rollWhisper = null;
                let rollBlind = false;
                let rollMode = game.settings.get("core", "rollMode");
                if (["gmroll", "blindroll"].includes(rollMode)) rollWhisper = ChatMessage.getWhisperRecipients("GM")
                if (rollMode === "blindroll") rollBlind = true;

                ChatMessage.create({
                    user: game.user._id,
                    content: content,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
                    },
                    blind: rollBlind,
                    sound: CONFIG.sounds.dice,
                    flags: {
                        darksheet: {
                            outcome: 'table'
                        }
                    }
                });
            }
        });

        html.find('.hitdiceroll').click(async event => {
            event.preventDefault();
            let hd = this.actor.data.data.attributes.hitdice.value;
            let conmod = this.actor.data.data.abilities.con.mod;
            let roll1 = new Roll(`${hd}`).roll().total + conmod;
            let hp = this.actor.data.data.attributes.hp.value;
            // Send content to chat
            let rollWhisper = null;
            let rollBlind = false;
            let content = `
				<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
					<header class="card-header flexrow">
						<img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;"/>
						<h3>Rolling hitdice</h3>(${hd} + ${conmod})
					</header>
					</br>
					<h3 style="text-shadow: 0 0 4px; text-align: center;">${roll1}</h3>
			</div>`;
            let rollMode = game.settings.get("core", "rollMode");
            if (["gmroll", "blindroll"].includes(rollMode)) rollWhisper = ChatMessage.getWhisperRecipients("GM")
            if (rollMode === "blindroll") rollBlind = true;
            // If Epic fail
            ChatMessage.create({
                user: game.user._id,
                content: content,
                speaker: {
                    actor: this.actor._id,
                    token: this.actor.token,
                    alias: this.actor.name
                },
                sound: CONFIG.sounds.dice,
                flags: {
                    darksheet: {
                        outcome: 'table'
                    }
                }
            });
            const newhp = this.actor.data.data.attributes.hp.value + roll1;
            if (newhp >= this.actor.data.data.attributes.hp.max) {
                this.actor.data.data.attributes.hp.value = his.actor.data.data.attributes.hp.max
            } else {
                this.actor.data.data.attributes.hp.value = newhp
            }
        });

        /*LOOK FOR DEFENSEROLL*/
        html.find('.handy-ac').click(async event => {
            event.preventDefault();
            let ac = this.actor.data.data.attributes.ac.value;
            let roll1 = new Roll(`d20`).roll().total;
            let roll2 = new Roll(`d20`).roll().total;
            let rollResult = new Roll(`${roll1}`).roll().total + ac;
            let rollResult2 = new Roll(`${roll2}`).roll().total + ac;
            if (game.settings.get('darksheet', 'smalldefense')) {
                rollResult -= 10;
                rollResult2 -= 10;
            }
            let wounds = this.actor.data.data.attributes.wounds.value;
            let actorID = this.actor.data._id;
            let content = `
<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
    <header class="card-header flexrow">
        <img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;" />        <div class="dice-roll red-dual">
            <h3>Active Defense</h3>
            <div class="dice-result">
                <div class="dice-formula dice-tooltip" style="display: none;">1d20 + ${ac}</div>
                <div class="dice-row">
                    <div class="dice-row">
                        <div class="tooltip dual-left">
                            <div class="dice-tooltip" style="display: none;">                                <div class="dice">
                                    <p class="part-formula">
                                        1d20 + ${ac}
                                        
                                    </p>
                                    <ol class="dice-rolls">
                                        <li class="roll d20">${roll1}</li>
                                    </ol>
                                </div>                            </div>
                        </div>
                        <div class="tooltip dual-right">
                            <div class="dice-tooltip" style="display: none;">                                <div class="dice">
                                    <p class="part-formula">
                                        1d20 + ${ac}
                                        
                                    </p>
                                    <ol class="dice-rolls">
                                        <li class="roll d20">${roll2}</li>
                                    </ol>
                                </div>                            </div>
                        </div>
                    </div>
                </div>
                <div class="dice-row">
                    <h4 class="dice-total dual-left">${rollResult}</h4>
                    <h4 class="dice-total dual-right">${rollResult2}</h4>
                </div>
            </div>
        </div>
    </header>
</div>`;
            let content2 = `
<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
    <header class="card-header flexrow">
        <img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;" />        <div class="dice-roll red-dual">
            <h3>Defense Roll</h3>
            <div class="dice-result">
                <div class="dice-formula dice-tooltip" style="display: none;">1d20 + ${ac}</div>
                <div class="dice-row">
                    <div class="dice-row">
                        <div class="tooltip dual-left">
                            <div class="dice-tooltip" style="display: none;">                                <div class="dice">
                                    <p class="part-formula">
                                        1d20 + ${ac}
                                        
                                    </p>
                                    <ol class="dice-rolls">
                                        <li class="roll d20">${roll1}</li>
                                    </ol>
                                </div>                            </div>
                        </div>
                        <div class="tooltip dual-right">
                            <div class="dice-tooltip" style="display: none;">                                <div class="dice">
                                    <p class="part-formula">
                                        1d20 + ${ac}
                                        
                                    </p>
                                    <ol class="dice-rolls">
                                        <li class="roll d20">${roll2}</li>
                                    </ol>
                                </div>                            </div>
                        </div>
                    </div>
                </div>
                <div class="dice-row">
                    <h4 class="dice-total dual-left" style="color: red;text-shadow: 0 0 3px;">${rollResult}</h4>
                    <h4 class="dice-total dual-right">${rollResult2}</h4>
                </div>
            </div>
        </div>
    </header>
	</br>
	<h4 class="woundrollmessage" style="text-align: center;" id="${actorID}-woundroll">You need to <b>roll</br> for ${wounds} wound(s)</h4>
	<h4 class="woundrollmessage" style="text-align: center;">One of your items gains a notch<h4>
</div>`;
            let content3 = `
<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
    <header class="card-header flexrow">
        <img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;" />        <div class="dice-roll red-dual">
            <h3>Defense Roll</h3>
            <div class="dice-result">
                <div class="dice-formula dice-tooltip" style="display: none;">1d20 + ${ac}</div>
                <div class="dice-row">
                    <div class="dice-row">
                        <div class="tooltip dual-left">
                            <div class="dice-tooltip" style="display: none;">                                <div class="dice">
                                    <p class="part-formula">
                                        1d20 + ${ac}
                                        
                                    </p>
                                    <ol class="dice-rolls">
                                        <li class="roll d20">${roll1}</li>
                                    </ol>
                                </div>                            </div>
                        </div>
                        <div class="tooltip dual-right">
                            <div class="dice-tooltip" style="display: none;">                                <div class="dice">
                                    <p class="part-formula">
                                        1d20 + ${ac}
                                        
                                    </p>
                                    <ol class="dice-rolls">
                                        <li class="roll d20">${roll2}</li>
                                    </ol>
                                </div>                            </div>
                        </div>
                    </div>
                </div>
                <div class="dice-row">
                    <h4 class="dice-total dual-left">${rollResult}</h4>
                    <h4 class="dice-total dual-left" style="color: red;text-shadow: 0 0 3px;">${rollResult2}</h4>
                </div>
            </div>
        </div>
    </header>
	</br>
	<h4 class="woundrollmessage" style="text-align: center;" id="${actorID}-woundroll"> You need to <b>roll</br> for ${wounds} wound(s)</h4>
	<h4 class="woundrollmessage" style="text-align: center;">One of your items gains a notch<h4>
</div>`;
            // Send content to chat
            let rollWhisper = false;
            let rollBlind = false;
            let rollMode = game.settings.get("core", "rollMode");
            if (["gmroll", "blindroll"].includes(rollMode)) rollWhisper = ChatMessage.getWhisperRecipients("GM")
            if (rollMode === "blindroll") rollBlind = false;
            // If Epic fail
            if (roll1 === 1) {
                ChatMessage.create({
                    user: game.user._id,
                    content: content2,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
                    },
                    sound: CONFIG.sounds.dice,
                    flags: {
                        darksheet: {
                            outcome: 'bad'
                        }
                    }
                });
            } else if (roll2 === 1) {
                ChatMessage.create({
                    user: game.user._id,
                    content: content3,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
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
                    content: content,
                    speaker: {
                        actor: this.actor._id,
                        token: this.actor.token,
                        alias: this.actor.name
                    },
                    sound: CONFIG.sounds.dice,
                    flags: {
                        darksheet: {
                            outcome: 'table'
                        }
                    }
                });
            }
        });
        /*END LOOK FOR DEFENSEROLL END*/
        /*LOOK FOR SPELLATTACK*/
        html.find('.spell-dc').click(async event => {
            event.preventDefault();
            let ac = this.actor.data.data.attributes.spelldc;
            let roll1 = new Roll(`d20`).roll().total;
            let roll2 = new Roll(`d20`).roll().total;
            let rollResult = new Roll(`${roll1}+${ac}`).roll().total;
            let rollResult2 = new Roll(`${roll2}+${ac}`).roll().total;
            let actorID = this.actor.data._id;
            let content = `
<div class="dnd5e chat-card item-card" data-acor-id="${this.actor._id}">
    <header class="card-header flexrow">
        <img src="${this.actor.data.token.img}" title="" width="36" height="36" style="border: none;" />        <div class="dice-roll red-dual">
            <h3>Saving Attack</h3>
            <div class="dice-result">
                <div class="dice-formula dice-tooltip" style="display: none;">1d20 + ${ac}</div>
                <div class="dice-row">
                    <div class="dice-row">
                        <div class="tooltip dual-left">
                            <div class="dice-tooltip" style="display: none;">                                <div class="dice">
                                    <p class="part-formula">
                                        1d20 + ${ac}
                                        
                                    </p>
                                    <ol class="dice-rolls">
                                        <li class="roll d20">${roll1}</li>
                                    </ol>
                                </div>                            </div>
                        </div>
                        <div class="tooltip dual-right">
                            <div class="dice-tooltip" style="display: none;">                                <div class="dice">
                                    <p class="part-formula">
                                        1d20 + ${ac}
                                        
                                    </p>
                                    <ol class="dice-rolls">
                                        <li class="roll d20">${roll2}</li>
                                    </ol>
                                </div>                            </div>
                        </div>
                    </div>
                </div>
                <div class="dice-row">
                    <h4 class="dice-total dual-left">${rollResult}</h4>
                    <h4 class="dice-total dual-right">${rollResult2}</h4>
                </div>
            </div>
        </div>
    </header>
</div>`;

            // Send content to chat
            let rollWhisper = false;
            let rollBlind = false;
            let rollMode = game.settings.get("core", "rollMode");
            if (["gmroll", "blindroll"].includes(rollMode)) rollWhisper = ChatMessage.getWhisperRecipients("GM")
            if (rollMode === "blindroll") rollBlind = false;
            // If Epic fail
            ChatMessage.create({
                user: game.user._id,
                content: content,
                speaker: {
                    actor: this.actor._id,
                    token: this.actor.token,
                    alias: this.actor.name
                },
                sound: CONFIG.sounds.dice,
                flags: {
                    darksheet: {
                        outcome: 'table'
                    }
                }
            });
        });
        /*END LOOK FOR SPELLATTACK END*/
    }
}