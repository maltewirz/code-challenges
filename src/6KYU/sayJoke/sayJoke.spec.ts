import { sayJoke } from './sayJoke';

const jokeDataShape = {
    jokes: [{ 
      id: 101,
      setup: "Who is Santa's favorite singer?",
      punchLine: "Elf-is Presley!"
    },
  ...moreJokes]

test('Basic test', async () => {
    const url = 'http://great.jokes/christmas';
    const joke = await sayJoke(url, 101)
    expect(joke.saySetup()).toStrictEqual("Who is Santa's favorite singer?")
})