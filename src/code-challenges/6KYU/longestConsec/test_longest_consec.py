from longest_consec import longest_consec
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = longest_consec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
        self.assertEqual(result, "abigailtheta")


if __name__ == "__main__":
    unittest.main()
