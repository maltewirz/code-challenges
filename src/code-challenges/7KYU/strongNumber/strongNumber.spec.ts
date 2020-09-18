import { strongNumber } from './strongNumber';

const strong = "STRONG!!!!";
const notStrong = "Not Strong !!";

test('basic test', () => {
    expect(strongNumber(1)).toStrictEqual(strong);
})
test('basic test2', () => {
    expect(strongNumber(7)).toStrictEqual(notStrong);
})