export function createTodoItemForm() {
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