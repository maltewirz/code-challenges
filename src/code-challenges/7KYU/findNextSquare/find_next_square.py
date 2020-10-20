# https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/python
# You might know some pretty large perfect squares. But what about
# the NEXT one?

# Complete the findNextSquare method that finds the next integral
#  perfect square after the one passed as a parameter. Recall that
#   an integral perfect square is an integer n such that sqrt(n
#    is also an integer.

# If the parameter is itself not a perfect square then -1 should
#  be returned. You may assume the parameter is positive.
import math


def find_next_square(sq):
    if math.sqrt(sq).is_integer():
        for num in range(sq + 1, sq ** 2):
            if math.sqrt(num).is_integer():
                return num
    # Return the next square if sq is a square, -1 otherwise
    return -1


# Alternative:
# def find_next_square(sq):
#     root = sq ** 0.5
#     if root.is_integer():
#         return (root + 1)**2
#     return -1
