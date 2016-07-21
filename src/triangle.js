function identifyTriangle(a,b,c) {
    if (anyInvalidArguments(a,b,c) === true) throw new Error("invalid arguments");
    if (confirmTriangle(a,b,c) === false) throw new Error("not a triangle");
    if (allSidesEqual(a,b,c)) return "equilateral";
    if (onlyTwoSidesEqual(a,b,c)) return "isosceles";
    // otherwise
    return "scalene";
}

/////////////////////// Helper Functions /////////////////////


function args2Arr (a,b,c){
    if (anyInvalidArguments(a,b,c) === true) {
        console.error('all arguments must be numeric');
        return false;
    }

    return [+a,+b,+c].sort(function(a,b){ return a - b; });
}

function anyInvalidArguments (a,b,c) {
    var isInvalid = false;
    [a,b,c].map(function(el){
        if (isNaN(+el)){
            console.log(el + " is not a valid entry - all arguments must be numbers");
            isInvalid = true;
        }
        if (+el <=0) {
            console.log(el + " is not a valid entry - all arguments must be greater than zero");
            isInvalid = true;
        }
    })
    // otherwise
    return isInvalid;
}

function confirmTriangle(a,b,c) {
    if (anyInvalidArguments(a,b,c) === true) return false;

    var sidesArr = args2Arr(a,b,c);
    console.log(sidesArr);
    return sidesArr[0] + sidesArr[1] > sidesArr[2] ? true : false;
}

function allSidesEqual(a,b,c){
    if (anyInvalidArguments(a,b,c) === true) return false;

    var sidesArr = args2Arr(a,b,c);
    return sidesArr[0] === sidesArr[1] &&
        sidesArr[1] === sidesArr[2];
}

function onlyTwoSidesEqual(a,b,c){
    if (anyInvalidArguments(a,b,c) === true) return false;

    var sidesArr = args2Arr(a,b,c);
    console.log(sidesArr);
    return sidesArr[1] === sidesArr[2] && sidesArr[1] != sidesArr[0];
}

