import Character from "./Character.js";

class Bowerman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
  }
}

const bowerman = new Bowerman('Merlin', 'Bowerman', 100, 1, 25, 25);
console.log(bowerman);