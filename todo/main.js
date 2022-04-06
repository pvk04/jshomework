import { createTodo } from "./script/createTodo.js";
(function () {

let todoArray = [
    { id: 0, name: "Помыть посуду", done: true },
    { id: 1, name: "Выгулять собаку", done: false }
];

let emptyArray = [];

window.todoArray = todoArray;
window.emptyArray = emptyArray;
window.createTodo = createTodo;
})();