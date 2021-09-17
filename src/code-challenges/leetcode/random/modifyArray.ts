/*
WORK IN PROGRESS

Given an array of integers, the cost to change an element is the absolute difference between its
initial value and its new value. For example, if the element is initially 10, it can be changed to
7 or 13 for a cost of 3. Determine the minimum cost to sort the array either ascending or
descending along its length.

Example 
n = 6 
arr = [0, 1, 2, 5, 6, 5, 7]
* Only arr[5] = 5 violates the order for an ascending sort. 
* If the value 5 is increased to 6,the array will be sorted in
ascending order: arr' = [0, 1, 2, 5, 6, 6, 7]. 
* The cost is / arr[5] - arr'[5] / = / 5-6 / = 1.

Sample Input: 6, [9,8,7,2,3,3]
Sample Output: 1

* Only arr[3] = 2 violates the array descending order
* If the value 2 is increased to 3, the array will be sorted in descending order: arr =[9,8,7,3,3,3]
* The minimum cot to sort it in descending order is: arr[3] - arr'[3] = 2-3 = 1


1. get arr
2. loop through array to figure out if ascending or descending (check if more than one instance)
3. at which index is the sorting broken?, 
    make that number similar to the next or previous (determine which is cheaper) and get result
4. otherwise return 0
 */

export function modifyArray(arr: number[]): number {
    console.log('input',arr)
    let ascending = 0
    let ascIdx = 0
    let descending = 0
    let descIdx = 0
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] < arr[i+1]) {
            ascIdx = i
            ascending++
        } else if (arr[i] > arr[i+1]) {
            descIdx = i
            descending++
        }
    }
    console.log('overview',ascending, descending, ascIdx, descIdx)
    if (ascending === 0 || descending === 0) {
        return 0
    }

    // descending
    if (descending > ascending) {
        
        // if (arr === arr.sort((a,b) => a-b)) {
        //     return 0
        // }
        console.log('descending', ascIdx, arr[ascIdx])
        const prevDiff = Math.abs(arr[ascIdx] - arr[ascIdx-1])
        const nextDiff = Math.abs(arr[ascIdx] - arr[ascIdx+1])
        if (prevDiff <= nextDiff) {
            arr[ascIdx] = arr[ascIdx-1]
            console.log('arr', arr)
            return prevDiff
        } else {
            arr[ascIdx] = arr[ascIdx+1]
            console.log('arr', arr)
            return nextDiff

        }
    // ascending
    } else {
        // if (arr === arr.sort((a,b) => b-a)) {
        //     return 0
        // }
        console.log('ascending', descIdx, arr[descIdx])
        const prevDiff = Math.abs(arr[descIdx] - arr[descIdx-1])
        const nextDiff = Math.abs(arr[descIdx] - arr[descIdx+1])
        if (prevDiff <= nextDiff) {
            arr[descIdx] = arr[descIdx-1]
            return prevDiff
        } else {
            arr[descIdx] = arr[descIdx+1]
            return nextDiff
        }
    }
    console.log('arr', arr)
}

