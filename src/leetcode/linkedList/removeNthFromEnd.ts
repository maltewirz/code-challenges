// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

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
 *  The "dummy" node is used to simplify some corner cases
 *  such as a list with only one node, or removing the head of the list. 
 */

export function removeNthFromEnd(
    head: ListNode | null,
    n: number
): ListNode | null {
    let dummy = new ListNode(0);
    dummy.next = head;
    let length = 0;
    let first = head;

    while (first != null) {
        length++;
        first = first.next;
    }

    length -= n;
    first = dummy;

    while (length > 0) {
        length--;
        first = first.next;
    }
    first.next = first.next.next
    return dummy.next

}

//loop through values with a counter, until count == n
// the do same operation as deleteNode and return head.
// node.val = node.next.val;
// node.next = node.next.next;

    // let count = 0;
    // let current = head;
    // // console.log(n);

    // while (count <= n) {
    //     current = current.next
    //     count++;
    //     if (count === n) {
    //         current.val = head.next.val;
    //         current.next = current.next.next
    //     }
    // }
    // return head;





    // let fast = head;
    // let slow = head;

    // for (let i = 0; i < n; i++) {
    //     fast = fast.next;
    // }
    // if (!fast) {
    //     return head.next;
    // }
    // while (fast.next) {
    //     fast = fast.next
    //     slow = slow.next
    // }
    // slow.next = slow.next.next
    // return head
