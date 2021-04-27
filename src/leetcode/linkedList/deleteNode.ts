// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/553/

// Write a function to delete a node in a singly-linked list. You will not be given access to the
// head of the list, instead you will be given access to the node to be deleted directly.

// It is guaranteed that the node to be deleted is not a tail node in the list.

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export function deleteNode(node: ListNode | null): void {
    node.val = node.next.val;
    node.next = node.next.next;
}
