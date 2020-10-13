from is_square import is_square
import unittest


class Test(unittest.TestCase):
    def test_find_square1(self):
        result = is_square(0)
        self.assertEqual(result, True)
    
    def test_find_square2(self):
        result = is_square(4)
        self.assertEqual(result, True)

    def test_find_square3(self):
        result = is_square(3)
        self.assertEqual(result, False)


if __name__ == "__main__":
    unittest.main()
