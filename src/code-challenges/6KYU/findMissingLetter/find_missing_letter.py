# https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/python

# #Find the missing letter

# Write a method that takes an array of consecutive (increasing) letters as
#  input and that returns the missing letter in the array.

# You will always get an valid array. And it will be always exactly one letter
#  be missing. The length of the array will always be at least 2.
# The array will always contain letters in only one case.

# Example:

# ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

# ["a","b","c","d","f"] -> "e"
# ["O","Q","R","S"] -> "P"
# (Use the English alphabet with 26 letters!)F

# Have fun coding it and please don't forget to vote and rank this kata! :-)

# I have also created other katas. Take a look if you enjoyed this kata!


def find_missing_letter(chars):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    if chars[0] == chars[0].upper():
        alphabet = [x.upper() for x in alphabet]
    startIndex = alphabet.index(chars[0])
    for i in range(1, len(chars)):
        if chars[i] != alphabet[startIndex + i]:
            return alphabet[startIndex + i]


# Alternative:
# def find_missing_letter(chars):
#     n = 0
#     while ord(chars[n]) == ord(chars[n+1]) - 1:
#         n += 1
#     return chr(1+ord(chars[n]))
# The ord() function returns an integer representing the Unicode character.
