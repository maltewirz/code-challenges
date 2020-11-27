from roman_encoder import roman_encoder
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = roman_encoder(1)
        self.assertEqual(result, 'I')

    def test_2(self):
        result = roman_encoder(4)
        self.assertEqual(result, 'IV')

    def test_3(self):
        result = roman_encoder(14)
        self.assertEqual(result, 'XIV')

    def test_4(self):
        result = roman_encoder(21)
        self.assertEqual(result, 'XXI')

    def test_5(self):
        result = roman_encoder(984)
        self.assertEqual(result, 'CMLXXXIV')

    def test_6(self):
        result = roman_encoder(1989)
        self.assertEqual(result, 'MCMLXXXIX')



if __name__ == "__main__":
    unittest.main()
