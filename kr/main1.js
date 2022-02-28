let users = [
    { name: 'Alex', login: 'alex123', password: '12345' },
    { name: 'Anton', login: 'antonyjurakov', password: 'antonpirojkov' },
    { name: 'Evgeniy', login: 'evg321', password: 'ds313' }
]


function autorization(array) {
    let login = prompt('Введите логин ')
    let password = prompt('Введите пароль ')
    let check = false

    for (i of array) {
        if (i.login == login) {
            if (i.password == password) {
                alert(`Hello, ${i.name}!`)
                check = true
            }
        }
    }

    if (check == false) {
        alert('Ошибка! Такого пользователя не существует.')
    }
}


autorization(users)
