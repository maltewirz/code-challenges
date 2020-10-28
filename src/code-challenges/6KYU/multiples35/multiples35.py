# https://www.codewars.com/kata/514b92a657cdc65150000006/train/python

# If we list all the natural numbers below 10 that are multiples of
#  3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Finish the solution so that it returns the sum of all the multiples
#  of 3 or 5 below the number passed in.

# Note: If the number is a multiple of both 3 and 5, only count it
#  once. Also, if a number is negative, return 0(for languages
#   that do have them)

from functools import reduce


def multiples35(number):
    multiples = []
    for i in range(1, number):
        if i % 3 == 0 or i % 5 == 0:
            multiples.append(i)
    if len(multiples) == 0:
        return 0
    return reduce(lambda x, y: x + y, [] or multiples)


# Alternative:
# def solution(number):
#     return sum(x for x in range(number) if x % 3 == 0 or x % 5 == 0)
