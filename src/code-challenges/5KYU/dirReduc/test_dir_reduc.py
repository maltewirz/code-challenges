from dir_reduc import dir_reduc
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = dir_reduc(
            ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
        )
        self.assertEqual(result, ["WEST"])


if __name__ == "__main__":
    unittest.main()
