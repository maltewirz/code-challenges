# https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/python

# Your task is to construct a building which will be a pile of n
#  cubes. The cube at the bottom will have a volume of n^3, the
#   cube above will have volume of (n-1)^3 and so on until the
#    top which will have a volume of 1^3.

# You are given the total volume m of the building. Being given
#  m can you find the number n of cubes you will have to build?

# The parameter of the function findNb (find_nb, find-nb, findNb)
#  will be an integer m and you have to return the integer n such
#   as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if
#    there is no such n.

# Examples:
# findNb(1071225) --> 45
# findNb(91716553919377) --> -1
# mov rdi, 1071225
# call find_nb            ; rax <-- 45

# mov rdi, 91716553919377
# call find_nb            ; rax <-- -1


# Solution Note:
# 1^3 + 2^3 + ... + n^3 is equal to [n*(n+1)/2]^2 = m.

# Used the formula for the sum of cubes: m = (n(n+1)/2)^2
# Rearranged to find n^2 + n = n(n+1) ~= n^2 ~= 2sqrt(m),
# so take square root and round down the result.

import math


def find_nb(m):
    target = int(math.sqrt(2 * (math.sqrt(m))))

    if (target * (target + 1) // 2) ** 2 == m:
        return target
    else:
        return -1


# Alternative

# def find_nb(m):
#     n = 1
#     volume = 0
#     while volume < m:
#         volume += n ** 3
#         if volume == m:
#             return n
#         n += 1
#     return -1
