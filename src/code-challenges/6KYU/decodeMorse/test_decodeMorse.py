from decodeMorse import decodeMorse
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = decodeMorse(".... . -.--   .--- ..- -.. .")
        self.assertEqual(result, "HEY JUDE")

    def test_2(self):
        result = decodeMorse(" . ")
        self.assertEqual(result, "E")

    def test_3(self):
        result = decodeMorse("   .   . ")
        self.assertEqual(result, "E E")


if __name__ == "__main__":
    unittest.main()
