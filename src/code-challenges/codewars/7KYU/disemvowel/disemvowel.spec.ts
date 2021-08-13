import { disemvowel } from './disemvowel';

test('Basic test', () => {
    expect(disemvowel("This website is for losers LOL!")).toStrictEqual("Ths wbst s fr lsrs LL!");
})