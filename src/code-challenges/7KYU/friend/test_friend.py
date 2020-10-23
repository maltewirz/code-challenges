from friend import friend
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = friend(
            [
                "Ryan",
                "Kieran",
                "Mark",
            ]
        )
        self.assertEqual(result, ["Ryan", "Mark"])


if __name__ == "__main__":
    unittest.main()
