from to_camel_case import to_camel_case
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = to_camel_case("the-stealth-warrior")
        self.assertEqual(result, "theStealthWarrior")

    def test_2(self):
        result = to_camel_case("The-Cat_was-Hungry")
        self.assertEqual(result, "TheCatWasHungry")


if __name__ == "__main__":
    unittest.main()
