// https://www.codewars.com/kata/52685f7382004e774f0001f7/solutions/typescript

export function humanReadable(seconds:number):string {
    const minutes = Math.floor(seconds / 60);
    let secondsFinal = String((seconds % 60));
    let minutesFinal = String(minutes % 60);
    let hoursFinal = String(Math.floor(minutes/60));


    if (String(secondsFinal).length === 0) {
        secondsFinal = '00'
    } else if (String(secondsFinal).length === 1){
        secondsFinal = `0${secondsFinal}`;
    }

    if (String(minutesFinal).length === 0) {
        minutesFinal = '00'
    } else if (String(minutesFinal).length === 1){
        minutesFinal = `0${minutesFinal}`;
    }

    if (String(hoursFinal).length === 0) {
        hoursFinal = '00'
    } else if (String(hoursFinal).length === 1){
        hoursFinal = `0${hoursFinal}`;
    }
    
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