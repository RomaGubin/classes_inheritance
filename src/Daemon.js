import Character from "./Character.js";

class Daemon extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
  }
}

const daemon = new Daemon('Merlin', 'Daemon', 100, 1, 10, 40);
console.log(daemon);