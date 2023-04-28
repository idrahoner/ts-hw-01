"use strict";
class Key {
    constructor() {
        this.signature = Math.floor(Math.random() * 100) + 1;
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) {
        if (!this.door) {
            return console.log("Door is close!");
        }
        this.tenants.push(person);
        console.log("Person inside! ", this.tenants);
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (this.key.getSignature() !== key.getSignature()) {
            return console.log("This is wrong key!");
        }
        this.door = true;
        console.log("Door is open!");
    }
}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.comeIn(person);
house.openDoor(person.getKey());
house.comeIn(person);
//# sourceMappingURL=house.js.map