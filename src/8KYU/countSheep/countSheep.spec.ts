import { countSheep } from './countSheep';

test('Basic test', () => {
    expect(countSheep(1)).toStrictEqual('1 sheep...')
    expect(countSheep(3)).toStrictEqual('1 sheep...2 sheep...3 sheep...')
})