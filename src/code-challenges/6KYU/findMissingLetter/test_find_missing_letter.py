from find_missing_letter import find_missing_letter
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = find_missing_letter(["a", "b", "c", "d", "f"])
        self.assertEqual(result, "e")


if __name__ == "__main__":
    unittest.main()
