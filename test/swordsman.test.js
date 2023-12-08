import Snordsman from "../src/Swordsman.js";

test('true swordsman', () => {
  const snordsman = new Snordsman('Swordsman', 'Swordsman');
  const correct = {
    attack: 40, 
    defence: 10,
    health: 100, 
    level: 1,
    name: 'Swordsman', 
    type: 'Swordsman',
  };
  expect(snordsman).toEqual(correct);
});