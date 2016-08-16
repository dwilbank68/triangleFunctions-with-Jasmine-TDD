var RomanObj = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
}

function pushToArray(arr, times, key){
    var i = 0;
    while (++i <= times){
        arr.push(RomanObj[key])
    }
}

function toRoman(arabic) {

    if (arabic <= 0) return "";
    if (arabic > 3000) return false;

    var romArray = [];

    var romanObj = RomanObj;
    var keys = Object.keys(romanObj)
                        .sort(function(a,b){
                            return b - a;
                        })

    for(var i = 0; i < keys.length; i++) {
        if (arabic >= keys[i]){
            var times = parseInt(arabic / keys[i]);
            pushToArray(romArray, times, keys[i]);
            arabic -= times * keys[i];
        }

    }

    return romArray.join('');

}

console.log(toRoman("987.9999"));

