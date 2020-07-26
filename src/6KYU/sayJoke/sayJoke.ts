// https://www.codewars.com/kata/5a353a478f27f244a1000076/train/javascript
// This only works in the test on codewars where the mocked api data is accessible

export async function sayJoke(apiUrl: string, jokeId: number) {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();

    if (!jsonData.hasOwnProperty('jokes')) {
        throw new Error(`No jokes at url: ${apiUrl}`);
    }

    const joke = jsonData.jokes.find(joke => {
        return joke.id === jokeId;
    })

    if (!joke) {
        throw new Error(`No jokes found id: ${jokeId}`)
    }

    return {
        saySetup: () => joke.setup,
        sayPunchLine: () => joke.punchLine,
    }
}