from narcissistic import narcissistic
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = narcissistic(7)
        self.assertEqual(result, True)

    def test_11(self):
        result = narcissistic(153)
        self.assertEqual(result, True)

    def test_2(self):
        result = narcissistic(122)
        self.assertEqual(result, False)


if __name__ == "__main__":
    unittest.main()
