import { specialNumber } from './specialNumber';


test('Basic test', () => {
    expect(specialNumber(25432)).toStrictEqual('Special!!');
    expect(specialNumber(2)).toStrictEqual('Special!!');
    expect(specialNumber(6)).toStrictEqual('NOT!!');
})