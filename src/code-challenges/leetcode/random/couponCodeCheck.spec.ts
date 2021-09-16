import { couponCodeCheck } from './couponCodeCheck';

test('Basic Test', () => {
    expect(
        couponCodeCheck(
            [
                ['apple', 'apple'],
                ['apple', 'apple', 'banana'],
            ],
            ['apple', 'apple', 'apple', 'banana']
        )
    ).toStrictEqual(0);

    expect(
        couponCodeCheck(
            [["apple", "apple"], ["banana", "anything", "banana"]],
            ["orange", "apple", "apple", "banana", "orange", "banana"]
        )
    ).toStrictEqual(1);
});
