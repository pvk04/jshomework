let num = Math.round(Math.random() * 100)
console.dir(num)


function bot(number) {
    let uv = prompt('Ведите вариант отгадки')
    if (parseInt(uv) > number) {
        alert('Меньше')
        bot(number)
    }
    else if (parseInt(uv) < number) {
        alert('Больше')
        bot(number)
    }
    else if (parseInt(uv) === number) {
        return alert('Правильно')
    }
    else if (uv == null) {
        return alert('Игра окончена')
    }
    else {
        alert('Введи число!')
        bot(number)
    }
}

bot(num)