(function() {

  let array = [
    {
      name: "Алексей",
      surname: "Громов",
      lastname: "Викторович",
      birthDate: new Date('2004-01-23'),
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

  function createTable(){
    let table = document.createElement("table");
    table.classList.add("studTable");

    return table;
  }

  function calcAge(arrElem){
    let bitrhObj = new Date(arrElem.birthDate);
    let today = new Date();
    let currentBirth = new Date(today.getFullYear(), bitrhObj.getMonth(), bitrhObj.getDay());
    let date;
    if (String(bitrhObj.getMonth() + 1).length == 2){
      date = bitrhObj.getDate() + "." + Number(bitrhObj.getMonth()+ 1) + "." + bitrhObj.getFullYear();
    }
    else if (String(bitrhObj.getMonth() + 1).length == 1) {
      date = bitrhObj.getDate() + "." + "0" + Number(bitrhObj.getMonth()+ 1) + "." + bitrhObj.getFullYear();
    }

    let age = today.getFullYear() - bitrhObj.getFullYear();
    if (today<currentBirth){
      age-=1;
    }

    return {
      age,
      date
    }
  }

  function studentForm(array = [], key) {
    array = JSON.parse(localStorage.getItem(key)) || array;
    localStorage.setItem(key, JSON.stringify(array));

    let div = document.querySelector(".addForm");

    let title = createTitle("Добавление студента");
    div.append(title);

    let form = createForm("form");
    div.append(form);

    for (let key in array[0]){
      let p = document.createElement("p");
      p.classList.add("inpName");
      
      switch(key){
        case "name":
            p.textContent = "Имя";
            p.id = "nameP";
            break
        case "surname":
            p.textContent = "Фамилия";
            p.id = "surnameP";
            break
        case "lastname":
            p.textContent = "Отчество";
            p.id = "lastnameP";
            break
        case "birthDate":
            p.textContent = "Дата рождения";
            p.id = "birthDateP";
            break
        case "startYear":
            p.textContent = "Год начала обучения";
            p.id = "startYearP";
            break
        case "faculty":
            p.textContent = "Факультет";
            p.id = "faculityP";
            break
      }
      form.append(p);

      let input = createInput();
      input.id = key;
      form.append(input);
    }

    let birthDate = document.querySelector("#birthDate");
    birthDate.setAttribute("type", "date");

    let button = createButton("addBtn");
    button.classList.add("btn");
    button.addEventListener("click", () => {
      
      let check = true;
      let inputs = document.querySelectorAll(".inp");
      let inpNames = document.querySelectorAll(".inpName");
      let startYear = document.querySelector("#startYear");

      for (let i = 0; i < inputs.length; i++){
        if (inputs[i].value.trim() == ""){
          // alert("Все поля должны быть заполнены!");
          inpNames[i].textContent = `${inpNames[i].innerHTML} \n*поле должно быть заполенно`;
          check = false;
        }          
        else if (new Date(birthDate.value) < new Date("01.01.1900") || new Date(birthDate.value) > new Date()){
          alert("Такую дату рождения ввести нельзя!");
          check = false;
        }
        else if (startYear.value < 2000 || isNaN(startYear.value)) {
          alert("Неккоректный год начала обучения!");
          check = false;
        }
      }
      if (check){
        array.push({
            name: inputs[0].value,
            surname: inputs[1].value,
            lastname: inputs[2].value,
            birthDate: new Date(inputs[3].value),
            startYear: inputs[4].value,
            faculty: inputs[5].value
        });
        localStorage.setItem(key, JSON.stringify(array));

        inputs.forEach(element => {
            element.value = "";
        });

        alert("Студент успешно добавлен");
      }

    });

    button.textContent = "Добавить";
    div.append(button);
  }

  function showStudents(array = [], key){
    array = JSON.parse(localStorage.getItem(key)) || array;
    localStorage.setItem(key, JSON.stringify(array));

    let main = document.querySelector(".students");

    let table =createTable();
    main.append(table);

    let tr = document.createElement("tr");
      tr.id = `tr0`;
      table.append(tr);

      let tdFio = document.createElement("td");
      tdFio.textContent = "ФИО";
      tr.append(tdFio);

      let tdFaculty = document.createElement("td");
      tdFaculty.textContent = "Факультет";
      tr.append(tdFaculty);

      let tdBirth = document.createElement("td");
      tdBirth.textContent = "ДР и возраст";
      tr.append(tdBirth);

      let tdYears = document.createElement("td");
      tdYears.textContent = "Годы обучения";
      tr.append(tdYears);

    for (let i = 0; i < array.length; i++){
      let tr = document.createElement("tr");
      tr.id = `tr${i+1}`;
      table.append(tr);

      let tdFio = document.createElement("td");
      tdFio.textContent = array[i].surname + " " + array[i].name + " " + array[i].lastname;
      tr.append(tdFio);

      let tdFaculty = document.createElement("td");
      tdFaculty.textContent = array[i].faculty;
      tr.append(tdFaculty);

      let tdBirth = document.createElement("td");
      let age = calcAge(array[i]);
      tdBirth.textContent = age.date + ` (${age.age})`;
      tr.append(tdBirth);

      let tdYears = document.createElement("td");
      let endYear = Number(array[i].startYear) + 4;
      tdYears.textContent = `${array[i].startYear}-${endYear}`;
      if (new Date(endYear, 9, 1) < new Date()){
        tdYears.textContent = `${array[i].startYear}-${endYear} (закончил)`;
      }
      tr.append(tdYears);
    }
  }


  window.studentForm = studentForm;
  window.arr = array;
  window.showStud = showStudents;
})();