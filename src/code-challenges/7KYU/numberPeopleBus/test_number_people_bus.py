from number_people_bus import number_people_bus
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = number_people_bus([[10, 0], [3, 5], [5, 8]])
        self.assertEqual(result, 5)


if __name__ == "__main__":
    unittest.main()
