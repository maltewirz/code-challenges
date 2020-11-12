from unique_in_order import unique_in_order
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = unique_in_order("AAAABBBCCDAABBB")
        self.assertEqual(result, ["A", "B", "C", "D", "A", "B"])

    def test_2(self):
        result = unique_in_order('ABBCcAD')
        self.assertEqual(result, ['A', 'B', 'C', 'c', 'A', 'D'])


if __name__ == "__main__":
    unittest.main()
