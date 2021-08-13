# https://www.codewars.com/kata/52fba66badcd10859f00097e/train/python
"""
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
"""

def disemvowel(string):
    result = ""
    for e in string:
        l = e.lower()
        if l != 'a' and l != 'e' and l != 'i' and l != 'o' and l != 'u':
            result += e
    return result 


# Alternative Solution

# def disemvowel(s):
#     for i in "aeiouAEIOU":
#         s = s.replace(i,'')
#     return s