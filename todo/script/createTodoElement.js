export function createTodoElement({ name, done }) {
    const li = document.createElement("li");
    li.classList.add("li");

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