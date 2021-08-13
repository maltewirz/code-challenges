from valid_braces import valid_braces
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = valid_braces("(){}[]")
        self.assertEqual(result, True)

    def test_2(self):
        result = valid_braces("([{}])")
        self.assertEqual(result, True)


if __name__ == "__main__":
    unittest.main()
