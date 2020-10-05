import { fibonacci, fibonacciMemo, fibonacciTab } from './dynamicProgramming';

describe('dynamic Programming', () => {
    test(' via the fibonacci sequence', () => {
        expect(fibonacci(4)).toStrictEqual(3);
    });

    test(' via the fibonacci with Memoization', () => {
        expect(fibonacciMemo(4, [])).toStrictEqual(3);
        expect(fibonacciMemo(44, [])).toStrictEqual(701408733);
    });

    test(' via the fibonacci with Tabulation', () => {
        expect(fibonacciTab(4)).toStrictEqual(3);
    });
});
