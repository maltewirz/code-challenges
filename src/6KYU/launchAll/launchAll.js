// https://www.codewars.com/kata/567ed5db4089538eea000010/train/javascript

let count = 0;
function launchAll(launchMissile) {
    count++;
    if (count > 4) {
        clearInterval(timeout)
    }
    launchMissile(count);
}
let timeout = setInterval(launchAll, 1000);

