import { feast } from './feast';

test('basic test', () => {
    expect(feast("great blue heron", "garlic naan")).toStrictEqual(true);
    expect(feast("brown bear", "bear claw")).toStrictEqual(false)
})