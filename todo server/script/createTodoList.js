export function createTodoList() {
    const ul = document.createElement("ul");
    ul.setAttribute("id", "todolist");
    ul.classList = "list";

    return ul;
}