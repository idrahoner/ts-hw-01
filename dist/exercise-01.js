"use strict";
function checkForSpam(message) {
    let result;
    const lowerCase = message.toLowerCase();
    result = lowerCase.includes("spam") || lowerCase.includes("sale");
    return result;
}
console.log("checkForSpam: ", checkForSpam("Latest technology news"));
console.log("checkForSpam: ", checkForSpam("Get best sale offers now!"));
function includes(array, value) {
    for (const item of array) {
        if (item === value) {
            return true;
        }
    }
    return false;
}
console.log("includes: ", includes([1, 2, 3, 4, 5], 3));
console.log("includes: ", includes([1, 2, 3, 4, 5], 17));
console.log("includes: ", includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
console.log("includes: ", includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
console.log("includes: ", includes(["apple", "plum", 17, 28, 53, "pear", "orange"], "plum"));
console.log("includes: ", includes(["apple", "plum", 17, 28, 53, "pear", "orange"], "kiwi"));
const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
    ],
    getPotions() {
        return this.potions;
    },
    addPotion(newPotion) {
        for (let potion of this.potions) {
            if (potion.name === newPotion.name) {
                return console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
            }
        }
        this.potions.push(newPotion);
    },
    findIndex(potionName) {
        let potionIndex = -1;
        for (let i = 0; i < this.potions.length; i += 1) {
            if (this.potions[i].name === potionName) {
                potionIndex = i;
                break;
            }
        }
        return potionIndex;
    },
    removePotion(potionName) {
        const potionIndex = this.findIndex(potionName);
        if (potionIndex === -1) {
            return console.log(`Potion ${potionName} is not in inventory!`);
        }
        this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
        for (let potion of this.potions) {
            if (potion.name === oldName) {
                potion.name = newName;
                return;
            }
        }
        return console.log(`Potion ${oldName} is not in inventory!`);
    },
};
console.log("atTheOldToad.getPotions()", atTheOldToad.getPotions());
console.log("potions: ", atTheOldToad.potions);
console.log('atTheOldToad.addPotion({ name: "Invisibility", price: 620 })', atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
console.log("potions: ", atTheOldToad.potions);
console.log('atTheOldToad.addPotion({ name: "Power potion", price: 270 })', atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
console.log("potions: ", atTheOldToad.potions);
console.log('atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })', atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
console.log("potions: ", atTheOldToad.potions);
console.log('atTheOldToad.addPotion({ name: "Stone skin", price: 240 })', atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
console.log("potions: ", atTheOldToad.potions);
console.log('atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })', atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
console.log("potions: ", atTheOldToad.potions);
console.log('atTheOldToad.addPotion({ name: "Stone skin", price: 240 })', atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
console.log("potions: ", atTheOldToad.potions);
console.log('atTheOldToad.removePotion("Dragon breath")', atTheOldToad.removePotion("Dragon breath"));
console.log("potions: ", atTheOldToad.potions);
console.log('atTheOldToad.removePotion("Speed potion")', atTheOldToad.removePotion("Speed potion"));
console.log("potions: ", atTheOldToad.potions);
console.log('atTheOldToad.updatePotionName("Dragon breath", "Polymorth")', atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log("potions: ", atTheOldToad.potions);
console.log('atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")', atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));
console.log("potions: ", atTheOldToad.potions);
//# sourceMappingURL=exercise-01.js.map