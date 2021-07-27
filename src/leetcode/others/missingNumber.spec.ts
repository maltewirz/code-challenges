import { missingNumber, missingNumberAlternative } from './missingNumber';

test('Basic Test', () => {
    expect(missingNumber([3,0,1])).toStrictEqual(2)
    expect(missingNumber([0,1])).toStrictEqual(2)
    expect(missingNumber([9,6,4,2,3,5,7,0,1])).toStrictEqual(8)
    expect(missingNumber([0])).toStrictEqual(1)

    expect(missingNumberAlternative([3,0,1])).toStrictEqual(2)
    expect(missingNumberAlternative([0,1])).toStrictEqual(2)
    expect(missingNumberAlternative([9,6,4,2,3,5,7,0,1])).toStrictEqual(8)
    expect(missingNumberAlternative([0])).toStrictEqual(1)
})