import Character from "./Character.js";

class Zombie extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
  }
}

const zombie = new Zombie('Merlin', 'Zombie', 100, 1, 40, 10);
console.log(zombie);