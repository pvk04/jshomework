let objects = [
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Петр', surname: 'Петров' },
    { name: 'Василий', surname: 'Васильев' },
]


function filter(masssive, key, value) {
    result = []
    for (obj of masssive) {
        if (obj[key] == value) {
            result.push(obj)
        }
    }
    return result
}

console.log(filter(objects, 'surname', 'Васильев'))

