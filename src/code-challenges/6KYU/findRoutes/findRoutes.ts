/**
https://www.codewars.com/kata/5899a4b1a6648906fe000113/train/javascript

We are tracking down our rogue agent Matthew Knight also known as Roy Miller.
He travels from places to places to avoid being tracked. Each of his travels are
based on a list of itineraries in an unusual or incorrect order. The task is to
determine the routes he will take in his every journey.

Task
You are given an array of routes of his itineraries. List down the only places where
he will go in correct order based on his itineraries.

Example
Given the following routes:

[ [USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN] ]
The result will be:

"USA, BRA, UAE, JPN, PHL"
Note:

It is safe to assume that there will be no repeating place with a different route.
There are no empty routes.
There will be at least one (1) route (from one waypoint to another).
 */

export function findRoutes(routes: string[][]): string {  
    const startPoints: string[] = []
    const endPoints: string[] = []
    const result = []
    
    // Push start- and endpoints into a separate array
    routes.forEach((route:string[]) => {
      startPoints.push(route[0])
      endPoints.push(route[1])
    })
    
    // Loop through startPoints Array and find the item that can't be found 
    // in endPoints Array - this is the first startPoint. Push first startPoint
    // and it's respective endPoint to result array.
    for (let i = 0; i < startPoints.length; i++) {
      if (endPoints.indexOf(startPoints[i]) === -1) {
        result.push( startPoints[i], endPoints[i])
      }
    }
    
    // Loop through endPoints Array, get the last item from results. This is
    // the next startPoint including its index "startIdx". Get the currentEndPoint 
    // by using the index of the startPoint and push to result.
    for (let i = 0; i < endPoints.length-1; i++) {
      const currentStart = result[result.length-1]
      const currentStartIdx = startPoints.indexOf(currentStart)
      const currentEndPoint = endPoints[currentStartIdx]
      result.push(currentEndPoint)
    }
    return result.join(', ')
}
  