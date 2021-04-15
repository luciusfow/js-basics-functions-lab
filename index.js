// Code your solution in this file!

function distanceFromHqInBlocks(location){
    const hq = 42
    if (location >= 42)
    return location - hq
    else (location <=41)
    return hq - location
}
function distanceFromHqInFeet(location){
 const hq = 42 
 if (location >=42)
 return (location - hq) * 264
 else if (location <= 41)
 return (hq - location) *264
// distanceFromHqInBlocks(location)
// return "console.logdistanceFromHqInBlocks"

}
function distanceTravelledInFeet(dis1, dis2)
{
const feet = 264
if (dis1 > dis2)
return (dis1 - dis2) * feet
else (dis1 < dis2)
return (dis2 - dis1) * feet

}

// const feet = 264
// if (start > destination)
// return (start - destination) * feet
// else (start < destination)
// return (destination - start) * feet
// function calculatesFarePrice(start, destination){

//     const cost = .02
//     distanceFromHqInFeet(trip)
function calculatesFarePrice(start, destination){
    let trip = distanceTravelledInFeet(start, destination)
        if (trip <= 400){
        return 0
        }else if (trip > 400 && trip <2000){
            return (trip - 400) * .02;
        }else if (trip > 2000 && trip < 2499){
            return 25
        }
        
        else (trip > 2500); {
        return "cannot travel that far"
        }
}