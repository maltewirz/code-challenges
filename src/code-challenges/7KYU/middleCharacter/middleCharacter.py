# https://www.codewars.com/kata/56747fd5cb988479af000028/train/python
# You are going to be given a word. Your job is to return the middle character
# of the word. If the word's length is odd, return the middle character. If the
# word's length is even, return the middle 2 characters.


def middleCharacter(s):
    le = int(len(s) / 2)
    if len(s) % 2 == 0:
        return s[le - 1] + s[le]
    else:
        return s[le]


# Alternative
# def middleCharacter(s):
#    return s[(len(s)-1)/2:len(s)/2+1]
