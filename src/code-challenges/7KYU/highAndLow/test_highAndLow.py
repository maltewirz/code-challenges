from highAndLow import highAndLow
import unittest

class Test(unittest.TestCase):
    def testRuns(self):
        """
        Tests that highest and lowest numbers are returned
        """
        result = highAndLow("1 2 -3 4 5")
        self.assertEqual(result,"5 -3")

    def testRunsTwoNumbers(self):
        """
        Tests for two numbers
        """
        result = highAndLow("1 1")
        self.assertEqual(result,"1 1")
        
    def testRunsSingleNumber(self):
        """
        Tests for single number
        """
        result = highAndLow("1")
        self.assertEqual(result,"1 1")

    def testRunsSingleNumber(self):
        """
        Tests for big number
        """
        result = highAndLow("409 241 1301 348 340 211 3268 1683 557 343 419 1559 2471 2711 2684 811 2733 3111 750 655 261 3087 409 241 1301 348 340 211 3268 1683 557 343 419 1559 2471 2711 2684 811 2733 3111 750 655 261 3087")
        self.assertEqual(result,"3268 211")

if __name__ == '__main__':
    unittest.main()