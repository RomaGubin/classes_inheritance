class Character {
  constructor(name, type) {
    this.validateName(name);
    this.validateType(type);

    this.name = name;
    this.type = type;

    this.health = 100;
    this.level = 1;

    this.attack = 10;
    this.defence = 10;
  }

  validateName(name) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Некорректное значение для имени персонажа. Имя должно содержать от 2 до 10 символов.');
    }
  }

  validateType(type) {
    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!validTypes.includes(type)) {
      throw new Error('Некорректный тип персонажа.');
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершего.');
    }

    this.level += 1;
    this.attack = Math.round(this.attack * 1.2);
    this.defence = Math.round(this.defence * 1.2);
    this.health = Math.min(this.health, 100);
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
      this.health = Math.max(0, this.health);
    }
  }
}

export default Character;