# https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/python

# The new "Avengers" movie has just been released! There are a lot of
#  people at the cinema box office standing in a huge line. Each of
#   them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket
#    costs 25 dollars.

# Vasya is currently working as a clerk. He wants to sell a ticket to
#  every single person in this line.

# Can Vasya sell a ticket to every person and give change if he
#  initially has no money and sells the tickets strictly in the
#   order people queue?

# Return YES, if Vasya can sell a ticket to every person and give
#  change with the bills he has at hand at that moment. Otherwise
#   return NO.

# Examples:
# tickets([25, 25, 50]) # => YES
# tickets([25, 100]) # => NO. Vasya will not have enough money to
#  give change to 100 dollars
# tickets([25, 25, 50, 50, 100]) # => NO. Vasya will not have
#  the right bills to give 75 dollars of change (you can't make
#   two bills of 25 from one of 50)


def tickets(people):
    register = {'25s': 0, '50s': 0, '100s': 0}
    cash_in_register = 0
    for p in people:
        if p < 25:
            return 'NO'
        elif p == 25:
            cash_in_register += p
            register['25s'] += 1
        else:
            # do you have enough money for change?
            if (p - cash_in_register) <= 25:
                if p == 50 and register['25s'] >= 1:
                    register['50s'] += 1
                    register['25s'] -= 1
                    cash_in_register += 25
                elif (p == 100 and register['50s'] >= 1
                        and register['25s'] >= 1):
                    register['100s'] += 1
                    register['50s'] -= 1
                    register['25s'] -= 1
                    cash_in_register += 25
                elif (p == 100 and register['25s'] >= 3):
                    register['100s'] += 1
                    register['25s'] -= 3
                    cash_in_register += 25
                else:
                    return 'NO'
            else:
                return 'NO'
    return 'YES'


# Alternative:


# def tickets(people):
#     till = {100.0: 0, 50.0: 0, 25.0: 0}

#     for paid in people:
#         till[paid] += 1
#         change = paid - 25.0

#     for bill in (50, 25):
#         while bill <= change and till[bill] > 0:
#             till[bill] -= 1
#             change -= bill

#     if change != 0:
#         return "NO"

#     return "YES"


# Alternative
# def tickets(a):
#     n25 = n50 = n100 = 0
#     for e in a:
#         if   e==25            : n25+=1
#         elif e==50            : n25-=1; n50+=1
#         elif e==100 and n50>0 : n25-=1; n50-=1
#         elif e==100 and n50==0: n25-=3
#         if n25<0 or n50<0:
#             return 'NO'
#     return 'YES'