import { riddle } from './riddle';
test('basic test', () => {
    expect(riddle('ab?ac?')).toHaveLength(6);
});
