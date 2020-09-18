import { toAlternatingCase } from './toAlternatingCase';

test('basic test', () => {
    expect(toAlternatingCase("HeLLo WoRLD")).toStrictEqual("hEllO wOrld")
})
