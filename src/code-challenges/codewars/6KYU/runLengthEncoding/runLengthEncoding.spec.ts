import { runLengthEncoding } from './runLengthEncoding';

test('Basic Test', () => {
    expect(
        runLengthEncoding(['a', 'a', 'b', 'b', 'c', 'c', 'c'])
    ).toStrictEqual(['a', '2', 'b', '2', 'c', '3']);
});
