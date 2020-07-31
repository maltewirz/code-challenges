import { humanReadable } from './humanReadable';

test('Basic test', () => {
    expect(humanReadable(5)).toStrictEqual('00:00:05');
    expect(humanReadable(86399)).toStrictEqual('23:59:59');
    expect(humanReadable(359999)).toStrictEqual('99:59:59');
})

