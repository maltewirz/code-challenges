// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

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
    let current = head;
    // loop through linkedList to get length
    while (current != null) {
        length++;
        current = current.next;
    }
    // adjust length to get to n
    length -= n;
    current = dummy;
    // loop until at nth element
    while (length > 0) {
        length--;
        current = current.next;
    }
    // now remove the next item at this node and assign after next
    current.next = current.next.next;
    return dummy.next;
}

// Complexity Analysis

// Time complexity : O(n) The algorithm makes two traversals of the list of 2n nodes.
// Space complexity : O(1). We only used constant extra space.

// One pass approach:
// Send currentFast variable to the nth position.
// Then move currentFast and slow variable until currentFast reaches end.
// Now the slow variable is where the deletion should occur.
export function removeNthFromEndOnePass(
    head: ListNode | null,
    n: number
): ListNode | null {
    const dummy = new ListNode(0);
    dummy.next = head;
    let currentFast = dummy;
    let slow = dummy;

    for (let i = 0; i <= n; i++) {
        currentFast = currentFast.next;
    }
    while (currentFast != null) {
        currentFast = currentFast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}

// Complexity Analysis

// Time complexity : O(n) The algorithm makes one traversal of the list of n nodes.
// Space complexity : O(1). We only used constant extra space.

function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;
    let length = 0;
    while (current.next) {
        length++;
        current = current.next;
    }
    current = dummy;
    for (let i = 0; i < length - n; i++) {
        current = current.next;
    }
    current.next = current.next.next;
    return head;
}
