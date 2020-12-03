from max_sequence import max_sequence
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
        self.assertEqual(result, [4, -1, 2, 1])

    def test_2(self):
        result = max_sequence([-2, -1, -3, -4, -1, -2, -1, -5, -4])
        self.assertEqual(result, [])

if __name__ == "__main__":
    unittest.main()
