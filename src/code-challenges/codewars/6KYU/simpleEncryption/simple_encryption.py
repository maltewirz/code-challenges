# https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/python

# For building the encrypted string:
# Take every 2nd char from the string, then the other chars, that
#  are not every 2nd char, and concat them as new String.
# Do this n times!

# Examples:

# "This is a test!", 1 -> "hsi  etTi sats!"
# "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
# Write two methods:

# def encrypt(text, n)
# def decrypt(encrypted_text, n)
# For both methods:
# If the input-string is null or empty return exactly this value!
# If n is <= 0 then return the input text.

# This kata is part of the Simple Encryption Series:
# Simple Encryption #1 - Alternating Split
# Simple Encryption #2 - Index-Difference
# Simple Encryption #3 - Turn The Bits Around
# Simple Encryption #4 - Qwerty

# Have fun coding it and please don't forget to vote and rank this
#  kata! :-)

import math


def decrypt(encrypted_text, n):
    for e in range(n):
        length = math.floor(len(encrypted_text) / 2)
        even = encrypted_text[length:]
        odd = encrypted_text[:length]
        result = ""
        for i in range(len(even)):
            if len(even) > i:
                result += even[i]
            if len(odd) > i:
                result += odd[i]
        encrypted_text = result
    return encrypted_text


def encrypt(text, n):
    for e in range(n):
        even = ""
        odd = ""
        for i in range(len(text)):
            if i % 2 != 0:
                odd += text[i]
            else:
                even += text[i]
        text = odd + even
    return text


# Alternative
# def decrypt(text, n):
#     if text in ("", None):
#         return text
#     ndx = len(text) // 2

#     for i in range(n):
#         a = text[:ndx]
#         b = text[ndx:]
#         text = "".join(b[i:i+1] + a[i:i+1] for i in range(ndx + 1))
#     return text


# def encrypt(text, n):
#     for i in range(n):
#         text = text[1::2] + text[::2]
#     return text
