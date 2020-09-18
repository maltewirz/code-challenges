// @ts-nocheck
import { Node, DoublyLinkedList } from './doublyLinkedList';


describe('DoublyLinkedList', () => {
    test('Node Class can be instantiated', () => {
        const node = new Node(3);
        expect(node instanceof Node).toStrictEqual(true);
    })

    test('Doubly Linked List Class can be instantiated', () => {
        const node = new DoublyLinkedList();
        expect(node instanceof DoublyLinkedList).toStrictEqual(true);
    })

    test('value can be pushed to the list', () => {
        const list = new DoublyLinkedList();
        list.push(1)
        list.push(2)
        expect(list.length).toStrictEqual(2);
    })

    test('node can be removed from the end (pop) from the list', () => {
        const list = new DoublyLinkedList();
        list.push(1)
        list.push(2)
        list.pop()
        expect(list.length).toStrictEqual(1);
    })

    test('node can be removed from the start (shift) from the list', () => {
        const list = new DoublyLinkedList();
        list.push(1)
        list.push(2)
        list.shift()
        expect(list.length).toStrictEqual(1);
    })

    test('value can be added to the start (unshift) from the list', () => {
        const list = new DoublyLinkedList();
        list.push(1)
        list.push(2)
        list.unshift(0)
        expect(list.length).toStrictEqual(3);
    })

    test('node can be retrieved (get) from the list', () => {
        const list = new DoublyLinkedList();
        list.push(1)
        list.push(2)
        expect(list.get(0).val).toStrictEqual(1);
    })

    test('node can be set on the list', () => {
        const list = new DoublyLinkedList();
        list.push(1)
        list.push(2)
        expect(list.set(0,5)).toStrictEqual(true)
        expect(list.get(0).val).toStrictEqual(5);
    })

    test('value can be inserted at a specific index on the list', () => {
        const list = new DoublyLinkedList();
        list.push(1)
        list.push(2)
        expect(list.set(1,5)).toStrictEqual(true)
        expect(list.get(1).val).toStrictEqual(5);
    })

    test('value can be inserted at a specific index on the list', () => {
        const list = new DoublyLinkedList();
        list.push(1)
        list.push(2)
        list.push(3)
        list.remove(1)
        expect(list.get(1).val).toStrictEqual(3);
    })
})
