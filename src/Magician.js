import Character from "./Character.js";

class Magician extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
  }
}

const magician = new Magician('n', 'Magician', 100, 1, 10, 40);
console.log(magician);