import Undead from "../src/Undead.js";

test('true undead', () => {
  const undead = new Undead('Undead', 'Undead');
  const correct = {
    attack: 25, 
    defence: 25,
    health: 100, 
    level: 1,
    name: 'Undead', 
    type: 'Undead',
  };
  expect(undead).toEqual(correct);
});