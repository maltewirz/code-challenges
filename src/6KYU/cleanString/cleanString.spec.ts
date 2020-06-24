import { cleanString } from './cleanString';

test('Basic Test', () => {
    expect(cleanString('abc#d##c')).toStrictEqual('ac');
})