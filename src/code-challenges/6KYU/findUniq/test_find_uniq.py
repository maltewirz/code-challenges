from find_uniq import find_uniq
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = find_uniq([1, 1, 1, 2, 1, 1])
        self.assertEqual(result, 2)


if __name__ == "__main__":
    unittest.main()
