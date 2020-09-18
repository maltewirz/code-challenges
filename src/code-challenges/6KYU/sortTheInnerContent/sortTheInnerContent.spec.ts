import { sortTheInnerContent } from './sortTheInnerContent';

test('Basic test', () => {
    expect(sortTheInnerContent('sort the inner content in descending order')) //
        .toStrictEqual('srot the inner ctonnet in dsnnieedcg oredr');
})