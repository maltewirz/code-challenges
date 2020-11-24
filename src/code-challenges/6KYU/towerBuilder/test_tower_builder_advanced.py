from tower_builder_advanced import tower_builder_advanced
import unittest


class Test(unittest.TestCase):
    def test_1(self):
        result = tower_builder_advanced(3, (2, 3))
        self.assertEqual(
            result,
            [
                "    **    ",
                "    **    ",
                "    **    ",
                "  ******  ",
                "  ******  ",
                "  ******  ",
                "**********",
                "**********",
                "**********",
            ],
        )

    def test_2(self):
        result = tower_builder_advanced(3, (4, 2))
        self.assertEqual(
            result,
            [
                "        ****        ",
                
                "        ****        ",
                "    ************    ",
                "    ************    ",
                "********************",
                "********************",
            ],
        )


if __name__ == "__main__":
    unittest.main()
