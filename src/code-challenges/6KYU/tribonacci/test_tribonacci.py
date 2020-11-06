from tribonacci import tribonacci
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = tribonacci([1, 1, 1], 10)
        self.assertEqual(result, [1, 1, 1, 3, 5, 9, 17, 31, 57, 105])

    def test_2(self):
        result = tribonacci([300, 200, 100], 0)
        self.assertEqual(result, [])

    def test_3(self):
        result = tribonacci([1, 1, 1], 1)
        self.assertEqual(result, [1])


if __name__ == "__main__":
    unittest.main()
