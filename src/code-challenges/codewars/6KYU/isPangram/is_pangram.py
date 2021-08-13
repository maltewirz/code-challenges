# https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/python

# A pangram is a sentence that contains every single letter of the
#  alphabet at least once. For example, the sentence "The quick
#   brown fox jumps over the lazy dog" is a pangram, because it
#    uses the letters A-Z at least once (case is irrelevant).

# Given a string, detect whether or not it is a pangram. Return
#  True if it is, False if not. Ignore numbers and punctuation.

import string


def is_pangram(s):
    alphabet = string.ascii_lowercase
    for char in s.lower():
        if char in alphabet:
            alphabet = alphabet.replace(char, '')
    return len(alphabet) == 0


# Alternative:
# def is_pangram(s):
#     return set(string.lowercase) <= set(s.lower())
