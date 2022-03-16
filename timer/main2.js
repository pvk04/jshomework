let input = document.querySelector(".input");
let h2 = document.querySelector(".h");
let timeout;


input.addEventListener("input", () => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
        h2.innerHTML = input.value;
    }, 300);
});