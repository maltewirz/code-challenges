import { disariumNumber } from './disariumNumber';

test('basic test', () => {
    expect(disariumNumber(89)).toStrictEqual("Disarium !!");
    expect(disariumNumber(564)).toStrictEqual("Not !!");
})