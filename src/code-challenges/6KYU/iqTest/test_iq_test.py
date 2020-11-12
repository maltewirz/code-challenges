from iq_test import iq_test
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = iq_test("2 4 7 8 10")
        self.assertEqual(result, 3)


if __name__ == "__main__":
    unittest.main()
