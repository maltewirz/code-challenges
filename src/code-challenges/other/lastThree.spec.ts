import { lastThree } from './lastThree';

test('Basic Test', () => {
    expect(
        lastThree({
            data: 'a',
            next: {
                data: 'b',
                next: {
                    data: 'c',
                    next: {
                        data: 'd',
                        next: {
                            data: 'e',
                            next: {
                                data: 'f',
                                next: {
                                    data: 'g',
                                    next: {
                                        data: 'h',
                                        next: null,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        })
    ).toStrictEqual(['f', 'g', 'h']);
});
