from duplicate_count import duplicate_count
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = duplicate_count("abcdea")
        self.assertEqual(result, 1)

    def test_2(self):
        result = duplicate_count("ABBA")
        self.assertEqual(result, 2)


if __name__ == "__main__":
    unittest.main()
