from digital_root import digital_root
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = digital_root(16)
        self.assertEqual(result, 7)

    def test_2(self):
        result = digital_root(942)
        self.assertEqual(result, 6)


if __name__ == "__main__":
    unittest.main()
