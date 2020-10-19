from validate_pin import validate_pin
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = validate_pin("1234")
        self.assertEqual(result, True)

    def test_2(self):
        result = validate_pin("12345")
        self.assertEqual(result, False)


if __name__ == "__main__":
    unittest.main()
