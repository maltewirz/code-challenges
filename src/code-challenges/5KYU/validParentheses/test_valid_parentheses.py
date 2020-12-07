from valid_parentheses import valid_parentheses
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = valid_parentheses("()")
        self.assertEqual(result, True)

    def test_2(self):
        result = valid_parentheses(")(()))")
        self.assertEqual(result, False)


if __name__ == "__main__":
    unittest.main()
