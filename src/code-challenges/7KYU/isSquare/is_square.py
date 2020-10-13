# https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/python
# Given an integral number, determine if it's a square number:

# In mathematics, a square number or perfect square is an integer that
# is the square of an integer; in other words, it is the product of
# some integer with itself.

# The tests will always use some integral number, so don't worry about
# that in dynamic typed languages.

# Examples
# -1  =>  false
#  0  =>  true
#  3  =>  false
#  4  =>  true
# 25  =>  true
# 26  =>  false

import math


def is_square(n):
    if n >= 0:
        num = math.sqrt(n)
        return num.is_integer()
    else:
        return False


# Alternative:
# import math
# def is_square(n):
#     return n > -1 and math.sqrt(n) % 1 == 0;
