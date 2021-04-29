// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// Original Solution adapted from course.
function reverseList(head: ListNode | null): ListNode | null {
    let first = head;
    let tempLength = 0;
    let originalLength = 0;
    let tail;
    // calculate the length of the list
    while (first != null) {
        originalLength++;
        first = first.next;
    }
    first = head;
    tempLength = originalLength;
    // loop through list to find tail and assign tail
    while (tempLength > 1) {
        first = first.next;
        tempLength--;
    }
    tail = first;

    // now the logic from the reverse function of the course.
    let node = head;
    head = tail;
    tail = node;
    let next;
    let prev = null;

    // loop through the list, starting with first item, assigning next to null
    // and previous to the old "next". Then moving node one further.
    for (let i = 0; i < originalLength; i++) {
        if (node) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }
    return head;
}

// Solution from Leetcode
// While you are traversing the list, change the current node's
// next pointer to point to its previous element. Since a node
// does not have reference to its previous node, you must store
// its previous element beforehand. You also need another pointer
// to store the next node before changing the reference. Do not
// forget to return the new head reference at the end!

function reverseList2(head: ListNode | null): ListNode | null {
    let prev = null;
    let curr = head;

    while (curr != null) {
        const nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}
