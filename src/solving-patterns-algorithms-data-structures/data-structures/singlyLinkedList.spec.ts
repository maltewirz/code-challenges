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

    test('remove a value from the list', () => {
        const list = new SinglyLinkedList();
        list.push(1);
        list.push(2);
        list.pop();
        expect(list.length).toStrictEqual(1);
    });
});
