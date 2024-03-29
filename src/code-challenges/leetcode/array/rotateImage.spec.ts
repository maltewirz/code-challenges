import { rotateImage, rotateImage2 } from './rotateImage';

test('Basic Test', () => {
    expect(
        rotateImage([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ])
    ).toStrictEqual([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
    ]);

    expect(
        rotateImage2([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ])
    ).toStrictEqual([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
    ]);
});
