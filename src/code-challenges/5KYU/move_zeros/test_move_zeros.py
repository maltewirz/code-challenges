from move_zeros import move_zeros
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = move_zeros([False, 1, 0, 1, 2, 0, 1, 3, "a"])
        self.assertEqual(result, [False, 1, 1, 2, 1, 3, "a", 0, 0])

    def test_2(self):
        result = move_zeros(
            [9,
             False,
             0.0, 0, 9, 1, 2, 0, 1, 0, 1, 0.0, 3, 0, 1, 9, 0, 0, 0, 0, 9]
        )
        self.assertEqual(
            result, [9,
                     False,
                     9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        )


if __name__ == "__main__":
    unittest.main()
