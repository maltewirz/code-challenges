# https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python
# Given an array of integers, find the one that appears an odd number of times.

# There will always be only one integer that appears an odd number of times.

from collections import Counter


def find_it(seq):
    counted = Counter(seq)
    for e in counted:
        if counted[e] % 2 != 0:
            return e
