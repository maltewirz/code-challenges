from row_sum_odd_numbers import row_sum_odd_numbers
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = row_sum_odd_numbers(2)
        self.assertEqual(result, 8)


if __name__ == "__main__":
    unittest.main()
