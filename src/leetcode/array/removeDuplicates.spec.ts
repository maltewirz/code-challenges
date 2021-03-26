import {removeDuplicates} from './removeDuplicates';

test('Basic test', () => {
    expect(removeDuplicates([1,1,2])).toStrictEqual(2)
    expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toStrictEqual(5)

})