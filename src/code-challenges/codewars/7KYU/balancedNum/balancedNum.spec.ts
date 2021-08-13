import { balancedNum } from './balancedNum';

test('Basic test', () => {
    expect(balancedNum(7)).toStrictEqual('Balanced');
    expect(balancedNum(959)).toStrictEqual('Balanced');
    expect(balancedNum(643246)).toStrictEqual('Balanced');
    expect(balancedNum(432)).toStrictEqual('Not Balanced');
    expect(balancedNum(56239814)).toStrictEqual('Balanced');
})