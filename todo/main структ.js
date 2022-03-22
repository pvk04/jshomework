(function () {
  // Заголовок
  function createAppTitle(title) {
    const titleDiv = document.createElement("div");
    titleDiv.classList = "apptitle";
    titleDiv.setAttribute("id", "title");
    // todo.append(titleDiv);

    const h1 = document.createElement("h1");
    h1.textContent = title;
    titleDiv.append(h1);

    return titleDiv;
  }

  // Форма для создания дела
  function createTodoItemForm() {
    // div
    const divItems = document.createElement("div");
    divItems.classList = "todoitemform";
    divItems.setAttribute("id", "createform");
    todo.append(divItems);

    // form
    const form = document.createElement("form");
    form.classList = "form";
    divItems.append(form);

    // input
    const input = document.createElement("input");
    input.setAttribute("placeholder", "Введите новое дело");
    input.classList = "inp";
    input.setAttribute("id", "input1");
    form.append(input);

    // button
    const buttonDone = document.createElement("button");
    buttonDone.setAttribute("type", "button");
    buttonDone.classList = "inputbutton";
    buttonDone.innerHTML = "Добавить";
    form.append(buttonDone);

    // buttonDone.addEventListener("click", createTodoElement);

    return {
      form,
      input,
      buttonDone,
    };
  }

  // создание списка элементов
  function createTodoList() {
    const ul = document.createElement("ul");
    ul.setAttribute("id", "todolist");
    ul.classList = "list";
    todo.append(ul);

    return ul;
  }

  // Создание элемента списка
  function createTodoElement() {
    const list = document.querySelector(".list");
    // const input = document.querySelector(".inp");

    const li = document.createElement("li");
    li.setAttribute("id", "li");
    list.append(li);

    const div = document.createElement("div");
    div.classList = "liDiv";
    li.append(div);

    let text = document.createElement("p");
    text.classList = "liText";
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
    buttonDel.addEventListener("click", () => {
      let conf = confirm("Вы действительно хотите удалить эту задачу?");
      if (conf) {
        li.remove();
      }
    });

    // if (input.value != "") {
    //     // создание элемента списка
    //     const li = document.createElement("li");
    //     li.setAttribute("id", "li");
    //     list.append(li);

    //     const div = document.createElement("div");
    //     div.classList = "liDiv";
    //     li.append(div);

    //     let text1 = document.createElement("p");
    //     text1.classList = "liText";
    //     text1.textContent = input.value;
    //     div.append(text1);

    //     const buttonDiv = document.createElement("div");
    //     buttonDiv.classList = "liButtons";
    //     div.append(buttonDiv)

    //     const buttonReady = document.createElement("button");
    //     buttonReady.textContent = "Готово";
    //     buttonReady.classList = "liReadyButton";
    //     buttonDiv.append(buttonReady);
    //     buttonReady.addEventListener("click", () => {
    //         if (li.style.backgroundColor == "rgb(102, 212, 85)") {
    //             li.style.backgroundColor = "";
    //             li.style.textDecoration = "";
    //         } else {
    //             li.style.backgroundColor = "rgb(102, 212, 85)";
    //             li.style.textDecoration = "line-through";
    //         }

    //     });

    //     const buttonDel = document.createElement("button");
    //     buttonDel.textContent = "Удалить";
    //     buttonDel.classList = "liReadyButton";
    //     buttonDiv.append(buttonDel);
    //     buttonDel.addEventListener("click", () => {
    //         let conf = confirm("Вы действительно хотите удалить эту задачу?");
    //         if (conf) {
    //             li.remove();
    //         }
    //     });

    // }
    // else {
    //     alert("Поле ввода не может быть пустым!");
    // }
    return {
      list,
      text,
      buttonReady,
      buttonDel,
    };
  }

  document.addEventListener("DOMContentLoaded", () => {
    const todo = document.querySelector(".todo");

    let title = createAppTitle("Список дел");
    todo.append(title);

    let itemForm = createTodoItemForm();

    let list = createTodoList();

    itemForm.buttonDone.addEventListener("click", () => {
      if (itemForm.input.value != "") {
        createTodoElement();
      } else {
        alert("Поле ввода не может быть пустым!");
      }
      itemForm.input.value = "";
    });
  });
})();
