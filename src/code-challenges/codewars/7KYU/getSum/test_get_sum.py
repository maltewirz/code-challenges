from get_sum import get_sum
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = get_sum(0, 1)
        self.assertEqual(result, 1)

    def test_2(self):
        result = get_sum(0, -1)
        self.assertEqual(result, -1)

    def test_3(self):
        result = get_sum(0, -2)
        self.assertEqual(result, -3)

    def test_4(self):
        result = get_sum(-1, 2)
        self.assertEqual(result, 2)


if __name__ == "__main__":
    unittest.main()
