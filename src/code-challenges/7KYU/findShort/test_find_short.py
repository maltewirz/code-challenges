from find_short import find_short
import unittest


class Test(unittest.TestCase):
    def test_find_short(self):
        result = find_short("i want to travel the world writing code one day")
        self.assertEqual(result, 1)


if __name__ == "__main__":
    unittest.main()
