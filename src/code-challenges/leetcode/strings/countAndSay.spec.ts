import { countAndSay } from './countAndSay';

test('Basic Test', () => {
    expect(countAndSay(1)).toStrictEqual('1');
    expect(countAndSay(2)).toStrictEqual('11');
    expect(countAndSay(3)).toStrictEqual('21');
    expect(countAndSay(4)).toStrictEqual('1211');
});
