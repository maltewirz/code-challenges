import { runLengthEncoding, runLengthDecoding } from './runLengthEncoding';

test('Basic Test Encode', () => {
    expect(
        runLengthEncoding(['a', 'a', 'b', 'b', 'c', 'c', 'c'])
    ).toStrictEqual(['a', '2', 'b', '2', 'c', '3']);
});


test('Basic Test Decode', () => {
    expect(
        runLengthDecoding(['a', '2', 'b', '2', 'c', '3'])
    ).toStrictEqual(['a', 'a', 'b', 'b', 'c', 'c', 'c']);
    expect(
        runLengthDecoding(['a', '2', 'b', '2', 'c', '3'])
    ).toStrictEqual(['a', 'a', 'b', 'b', 'c', 'c', 'c']);
});
