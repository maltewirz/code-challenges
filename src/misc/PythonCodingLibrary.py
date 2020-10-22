#Programming:
print 3
print 1 + 1
#---------------------#
#---------------------#
# Lesson 2.2: Variables

# Programmers use variables to represent values in their code.
# This makes code easier to read by telling others what values
# mean. It also makes code easier to write by cutting down on
# potentially complicated numbers that repeat in our code.
# We sometimes call numbers without a variable "magic numbers"
# It's best to reduce the amount of "magic numbers" in our code

speed_of_light = 299792458.0
billionth = 1.0 / 1000000000.0
nanostick = speed_of_light * billionth * 100
print nanostick

#---------------------#
#---------------------#

# Lesson 2.2: Strings

# Strings are sequences of characters that are enclosed in quotes.
# We can enclose them with single or double quotes and assign them
# to variables. We can even combine strings by adding them (we call
# this concatenation).

print 'Hello'
print "Hello"

hello = "Howdy"
print hello

#---------------------#
#---------------------#

# Lesson 2.3: Procedures

# Functions (also known as procedures or methods) take input and return an output.
# Programmers use functions all the time! They may seem confusing at first but
# the more you use and make them, the better you'll get!

def rest_of_string(s):
    return s[1:]

print rest_of_string('audacity')

#---------------------#
#---------------------#
# Lesson 2.4: While Loops

# Loops are an important concept in computer programming.
# Loops let us run blocks of code many times which can be
# really useful when we have to repeat tasks.

def count(n):
    i = 0
    while i < 10:
        print i
        i += 1

print count(11)

#---------------------#
#---------------------#

# Lesson 2.4: Making Decisions - If Statements

# We'll often write programs that need to make comparisons between values.
# We can do comparisons just like we do in math with the < and > signs.
# We can also do equality comparisons with != (not equal) and ==.
# Comparisons always return a Boolean value (either True or False).

print 2 < 3
print 21 < 3
print 7 * 3 < 21
print 7 * 3 != 21
print 7 * 3 == 21

#---------------------#
#---------------------#
# Lesson 2.6: For Loops

# For loops, like while loops, are useful for running a block of code
# multiple times. For loops make iterating through elements in a list
# easier than using a while loop.

def print_all_elements(p):
    for e in p:
        print e

myList = [1, 2, [3, 4]]
print_all_elements(myList)
#---------------------#
#---------------------#
# Lesson 2.6: Structured Data - Lists

# Similar to how strings are seuqences of characters, lists are
# sequences of anything! We can have lists of numbers, lists of
# characters, even lists of lists! And we can mix up the contents
# too so we can have lists containing many different things.

p = ['y', 'a', 'b', 'b', 'a', '!']
print p
print p[0]
print p[2:4]

#---------------------#
#---------------------#
# Lesson 2.7: How to Solve Problems - Days Between Dates

# In this lesson, you'll be working on solving a much
# bigger problem than those you've seen so far. If you
# want, you can use this starter code to write your
# quiz responses and then copy and paste into the
# Udacity quiz nodes.

# https://classroom.udacity.com/nanodegrees/nd000/parts/0001345403/modules/356813882475460/lessons/4184188665/concepts/49934588850923

# Simple Mechanical Algorithm
# days = 0
# while date1 is before date2:
#     date1 = advance to next day
#     days += 1

# Fill in the functions below to solve the problem.

def isLeapYear(year):
    return True

def daysInMonth(year, month):
    return 30

def nextDay(year, month, day):
    if day < daysInMonth(year, month):
        return year, month, day + 1

def dateIsBefore(year1, month1, day1, year2, month2, day2):
    if year1 < year2:
        return True

def daysBetweenDates(year1, month1, day1, year2, month2, day2):
    days = 0
    while dateIsBefore(year1, month1, day1, year2, month2, day2):
        days += 1
    return days

# Below is a testing script that will check if your code is doing
# what it is supposed to. Don't change it! The test will run
# when you execute the file.
# Bonus: Can you figure out how the test works?

def test():
    test_cases = [((2012,1,1,2012,2,28), 58),
                  ((2012,1,1,2012,3,1), 60),
                  ((2011,6,30,2012,6,30), 366),
                  ((2011,1,1,2012,8,8), 585 ),
                  ((1900,1,1,1999,12,31), 36523)]

    for (args, answer) in test_cases:
        result = daysBetweenDates(*args)
        if result != answer:
            print "Test with data:", args, "failed"
            print result
        else:
            print "Test case passed!"

test()

#---------------------#
#---------------------#

#---------------------#
#---------------------#

#---------------------#
#---------------------#

#---------------------#
#---------------------#

#---------------------#
#---------------------#

#---------------------#
#---------------------#

#---------------------#
#---------------------#

#---------------------#
#---------------------#



s = ""

print ('a' + s)[1:]
print s[0] + s[1:]
print s +''
print s[0:]
#-------------------#
#---------------------#
i = 0
while i < 10:
    print i

#-------------------#
#---------------------#
i = 1
while True:
	if i > n:
		break
print i
i= i + 1
#-------------------#
#---------------------#
def bigger(a,b):
	if a > b:
		return a
	else:
		return b
#-------------------#
#---------------------#
def biggest(a,b,c):
	return bigger(a,bigger(b,c))
#-------------------#
#---------------------#
def median (a,b,c):
	big = biggest(a,b,c)
	if big == a:
		return bigger(b,c)
	if big == b:
		return bigger(a,c)
	if big == c:
		return bigger (a,b)
print biggest (3,5,7)
print median (3,5,7)
#-------------------#
#---------------------#
from random import randint

def random_noun():
    num = randint(0,1)
    if num == 0:
        return 'sofa'
    if num == 1:
        return 'llama'
        
print random_noun()
#-------------------#
#---------------------#


from random import randint

def random_verb():
    random_num = randint(0, 1)
    if random_num == 0:
        return "run"
    else:
        return "kayak"
        
def random_noun():
    random_num = randint(0,1)
    if random_num == 0:
        return "sofa"
    else:
        return "llama"

def word_transformer(word):
    if word == "NOUN":
        return random_noun()
    elif word == "VERB":
        return random_verb()
    else:
        return word[0]
        
def process_madlib(madlib):
    processed = ""
    index = 0
    box_length = 4
    while index < len(madlib):
        frame = madlib [index : index + box_length]
        to_add = word_transformer(frame)
        processed += to_add 
        if len (to_add) == 1:
            index += 1
        else:
            index += 4
    return processed
    
    
test_string_1 = "This is a good NOUN to use when you VERB your food"
test_string_2 = "I'm going to VERB to the store and pick up a NOUN or two."
print process_madlib(test_string_1)
print process_madlib(test_string_2)

#---------------------#
#---------------------#

# Here's a chance to play around with lists for a bit before you continue
# Take a look at what the following code does and try to guess how it works.

print "EXAMPLE 1: Lists can contain strings"
string_list = ['HTML', 'CSS', 'Python']
print string_list

print "EXAMPLE 2: Lists can contain numbers"
number_list = [3.14159, 2.71828, 1.61803]
print number_list

print "EXAMPLE 3: Lists can be 'accessed' and 'sliced' like how we accessed and sliced strings in the previous lessons"
pi = number_list[0]
not_pi = number_list[1:]
print pi
print not_pi

print "EXAMPLE 4: Lists can contain strings AND numbers"
mixed_list = ['Hello!', 42, "Goodbye!"]
print mixed_list

print "Example 5: Lists can even contain other lists"
list_with_lists = [3, 'colors:', ['red', 'green', 'blue'], 'your favorite?']
print list_with_lists

#---------------------#
#---------------------#
# print a list in for form and then add the numbers
def sum_list(p):
    result = 0
    for each in p:
        result += each
    return result

print sum_list([1,4,7])

#---------------------#
#---------------------#
#for function that was well explained
#What are the inputs
#What are the outputs
#How do you get from the input to the output in a simple mechanical way (how would we do it manually)


# Define a procedure, measure_udacity,
# that takes as its input a list of strings,
# and returns a number that is a count
# of the number of elements in the input
# list that start with the uppercase 
# letter 'U'.

#input: list with some parts
#output: number of words that start with 'U'
#howto: 1. input list
#       1.1 set counter
#       2. chop list (using for function)
#       3. check if first letter of word is 'U'
#       4. if yes, increment counter with 1
#       5. output counter 

#error seems to be that it stops doing that.


def measure_udacity(p):
    index = 0
    for e in p:
        if e[0] == 'U':
            index += 1
    return index

print measure_udacity(['Dave','Sebastian','Katy'])
#>>> 0

print measure_udacity(['Umika','Umberto'])
#>>> 2

#---------------------#
#---------------------#

# Define a procedure, find_element,
# that takes as its inputs a list
# and a value of any type, and
# returns the index of the first
# element in the input list that
# matches the value.

# If there is no matching element,
# return -1.

#input: a list and a value
#output: index of the first element in the input list that matches the value
#howto: 1. take in: list and value
#       2. chop list using for function
#       3. check if chopped list output 1 matches value
#       3. check if chopped list output 2 matches value
#       4. if match, return value of position.
#       5. if no match, return -1


def find_element(a,b):
    index = 0
    for e in a:
        if e == b:
            return index
        index += 1
    return -1

print find_element([1,2,3],3)
#>>> 2

print find_element(['alpha','beta'],'gamma')
#>>> -1

#---------------------#
#---------------------#
# 
def find_element(a,b):
    if b in a:
        return a.index(b)
    else:
        return -1

print find_element([1,2,3],3)
#>>> 2

print find_element(['alpha','beta'],'gamma')
#>>> -1

#<list>.index(<value>)

#if value is in list, returns the first position 
#where value is found in list 

#<value> in <list>
#   if value is in list, output true
# otheriwise, output is false

#<value>not in <list> == not <value> in <list>

#---------------------#
#---------------------#

###
### Define a simple nextDay procedure, that assumes
### every month has 30 days.
###
### For example:
###    nextDay(1999, 12, 30) => (2000, 1, 1)
###    nextDay(2013, 1, 30) => (2013, 2, 1)
###    nextDay(2012, 12, 30) => (2013, 1, 1)  (even though December really has 31 days)
###

#input: three varaibles, year, month, day
#output: three variable: year, month, day
#howto: 1 define functions for breaking day (30), month (12), year (infinite)
#       2 add +1 to day
#
#def nextDay(year, month, day):
#   if day < 30:
#       return day += 1
#   else:
#       return day = 1
#       if month < 12:
#           return month += 1
#       else:
#           return month = 1
#           return year += 1
 #   return
 #print year, month, day

def nextDay(year, month, day):
    if day < 30:
        return year, month, day +1
    else:
        if month < 12:
            return year, month + 1, 1
        else:
            return year + 1, 1, 1 
    return                              #make sure to return the functio !!! (Lessons learnt!)

print nextDay(1999, 11, 15)
print nextDay(2012, 12, 30)

#-----------------------#
#-----------------------#

# Finish: daysBetweenDates procedure. 

# TODO: 1.1 Leapyear Check:                                   OK
#       1.2 if yes, add one day to each time it is counted. (wrong thinking, too cpomplicated)
#       2. days p month (each month is different)

#       Solution: define correct number per days in one functin that is then called globally.


def daysInMonth(year, month):
    """return correct days for corresponding month"""
    if month in (1, 3, 5, 7, 8, 10, 12):
        return 31
    else:
        if month in (4, 6, 9, 11):
            return 30
        else:
            if leapyr_check(year):
                return 29
            else:
                return 28

def leapyr_check(year):
    """Check if year is leapyear"""
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                return True
            else: 
                return False
        else: 
            return True
    else:
        return False

def nextDay(year, month, day):
    """Simple version: assume every month has 30 days - was replaced - Now Correct!!"""
    if day < daysInMonth(year, month):
        return year, month, day + 1
    else:
        if month == 12:
            return year + 1, 1, 1
        else:
            return year, month + 1, 1
        
def dateIsBefore(year1, month1, day1, year2, month2, day2):
    """Returns True if year1-month1-day1 is before year2-month2-day2. Otherwise, returns False."""
    if year1 < year2:
        return True
    if year1 == year2:
        if month1 < month2:
            return True
        if month1 == month2:
            return day1 < day2
    return False        

def daysBetweenDates(year1, month1, day1, year2, month2, day2):
    """Returns the number of days between year1/month1/day1
       and year2/month2/day2. Assumes inputs are valid dates
       in Gregorian calendar."""

    assert not dateIsBefore(year2, month2, day2, year1, month1, day1)
    days = 0
    while dateIsBefore(year1, month1, day1, year2, month2, day2):
        year1, month1, day1 = nextDay(year1, month1, day1)
        days += 1
    print days
    return days

def test():
    test_cases = [((2012,1,1,2012,2,28), 58), 
                  ((2012,1,1,2012,3,1), 60),
                  ((2011,6,30,2012,6,30), 366),
                  ((2011,1,1,2012,8,8), 585 ),
                  ((1900,1,1,1999,12,31), 36523)]
    
    for (args, answer) in test_cases:
        result = daysBetweenDates(*args)
        if result != answer:
            print "Test with data:", args, "failed"
        else:
            print "Test case passed!"

test()

#-----------------------#
#-----------------------#

list_of_concepts = [['Python','Python is a language'],
                    ['HTML', 'HT is bestter than pyhton']]



def make_HTML_for_many_concepts(concept_list):
    HTML = ""
    for concept in concept_list:
        HTML = HTML + make_html_for_concept(concept)
    return HTML


def make_html_for_concept(concept):
    title = concept[0]
    description = concept[1]
    concept_HTML= """
<div class="concept">
    <div class="concept-title">
        """ + title + """
    </div>
    <div class ="concept-description">
        """ + description + """
    </div>
</div>"""

    return concept_HTML

print make_HTML_for_many_concepts(list_of_concepts)

#-----------------------#
#-----------------------#

# Let's learn a little bit of Data Analysis and how we can use
# loops and lists to create, aggregate, and summarize data

# For the part 1, we'll learn a basic way of creating data using
# Python's random number generator.

# To create a random integer from 0 to 10, we first import the 
# "random" module

import random

# We then print a random integer using the random.randint(start, end) function
print "Random number generated: " + str(random.randint(0,10))

# Remember that if we want to concatenate a string and a number, we need to convert the 
# integer into a string using the str() function

# We now want to create a list filled with random numbers. The list should be 
# of length 20

random_list = []
list_length = 20

# Write code here and use a while loop to populate this list of random integers. A crucial
# function that will help you is to use the append() method to add elements to a list.

while len(random_list) < list_length:
    random_list.append(random.randint(0,10))


index = 0
count = 0

while index < len(random_list):
  if random_list[index] == 9:
    count = count + 1
  index = index + 1

# When we print this list, we should get a list of random integers such as:
# [7, 5, 1, 6, 4, 1, 0, 6, 6, 8, 1, 1, 2, 7, 5, 10, 7, 8, 1, 3]
print random_list

#-----------------------#
#-----------------------#

#----------------#
#----------------#
"""this version uses the call function"""
import random

random_list = []
list_length = 20

def appendlist():
    while len(random_list) < list_length:
        random_list.append(random.randint(0,10))

appendlist()
print random_list

"""this version uses the return function"""

import random

random_list = []
list_length = 20

def appendlist():
  while len(random_list) < list_length:
    random_list.append(random.randint(0,10))
  return random_list

print appendlist()

#----------------#
#----------------#

import random

random_list = []
list_length = 20

while len(random_list) < list_length:
    random_list.append(random.randint(0,10))

count_list = [0] * 11
index = 0

while index < len(random_list):
    number = random_list[index]
    count_list[number] = count_list[number] + 1
    index += 1


print "number | occurrence"
index = 0
num_len = len("number")

while index < len(count_list):
    num_spaces = len("number") - len(str(index))
    print " " * num_spaces + str(index) + " | " + str(count_list[index])
    index += 1



print random_list
print count_list
print sum(count_list)

#----------------#
#----------------#

#multiplying all numnbers
def product_list(list_of_numbers):
    print list_of_numbers
    
    number = 1
    for each in list_of_numbers:
        number = number * each
    return number

print product_list([9])
#>>> 9

print product_list([1,2,3,4])
#>>> 24

print product_list([])
#>>> 1

#----------------#
#----------------#

def greatest(list_of_numbers):
    index_max = 0
    for each in list_of_numbers:
        if each > index_max:
            index_max = each
    return index_max

print greatest([4,23,1])
#>>> 23
print greatest([])
#>>> 0

#----------------#
#----------------#

string1 = "Yesterday, PERSON and I went to the PLACE. On our way, we saw a ADJECTIVE NOUN on a bike."
string2 = "PLACE is located on the ADVERB side of Dublin, near the mainly ADJECTIVE areas of PLACE."
list_of_words1 = string1.split()
list_of_words2 = string2.split()

print list_of_words1
print list_of_words2

#----------------#
#----------------#

def word_in_pos(word, parts_of_speech):
    for each in parts_of_speech:
        if each in word:
            return each
    return 


test_cases = ["NOUN", "FALSE", "<<@PERSON><", "PLURALNOUN"]
parts_of_speech = ["PERSON", "PLURALNOUN", "NOUN"]

print word_in_pos(test_cases[0], parts_of_speech)
print word_in_pos(test_cases[1], parts_of_speech)
print word_in_pos(test_cases[2], parts_of_speech)
print word_in_pos(test_cases[3], parts_of_speech)

#----------------#
#----------------#


# A list of replacement words to be passed in to the play game function. 
parts_of_speech1  = ["PLACE", "PERSON", "PLURALNOUN", "NOUN", "NAME", "VERB", "OCCUPATION", "ADJECTIVE"]

# The following are some test strings to pass in to the play_game function.
test_string1 = "Hi, my name is NAME and I really like to VERB PLURALNOUN. I'm also a OCCUPATION at PLACE."
test_string2 = """PERSON! What is PERSON going to do with all these ADJECTIVE PLURALNOUN? Only a registered 
OCCUPATION could VERB them."""
test_string3 = "What a ADJECTIVE day! I can VERB the day off from being a OCCUPATION and go VERB at PLACE."

# Checks if a word in parts_of_speech is a substring of the word passed in.
def word_in_pos(word, parts_of_speech):
    for pos in parts_of_speech:
        if pos in word:
            return pos
    return None
        
# Plays a full game of mad_libs. A player is prompted to replace words in ml_string, 
# which appear in parts_of_speech with their own words.  
def play_game(ml_string, parts_of_speech):    
    replaced = []
    ml_string = ml_string.split()
    for word in ml_string:
        replacement = word_in_pos(word, parts_of_speech)
        if replacement != None:
            user_input = raw_input("Type in a: " + replacement + " ")
            word = word.replace(replacement, user_input)
            replaced.append(word)
        else:
            replaced.append(word)
    replaced = " ".join(replaced)
    return replaced
    
print play_game(test_string1, parts_of_speech1)       

#----------------#
#----------------#

# Define a procedure, find_last, that takes as input two strings, 
# a search string and a target string, and returns the last position 
# in the search string where the target string appears, or -1 if there are no 
# occurrences. Example: find_last('aaaa', 'a') returns 3. Make sure your 
# procedure has a return statement. 
#
def find_last(search_string, target_string):
     # First check to see whether the target string is even inside the search string
    if search_string.find(target_string) == -1:
        return -1
    current_location = 0
    # While the current_location is greater than -1 
    while current_location >= 0:
        last_location = current_location
        # Continue to search for the next target string
        current_location = search_string.find(target_string, current_location + 1)
    return last_location



print find_last('aaaa', 'a') 
#-> 3
print find_last('aaaaa', 'aa') 
#-> 3
print find_last('aaaa', 'b') 
#-> -1
print find_last("111111111", "1") 
#-> 8
print find_last("222222222", "") 
#-> 9
print find_last("", "3") 
#-> -1
print find_last("", "") 
#-> 0

#----------------#
#----------------#

class Dog(object):
    def __init__(self,name,colors,age,energy):
        """name is string, colors is list, age is integer
        , energy is string
        """
        self.name = name
        self.colors = list(colors)
        self.age = age
        self.energy = energy

dogs = {}

dog = Dog('Fido',['white','brown'],2,'medium')
dogs[dog.name] = dog

def find_dog(name):
    if name in dogs:
        print name
        print dogs[name].colors
        print dogs[name].age
        print dogs[name].energy
    else:
        print "There are no dogs named: " + name + "!"

find_dog('Fido')
#----------------#
#----------------#

#Anthony's Solution
def split_string(target, separators):
    output = []
    start = 0
    #Go through every character of the target string
    for i in range(0, len(target)):
        # if the current character is in separators, add 
        # everything up to this point to the output list
        if target[i] in separators:
            if i != start:
                output.append(target[start:i])
            start = i + 1

    # Then make sure not to add anything if 
    # there are two separator characters in a row
    if start != len(target):
        output.append(target[start:])
​
    return output
#ALTERN ATIVE:

def split_string(source, splitlist):
    outlist = []
    current = ""
    for character in source:
        if character in splitlist:
            if current:
                outlist.append(current)
                current = ""
        else:
            current += character
    if current:
        outlist.append(current)
    return outlist

    #----------------#
#----------------#

Return the number of times that the string "hi" appears anywhere in the given string.
"""Use the "for i in range(len(str)-1):" loop to look at each index in the string,
except the last. For each i, extract the string starting at i and up to but not 
including i+2. Check if that string is 'hi', and count how many times that happens."""

count_hi('abc hi ho') → 1
count_hi('ABChi hi') → 2
count_hi('hihi') → 2

def count_hi(str):
  index = 0
  for i in range(len(str)-1):
    if str[i:i+2] == "hi":
      index += 1
  return index


  #----------------# MADLIBS Generator

  # A list of replacement words to be passed in to the play game function. 
parts_of_speech1  = ["PLACE", "PERSON", "PLURALNOUN", "NOUN", "NAME", "VERB", "OCCUPATION", "ADJECTIVE"]

# The following are some test strings to pass in to the play_game function.
test_string1 = "Hi, my name is NAME and I really like to VERB PLURALNOUN. I'm also a OCCUPATION at PLACE."
test_string2 = """PERSON! What is PERSON going to do with all these ADJECTIVE PLURALNOUN? Only a registered 
OCCUPATION could VERB them."""
test_string3 = "What a ADJECTIVE day! I can VERB the day off from being a OCCUPATION and go VERB at PLACE."

# Checks if a word in parts_of_speech is a substring of the word passed in.
def word_in_pos(word, parts_of_speech):
    for pos in parts_of_speech:
        if pos in word:
            return pos
    return None
        
# Plays a full game of mad_libs. A player is prompted to replace words in ml_string, 
# which appear in parts_of_speech with their own words.  
def play_game(ml_string, parts_of_speech):    
    replaced = []
    ml_string = ml_string.split()
    for word in ml_string:
        replacement = word_in_pos(word, parts_of_speech)
        if replacement != None:
            user_input = raw_input("Type in a: " + replacement + " ")
            word = word.replace(replacement, user_input)
            replaced.append(word)
        else:
            replaced.append(word)
    replaced = " ".join(replaced)
    return replaced
    
print play_game(test_string1, parts_of_speech1)     


  #----------------# Code your own quiz


#-------# Game content
quiz_easy = "--1-- often! For every small piece of code you write, --1-- it immediately before moving on. Try to write the smallest testable --2-- you can manage for each step; it's good practice both for minimizing debugging --3-- and for reusing --2-- later! Thank --4--!"
quiz_medium = "When debugging a --1--, it is very useful to check the --2-- of variables at various points in the execution of the --1--. Scattering print statements to find out what the --3-- of selected variables are will show you what the variable is at specific points in the --1--. This can be used to compare what you think the variable --2--s should be with what they actually are, allowing you to find --4--s."
quiz_hard = "Procedural --1-- is key to mastering programming: we break the --2-- down into small little procedures that --3-- one after the other. Outlining our code or writing pseudocode will enable us to organize our code in a high-level way so we can keep track of the bigger --4-- of our program."

blank_spaces = ["--1--", "--2--", "--3--", "--4--"]
answers_easy = ["test", "code", "time", "you"]
answers_medium = ["program","state","values","error"]
answers_hard = ["thinking","problem","execute","picture"]

#-------# Playing game
def play_game(quiz, blank_spaces, answers):
  for e in range(len(blank_spaces)):
    print quiz
    print "\n" "What's the answer to " + blank_spaces[e] + ": " "\n"
    user_input = raw_input("Enter here: ").lower()
    count_tries = 5
    while user_input != answers[e]:
      print "\n" "False. You have " + str(count_tries) + " tries left!" "\n"
      count_tries -= 1
      if count_tries <=0:
        print "\n" "Game Over" "\n"
        exit(0)
      user_input = raw_input("Enter here: ")                             
    if user_input in answers[e]:
      print "\n" "Correct!" "\n"
      quiz = quiz.replace(blank_spaces[e], answers[e])
  print "\n" "You won" "\n" + "\n" + quiz


#-------# Selecting Difficulty
def user_select():
    print "Please select a game difficulty by typing it in! " "\n"
    difficulty = raw_input("Possible choices include easy, medium and hard: ")
    while difficulty not in ("easy", "medium", "hard"):
        print "Please, choose 'easy', 'medium' or 'hard'!"
        difficulty = raw_input("Possible choices include easy, medium and hard: ")
    if difficulty == "easy":
      print "\n" "You've chosen easy" "\n"
      play_game(quiz_easy, blank_spaces, answers_easy)
    if difficulty == "medium":
        print "\n" "You've chosen medium" "\n"
        play_game(quiz_medium, blank_spaces, answers_medium)
    if difficulty == "hard":
        print "\n" "You've choosen hard" "\n"
        play_game(quiz_hard, blank_spaces, answers_hard)

user_select()


#-------#
#-------# Swearword Checker
import urllib

def read_text():
    quotes = open("/Users/malte.wirz/documents/Udacity Python/movie_quotes.txt")
    content_file = quotes.read()
    print (content_file)
    quotes.close()
    check_profanity(content_file)

def check_profanity(text_to_check):
    connection = urllib.urlopen("http://www.wdylike.appspot.com/?q="+text_to_check)
    output = connection.read()
    print (output)
    connection.close()
    
read_text()

#-------##-------#
#-------##-------#



