import { findShort } from './findShort';

test('basic test', () => {
    expect(findShort("lets talk about javascript the best language")).toStrictEqual(3);
})