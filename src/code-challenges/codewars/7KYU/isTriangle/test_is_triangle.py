from is_triangle import is_triangle
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = is_triangle(1, 2, 2)
        self.assertEqual(result, True)

    def test_2(self):
        result = is_triangle(1, 2, 3)
        self.assertEqual(result, False)


if __name__ == "__main__":
    unittest.main()
