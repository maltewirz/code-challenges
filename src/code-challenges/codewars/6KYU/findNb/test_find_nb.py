from find_nb import find_nb
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = find_nb(1071225)
        self.assertEqual(result, 45)

    def test_2(self):
        result = find_nb(91716553919377)
        self.assertEqual(result, -1)


if __name__ == "__main__":
    unittest.main()
