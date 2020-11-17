# https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/python
# You are given an array(list) strarr of strings and an integer k.
#  Your task is to return the first longest string consisting of
#   k consecutive strings taken in the array.

# Example:
# longest_consec(["zone", "abigail", "theta", "form", "libe", "zas",
#  "theta", "abigail"], 2) --> "abigailtheta"

# n being the length of the string array, if n = 0 or k > n or
#  k <= 0 return "".

# Note
# consecutive strings : follow one after another without an
#  interruption


def longest_consec(strarr, k):
    result = ""
    if k > 0 and len(strarr) >= k:
        for i in range(len(strarr) - k + 1):
            s = "".join(strarr[i : i + k])
            if len(s) > len(result):
                result = s

    return result


# Original Solution:

# def longest_consec(strarr, k):
# result = ""
# if (k > 0 and len(strarr) >= k):
#     for i in range(len(strarr)-k+1):
#         tempRes = ""
#         for e in range(k):
#             tempRes += strarr[i+e]
# SHOULD BE GREATER - NOT GREATER OR EQUAL
#         if len(tempRes) > len(result):
#             result = tempRes
# return result
