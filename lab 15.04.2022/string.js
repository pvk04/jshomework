"use strict";

// Ex 1

let date = "2025-12-31";

function test(date){
    let splitDate = date.split("-");
    let resDate = [splitDate[2], splitDate[1], splitDate[0]];
    return resDate.join("/");
}

// console.log(test(date));


// Ex 2

let str = "hELLo woRld";

function camelCase(string){
    let newStr = string.toLowerCase();
    let resStr = newStr.split(" ");
    let result = []

    for (let i = 0; i < resStr.length; i++){
        resStr[i].toUpperCase(); 
        
    }

    console.log(resStr);
}

camelCase(str);