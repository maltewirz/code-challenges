import { containAllRots } from './containAllRots';

test('basic test', () => {
    expect(containAllRots('', [])).toStrictEqual(true);
    expect(containAllRots('', ["bsjq", "qbsj"])).toStrictEqual(true);
    expect(containAllRots('bsjq', ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])).toStrictEqual(true);
    expect(containAllRots('XjYABhR', ["TzYxlgfnhf", "yqVAuoLjMLy", 
        "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"])).toStrictEqual(false);
})