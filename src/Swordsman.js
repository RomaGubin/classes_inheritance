import Character from "./Character.js";

class Snordsman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
  }
}

const snordsman = new Snordsman('Merlin', 'Snordsman', 100, 1, 40, 10);
console.log(snordsman);