# https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/python

# Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells
# and carries the "instructions" for the development and functioning of
# living organisms.

# If you want to know more http://en.wikipedia.org/wiki/DNA

# In DNA strings, symbols "A" and "T" are complements of each other, as "C"
# and "G". You have function with one side of the DNA (string, except for
# Haskell); you need to get the other complementary side. DNA strand is
# never empty or there is no DNA at all (again, except for Haskell).
# a -t   c -g


def DNA_strand(dna):
    result = ""
    for e in dna:
        if e == "A":
            result += "T"
        if e == "T":
            result += "A"
        if e == "C":
            result += "G"
        if e == "G":
            result += "C"
    return result


# Alternativ:
# return dna.translate(str.maketrans("ATCG","TAGC"))

# Alternative 2:
# pairs = {'A':'T','T':'A','C':'G','G':'C'}
# def DNA_strand(dna):
#     return ''.join([pairs[x] for x in dna])
