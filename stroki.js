// Задание 1
password = "_1q3"
password.length >=4 && (password.includes("-") || password.includes("_")) ? console.log("Надежный") : console.log("Ненадежный")


// Задание 2
name = "аНдрЕй"
surname = "Петров"
correct_name =name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()
correct_surname = surname.slice(0,1).toUpperCase() + surname.slice(1).toLowerCase()
console.log(correct_name, correct_surname)
name === correct_name ? console.log("Имя осталось без изменений") : console.log("Имя было преобразовано")
surname === correct_surname ? console.log("Фамилия осталась без изменений") : console.log("Фамилия была преобразована") 