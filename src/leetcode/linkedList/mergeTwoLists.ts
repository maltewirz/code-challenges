// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/771/

// Merge two sorted linked lists and return it as a sorted list. The list
// should be made by splicing together the nodes of the first two lists.

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// Iterative Solution:
function mergeTwoLists(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    // maintain an unchanging reference to node ahead of the return code
    const tempNode: ListNode = new ListNode(0, null);
    let currentNode: ListNode = tempNode;

    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            currentNode.next = l1;
            l1 = l1.next;
        } else {
            currentNode.next = l2;
            l2 = l2.next;
        }
        currentNode = currentNode.next;
    }

    // at least one of l1 and l2 can still have nodes at this point, so connect
    // the non-null list to the end of the merged list.
    currentNode.next = l1 == null ? l2 : l1;
    return tempNode.next;
}

// Recursive Solution:
function mergeTwoListsRecursive(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    if (l1 == null) {
        return l2;
    } else if (l2 == null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoListsRecursive(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoListsRecursive(l1, l2.next);
        return l2;
    }
}

// Recursive pattern:
// list1[0]+merge(list1[1:],list2) // list1[0]<list2[0]:
// list2[0]+merge(list1,list2[1:])     // otherwise
