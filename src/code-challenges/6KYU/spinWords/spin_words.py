# https://www.codewars.com/kata/5264d2b162488dc400000001/discuss/python

def spin_words(sentence):
    wordList = sentence.split()
    result = []
    for word in wordList:
        if len(word) >= 5:
            result.append(word[::-1])
        else:
            result.append(word)
    return " ".join(result)


# Alternative:
# return " ".join([x[::-1] if len(x) >= 5 else x for x in sentence.split(" ")])
