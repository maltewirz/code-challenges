# https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/python


def mumbling(s):
    result = []
    dash = "-"
    for i, val in enumerate(s):
        result.append(val.upper() + (i * val.lower()))
    return dash.join(result)
