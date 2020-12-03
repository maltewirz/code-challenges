# https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/python

# The maximum sum subarray problem consists in finding the maximum sum
#  of a contiguous subsequence in an array or list of integers:

# max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
# # should be 6: [4, -1, 2, 1]
# Easy case is when the list is made up of only positive numbers and
#  the maximum sum is the sum of the whole array. If the list is made
#   up of only negative numbers, return 0 instead.

# Empty list is considered to have zero greatest sum. Note that the
#  empty list or array is also a valid sublist/subarray.

# Sliding window solution:
def max_sequence(arr):
    if len(arr) == 0:
        return 0

    result = []

    for window in range(1, len(arr) + 1):

        maxArr = []
        tempArr = []

        for i in range(window):
            maxArr.append(arr[i])
        tempArr = maxArr[:]
        for i in range(window, len(arr)):
            tempArr.pop(0)
            tempArr.append(arr[i])
            if sum(tempArr) > sum(maxArr):
                maxArr = tempArr[:]
        if sum(maxArr) > sum(result):
            result = maxArr[:]
    return result


# Alternative but not with array but instead only the sum:

# def max_sequence(arr):
#     max, curr = 0, 0
#     for x in arr:
#         curr += x
#         if curr < 0:
#             curr = 0
#         if curr > max:
#             max = curr
#     return max