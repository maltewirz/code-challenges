# https://www.codewars.com/kata/587136ba2eefcb92a9000027/train/python

# Your task is to make a simple class called SnakesLadders. The test
#  cases will call the method play(die1, die2) independently of the
#   state of the game or the player turn. The variables die1 and die2
#    are the die thrown in a turn and are both integers between 1 and
#     6. The player will move the sum of die1 and die2.


class SnakesLadders:

    snakes_and_ladders = {
        2: 38,
        7: 14,
        8: 31,
        15: 26,
        21: 42,
        28: 84,
        36: 44,
        51: 67,
        71: 91,
        78: 98,
        87: 94,
        16: 6,
        46: 25,
        49: 11,
        62: 19,
        64: 60,
        74: 53,
        89: 68,
        92: 88,
        95: 75,
        99: 80,
    }

    def __init__(self):
        self.players = [(1, 0), (2, 0)]

    def play(self, die1, die2):
        if any(square == 100 for player, square in self.players):
            return "Game over!"
        new_square = self.players[0][1] + die1 + die2
        if new_square > 100:
            new_square = 200 - new_square
        new_square = self.snakes_and_ladders.get(new_square, new_square)
        self.players[0] = (self.players[0][0], new_square)
        result = (
            "Player {0} Wins!" if new_square == 100 else "Player {0} is on square {1}"
        ).format(*self.players[0])
        if die1 != die2:
            self.players.reverse()
        return result
