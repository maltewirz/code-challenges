# https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/python

# Your task is to make a function that can take any non-negative integer as
# an argument and return it with its digits in descending order. Essentially,
# rearrange the digits to create the highest possible number.

# Examples:
# Input: 42145 Output: 54421


def descending_order(num):
    arr = []
    for char in str(num):
        arr.append(int(char))
    arr.sort(reverse=True)
    for i, num in enumerate(arr):
        arr[i] = str(arr[i])
    return int("".join(arr))


# Alternative:
# def descending_Order(num):
#     return int("".join(sorted(str(num), reverse=True)))