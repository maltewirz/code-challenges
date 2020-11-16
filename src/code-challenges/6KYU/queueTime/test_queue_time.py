from queue_time import queue_time
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = queue_time([5], 1)
        self.assertEqual(result, 5)

    def test_2(self):
        result = queue_time([10, 2, 3, 3], 2)
        self.assertEqual(result, 10)

    def test_3(self):
        result = queue_time([1, 2, 3, 4, 5], 100)
        self.assertEqual(result, 5)

    def test_4(self):
        result = queue_time([2, 2, 3, 3, 4, 4], 2)
        self.assertEqual(result, 9)


if __name__ == "__main__":
    unittest.main()
