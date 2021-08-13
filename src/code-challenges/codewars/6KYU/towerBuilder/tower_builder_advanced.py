# https://www.codewars.com/kata/57675f3dedc6f728ee000256/train/python

# Build Tower Advanced
# Build Tower by the following given arguments:
# number of floors (integer and always greater than 0)
# block size (width, height) (integer pair and always greater
#  than (0, 0))

# Tower block unit is represented as *

# Python: return a list;
# JavaScript: returns an Array;
# Have fun!

# for example, a tower of 3 floors with block size = (2, 3)
#  looks like below

# [
#   '    **    ',
#   '    **    ',
#   '    **    ',
#   '  ******  ',
#   '  ******  ',
#   '  ******  ',
#   '**********',
#   '**********',
#   '**********'
# ]
# and a tower of 6 floors with block size = (2, 1) looks like below

# [
#   '          **          ',
#   '        ******        ',
#   '      **********      ',
#   '    **************    ',
#   '  ******************  ',
#   '**********************'
# ]
# Go take a look at Build Tower which is a more basic version :)

# number series: 2, 6, 10, 14


def tower_builder_advanced(n_floors, block_size):

    width, height = block_size
    star = []
    space = []
    tower = []

    for e in range(1, n_floors + 1):
        space = " " * width * (n_floors - e)
        star = "*" * width * (2 * e - 1)
        result = "%s%s%s" % (space, star, space)
        for e in range(height):
            tower.append(result)
    return tower
