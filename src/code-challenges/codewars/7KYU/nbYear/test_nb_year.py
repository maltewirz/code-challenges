from nb_year import nb_year
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = nb_year(1500, 5, 100, 5000)
        self.assertEqual(result, 15)

    def test_2(self):
        result = nb_year(1500000, 2.5, 10000, 2000000)
        self.assertEqual(result, 10)


if __name__ == "__main__":
    unittest.main()
