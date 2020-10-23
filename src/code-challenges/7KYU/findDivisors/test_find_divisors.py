from find_divisors import find_divisors
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = find_divisors(12)
        self.assertEqual(result, [2, 3, 4, 6])

    def test_2(self):
        result = find_divisors(13)
        self.assertEqual(result, "13 is prime")


if __name__ == "__main__":
    unittest.main()
