let num = Math.round(Math.random() * 100);
console.dir(num);


function bot(number) {
    let uv = prompt('Ведите вариант отгадки');
    if (parseInt(uv) > number) {
        alert('Меньше');
        bot(number);
    }
    else if (parseInt(uv) < number) {
        alert('Больше');
        bot(number);
    }
    else if (parseInt(uv) === number) {
        alert('Правильно');
        let conf = confirm("Сыграть снова?");
        if (conf){
            num = Math.round(Math.random() * 100);
            console.log(num);
            bot(num);
        }
    }
    else if (uv == null) {
        return alert('Игра окончена')
    }
    else {
        alert('Введи число!');
        bot(number);
    }
}

bot(num);