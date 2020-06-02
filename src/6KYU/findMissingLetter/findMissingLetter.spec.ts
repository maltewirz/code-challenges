import { findMissingLetter } from './findMissingLetter';

test('Basic test', () => {
    expect(findMissingLetter(['a','b','c','d','f'])).toStrictEqual('e');
    expect(findMissingLetter(["s","u","v"])).toStrictEqual('t');
    expect(findMissingLetter(["e","f","h"])).toStrictEqual('g');
    expect(findMissingLetter(['O','Q','R','S'])).toStrictEqual('P');
    
    
})