import Character from "./Character.js";

class Undead extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
  }
}

const undead = new Undead('Merlin', 'Undead', 100, 1, 25, 25);
console.log(undead);