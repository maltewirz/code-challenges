from find_next_square import find_next_square
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = find_next_square(121)
        self.assertEqual(result, 144)

    def test_2(self):
        result = find_next_square(625)
        self.assertEqual(result, 676)


if __name__ == "__main__":
    unittest.main()
