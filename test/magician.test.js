import Magician from "../src/Magician.js";

test('true magician', () => {
  const magician = new Magician('Magician', 'Magician');
  const correct = {
    attack: 10, 
    defence: 40,
    health: 100, 
    level: 1,
    name: 'Magician', 
    type: 'Magician',
  };
  expect(magician).toEqual(correct);
});