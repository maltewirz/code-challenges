from add_binary import add_binary
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = add_binary(1, 1)
        self.assertEqual(result, '10')


if __name__ == "__main__":
    unittest.main()
