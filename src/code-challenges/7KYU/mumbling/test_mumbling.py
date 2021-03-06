from mumbling import mumbling
import unittest


class Test(unittest.TestCase):
    def testRuns(self):
        """
        Tests that mumbling
        """
        result = mumbling("abcd")
        self.assertEqual(result, "A-Bb-Ccc-Dddd")

    def testRuns2(self):
        """
        Tests that mumbling
        """
        result = mumbling("ZpglnRxq")
        self.assertEqual(result, "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq")


if __name__ == "__main__":
    unittest.main()
