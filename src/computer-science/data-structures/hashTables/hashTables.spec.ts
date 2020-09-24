import { hash } from './hashTables';

describe('Hash Tables', () => {
    test('string only hash function', () => {
        expect(hash('pink', 10)).toStrictEqual(0)
    })
})