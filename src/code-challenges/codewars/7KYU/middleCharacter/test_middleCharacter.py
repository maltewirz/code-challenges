from middleCharacter import middleCharacter
import unittest


class Test(unittest.TestCase):
    def testEven(self):
        """
        Tests word with even number of chars
        """
        result = middleCharacter("test")
        self.assertEqual(result, "es")

    def testOdd(self):
        """
        Tests word with odd number of chars
        """
        result = middleCharacter("testing")
        self.assertEqual(result, "t")


if __name__ == "__main__":
    unittest.main()
