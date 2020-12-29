from productFib import productFib
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = productFib(4895)
        self.assertEqual(result, [55, 89, True])

    # def test_2(self):
    #     result = productFib(5895)
    #     self.assertEqual(result, [89, 144, False])


if __name__ == "__main__":
    unittest.main()
