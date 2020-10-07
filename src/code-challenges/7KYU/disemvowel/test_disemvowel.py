from disemvowel import disemvowel
import unittest

class TestDisemvowel(unittest.TestCase):
    def testRuns(self):
        """
        Tests that the vowels are removed from the output
        """
        result = disemvowel("This website is for losers LOL!")
        self.assertEqual(result, "Ths wbst s fr lsrs LL!")

if __name__ == '__main__':
    unittest.main()