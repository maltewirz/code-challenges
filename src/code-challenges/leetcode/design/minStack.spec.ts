import { MinStack} from './minStack';

test('Basic Test', () => {
    let stackInstance = new MinStack();
    stackInstance.push(3)
    expect(stackInstance.stack[0]).toStrictEqual(3)
    stackInstance.push(4)
    stackInstance.push(5)
    stackInstance.pop()
    expect(stackInstance.stack).toStrictEqual([3,4])
    expect(stackInstance.top()).toStrictEqual(4)
    expect(stackInstance.getMin()).toStrictEqual(3)
})