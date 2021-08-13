from tower_builder import tower_builder
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = tower_builder(1)
        self.assertEqual(result, ["*"])

    def test_2(self):
        result = tower_builder(2)
        self.assertEqual(result, [" * ", "***"])

    def test_3(self):
        result = tower_builder(3)
        self.assertEqual(result, ["  *  ", " *** ", "*****"])

    def test_4(self):
        result = tower_builder(0)
        self.assertEqual(result, [])


if __name__ == "__main__":
    unittest.main()
