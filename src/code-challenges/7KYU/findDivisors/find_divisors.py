# https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/python
# Create a function named divisors/Divisors that takes an integer
#  n > 1 and returns an array with all of the integer's divisors
#  (except for 1 and the number itself), from smallest to largest.
#   If the number is prime return the string '(integer) is prime'
#    (null in C#) (use Either String a in Haskell and
#     Result<Vec<u32>, String> in Rust).

# Example:
# divisors(12); #should return [2,3,4,6]
# divisors(25); #should return [5]
# divisors(13); #should return "13 is prime"


def find_divisors(inte):
    result = []
    for i in range(2, inte):
        if inte % i == 0:
            result.append(i)
    if not result:
        return '%s is prime' % (inte)
    return result


# Alternative:
# def divisors(num):
#     l = [a for a in range(2,num) if num%a == 0]
#     if len(l) == 0:
#         return str(num) + " is prime"
#     return l
