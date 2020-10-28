from multiples35 import multiples35
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = multiples35(10)
        self.assertEqual(result, 23)


if __name__ == "__main__":
    unittest.main()
