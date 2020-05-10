import { tidyNumber } from './tidyNumber';

// test('Basic test for 12', () => {
//     expect(tidyNumber(12)).toStrictEqual(true);
// })

test('Basic test for 102', () => {
    expect(tidyNumber(102)).toStrictEqual(false);
})