import { streetFighterSelection } from './streetFighterSelection';

let fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

test('Basic test', () => {
    let moves = ['up', 'left', 'right', 'left', 'left'];
    expect(streetFighterSelection(fighters, [0,0], moves)).toStrictEqual(['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']);
});