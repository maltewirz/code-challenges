export function chooseBestSum(t: number, k: number, ls: number[]): number | null {
    const a = comb(ls, k);
    let mx = -1;
    let res: [number[], number] | null = null;
    for (let i = 0; i < a.length; i++) {
      const s = a[i].reduce(function(a, b) { return a + b; });
      if ((s >= mx) && (s <= t)) {
        res = [a[i], s];
        mx = s;
      }
    }
    
    return (res !== null) ? res[1] : null;
}

const comb = (ls: number[], k: number) => {    
    const res: number[][] = [];
    let subset, nxt;
    for(let i = 0; i < ls.length; i++) {        
    if(k === 1){
        res.push([ls[i]]);
    }else{
        subset = comb(ls.slice(i+1, ls.length), k - 1);
        for(let sub1 = 0; sub1 < subset.length; sub1++ ) {
          nxt = subset[sub1];
          nxt.unshift(ls[i]);
          res.push(nxt);
        }
      }
    }
    return res;
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



// Recursive Solution:
// export function chooseBestSum(t: number, k: number, ls: number[]): number | null {
//     let solutions: number[] = [];
    
//     recursiveSum(k, ls, 0, solutions);
    
//     solutions = solutions.sort((a,b) => b-a);
//     for (let i = 0; i < solutions.length; i ++) {
//         if (solutions[i] <= t) {
//             return solutions[i]
//         }
//     }
//     return null;
// }

// function recursiveSum(k: number, ls: number[], sum: number, sols: number[]) {
//     console.log(k, ls, sum, sols);
    
//     // base case 
//     if (k == 0) {
//         sols.push(sum);
//     } else {
//         for (let i = 0; i < ls.length; i++) {
            
//             recursiveSum(k-1, ls.slice(i + 1), sum + ls[i], sols);
//         }
//     }
// }