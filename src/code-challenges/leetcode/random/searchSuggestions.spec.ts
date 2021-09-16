import { searchSuggestions } from './searchSuggestions';

test('Basic Test', () => {
    expect(
        searchSuggestions(
            ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'],
            'mouse'
        )
    ).toStrictEqual([
        ['mobile', 'moneypot', 'monitor'],
        ['mouse', 'mousepad'],
        ['mouse', 'mousepad'],
        ['mouse', 'mousepad'],
    ]);
});
