// ex 1
function initialisatorOpt(array, value = array[0].value) {
    let select = document.createElement("select")

    let optArr = []

    for (item of array) {
        if (item.value == value) {
            optArr[0] = document.createElement('option')
            optArr[0].textContent = item.label
            optArr[0].value = value
            select.append(optArr[0])
        }
    }

    for (let i = 0; i < array.length; i++) {
        optArr[i] = document.createElement("option")
        optArr[i].textContent = array[i].label
        optArr[i].value = array[i].value
        if (optArr[i].value != value) {
            select.append(optArr[i])
        }
    }
    return select
}

//test 1
testArray = [
    { value: '1', label: '321' },
    { value: '2', label: '4321' },
    { value: '3', label: '54321' },
    { value: '4', label: '654321' },
    { value: 'gg', label: 'og' }
]

let selectReady = initialisatorOpt(testArray, '4')
document.body.append(selectReady)




// ex 2
function sortOptData(data) {

    let resultArray = []

    //если в функцию посылается массив
    if (Array.isArray(data)) {
        for (i of data) {
            obj = { 'value': i, 'label': i }
            resultArray.push(obj)
        }
        return resultArray
    }

    //если в функцию посылается объект
    for (key in data) {
        obj = { 'value': data[key], 'label': data[key] }
        resultArray.push(obj)
    }
    return resultArray
}


// test array
let testArr = [1, 2, 'три', 'четыре']

let selectReady21 = initialisatorOpt(sortOptData(testArr), 'четыре')
document.body.append(selectReady21)

//test object
let testObj = { value1: 'значение1', valuel: 'значение 2', abc: 123 }

let selectReady22 = initialisatorOpt(sortOptData(testObj), 123)
document.body.append(selectReady22)

