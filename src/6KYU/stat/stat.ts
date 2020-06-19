// https://www.codewars.com/kata/55b3425df71c1201a800009c/
export function stat(str: string) {
    if (str.length === 0) {
        return '';
    }
    let secondsArr: number[] = [];
    let median = 0;
    /** Description: convert timeString in hours to timeArr in seconds */
    str.split(',').forEach(strVal => {
        let seconds = 0;
        const timeArr = strVal.split('|').map(timeStr => Number(timeStr));
        seconds += timeArr[0] * 60 * 60 + timeArr[1] * 60 + timeArr[2];
        secondsArr.push(seconds);
    });
    const sortedArr = secondsArr.sort((a,b) => b-a);
    
    /** Median calc */
    if (sortedArr.length % 2 === 0) {
        median = (sortedArr[sortedArr.length/2-1] + sortedArr[sortedArr.length/2]) / 2;        
    } else {
        median = sortedArr[Math.floor(sortedArr.length/2)];
    }

    /** Mean calc */
    const mean = sortedArr.reduce((acc, curr) => acc + curr) / sortedArr.length;

    /** Range calc */
    const range = sortedArr[0] - sortedArr[sortedArr.length-1];
    
    function secondsToHms(d: number) {
        d = Number(d);
        var h = + Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
        return `${("0" + h).slice(-2)}|${("0" + m).slice(-2)}|${("0" + s).slice(-2)}`; 
    }

    return `Range: ${secondsToHms(range)} Average: ${secondsToHms(mean)} Median: ${secondsToHms(median)}`;
}

// alternative
// public static stat = (strg) => {
//     if (!strg) return strg;
//     const times = strg.split(', ').map(t => {
//       const [ hours, minutes, seconds ] = t.split('|').map(n => +n);  // GREAT
//       return (hours * 3600) + (minutes * 60) + (seconds);
//     }).sort((a, b) => a - b);
//     const range = times[times.length-1] - times[0];
//     const mean = times.reduce((total, t) => total + t, 0) / times.length;
//     const middle = Math.floor(times.length / 2);
//     const median = times.length % 2 !== 0 ? times[middle] : ((times[middle-1] + times[middle]) / 2);
//     const pad = (num) => ('0' + Math.floor(num)).substr(-2);
//     const formatTime = (time) => {
//       const minutes = time % 3600;
//       return `${pad(time / 3600)}|${pad(minutes / 60)}|${pad(minutes % 60)}`;
//     };
//     return `Range: ${formatTime(range)} Average: ${formatTime(mean)} Median: ${formatTime(median)}`;
//   }