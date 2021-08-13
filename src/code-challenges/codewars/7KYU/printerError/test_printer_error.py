from printer_error import printer_error
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = printer_error("aaaxbbbbyyhwawiwjjjwwm")
        self.assertEqual(result, "8/22")

    def test_2(self):
        result = printer_error("aaabbbbhaijjjm")
        self.assertEqual(result, "0/14")


if __name__ == "__main__":
    unittest.main()
