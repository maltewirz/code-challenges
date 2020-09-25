import { hash, hashImproved, HashTable } from './hashTables';

describe('Hash Tables', () => {
    test('string only hash function', () => {
        expect(hash('pink', 10)).toStrictEqual(0);
        expect(hash('cyan', 10)).toStrictEqual(3);
    });

    test('string only hashImproved function', () => {
        expect(hashImproved('pink', 10)).toStrictEqual(0);
        expect(hashImproved('cyan', 10)).toStrictEqual(3);
    });

    test('creates a HashTable class instance', () => {
        const hash = new HashTable();
        expect(hash instanceof HashTable).toStrictEqual(true);
    });

    test('sets a hash', () => {
        const hash = new HashTable();
        hash.set('pink', '#654651');
        expect(hash.keyMap[5][0]).toStrictEqual(['pink', '#654651']);
        hash.set('pink', '#888894');
        expect(hash.keyMap[5][1]).toStrictEqual(['pink', '#888894']);
    });

    test('gets a hash', () => {
        const hash = new HashTable();
        hash.set('pink', '#654651');
        hash.set('blue', '#988894');
        expect(hash.get('blue')).toStrictEqual('#988894');
    });

    test('gets a all values', () => {
        const hash = new HashTable();
        hash.set('pink', '#654651');
        hash.set('blue', '#988894');
        expect(hash.values()).toStrictEqual(['#654651', '#988894']);
    });

    test('gets a all keys', () => {
        const hash = new HashTable();
        hash.set('pink', '#654651');
        hash.set('blue', '#988894');
        expect(hash.keys()).toStrictEqual(['pink', 'blue']);
    });
});
