
function distanceFromHqInBlocks(pickUpLocation) {
    if (pickUpLocation > 42){
    return pickUpLocation - 42
    }
    else if (pickUpLocation < 42){
      return 42 - pickUpLocation 
    }
  }
 
  function distanceFromHqInFeet(someValue) {
    console.log (someValue)
    let block = distanceFromHqInBlocks(someValue);
    console.log(block)
    let feet = block * 264
    return (feet)

  }

  function distanceTravelledInFeet(start, destination) {
    console.log (start, destination)
    if (destination > start){
      let feet = (destination - start) * 264  
    return (feet)
    }
    else if (destination < start){
      let feet = (start - destination) * 264
    return feet}


  }

  function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination)
    console.log(feet)
    if (feet < 400) {
      return 0 
    }
    else if (feet > 400 && feet < 2000){
      return (feet-400) *.02
    }
    else if (feet > 2000 && feet < 2500){
      return 25
    }
    else if (feet > 2500){
      return "cannot travel that far"}

  }