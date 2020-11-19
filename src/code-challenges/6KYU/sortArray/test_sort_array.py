from sort_array import sort_array
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = sort_array([5, 3, 2, 8, 1, 4])
        self.assertEqual(result, [1, 3, 2, 8, 5, 4])


if __name__ == "__main__":
    unittest.main()
