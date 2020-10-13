from descending_order import descending_order
import unittest


class Test(unittest.TestCase):
    def test_descending_order(self):
        """
        Tests square digits
        """
        result = descending_order(15)
        self.assertEqual(result, 51)


if __name__ == "__main__":
    unittest.main()
