import { findRoutes } from './findRoutes';

test('Basic Test', () => {
    expect(
        findRoutes([
            ['MNL', 'TAG'],
            ['CEB', 'TAC'],
            ['TAG', 'CEB'],
            ['TAC', 'BOR'],
        ])
    ).toStrictEqual('MNL, TAG, CEB, TAC, BOR');
});
