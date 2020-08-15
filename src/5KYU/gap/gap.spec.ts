import { gap } from './gap';

test('Basic Test', () => {
    expect(gap(2, 100, 110)).toStrictEqual([101, 103]);
    // expect(gap(2, 2, 11)).toStrictEqual([101, 103]);
    // expect(gap(10,300,400)).toStrictEqual([337, 347]);
})
