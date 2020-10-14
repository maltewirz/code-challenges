from DNA_strand import DNA_strand
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = DNA_strand("AAAA")
        self.assertEqual(result, "TTTT")

    def test_2(self):
        result = DNA_strand("ATTGC")
        self.assertEqual(result, "TAACG")

    def test_3(self):
        result = DNA_strand("GTAT")
        self.assertEqual(result, "CATA")


if __name__ == "__main__":
    unittest.main()
