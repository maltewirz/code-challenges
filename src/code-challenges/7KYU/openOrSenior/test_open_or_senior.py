from open_or_senior import open_or_senior
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = open_or_senior([(45, 12), (55, 21), (19, -2), (104, 20)])
        self.assertEqual(result, ["Open", "Senior", "Open", "Senior"])


if __name__ == "__main__":
    unittest.main()
