let buttons = document.querySelectorAll(".calc")

let buttonRes = document.querySelector(".res")

let out = document.querySelector(".outp")

let clean = document.querySelector(".clean")

for (i = 0; i < buttons.length; i++) {
    let butV = buttons[i].value
    buttons[i].addEventListener("click", () => {
        out.value += butV
    })
}

buttonRes.addEventListener("click", () => {
    out.value = eval(out.value)
})

clean.addEventListener("click", () => {
    out.value = ''
})
