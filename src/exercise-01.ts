function checkForSpam(message: string): boolean {
  let result: boolean;
  // Change code below this line
  const lowerCase = message.toLowerCase();
  result = lowerCase.includes("spam") || lowerCase.includes("sale");
  // Change code above this line
  return result;
}

console.log("checkForSpam: ", checkForSpam("Latest technology news"));
console.log("checkForSpam: ", checkForSpam("Get best sale offers now!"));

function includes(array: (string | number)[], value: string | number): boolean {
  // Change code below this line
  for (const item of array) {
    if (item === value) {
      return true;
    }
  }
  return false;
  // Change code above this line
}

console.log("includes: ", includes([1, 2, 3, 4, 5], 3));
console.log("includes: ", includes([1, 2, 3, 4, 5], 17));
console.log(
  "includes: ",
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
);
console.log(
  "includes: ",
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
);
console.log(
  "includes: ",
  includes(["apple", "plum", 17, 28, 53, "pear", "orange"], "plum")
);
console.log(
  "includes: ",
  includes(["apple", "plum", 17, 28, 53, "pear", "orange"], "kiwi")
);

type Potion = { name: string; price: number };

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion: Potion): void {
    for (let potion of this.potions) {
      if (potion.name === newPotion.name) {
        return console.log(
          `Error! Potion ${newPotion.name} is already in your inventory!`
        );
      }
    }

    this.potions.push(newPotion);
  },
  findIndex(potionName: string): number {
    let potionIndex: number = -1;
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === potionName) {
        potionIndex = i;
        break;
      }
    }

    return potionIndex;
  },
  removePotion(potionName: string): void {
    const potionIndex = this.findIndex(potionName);

    if (potionIndex === -1) {
      return console.log(`Potion ${potionName} is not in inventory!`);
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName: string, newName: string): void {
    for (let potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
        return;
      }
    }

    return console.log(`Potion ${oldName} is not in inventory!`);
  },
  // Change code above this line
};

console.log("atTheOldToad.getPotions()", atTheOldToad.getPotions());
console.log("potions: ", atTheOldToad.potions);
console.log(
  'atTheOldToad.addPotion({ name: "Invisibility", price: 620 })',
  atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
);
console.log("potions: ", atTheOldToad.potions);
console.log(
  'atTheOldToad.addPotion({ name: "Power potion", price: 270 })',
  atTheOldToad.addPotion({ name: "Power potion", price: 270 })
);
console.log("potions: ", atTheOldToad.potions);
console.log(
  'atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })',
  atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })
);
console.log("potions: ", atTheOldToad.potions);
console.log(
  'atTheOldToad.addPotion({ name: "Stone skin", price: 240 })',
  atTheOldToad.addPotion({ name: "Stone skin", price: 240 })
);
console.log("potions: ", atTheOldToad.potions);
console.log(
  'atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })',
  atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })
);
console.log("potions: ", atTheOldToad.potions);
console.log(
  'atTheOldToad.addPotion({ name: "Stone skin", price: 240 })',
  atTheOldToad.addPotion({ name: "Stone skin", price: 240 })
);
console.log("potions: ", atTheOldToad.potions);
console.log(
  'atTheOldToad.removePotion("Dragon breath")',
  atTheOldToad.removePotion("Dragon breath")
);
console.log("potions: ", atTheOldToad.potions);
console.log(
  'atTheOldToad.removePotion("Speed potion")',
  atTheOldToad.removePotion("Speed potion")
);
console.log("potions: ", atTheOldToad.potions);
console.log(
  'atTheOldToad.updatePotionName("Dragon breath", "Polymorth")',
  atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
);
console.log("potions: ", atTheOldToad.potions);
console.log(
  'atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")',
  atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
);
console.log("potions: ", atTheOldToad.potions);
