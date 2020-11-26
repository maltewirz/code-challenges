from count_smileys import count_smileys
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = count_smileys([":D", ":~)", ";~D", ":)"])
        self.assertEqual(result, 4)

    def test_2(self):
        result = count_smileys([":)", ":(", ":D", ":O", ":;"])
        self.assertEqual(result, 2)

    def test_3(self):
        result = count_smileys(
            [
                ":D",
                ";-(",
                ":oD",
                ":oD",
                ";D",
                ";D",
                ":-(",
                ":D",
                ";D",
                ":(",
                ";(",
                ";o(",
            ]
        )
        self.assertEqual(result, 5)


if __name__ == "__main__":
    unittest.main()
