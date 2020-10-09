from vowelCount import vowelCount
import unittest


class TestVowelCount(unittest.TestCase):
    def testRuns(self):
        """
        Tests that the vowels are counted
        """
        result = vowelCount("abracadabra")
        self.assertEqual(result, 5)


if __name__ == "__main__":
    unittest.main()
