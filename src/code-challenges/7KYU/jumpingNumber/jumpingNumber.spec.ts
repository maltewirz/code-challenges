import { jumpingNumber } from './jumpingNumber';

test('Basic test', () => {
    expect(jumpingNumber(1)).toStrictEqual("Jumping!!");
    expect(jumpingNumber(7)).toStrictEqual("Jumping!!");
    expect(jumpingNumber(79)).toStrictEqual("Not!!");
    expect(jumpingNumber(98789876)).toStrictEqual("Jumping!!");
})