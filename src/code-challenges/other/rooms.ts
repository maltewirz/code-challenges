/**
”Is it possible to open all the rooms in the escape room event? 🤔”

Imagine that we’re hosting an “escape-room” event for the party. We prepared
a place that has 5 rooms in total, each room has a number and possibly keys
from other rooms inside. We somehow locked all the rooms, but we have a key to room 0.

As engineers, we want to validate that our puzzle is possible to solve and
it’s possible to open all the rooms.

**/

export function canOpenAllRooms(rooms: number[][]): boolean {
    const visitedRoom = new Array(rooms.length).fill(false);

    let keyStorage: number[] = [0];

    while (keyStorage.length) {
        const currentKey = keyStorage.pop();
        // check did i visit the room for the current key already
        if (!visitedRoom[currentKey!]) {
            visitedRoom[currentKey!] = true;
            keyStorage = keyStorage.concat(rooms[currentKey!]);
        }
    }

    return visitedRoom.every((roomVisited) => roomVisited);
}
