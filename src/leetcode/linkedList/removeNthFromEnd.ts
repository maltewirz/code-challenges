// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// Two pass approach
export function removeNthFromEnd(
    head: ListNode | null,
    n: number
): ListNode | null {
    // Create dummy for corner cases- e.g. one node
    const dummy = new ListNode(0);
    dummy.next = head;
    let length = 0;
    let first = head;
    // loop through linkedList to get length
    while (first != null) {
        length++;
        first = first.next;
    }
    // adjust length to get to n
    length -= n;
    first = dummy;
    // loop until at nth element
    while (length > 0) {
        length--;
        first = first.next;
    }
    //now remove the next item at this node and assign after next
    first.next = first.next.next;
    return dummy.next;
}

// Complexity Analysis

// Time complexity : O(L) The algorithm makes two traversals of the list of 2L nodes.

// Space complexity : O(1). We only used constant extra space.

// One pass approach
export function removeNthFromEndOnePass(
    head: ListNode | null,
    n: number
): ListNode | null {
    const dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;

    for (let i = 1; i <= n + 1; i++) {
        first = first.next;
    }
    while (first != null) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
}

// Complexity Analysis

// Time complexity : O(L) The algorithm makes one traversal of the list of L nodes.

// Space complexity : O(1). We only used constant extra space.
