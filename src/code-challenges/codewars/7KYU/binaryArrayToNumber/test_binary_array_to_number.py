from binary_array_to_number import binary_array_to_number
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = binary_array_to_number([0, 0, 0, 1])
        self.assertEqual(result, 1)

    def test_2(self):
        result = binary_array_to_number([0, 0, 1, 0])
        self.assertEqual(result, 2)


if __name__ == "__main__":
    unittest.main()
