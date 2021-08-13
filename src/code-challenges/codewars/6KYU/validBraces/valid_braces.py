# https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/python

# Write a function that takes a string of braces, and determines if the
#  order of the braces is valid. It should return true if the string is
#   valid, and false if it's invalid.

# This Kata is similar to the Valid Parentheses Kata, but introduces new
#  characters: brackets [], and curly braces {}. Thanks to @arnedag for
#   the idea!

# All input strings will be nonempty, and will only consist of parentheses,
#  brackets and curly braces: ()[]{}.

# What is considered Valid?
# A string of braces is considered valid if all braces are matched with
#  the correct brace.

# Examples
# "(){}[]"   =>  True
# "([{}])"   =>  True
# "(}"       =>  False
# "[(])"     =>  False
# "[({})](]" =>  False


def valid_braces(string):
    pairs = {"}": "{", "]": "[", ")": "("}
    queue = []

    for brace in string:
        if brace in pairs:
            if queue and queue[-1] == pairs[brace]:
                queue.pop()
        else:
            queue.append(brace)

    return len(queue) == 0
