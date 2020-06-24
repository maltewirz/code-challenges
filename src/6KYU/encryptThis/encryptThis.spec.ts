import { encryptThis } from './encryptThis';

test('Basic test', () => {
    expect(encryptThis('')).toStrictEqual('');
    expect(encryptThis('A wise old owl lived in an oak'))
        .toStrictEqual('65 119esi 111dl 111lw 108dvei 105n 97n 111ka');
    expect(encryptThis('an'))
        .toStrictEqual('97n');
})