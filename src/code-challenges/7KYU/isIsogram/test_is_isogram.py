from is_isogram import is_isogram
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = is_isogram("isogrami")
        self.assertEqual(result, False)

    def test_2(self):
        result = is_isogram("isogram")
        self.assertEqual(result, True)

    def test_3(self):
        result = is_isogram("isogramI")
        self.assertEqual(result, False)


if __name__ == "__main__":
    unittest.main()
