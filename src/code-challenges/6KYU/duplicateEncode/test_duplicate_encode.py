from duplicate_encode import duplicate_encode
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = duplicate_encode("din")
        self.assertEqual(result, "(((")

    def test_2(self):
        result = duplicate_encode("recede")
        self.assertEqual(result, "()()()")

    def test_3(self):
        result = duplicate_encode("axPay)!cx")
        self.assertEqual(result, "))()(((()")


if __name__ == "__main__":
    unittest.main()
