import { Node, SinglyLinkedList } from './singlyLinkedList';

describe('SinglyLinkedList', () => {
    test('instantiate a Node', () => {
        const node = new Node(5);
        expect(node instanceof Node).toStrictEqual(true);
    });
    test('instantiate a SinglyLinkedList', () => {
        const list = new SinglyLinkedList();
        expect(list instanceof SinglyLinkedList).toStrictEqual(true);
    });
    test('push a value to the list', () => {
        const list = new SinglyLinkedList();
        const emptyList = { head: null, tail: null, length: 0 };
        expect(list).toMatchObject(emptyList);

        list.push(1);

        const singleItemList = {
            head: { val: 1, next: null },
            tail: { val: 1, next: null },
            length: 1,
        };
        expect(list).toMatchObject(singleItemList);

        list.push(2);

        const doubleItemList = {
            head: { val: 1, next: { val: 2, next: null } },
            tail: { val: 2, next: null },
            length: 2,
        };
        expect(list).toMatchObject(doubleItemList);
    });
    test('return the correct length of the list', () => {
        const list = new SinglyLinkedList();
        expect(list.length).toStrictEqual(0);
        list.push(1);
        list.push(2);
        expect(list.length).toStrictEqual(2);
    });

    test('remove (pop) a value from the back of the list', () => {
        const list = new SinglyLinkedList();
        list.push(1);
        list.push(2);
        expect(list.pop()).toMatchObject({ val: 2, next: null });
        expect(list.length).toStrictEqual(1);
    });

    test('remove (shift) a value from the start of the list', () => {
        const list = new SinglyLinkedList();
        list.push(1);
        list.push(2);

        list.shift();

        expect(list.length).toStrictEqual(1);
        expect(list.head).toMatchObject({ val: 2, next: null });
    });

    test('add (unshift) a value to the start of the list', () => {
        const list = new SinglyLinkedList();
        list.push(1);
        list.push(2);

        list.unshift(3);

        expect(list.length).toStrictEqual(3);
        expect(list.head.val).toStrictEqual(3);
    });

    test('get a value from a given index', () => {
        const list = new SinglyLinkedList();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);

        expect(list.get(0).val).toStrictEqual(1);
        expect(list.get(3).val).toStrictEqual(4);
    });

    test('set a value from a given index', () => {
        const list = new SinglyLinkedList();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);

        expect(list.set(0, 5)).toStrictEqual(true);
        expect(list.get(0).val).toStrictEqual(5);
        expect(list.set(7, 5)).toStrictEqual(false);
    });

    test('insert a value from a given index', () => {
        const list = new SinglyLinkedList();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);

        expect(list.insert(1, 9)).toStrictEqual(true);
        expect(list.get(0).val).toStrictEqual(1);
        expect(list.get(1).val).toStrictEqual(9);
        expect(list.get(2).val).toStrictEqual(2);
    });

    test('remove a value from a given index', () => {
        const list = new SinglyLinkedList();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);

        expect(list.remove(1).val).toStrictEqual(2);
        expect(list.get(1).val).toStrictEqual(3);
    });

    test('print all values from the list in an array', () => {
        const list = new SinglyLinkedList();
        list.push(1);
        list.push(2);
        expect(list.print()).toStrictEqual([1, 2]);
    });

    test('reverse the list', () => {
        const list = new SinglyLinkedList();
        list.push(1);
        list.push(2);
        list.reverse()
        expect(list.get(0).val).toStrictEqual(2);
        expect(list.get(1).val).toStrictEqual(1);
    });
});
