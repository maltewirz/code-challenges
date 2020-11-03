from spin_words import spin_words
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = spin_words("Welcome to me")
        self.assertEqual(result, "emocleW to me")


if __name__ == "__main__":
    unittest.main()
