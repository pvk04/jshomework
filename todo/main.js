(function () {

    let todoArray = [
        { id: 0, name: "Помыть посуду", done: true },
        { id: 1, name: "Выгулять собаку", done: false }
    ];

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

    function createTodoElement({id, name, done }) {
        const li = document.createElement("li");
        li.setAttribute("id", "li");

        const div = document.createElement("div");
        div.classList = "liDiv";
        li.append(div);

        let text = document.createElement("p");
        text.classList = "liText";
        text.textContent = name;
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

        if (done) {
            li.classList.add("item");
        }



        return {
            li,
            text,
            buttonReady,
            buttonDel
        }

    }


    function createTodo(nameApp, array = [], key) {

        //
        array = JSON.parse(localStorage.getItem(key)) || array;
        localStorage.setItem(key, JSON.stringify(array));
        //


        const todo = document.querySelector(".todo");

        let title = createAppTitle(nameApp);
        todo.append(title);

        let itemForm = createTodoItemForm();
        todo.append(itemForm.divItems);

        let ul = createTodoList();
        todo.append(ul);


        // buttonDone disable
        itemForm.buttonDone.setAttribute("disabled", "disabled");
        itemForm.input.addEventListener("input", () => {
            itemForm.buttonDone.removeAttribute("disabled");
            if (itemForm.input.value == "") {
                itemForm.buttonDone.setAttribute("disabled", "disabled");
            }
        });


        itemForm.form.addEventListener("submit", (e) => {
            e.preventDefault();

            if (itemForm.input.value != "") {
                let item = {id: array.length,  name: itemForm.input.value, done: false };
                let list = createTodoElement(item);

                // local storage array pushing
                array.push(item);
                localStorage.setItem(key, JSON.stringify(array));


                list.buttonReady.addEventListener("click", () => {
                    list.li.classList.toggle("item");

                    let newArr = [];
                    for (let i = 0; i < array.length; i++) {
                        if (item.id != array[i].id) {
                            newArr.push(array[i]);
                        }
                        else {
                            if (array[i].done) {
                                array[i].done = false;
                            }
                            else {
                                array[i].done = true;
                            }
                            newArr.push(array[i]);
                        }
                    }
                    localStorage.setItem(key, JSON.stringify(newArr));
                });

                list.buttonDel.addEventListener("click", () => {
                    let conf = confirm("Вы действительно хотите удалить эту задачу?");
                    if (conf) {
                        // local storage item remove
                        let array = JSON.parse(localStorage.getItem(key));
                        let newArr = array.filter(arr => item.id != arr.id);
                        localStorage.setItem(key, JSON.stringify(newArr));

                        list.li.remove();
                    }
                });


                ul.append(list.li);


                //ButtonDone enable
                itemForm.buttonDone.setAttribute("disabled", "disabled");
            }
            else {
                alert("Поле ввода не может быть пустым!");
            }

            itemForm.input.value = "";
        });

        // array reader
        for (let i = 0; i < array.length; i++) {
            let elem = createTodoElement(array[i]);

            elem.buttonReady.addEventListener("click", () => {
                elem.li.classList.toggle("item");

                if (array[i].done) {
                    array[i].done = false;
                }
                else {
                    array[i].done = true;
                }
                localStorage.setItem(key, JSON.stringify(array));
            });
            elem.buttonDel.addEventListener("click", () => {
                let conf = confirm("Вы действительно хотите удалить эту задачу?");
                if (conf) {
                    let array = JSON.parse(localStorage.getItem(key));
                    let newArr = array.filter(arr => array[i].id != arr.id);
                    console.log(newArr);
                    localStorage.setItem(key, JSON.stringify(newArr));
                    elem.li.remove();
                }
            });
            ul.append(elem.li);
        }
    }

    window.createTodo = createTodo;
    window.todoArray = todoArray;

})();