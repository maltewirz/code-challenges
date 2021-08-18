import { canOpenAllRooms } from './rooms';

test('Basic Test', () => {
    expect(
        canOpenAllRooms([
            [1, 2], // room 0
            [], // room 1
            [1, 4], // room 2
            [], // room 3
            [2, 3], // room 4
        ])
    ).toStrictEqual(true);

    expect(
        canOpenAllRooms([
            [1, 2], // room 0
            [], // room 1
            [1, 4], // room 2
            [], // room 3
            [2], // room 4
        ])
    ).toStrictEqual(false);
});
