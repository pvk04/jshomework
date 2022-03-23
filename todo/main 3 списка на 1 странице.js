(function () {
    function createAppTitle(text) {
        const title = document.createElement("h1");
        title.classList = "apptitle";
        title.setAttribute("id", "title");
        title.textContent = text;

        return title;
    }

    function createTodoItemForm() {
        const divItems = document.createElement("div");
        divItems.classList = "todoitemform";
        divItems.setAttribute("id", "createform");

        const form = document.createElement("form");
        form.classList = "form";
        divItems.append(form);

        const input = document.createElement("input");
        input.setAttribute("placeholder", "Введите новое дело");
        input.classList = "inp";
        input.setAttribute("id", "input1");
        form.append(input);

        const buttonDone = document.createElement("button");
        buttonDone.setAttribute("type", "button");
        buttonDone.classList = "inputbutton";
        buttonDone.innerHTML = "Добавить";
        form.append(buttonDone);

        return {
            divItems,
            form,
            input,
            buttonDone
        }
    }

    function createTodoList() {
        const ul = document.createElement("ul");
        ul.setAttribute("id", "todolist");
        ul.classList = "list";

        return ul;
    }

    function createTodoElement(textContent) {
        const li = document.createElement("li");
        li.setAttribute("id", "li");

        const div = document.createElement("div");
        div.classList = "liDiv";
        li.append(div);

        let text = document.createElement("p");
        text.classList = "liText";
        text.textContent = textContent;
        div.append(text);

        const buttonDiv = document.createElement("div");
        buttonDiv.classList = "liButtons";
        div.append(buttonDiv);

        const buttonReady = document.createElement("button");
        buttonReady.textContent = "Готово";
        buttonReady.classList = "liReadyButton";
        buttonDiv.append(buttonReady);

        const buttonDel = document.createElement("button");
        buttonDel.textContent = "Удалить";
        buttonDel.classList = "liReadyButton";
        buttonDiv.append(buttonDel);

        return {
            li,
            text,
            buttonReady,
            buttonDel
        }

    }


    function createTodo(name) {
        const todo = document.querySelector(".todo");

        let title = createAppTitle(name);
        todo.append(title);

        let itemForm = createTodoItemForm();
        todo.append(itemForm.divItems);

        let ul = createTodoList();
        todo.append(ul);

        itemForm.buttonDone.addEventListener("click", () => {
            if (itemForm.input.value != "") {
                let list = createTodoElement(itemForm.input.value);
                list.buttonReady.addEventListener("click", () => {
                    if (list.li.style.backgroundColor == "rgb(102, 212, 85)") {
                        list.li.style.backgroundColor = "";
                        list.li.style.textDecoration = "";
                    } else {
                        list.li.style.backgroundColor = "rgb(102, 212, 85)";
                        list.li.style.textDecoration = "line-through";
                    }
                })

                list.buttonDel.addEventListener("click", () => {
                    let conf = confirm("Вы действительно хотите удалить эту задачу?");
                    if (conf) {
                        list.li.remove();
                    }
                })

                ul.append(list.li);
            }
            else {
                alert("Поле ввода не может быть пустым!");
            }

            itemForm.input.value = "";
        })
    }


    createTodo("Список дел Мамы");
    createTodo("Список дел Папы");
    createTodo("Мой список дел");



})();