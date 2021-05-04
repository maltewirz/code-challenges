// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/772/

// Given the head of a singly linked list, return true if it is a palindrome.

// Ex 1:
// Input: head = [1,2,2,1]
// Output: true
// Ex 2:
// Input: head = [1,2]
// Output: false

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function isPalindrome(head: ListNode | null): boolean {
    let currentNode = head;
    const arr = [];

    while (currentNode) {
        arr.push(currentNode.val);
        currentNode = currentNode.next;
    }
    return arr.join('') === arr.reverse().join('');
}

// Complexity Analysis
// Time complexity : O(n).
// Space complexity : O(n).

// Further challenge: Solution with O(1) space

function isPalindromeSpace(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;
    let prev;
    let temp;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    prev = slow;
    slow = slow?.next;
    prev.next = null;

    while (slow) {
        temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    fast = head;
    slow = prev;

    while (slow) {
        if (fast.val !== slow.val) {
            return false;
        } else {
            fast = fast?.next;
            slow = slow.next;
        }
    }
    return true;
}

// Complexity Analysis
// Time complexity : O(n).
// Space complexity : O(1).
