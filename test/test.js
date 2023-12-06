import Character from "../src/Character.js";

test('Character', () => {
  const list = 
    ['Merlin', 'Magician', 100, 1, 10, 40]
  const result = new Character(list);
  expect(result).toBe({name: 'Merlin', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40});
});

test.each([
  ['Merlin', 'Magician', {name: 'Merlin', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40}],
  ['Эл', 'Roco', 'err'],
  ['Гном', 43, 'err'],
])
('testing methods validateName and validateType with name %n and type %i', (name, type, life) => {
  const result = lifeBar({name, type});
  expect(result).toBe(life);
});