import { decipherThis } from './decipherThis';

test('Basic test', () => {
    expect(decipherThis('72olle 103doo 100ya')).toStrictEqual('Hello good day');
    expect(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')).toStrictEqual('Have a go at this and see how you do');
    
})