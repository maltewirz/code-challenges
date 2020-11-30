from high import high
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = high('man i need a taxi up to ubud')
        self.assertEqual(result, 'taxi')

    def test_2(self):
        result = high('what time are we climbing up the volcano')
        self.assertEqual(result, 'volcano')



if __name__ == "__main__":
    unittest.main()
