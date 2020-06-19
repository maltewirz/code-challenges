import { stat } from './stat';

test('Basic test', () => {
    expect(stat('01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17')).toStrictEqual('Range: 01|01|18 Average: 01|38|05 Median: 01|32|34');
})