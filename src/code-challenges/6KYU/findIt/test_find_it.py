from find_it import find_it
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        list = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]
        result = find_it(list)
        self.assertEqual(result, 5)


if __name__ == "__main__":
    unittest.main()
