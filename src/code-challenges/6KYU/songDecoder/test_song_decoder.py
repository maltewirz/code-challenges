from song_decoder import song_decoder
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = song_decoder("AWUBBWUBC")
        self.assertEqual(result, "A B C")

    def test_2(self):
        result = song_decoder("AWUBWUBWUBBWUBWUBWUBC")
        self.assertEqual(result, "A B C")

    def test_3(self):
        result = song_decoder("WUBJKDWUBWUBWBIRAQKFWUBWUBYEWUBWUBWUBWVWUBWUB")
        self.assertEqual(result, "JKD WBIRAQKF YE WV")


if __name__ == "__main__":
    unittest.main()
