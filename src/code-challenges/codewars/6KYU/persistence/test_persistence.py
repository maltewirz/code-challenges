from persistence import persistence
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = persistence(39)
        self.assertEqual(result, 3)

    def test_2(self):
        result = persistence(4)
        self.assertEqual(result, 0)


if __name__ == "__main__":
    unittest.main()
