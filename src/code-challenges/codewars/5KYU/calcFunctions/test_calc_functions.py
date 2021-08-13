from calc_functions import (
    zero,
    five,
    seven,
    nine,
    times,
    divided_by,
)

import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = seven(times(five()))
        self.assertEqual(result, 35)

    def test_2(self):
        result = zero(times(five()))
        self.assertEqual(result, 0)

    def test_3(self):
        result = nine(divided_by(seven()))
        self.assertEqual(result, 1)


if __name__ == "__main__":
    unittest.main()
