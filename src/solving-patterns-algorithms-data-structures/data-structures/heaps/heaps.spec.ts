import { MaxBinaryHeap } from './heaps';

describe('MaxBinaryHeap', () => {
    test('MaxBinaryHeap Class can be instantiated', () => {
        const heap = new MaxBinaryHeap();
        expect(heap instanceof MaxBinaryHeap).toStrictEqual(true);
    });

    test('values can be inserted', () => {
        const heap = new MaxBinaryHeap();
        heap.insert(41);
        heap.insert(39);
        heap.insert(33);
        heap.insert(18);
        heap.insert(27);
        heap.insert(12);
        heap.insert(55);
        expect(heap.values).toStrictEqual([55, 39, 41, 18, 27, 12, 33]);
    });

    test('extractMax working', () => {
        const heap = new MaxBinaryHeap();
        heap.insert(41);
        heap.insert(39);
        heap.insert(33);
        heap.insert(18);
        heap.insert(27);
        heap.insert(12);
        heap.insert(55);
        expect(heap.values).toStrictEqual([55, 39, 41, 18, 27, 12, 33]);
        expect(heap.extractMax()).toStrictEqual(55);
        expect(heap.values).toStrictEqual([41, 39, 33, 18, 27, 12]);
    });
});
