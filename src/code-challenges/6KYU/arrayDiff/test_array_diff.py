from array_diff import array_diff
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = array_diff([1, 2, 2], [1])
        self.assertEqual(result, [2, 2])

    def test_2(self):
        result = array_diff([1, 2, 2], [2])
        self.assertEqual(result, [1])


if __name__ == "__main__":
    unittest.main()
