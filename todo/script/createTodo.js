import { createAppTitle } from "./createAppTitle.js";
import { createTodoItemForm } from "./createTodoItemForm.js";
import { createTodoList } from "./createTodoList.js";
import { createTodoElement } from "./createTodoElement.js";
import { changeLocalStorage } from "./changeLocalStorage.js";
import { serverArr } from "./server.js";

export async function createTodo(nameApp, array = [], key) {
    // array = JSON.parse(localStorage.getItem(key)) || array;
    // localStorage.setItem(key, JSON.stringify(array));

    // Server
    array = await serverArr();
    console.dir(array);
    

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

        let item = { name: itemForm.input.value, done: false };
        let list = createTodoElement(item);

        // local storage array pushing
        array.push(item);
        localStorage.setItem(key, JSON.stringify(array));

        list.buttonReady.addEventListener("click", () => {
            list.li.classList.toggle("item");
            changeLocalStorage(key);
        });

        list.buttonDel.addEventListener("click", () => {
            let conf = confirm("Вы действительно хотите удалить эту задачу?");
            if (conf) {
                list.li.remove();
                changeLocalStorage(key);
            }
        });
        ul.append(list.li);

        //ButtonDone enable
        itemForm.buttonDone.setAttribute("disabled", "disabled");

        itemForm.input.value = "";
    });

    // array reader
    for (let i = 0; i < array.length; i++) {
        let elem = createTodoElement(array[i]);

        elem.buttonReady.addEventListener("click", () => {
            elem.li.classList.toggle("item");
            changeLocalStorage(key);
        });
        elem.buttonDel.addEventListener("click", () => {
            let conf = confirm("Вы действительно хотите удалить эту задачу?");
            if (conf) {
                elem.li.remove();
                changeLocalStorage(key);
            }
        });
        ul.append(elem.li);
    }
}