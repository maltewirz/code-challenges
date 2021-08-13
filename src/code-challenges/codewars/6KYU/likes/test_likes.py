from likes import likes
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = likes([])
        self.assertEqual(result, 'no one likes this')

    def test_2(self):
        result = likes(['Peter'])
        self.assertEqual(result, 'Peter likes this')

    def test_3(self):
        result = likes(['Jacob', 'Alex'])
        self.assertEqual(result, 'Jacob and Alex like this')

    def test_4(self):
        result = likes(['Alex', 'Jacob', 'Mark', 'Max'])
        self.assertEqual(result, 'Alex, Jacob and 2 others like this')


if __name__ == "__main__":
    unittest.main()
