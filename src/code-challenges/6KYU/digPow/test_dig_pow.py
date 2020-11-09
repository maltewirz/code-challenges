from dig_pow import dig_pow
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = dig_pow(89, 1)
        self.assertEqual(result, 1)

    def test_2(self):
        result = dig_pow(92, 1)
        self.assertEqual(result, -1)

    def test_3(self):
        result = dig_pow(695, 2)
        self.assertEqual(result, 2)

    def test_4(self):
        result = dig_pow(46288, 3)
        self.assertEqual(result, 51)


if __name__ == "__main__":
    unittest.main()
