// https://www.codewars.com/kata/52685f7382004e774f0001f7/solutions/typescript

export function humanReadable(seconds:number):string {
    const minutes = Math.floor(seconds / 60);
    let secondsFinal = String((seconds % 60));
    let minutesFinal = String(minutes % 60);
    let hoursFinal = String(Math.floor(minutes/60));

    function addZeros(time: string):string {
        if (time.length === 0) {
            return '00';
        } else if (time.length === 1) {
            return `0${time}`;
        }
        return time;
    }

    secondsFinal = addZeros(secondsFinal);
    minutesFinal = addZeros(minutesFinal);
    hoursFinal = addZeros(hoursFinal);
    
    return `${hoursFinal}:${minutesFinal}:${secondsFinal}`;
}

// alternative 
// export function humanReadable(seconds:number):string {
//     const minutes = Math.floor(seconds / 60)
  
//     const onlySeconds = seconds % 60
//     const onlyMinutes = minutes % 60
//     const onlyHours = Math.floor(minutes / 60)
    
//     return [onlyHours, onlyMinutes, onlySeconds].map(formatTime).join(':')
//   }
  
//   const formatTime = (time: number) :string => time >= 10 ? time.toString() : `0${time}`