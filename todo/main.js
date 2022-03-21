(function () {
    const todo = document.querySelector(".todo");

    // Заголовок
    function createAppTitle() {

        const titleDiv = document.createElement("div");
        titleDiv.classList = "apptitle";
        titleDiv.setAttribute("id", "title")
        todo.appendChild(titleDiv);


        const h1 = document.createElement("h1");
        h1.textContent = "Список дел";
        titleDiv.appendChild(h1);

    };


    // Форма для создания дела
    function createTodoItemForm() {

        // div
        const divItems = document.createElement("div");
        divItems.classList = "todoitemform";
        divItems.setAttribute("id", "createform");
        todo.appendChild(divItems);

        // form
        const form = document.createElement("form");
        form.classList = "form";
        divItems.appendChild(form);

        // input
        const input = document.createElement("input");
        input.setAttribute("placeholder", "Введите новое дело");
        input.classList = "inp";
        input.setAttribute("id", "input1")
        form.appendChild(input);

        // button
        const button = document.createElement("button");
        button.setAttribute("type", "button");
        button.classList = "inputbutton";
        button.innerHTML = "Добавить";
        form.appendChild(button);

        button.addEventListener("click", createTodoElement);
    };


    // создание списка элементов
    function createTodoList() {
        const ul = document.createElement("ul");
        ul.setAttribute("id", "todolist");
        ul.classList = "list";
        todo.appendChild(ul);
    };


    // Создание элемента списка
    function createTodoElement() {
        const list = document.querySelector(".list");
        const input = document.querySelector(".inp");

        if (input.value != "") {
            // создание элемента списка
            const li = document.createElement("li");
            li.setAttribute("id", "li");
            list.appendChild(li);

            const div = document.createElement("div");
            div.classList = "liDiv";
            li.appendChild(div);

            let text1 = document.createElement("p");
            text1.classList = "liText";
            text1.textContent = input.value;
            div.appendChild(text1);

            const buttonDiv = document.createElement("div");
            buttonDiv.classList = "liButtons";
            div.appendChild(buttonDiv)

            const buttonReady = document.createElement("button");
            buttonReady.textContent = "Готово";
            buttonReady.classList = "liReadyButton";
            buttonDiv.appendChild(buttonReady);
            buttonReady.addEventListener("click", () => {
                if (li.style.backgroundColor == "rgb(102, 212, 85)") {
                    li.style.backgroundColor = "";
                    li.style.textDecoration = "";
                } else {
                    li.style.backgroundColor = "rgb(102, 212, 85)";
                    li.style.textDecoration = "line-through";
                }


            });

            const buttonDel = document.createElement("button");
            buttonDel.textContent = "Удалить";
            buttonDel.classList = "liReadyButton";
            buttonDiv.appendChild(buttonDel);
            buttonDel.addEventListener("click", () => {
                let conf = confirm("Вы действительно хотите удалить эту задачу?");
                if (conf) {
                    li.remove();
                }
            });

        }
        else {
            alert("Поле ввода не может быть пустым!");
        }


        input.value = "";
    }

    createAppTitle();
    createTodoItemForm();
    createTodoList();
})();