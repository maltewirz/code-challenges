from snakes_ladders import SnakesLadders
import unittest


game = SnakesLadders()


class Test(unittest.TestCase):
    def test_1(self):
        result = game.play(1, 1)
        self.assertEqual(result, "Player 1 is on square 38")

    def test_2(self):
        result = game.play(1, 5)
        self.assertEqual(result, "Player 1 is on square 44")


if __name__ == "__main__":
    unittest.main()
