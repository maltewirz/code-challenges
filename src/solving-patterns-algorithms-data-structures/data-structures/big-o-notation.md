# Big O Notation

* Used for performance of an algorithm, independant from hardware
* High Level Understanding of time and space complexity of an algorithm
* Precision does not matter, only general trends: Linear, Quadratic, Constant

### Time complexity

Big O: Defines how does the runtime of an algorithm grows as the inputs grow.

**O(f(n))** if the number of simple operations the computer has to do is eventually less than a constant times **f(n)**, as **n** increases

* f(n) could be linear (f(n) = n)

* f(n) could be quadratic (f(n) = n ^2 )

* f(n) could be constant (f(n) = 1)

* f(n) could be something entirely different!

```js
function addUpTo(n) { //faster always 3 ops: O(1)
  return n * (n + 1) / 2;
}

function addUpTo(n) { // slower: alway n ops: O(n)
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function printAllPairs(n) { //slowest: n^2 ops: O(n^2)
  for (let i = 0; i < n; i++) {
    for (var j = 0; i < n; j++) {
      console.log(i,j);
    }
  }
}

```

Note: There is no such thing as O(50n). Instead it is O (n).



Big O Shorthands

* Arithmetic operations are constant

* Variable assignments is constant

* Accessing elements in an array (by index) or object (by key) is constant

* In a loop, the complexity is the length of the loop times the complexity what happens inside loop

  ```js
  //Diagram:
  y O(n^2)
  y			O(nlog n)
  y				O(n)
  y
  y							O(log n)
  y x x x x x x x  O(1)
  ```

### Space Complexity

Defines how much additional memory do we need for the code in our algorithm.

Auxiliary space complexity: Additional memory just for algorithm w/o inputs.

Shorthands:

* Most primitives (booleans, numbers, undefined, null) are constant space
* Strings require O(n) space (where n is the string length)
* Reference types are generally O(n), where n is  the length (for arrays) or the number of keys (for objects)

```js
function sum(arr) {  // just two numbers: total and i: O(1) space
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function double(arr) { // the newArr has as many numbers as arr: O(n) space
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
```

### Logarithms

```js
log2(8) = 3. 			-> 			2^3 = 8
log2(value) = exponent -> 2^exponent = value
```

We'll omit the 2 : log === log2

Shorthand:

* The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

