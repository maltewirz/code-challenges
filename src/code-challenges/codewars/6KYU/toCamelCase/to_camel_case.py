# https://www.codewars.com/kata/517abf86da9663f1d2000003/train/python

# Complete the method/function so that it converts dash/underscore delimited
#  words into camel casing. The first word within the output should be capitalized
#   only if the original word was capitalized (known as Upper Camel Case, also
#    often referred to as Pascal case).

# Examples
# to_camel_case("the-stealth-warrior") # returns "theStealthWarrior"

# to_camel_case("The_Stealth_Warrior") # returns "TheStealthWarrior"


def to_camel_case(text):
    result = ""
    temp = ''
    tempList = []
    for i in range(len(text)):
        char = text[i]
        if (char == '-' or char == '_'):
            tempList.append(temp)
            temp = ''
        else:
            temp += char
    tempList.append(temp)

    result += tempList[0]
    for word in tempList[1:]:
        result += word[0].upper() + word[1:]
    return result

# Alternative:
# def to_camel_case(s):
#     return s[0] + s.title().translate(None, "-_")[1:] if s else s

# Explanations:
# The title() method returns a copy of the string in which first characters of all the words are capitalized.

# The translate() method returns a copy of the string in which all characters have been translated using table (constructed with the maketrans() function in the string module), optionally deleting all characters found in the string deletechars.
