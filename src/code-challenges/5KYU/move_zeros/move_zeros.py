# https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/python
# Write an algorithm that takes an array and moves all of the zeros to the end,
#  preserving the order of the other elements.

# move_zeros([False,1,0,1,2,0,1,3,"a"]) # returns[False,1,1,2,1,3,"a",0,0]


def move_zeros(array):
    rest = []
    zeros = []
    for i in range(len(array)):
        if array[i] == 0 and not isinstance(array[i], bool):
            zeros.append(0)
        else:
            rest.append(array[i])
    return rest + zeros


# Alternative
# def move_zeros(array):
#     zero_list = list(filter(lambda a: a == 0 and
#                   not isinstance(a, bool), array))
#     array1 = list(filter(lambda a: a != 0 or
#               isinstance(a, bool), array)) + zero_list
#     return array1

# Alternative2:
# def move_zeros(array):
#     return sorted(array, key=lambda x: x==0 and type(x) is not bool)
