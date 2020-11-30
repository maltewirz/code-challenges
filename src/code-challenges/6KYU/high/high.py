# https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/python

# Given a string of words, you need to find the highest scoring word.

# Each letter of a word scores points according to its position in
#  the alphabet: a = 1, b = 2, c = 3 etc.

# You need to return the highest scoring word as a string.

# If two words score the same, return the word that appears earliest
#  in the original string.

# All letters will be lowercase and all inputs will be valid.

import string


def high(x):
    alphabet = string.ascii_lowercase
    highestCount = 0
    finalword = ""
    for word in x.split():
        wordCount = 0
        for char in word:
            wordCount += alphabet.index(char) + 1
        if wordCount > highestCount:
            highestCount = wordCount
            finalword = word
    return finalword

# Alternative:
# The ord() function returns an integer representing the Unicode character.
# def high(x):
#     return max(x.split(), key=lambda k: sum(ord(c) - 96 for c in k))
