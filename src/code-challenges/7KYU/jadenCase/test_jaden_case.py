from jaden_case import jaden_case
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = jaden_case("How can mirrors be real if our eyes")
        self.assertEqual(result, "How Can Mirrors Be Real If Our Eyes")


if __name__ == "__main__":
    unittest.main()
