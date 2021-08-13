# https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python
# In this little assignment you are given a string of space separated numbers,
# and have to return the highest and lowest number.


def highAndLow(numbers):
    arr = numbers.split()
    lowest = int(arr[0])
    highest = int(arr[0])
    if len(arr) == 1:
        return f"{arr[0]} {arr[0]}"
    if (len(arr) == 2) and arr[0] == arr[1]:
        return f"{arr[0]} {arr[0]}"
    for e in arr:
        number = int(e)
        if number < lowest:
            lowest = number
        if number > highest:
            highest = number
    return f"{highest} {lowest}"


# Alternative:
# def high_and_low(numbers):
#     numbers = [int(x) for x in numbers.split(" ")]
#     return str(max(numbers)) + " " + str(min(numbers))
