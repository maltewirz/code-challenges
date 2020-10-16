from maskify import maskify
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = maskify("4556364607935616")
        self.assertEqual(result, "############5616")

    def test_2(self):
        result = maskify("1234")
        self.assertEqual(result, "1234")


if __name__ == "__main__":
    unittest.main()
