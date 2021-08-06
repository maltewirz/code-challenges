function findRoutes(routes) {
    let startPoints = []
    let endPoints = []
    let result = []
    
    // Push start- and endpoints into a separate array
    routes.forEach(route => {
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
      let currentStart = result[result.length-1]
      let currentStartIdx = startPoints.indexOf(currentStart)
      let currentEndPoint = endPoints[currentStartIdx]
      result.push(currentEndPoint)
    }
    return result.join(', ')
}
  