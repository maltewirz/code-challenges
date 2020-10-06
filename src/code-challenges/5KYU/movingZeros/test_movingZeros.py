from movingZeros import moveZeros
import unittest

class TestMoveZeros(unittest.TestCase):
    def test_return_for_wrong_argument(self):
        """
        Tests that None is returned if the array argument is wrong
        """
        result = moveZeros("test")
        self.assertEqual(result, None)

    def test_return_none_for_no_argument(self):
        """
        Tests that None is returned if no argument is passed in
        """
        result = moveZeros()
        self.assertEqual(result, None)

    def test_returns_zeros_at_end(self):
        """
        Tests that all zeros in list have been moved to the end
        """
        l = [4, 0, 9, 0, 1, 4, 0, False, None, 0, True, 0]
        result = moveZeros(l)
        self.assertEqual(result, [4, 9, 1, 4, False,
                                  None, True, 0, 0, 0, 0, 0])


if __name__ == "__main__":
    unittest.main()