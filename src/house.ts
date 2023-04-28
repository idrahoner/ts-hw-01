class Key {
  signature: number;

  constructor() {
    this.signature = Math.floor(Math.random() * 100) + 1;
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person) {
    if (!this.door) {
      return console.log("Door is close!");
    }
    this.tenants.push(person);
    console.log("Person inside! ", this.tenants);
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
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
