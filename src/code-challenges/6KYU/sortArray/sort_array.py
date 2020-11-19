# https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/python

# You have an array of numbers.
# Your task is to sort ascending odd numbers but even numbers must
#  be on their places.

# Zero isn't an odd number and you don't need to move it. If you have
#  an empty array, you need to return it.

# Example

# sort_array([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]


def sort_array(source_array):
    oddNums = []
    indexNums = []
    for i in range(len(source_array)):
        if source_array[i] % 2 != 0:
            oddNums.append(source_array[i])
            indexNums.append(i)
    oddNums.sort()
    for i in range(len(indexNums)):
        source_array[indexNums[i]] = oddNums[i]
    return source_array


# Alternative:
# def sort_array(arr):
#     odds = sorted((x for x in arr if x % 2 != 0), reverse=True)
#     print(odds)
#     return [x if x % 2 == 0 else odds.pop() for x in arr]
