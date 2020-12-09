from order_weight import order_weight
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = order_weight("103 123 4444 99 2000")
        self.assertEqual(result, "2000 103 123 4444 99")

    def test_2(self):
        result = order_weight("2000 10003 1234000 44444444 9999 11 11 22 123")
        self.assertEqual(result, "11 11 2000 10003 22 123 1234000 44444444 9999")


if __name__ == "__main__":
    unittest.main()
