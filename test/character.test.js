import Character from "../src/Character";

test('Error in name', () => {
  expect(() => new Character('D', 'Swordsman')).toThrow(new Error('Некорректное значение для имени персонажа. Имя должно содержать от 2 до 10 символов.'));
});

test('Error in type', () => {
  expect(() => new Character('Swordsman', 'Swo')).toThrow(new Error('Некорректный тип персонажа.'));
});

test('True the object', () => {
  const warior = new Character('Sword', 'Swordsman');
  const correct = {
    attack: 10, 
    defence: 10,
    health: 100, 
    level: 1,
    name: 'Sword', 
    type: 'Swordsman',
  };
  expect(warior).toEqual(correct);
});

test('Character receives damage', () => {
  const warrior = new Character('Sword', 'Swordsman');
  warrior.damage(30);
  expect(warrior.health).toBe(73);
});

test('Character receives lethal damage', () => {
  const warrior = new Character('Sword', 'Swordsman');
  warrior.damage(200);
  expect(warrior.health).toBe(0);
});

test('Character cannot level up when dead', () => {
  const deadWarrior = new Character('DeadSword', 'Swordsman');
  deadWarrior.health = 0;
  expect(() => deadWarrior.levelUp()).toThrow(new Error('Нельзя повысить левел умершего.'));
});

test('Character levels up', () => {
  const warrior = new Character('Sword', 'Swordsman');
  warrior.levelUp();
  expect(warrior.level).toBe(2);
  expect(warrior.attack).toBeDefined();
  expect(warrior.defence).toBeDefined();
  expect(warrior.health).toBe(100);
});

test('Character levels up with max health', () => {
  const healthyWarrior = new Character('Healthy', 'Swordsman');
  healthyWarrior.health = 95;
  healthyWarrior.levelUp();
  expect(healthyWarrior.health).toBeGreaterThanOrEqual(95);
  expect(healthyWarrior.health).toBeLessThanOrEqual(100);
});