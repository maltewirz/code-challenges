import { isValidParentheses, isValidParenthesesAlternative } from './isValidParentheses';

test('Basic Test', () => {
    expect(isValidParentheses('()[]{}')).toStrictEqual(true);
    expect(isValidParentheses('{[]}')).toStrictEqual(true);
    expect(isValidParentheses('([)]')).toStrictEqual(false);

    expect(isValidParenthesesAlternative('()[]{}')).toStrictEqual(true);
    expect(isValidParenthesesAlternative('{[]}')).toStrictEqual(true);
    expect(isValidParenthesesAlternative('([)]')).toStrictEqual(false);
});
