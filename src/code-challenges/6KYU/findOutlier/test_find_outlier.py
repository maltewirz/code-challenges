from find_outlier import find_outlier
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = find_outlier([2, 4, 6, 8, 10, 3])
        self.assertEqual(result, 3)


if __name__ == "__main__":
    unittest.main()
