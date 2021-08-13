from is_pangram import is_pangram
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = is_pangram("The quick, brown fox jumps over the lazy dog!")
        self.assertEqual(result, True)


if __name__ == "__main__":
    unittest.main()
