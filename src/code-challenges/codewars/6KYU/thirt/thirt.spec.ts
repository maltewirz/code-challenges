import { thirt } from './thirt';

test('Basic test', () => {
    expect(thirt(1234567)).toStrictEqual(87);
    expect(thirt(8529)).toStrictEqual(79);
});