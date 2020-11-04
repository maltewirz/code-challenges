from count_bits import count_bits
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = count_bits(4)
        self.assertEqual(result, 1)

    # def test_2(self):
    #     result = count_bits(7)
    #     self.assertEqual(result, 3)


if __name__ == "__main__":
    unittest.main()
