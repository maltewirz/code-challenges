# https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/python

#  For simplicity, you'll have to capitalize each word, check out
#  how contractions are expected to be in the example below.


def jaden_case(string):
    result = []
    arr = string.split(' ')
    for e in arr:
        result.append(e[0].upper() + e[1:])
    return ' '.join(result)
