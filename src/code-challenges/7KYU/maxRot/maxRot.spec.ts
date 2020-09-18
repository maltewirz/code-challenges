import { maxRot } from './maxRot';

test('Basic test', () => {
    expect(maxRot(38458215)).toStrictEqual(85821534);
    expect(maxRot(56789)).toStrictEqual(68957);
})