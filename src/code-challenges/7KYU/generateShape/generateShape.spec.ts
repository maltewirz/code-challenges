import { generateShape } from './generateShape';

test('Basic test', () => {
    expect(generateShape(1)).toStrictEqual('+');
    expect(generateShape(3)).toStrictEqual('+++\n+++\n+++');
})