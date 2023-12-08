import Bowerman from "../src/Bowerman.js";

test('true bowerman', () => {
  const bowerman = new Bowerman('Bowman', 'Bowman');
  const correct = {
    attack: 25, 
    defence: 25,
    health: 100, 
    level: 1,
    name: 'Bowman', 
    type: 'Bowman',
  };
  expect(bowerman).toEqual(correct);
});