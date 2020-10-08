# https://www.codewars.com/kata/54ff3102c1bad923760001f3
# Return the number (count) of vowels in the given string.
# We will consider a, e, i, o, u as vowels for this Kata (but not y).
# The input string will only consist of lower case letters and/or spaces.

def vowelCount(input_str):
    num_vowels = 0
    vowels = "aeiouAEIOU"
    for e in input_str:
        if (e in vowels):
            num_vowels += 1
    
    return num_vowels