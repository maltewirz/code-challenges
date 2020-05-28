import { solve } from './solve';

test('Basic test', () => {
    expect(solve('CODe')).toStrictEqual('CODE');
    expect(solve('COde')).toStrictEqual('code');
})