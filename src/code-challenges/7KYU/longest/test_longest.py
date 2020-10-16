from longest import longest
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = longest("aretheyhere", "yestheyarehere")
        self.assertEqual(result, "aehrsty")

    def test_2(self):
        result = longest("loopingisfunbutdangerous", "lessdangerousthancoding")
        self.assertEqual(result, "abcdefghilnoprstu")

    def test_3(self):
        result = longest("inmanylanguages", "theresapairoffunctions")
        self.assertEqual(result, "acefghilmnoprstuy")

    def test_4(self):
        result = longest("abcd", "abecd")
        self.assertEqual(result, "abcde")


if __name__ == "__main__":
    unittest.main()
