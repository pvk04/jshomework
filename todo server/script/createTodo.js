import { createAppTitle } from "./createAppTitle.js";
import { createTodoItemForm } from "./createTodoItemForm.js";
import { createTodoList } from "./createTodoList.js";
import { createTodoElement } from "./createTodoElement.js";
import { serverArr } from "./server.js";
import { serverPost } from "./serverPost.js";
import { serverPatch } from "./serverPatch.js";
import { serverDelete } from "./serverDelete.js";

export async function createTodo(nameApp, array = [], key) {
    // Server
    array = await serverArr(key);
    let ids = array.ids;
    console.log(ids)
    array = array.res;
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

        // Server POST
        serverPost(item, key);

        list.buttonReady.addEventListener("click", () => {
            list.li.classList.toggle("item");
        });

        list.buttonDel.addEventListener("click", () => {
            let conf = confirm("Вы действительно хотите удалить эту задачу?");
            if (conf) {
                list.li.remove();
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

        elem.buttonReady.addEventListener("click", (e) => {
            elem.li.classList.toggle("item");

            if (e.target.closest("li").classList.contains("item")){
                serverPatch(ids[i], true);
            }
            else{
                serverPatch(ids[i], false);
            }
        });
        elem.buttonDel.addEventListener("click", () => {
            let conf = confirm("Вы действительно хотите удалить эту задачу?");
            if (conf) {
                elem.li.remove();
                serverDelete(ids[i]);
            }
        });
        ul.append(elem.li);
    }
}