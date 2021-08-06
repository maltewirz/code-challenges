const shiftedDiff = (first, second) => {
    // Loop over first string. If strings similar, return the index.
    // If not yet similar, pop last character and unshift to beginning.
    for (let i = 0; i < first.length; i++) {
        if (first === second) {
            return i;
        }

        const strArr = first.split('');
        const lastChar = strArr.pop();
        strArr.unshift(lastChar);
        first = strArr.join('');
    }

    return -1;
};