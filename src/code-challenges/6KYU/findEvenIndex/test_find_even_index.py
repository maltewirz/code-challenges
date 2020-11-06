from find_even_index import find_even_index
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = find_even_index([1, 2, 3, 4, 3, 2, 1])
        self.assertEqual(result, 3)

    def test_2(self):
        result = find_even_index([1, 100, 50, -51, 1, 1])
        self.assertEqual(result, 1)

    def test_3(self):
        result = find_even_index([1, 2, 3, 4, 5, 6])
        self.assertEqual(result, -1)


if __name__ == "__main__":
    unittest.main()
