from tickets import tickets
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = tickets([25, 25, 50])
        self.assertEqual(result, "YES")

    def test_2(self):
        result = tickets([25, 100])
        self.assertEqual(result, "NO")

    def test_3(self):
        result = tickets([25, 25, 50, 100])
        self.assertEqual(result, "YES")

    def test_4(self):
        result = tickets([25, 25, 25, 25, 50, 100, 50])
        self.assertEqual(result, "YES")


if __name__ == "__main__":
    unittest.main()
