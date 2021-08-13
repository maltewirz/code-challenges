import {
    fizzBuzzLeet,
    fizzBuzzLeetAlgo,
    fizzBuzzLeetHash,
} from './fizzBuzzLeet';

test('Basic Test', () => {
    expect(fizzBuzzLeet(5)).toStrictEqual(['1', '2', 'Fizz', '4', 'Buzz']);
});

test('Basic Test', () => {
    expect(fizzBuzzLeetAlgo(5)).toStrictEqual(['1', '2', 'Fizz', '4', 'Buzz']);
});

test('Basic Test', () => {
    expect(fizzBuzzLeetHash(5)).toStrictEqual(['1', '2', 'Fizz', '4', 'Buzz']);
});
