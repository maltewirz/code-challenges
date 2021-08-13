from filter_list import filter_list
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = filter_list([1, 2, "a", "b"])
        self.assertEqual(result, [1, 2])


if __name__ == "__main__":
    unittest.main()
