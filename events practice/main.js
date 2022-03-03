let btn1 = document.querySelector('.ex1')
let btn2 = document.querySelector('.ex2')
let input = document.querySelector('.inp')
let input2 = document.querySelector('.inp2')
let square = document.querySelector("#square")
let squares = document.querySelectorAll("#square")

// //ex1
// btn1.addEventListener('click', () => {
//     alert('Привет мир!')
// })


// // ex2


// btn2.addEventListener('click', () => {

//     input.value = "test @email.ru"
// })


// //ex3
// btn2.addEventListener('click', () => {
//     if (input.value == '') {
//         alert('Вы ничего не ввели')
//     }
//     else {
//         alert(`Вы ввели ${input.value}`)
//     }
// })


// //ex4
// btn2.addEventListener('click', () => {
//     val1 = input.value
//     val2 = input2.value

//     input.value = val2
//     input2.value = val1
// })


// //ex5
// btn1.addEventListener('click', () => {
//     input.disabled = true
// })

// btn2.addEventListener('click', () => {
//     input.disabled = false
// })


// //ex6
// btn1.textContent = 'Скрыть'
// btn1.addEventListener('click', () => {
//     if (btn1.textContent == 'Скрыть') {
//         square.style = "background-color:white"
//         btn1.textContent = 'Показать'
//     }
//     else if (btn1.textContent == 'Показать') {
//         square.style = "background-color:red"
//         btn1.textContent = 'Скрыть'
//     }
// })


// //ex7
// square.addEventListener('mouseenter', () => {
//     square.style = "background-color: purple"
// })

// square.addEventListener('mouseleave', () => {
//     square.style = "background-color: red"
// })



// //ex8
// let ch = 0

// for (let j = 0; j < squares.length; j++) {
//     if (squares[j].style == "background-color: green") {
//         ch += 1
//     }
// }

// for (let i = 0; i < squares.length; i++) {
//     squares[i].addEventListener("click", () => {
//         if (ch = 1) {
//             for (let j = 0; j < squares.length; j++) {
//                 squares[j].style = "background-color: red"
//             }
//         }
//         squares[i].style = "background-color: green"
//     })
// }
