/**
Loop through object to get the last three data items in data points.
*/

export const lastThree = (list:any): string[] => {
    const arr = [];
    while (list) {
        arr.push(list.data);
        if (arr.length > 3) {
            arr.shift();
        }
        list = list.next;
    }
    return arr;
};