# https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/python

# Simple, given a string of words, return the length of the shortest word(s).

# String will never be empty and you do not need to account for different data types.


def find_short(s):
    length = len(s.split()[0])
    for word in s.split():
        if len(word) < length:
            length = len(word)
    return length


# Alternative
# def find_short(s):
#     return min(len(x) for x in s.split())