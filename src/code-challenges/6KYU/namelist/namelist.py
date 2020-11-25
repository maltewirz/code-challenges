# https://www.codewars.com/kata/53368a47e38700bd8300030d/train/python

# Given: an array containing hashes of names

# Return: a string formatted as a list of names separated by commas except
#  for the last two names, which should be separated by an ampersand.

# Example:

# namelist([ {'name': 'Bart'}, {'name': 'Lisa'}, {'name': 'Maggie'} ])
# # returns 'Bart, Lisa & Maggie'

# namelist([ {'name': 'Bart'}, {'name': 'Lisa'} ])
# # returns 'Bart & Lisa'

# namelist([ {'name': 'Bart'} ])
# # returns 'Bart'

# namelist([])
# # returns ''
# Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.


def namelist(names):
    names = [name["name"] for name in names]
    if len(names) == 1:
        return names[0]
    if len(names) == 2:
        return "%s & %s" % (names[0], names[1])
    if len(names) > 2:
        comma = ", ".join(names[:-1])
        comma += " & %s" % (names[-1])
        return comma
    return ""


# Alternative:

# def namelist(names):
#     if len(names) > 1:
#         return '{} & {}'.format(', '.join(name['name'] for name in names[:-1]),
#                                 names[-1]['name'])
#     elif names:
#         return names[0]['name']
#     else:
#         return ''
