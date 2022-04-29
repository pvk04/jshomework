(function() {

  let array = [
    {
      name: "Алексей",
      surname: "Громов",
      lastname: "Викторович",
      birthDate: new Date('2004-06-23'),
      startYear: 2020,
      faculty: "Программист"
    },
    {
      name: "Евгений",
      surname: "Бачурин",
      lastname: "Сергеевич",
      birthDate: new Date('2003-08-15'),
      startYear: 2021,
      faculty: "Тестировщик"
    },
    {
      name: "Андрей",
      surname: "Кузнецов",
      lastname: "Павлович",
      birthDate: new Date('2002-10-29'),
      startYear: 2022,
      faculty: "Программист"
    }
  ];


  function createTitle(name) {
      let title = document.createElement("H1");
    title.classList.add("title");

    title.textContent = name;

    return title;
  }

  function createForm(className) {
    let form = document.createElement("form");
    form.classList.add(className);

    return form;
  }

  function createInput() {
    let input = document.createElement("input");
    input.classList.add("inp");

    return input;
  }

  function createButton(className){
    let button = document.createElement("button");
    button.classList.add(className);

    return button;
  }

  function studentForm() {
    // добавить local storage и доделать кнопку 

    let div = document.querySelector(".addForm");

    let title = createTitle("Добавление студента");
    div.append(title);

    let form = createForm("addForm");
    div.append(form);

    for (let key in array[0]){
      let p = document.createElement("p");
      p.classList.add("inpName");
      p.textContent = key;
      form.append(p);

      let input = createInput();
      input.id = key;
      form.append(input);
    }

    let button = createButton("addBtn");
    button.addEventListener("click", () => {

      let check = true;
      let inputs = document.querySelectorAll(".inp");
      let birthDate = document.querySelector("#birthDate");
      let startYear = document.querySelector("#startYear");

      for (input of inputs){
        if (input.value.trim() == ""){
          alert("Все поля должны быть заполнены!");
          check = false;
          break;
        }          
      }
      if (new Date(birthDate.value) < new Date("01.01.1900")){
        alert("Такую дату ввести нельзя!");
        check = false;
      }
      if (startYear.value < 2000){
        alert("Неккоректная дата начала обучения!");
        check = false;
      }

      if (check){
        // Добавление записи в локал сторадж
      }

    });

    button.textContent = "Добавить";
    div.append(button);
  }

  // for (let i = 0; i<array.length; i++){
  //   for(key in array[i]){
  //     console.log(array[i][key]);
  //   }
  // }



  studentForm();
})();
