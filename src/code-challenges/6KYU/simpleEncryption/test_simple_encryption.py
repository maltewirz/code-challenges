from simple_encryption import encrypt, decrypt
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = encrypt("This is a test!", 0)
        self.assertEqual(result, "This is a test!")

    def test_2(self):
        result = encrypt("This is a test!", 1)
        self.assertEqual(result, "hsi  etTi sats!")

    def test_3(self):
        result = encrypt("This is a test!", 2)
        self.assertEqual(result, "s eT ashi tist!")
    
    def test_31(self):
        result = encrypt("", 0)
        self.assertEqual(result, "")

    def test_32(self):
        result = encrypt(None, 0)
        self.assertEqual(result, None)

    def test_4(self):
        result = decrypt("This is a test!", 0)
        self.assertEqual(result, "This is a test!")

    def test_5(self):
        result = decrypt("hsi  etTi sats!", 1)
        self.assertEqual(result, "This is a test!")

    def test_6(self):
        result = decrypt("s eT ashi tist!", 2)
        self.assertEqual(result, "This is a test!")

    def test_61(self):
        result = decrypt(None, 0)
        self.assertEqual(result, None)


if __name__ == "__main__":
    unittest.main()
