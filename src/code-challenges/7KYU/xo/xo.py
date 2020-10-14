# https://www.codewars.com/kata/55908aad6620c066bc00002a/train/python

# Check to see if a string has the same amount of 'x's and 'o's. The
# method must return a boolean and be case insensitive. The string
# can contain any char.


def xo(s):
    counterX = 0
    counterO = 0
    s = s.lower()

    for e in s:
        if e == "x":
            counterX += 1
        if e == "o":
            counterO += 1

    return counterO == counterX


# Alternative
# def xo(s):
#     s = s.lower()
#     return s.count('x') == s.count('o')
