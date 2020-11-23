from delete_nth import delete_nth
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = delete_nth([20, 37, 20, 21], 1)
        self.assertEqual(result, [20, 37, 21])

    def test_2(self):
        result = delete_nth(
            [
                11,
                11,
                33,
                30,
                24,
                30,
                30,
                24,
                17,
                33,
                33,
                11,
                30,
                17,
                30,
                11,
                24,
                30,
                30,
                24,
                17,
                2,
                30,
                17,
                2,
                30,
                2,
                17,
                24,
                33,
                17,
                17,
                11,
                30,
                17,
                17,
                33,
                30,
            ],
            10,
        )
        self.assertEqual(
            result,
            [
                11,
                11,
                33,
                30,
                24,
                30,
                30,
                24,
                17,
                33,
                33,
                11,
                30,
                17,
                30,
                11,
                24,
                30,
                30,
                24,
                17,
                2,
                30,
                17,
                2,
                30,
                2,
                17,
                24,
                33,
                17,
                17,
                11,
                30,
                17,
                17,
                33,
            ],
        )

    def test_3(self):
        result = delete_nth([1, 2, 3, 1, 2, 1, 2, 3], 2)
        self.assertEqual(result, [1, 2, 3, 1, 2, 3])


if __name__ == "__main__":
    unittest.main()
