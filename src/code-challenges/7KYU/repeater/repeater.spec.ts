import { repeater } from './repeater';

test('basic test', () => {
    expect(repeater('a', 5)).toStrictEqual('aaaaa');
})