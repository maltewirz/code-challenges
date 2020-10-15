# https://www.codewars.com/kata/55f2b110f61eb01779000053/train/python
# Given two integers a and b, which can be positive or negative, find
# the sum of all the numbers between including them too and return it.
# If the two numbers are equal return a or b.
# Note: a and b are not ordered!


def get_sum(a, b):
    result = 0
    if b < a:
        a, b = b, a
    for e in range(a, b + 1):
        result += e
    return result


# Alternative
# def get_sum(a,b):
#     return sum(range(min(a, b), max(a, b) + 1))
