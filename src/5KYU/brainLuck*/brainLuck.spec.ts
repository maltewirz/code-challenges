import { brainLuck } from './brainLuck';

test('Echo until byte(255) encountred', () => {
    expect(brainLuck(',+[-.,+]','Codewars'+String.fromCharCode(255))).toStrictEqual('Codewars');
})

test('Two numbers multiplier', () => {
    // expect(brainLuck(',>,<[>[->+>+<<]>>[-<<+>>]<<<-]>>.',String.fromCharCode(8,9))).toStrictEqual(String.fromCharCode(72));
})