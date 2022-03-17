(function() {
    const todo = document.querySelector(".todo");

    // Заголовок
    function createAppTitle(){

        const titleDiv = document.createElement("div");
        titleDiv.className = "apptitle";
        todo.appendChild(titleDiv);


        const h2 = document.createElement("h2");
        h2.textContent = "Список дел";
        titleDiv.appendChild(h2);

    };
    

    // Форма для создания дела
    function createTodoItemForm(){

        const divItems = document.createElement("div");
        divItems.className = "todoitemform";
        todo.appendChild(divItems);


        const form = document.createElement("form");
        divItems.appendChild(form);


        const input = document.createElement("input");
        form.appendChild(input);


        const button = document.createElement("button");
        button.className = "inputbutton";
        button.innerHTML = "Добавить";
        button.addEventListener("click", createTodoList);
        form.appendChild(button);   
        
        button.addEventListener("click", createTodoList);
    };


    // создание списка элементов
    function createTodoList(){
        const div = create
    };

    createAppTitle();
    createTodoItemForm();

})();