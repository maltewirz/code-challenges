from order import order
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = order("is2 Thi1s T4est 3a")
        self.assertEqual(result, "Thi1s is2 3a T4est")


if __name__ == "__main__":
    unittest.main()
