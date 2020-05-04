export const bonusTime = (salary: number, bonus: boolean):string => {
    if (bonus) {
        return `£${salary*10}`
    } else {
        return `£${salary}`
    }
}


//alternative
// return `£${salary * (bonus ? 10 : 1)}`;