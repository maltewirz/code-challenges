from is_valid_walk import is_valid_walk
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = is_valid_walk(["n", "s", "n", "s", "n",
                                "s", "n", "s", "n", "s"])
        self.assertEqual(result, True)

    def test_2(self):
        result = is_valid_walk(
            ["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]
        )
        self.assertEqual(result, False)


if __name__ == "__main__":
    unittest.main()
