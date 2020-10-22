# https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/python

# Given an array of ones and zeroes, convert the equivalent binary value
# to an integer.

# Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

# Examples:

# Testing: [0, 0, 0, 1] ==> 1
# Testing: [0, 0, 1, 0] ==> 2
# Testing: [0, 1, 0, 1] ==> 5
# Testing: [1, 0, 0, 1] ==> 9
# Testing: [0, 0, 1, 0] ==> 2
# Testing: [0, 1, 1, 0] ==> 6
# Testing: [1, 1, 1, 1] ==> 15
# Testing: [1, 0, 1, 1] ==> 11
# However, the arrays can have varying lengths, not just limited to 4.


def binary_array_to_number(arr):
    total = 0
    i = 1

    for num in arr[::-1]:
        total += i * num
        i *= 2
    return total


# Alternative:
# def binary_array_to_number(arr):
#   return int("".join(
#       map(str, arr)
#       ), 2)

# def binary_array_to_number(arr):
#     s = 0
#     for digit in arr:
#         s = s * 2 + digit
#     return s
