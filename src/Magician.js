import Character from "./Character.js";

class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
//console.log(new Magician('Hjh', 'Swordsman'));
export default Magician;