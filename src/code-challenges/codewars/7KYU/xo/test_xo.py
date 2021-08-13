from xo import xo
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = xo("xo")
        self.assertEqual(result, True)

    def test_2(self):
        result = xo("xo0")
        self.assertEqual(result, True)

    def test_3(self):
        result = xo("xxxoo")
        self.assertEqual(result, False)


if __name__ == "__main__":
    unittest.main()
