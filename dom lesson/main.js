testArray = [
    { value: '1', label: '321' },
    { value: '2', label: '4321' },
    { value: '3', label: '54321' },
    { value: '4', label: '654321' },
    { value: 'gg', label: 'og' }
]

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

let selectReady = initialisatorOpt(testArray, '4')
document.body.append(selectReady)