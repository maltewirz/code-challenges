from squareDigits import squareDigits
import unittest


class Test(unittest.TestCase):
    def testSqaure(self):
        """
        Tests square digits
        """
        result = squareDigits("9119")
        self.assertEqual(result, 811181)


if __name__ == "__main__":
    unittest.main()
