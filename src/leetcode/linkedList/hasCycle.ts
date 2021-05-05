// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/773/
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again
// by continuously following the next pointer. Internally, pos is used to denote the index of the
// node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Input: head = [3,2,0,-4] and -4 points to, pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function hasCycle(head: ListNode | null): boolean {
    const visited: { [key: string]: ListNode } = {};
    let node = head;
    while (node) {
        if (visited[node.val] === node) {
            return true;
        }
        visited[node.val] = node;
        node = node?.next;
    }
    return false;
}

// Runtime: 104 ms
// Memory Usage: 44.2 MB
// time: O(n)
// space: O(n)


function hasCycleSet(head: ListNode | null): boolean {
    const set = new Set();
    let node = head;
    // return true when node has been visited and saved in the set
    while (node !== null) {
        if (set.has(node)) {
            return true;
        }
        set.add(node);
        node = node.next;
    }
    return false;
}

// Runtime: 88 ms
// Memory Usage: 42.7 MB
// time: O(n)
// space: O(n)


function hasCycleFastSlow(head: ListNode | null): boolean {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow?.next;
        if (fast == slow) {
            return true;
        }
    }
    return false;
}

// Runtime: 96 ms
// Memory Usage: 41.7 MB
// time: O(n)
// space: O(1)