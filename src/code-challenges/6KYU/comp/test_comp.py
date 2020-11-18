from comp import comp
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        a = [121, 144, 19, 161, 19, 144, 19, 11]
        b = [
            11 * 11,
            121 * 121,
            144 * 144,
            19 * 19,
            161 * 161,
            19 * 19,
            144 * 144,
            19 * 19,
        ]
        result = comp(a, b)
        self.assertEqual(result, True)

    def test_2(self):
        result = comp(
            [-121, -144, 19, -161, 19, -144, 19, -11],
            [121, 14641, 20736, 361, 25921, 361, 20736, 361],
        )
        self.assertEqual(result, True)


if __name__ == "__main__":
    unittest.main()
