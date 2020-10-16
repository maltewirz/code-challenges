# https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/python

# Take 2 strings s1 and s2 including only letters from ato z. Return
# a new sorted string, the longest possible, containing distinct letters,
# each taken only once - coming from s1 or s2.


def longest(s1, s2):
    s = s1 + s2
    lS = list(set(s))
    lS.sort()
    return "".join(lS)


# Alternative
# def longest(a1, a2):
#     return "".join(sorted(set(a1 + a2)))
