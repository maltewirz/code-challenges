// Stack:
// A LIFO (Last In - First Out) data structure. 
// Examples: Used for managing function invocations, UNDO/REDO, Routing

// The last element added to the stack will be the first element removed from the stack.
// Similar to a stack of plates, as you pile it up, the last thing is what gets removed first.
// JS does not have a stack data type, but we can use a list datatype instead.

// LAST    size = 4     FIRST
// 10    <-  2 <-    22  <-  7


// Creating a stack with an Array:
// let stack = [];

// stack.push('google')
// stack.push('instagram')
// stack.push('youtube')
// stack // 'google, 'instagram', 'youtube
// stack.pop() // 'youtube'
// stack.pop() // 'instagram'
// stack.push('amazon')
// stack.pop() // amazons

// stack = [];
// stack.unshift('create new file')
// stack.unshift('reszize new file')
// stack.unshift('cloned out wrinkle')
// stack // 'create new file', 'reszize new file', 'cloned out wrinkle'
// stack.shift()// 'cloned out wrinkle'
// stack.shift()// 'reszize new file'
// stack.shift()// 'create new file'

// This way of managing a stack is very inefficient since the array has to be reindexed upon every operation.
// Therefore the Stack Class below using a SinglyLinked List is much better.
// #### Big O Notation
// * Insertion O(1)  <- Important!
// * Removal O(1)   <- Important!
// * Searching O(n)
// * Access O(n)

export class Node {
    value: number;
    next: Node | null;
    constructor(value: number){
        this.value = value;
        this.next = null;
    }
}

export class Stack {
    first: Node | null;
    last:  Node | null;
    size: number;
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val: number): number{
        const newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(): number | null {
        if(!this.first) {
            return null;
        }
        const temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}