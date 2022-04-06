import { createTodo } from "./script/createTodo.js";
(function () {

let todoArray = [
    { id: 0, name: "Помыть посуду", done: true },
    { id: 1, name: "Выгулять собаку", done: false }
];

window.todoArray = todoArray;
window.createTodo = createTodo;
})();