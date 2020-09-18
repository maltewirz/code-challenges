import { camelCase } from './camelCase';

test('Basic Test', () => {
    expect(camelCase('test case')).toStrictEqual("TestCase");
})