/**
 * Functions for Darker Dungeons Actors
 */
export class DarkerActor5e {
  /**
  * @param {object} actor      The data object for the Actor being rendered
  * @returns {{max: number, value: number, pct: number}}  An object describing the character's encumbrance level
  * @private
  */
  static computeSlotEncumbrance(actor) {
      // Get the total slots from items
      const physicalItems = ["weapon", "equipment", "consumable", "tool", "backpack", "loot"];
      let totalSlots = actor.items.reduce((slots, i) => {
        if (!physicalItems.includes(i.data.type)) return slots;

        let quantity = i.data.data.quantity || 0;
        if (i.data.name === "Rations") quantity = Math.max(0, quantity - 5)
        if (i.data.name === "Waterskin") quantity = Math.max(0, quantity - 1)

        if (i.data.flags.darksheet === undefined) { i.data.flags.darksheet = { item: { slot: '1' } } }
        return slots + (quantity * i.data.flags.darksheet.item.slots)
      }, 0);
      totalSlots += DarkerActor5e.computeCoinWeight(actor)
      const maxBulk = parseInt(actor.data.attributes.inventoryslots) + parseInt(actor.data.abilities.str.value);
      const pct = (totalSlots / maxBulk) * 100;
      return { value: totalSlots.toNearest(0.1), max: maxBulk * 1.5, pct, encumbered: pct >= 100 };
  }

  static computeCoinWeight(actor) {
    let weight = 0
    // [Optional] add Currency Weight (for non-transformed actors)
    if (game.settings.get("dnd5e", "currencyWeight") && actor.data.currency) {
      const currency = actor.data.currency;
      let numCoins = Object.values(currency).reduce((val, denom) => val += Math.max(denom, 0), 0);
  
      let currencyPerWeight = game.settings.get("dnd5e", "metricWeightUnits") ? CONFIG.DND5E.encumbrance.currencyPerWeight.metric : CONFIG.DND5E.encumbrance.currencyPerWeight.imperial;
  
      if (game.settings.get("darksheet", "slotbasedinventory")) {
        numCoins = numCoins - 100;
        currencyPerWeight = 100;
        if (numCoins <= 0) numCoins = 0;
      }
      weight += numCoins / currencyPerWeight;
    }
    return weight
  }
}
