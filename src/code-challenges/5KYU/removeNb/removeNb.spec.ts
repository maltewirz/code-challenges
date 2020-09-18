import { removeNb } from './removeNb';

test('Basic Test', () => {
    expect(removeNb(26)).toStrictEqual([[15,21],[21,15]]);
    // expect(removeNb(110)).toStrictEqual([[70,85],[85,70]]);
    // expect(removeNb(1000003)).toStrictEqual([[70,85],[85,70]]);
    
})