import { ShuffleArray } from './shuffleArray';

test('Basic Test - Initialize Array', () => {
    const initializedArray = new ShuffleArray([1, 2, 3]);
    expect(initializedArray.nums).toStrictEqual([1, 2, 3]);
});

test('Basic Test - Shuffle Array', () => {
    const initializedArray = new ShuffleArray([1, 2, 3]);
    expect(initializedArray.nums).toStrictEqual([1, 2, 3]);
    expect(initializedArray.shuffle().sort()).toStrictEqual([1, 2, 3]);
});

test('Basic Test - Reset Shuffled Array', () => {
    const initializedArray = new ShuffleArray([1, 2, 3]);
    expect(initializedArray.nums).toStrictEqual([1, 2, 3]);

    expect(initializedArray.shuffle().sort()).toStrictEqual([1, 2, 3]);
    expect(initializedArray.reset()).toStrictEqual([1, 2, 3]);
});

test('Basic Test - Shuffle large Array', () => {
    const initializedArray = new ShuffleArray([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]);
    expect(initializedArray.shuffle().sort((a, b) => a - b)).toStrictEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]);
});

test('Basic Test - Shuffle minus Array', () => {
    const initializedArray = new ShuffleArray([-6, 10, 184]);
    expect(initializedArray.shuffle().sort((a, b) => a - b)).toStrictEqual([
        -6, 10, 184,
    ]);
});
