export function chooseBestSum(t: number, k: number, ls: number[]): number | null {
    let solutions: number[] = [];
    
    recursiveSum(k, ls, 0, solutions);
    
    solutions = solutions.sort((a,b) => b-a);
    for (let i = 0; i < solutions.length; i ++) {
        if (solutions[i] <= t) {
            return solutions[i]
        }
    }

    // alternative for loop:
    // for (const sum of solutions.sort((a, b) => {
        
    //     return b - a;
    // })) {
    //     console.log('here', sum);
    //     if (sum <= t) return sum;
    // }
    return null;
}

function recursiveSum(k: number, ls: number[], sum: number, sols: number[]) {
    // console.log(k, ls, sum, sols);
    
    // base case 
    if (k == 0) {
        sols.push(sum);
    } else {
        for (let i = 0; i < ls.length; i++) {
            // console.log('for loop with ',i);
            
            recursiveSum(k-1, ls.slice(i + 1), sum + ls[i], sols);
        }
    }
}


// return biggest possible sum of k distances <= limit t 

// [50, 55, 57, 58, 60]
// [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

// 174, 3, [50, 55, 57, 58, 60]))      => (173)

// [A, B, C]
// AB, AC, BC

// [A, B, C, D]
// ABC, ABD, ACD, BCD

// [A, B, C, D, E]
// ABC, ABD, ABE, ACD, ACE, ADE, BCD, BCE, BDE, CDE

// [A, B, C, D, E]
// [A,B,C],[A,B,D],[A,B,E],[A,C,D],[A,C,E],[A,D,E],[B,C,D],[B,C,E],[B,D,E],[C,D,E].

