import { fizzbuzz } from './fizzbuzz';

test('Basic test', () => {
    expect(fizzbuzz(10)).toStrictEqual([1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz'])
})