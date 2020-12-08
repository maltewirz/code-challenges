from sum_pairs import sum_pairs
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = sum_pairs([4, 3, 2, 3, 4], 6)
        self.assertEqual(result, [4, 2])

    def test_2(self):
        result = sum_pairs([10, 5, 2, 3, 7, 5], 10)
        self.assertEqual(result, [3, 7])


if __name__ == "__main__":
    unittest.main()
