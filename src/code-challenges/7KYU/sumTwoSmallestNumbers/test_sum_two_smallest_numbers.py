from sum_two_smallest_numbers import sum_two_smallest_numbers
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = sum_two_smallest_numbers([5, 8, 12, 18, 22])
        self.assertEqual(result, 13)


if __name__ == "__main__":
    unittest.main()
