from namelist import namelist
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = namelist([{"name": "Bart"}])
        self.assertEqual(result, "Bart")

    def test_2(self):
        result = namelist([{"name": "Bart"}, {"name": "Lisa"}])
        self.assertEqual(result, "Bart & Lisa")

    def test_3(self):
        result = namelist([{"name": "Bart"}, {"name": "Lisa"}, {"name": "Maggie"}])
        self.assertEqual(result, "Bart, Lisa & Maggie")


if __name__ == "__main__":
    unittest.main()
