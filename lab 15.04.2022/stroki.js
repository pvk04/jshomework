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
    let resWord;
    let result = [];

    for (let i = 0; i < resStr.length; i++){
        resWord = resStr[i][0].toUpperCase() + resStr[i].slice(1, resStr[i].length);
        result.push(resWord);
    }

    return result.join("");
}

// console.log(camelCase(str));


// Ex 3
let fullName = "Иван Иванович Иванов";
let surname = "Иванов";

function checkSurnamePosition(fullName, surname){
    let array = fullName.split(" ");
    let resArr = [];
    if (array[2] == surname){
        resArr.push(array[2], array[0], array[1]);
        return resArr.join(" ");
    }
    return fullName;
}

// console.log(checkSurnamePosition(fullName, surname));