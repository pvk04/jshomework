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

  let fioSortCheck = 0;
  let facultySortCheck = 0;
  let birthSortCheck = 0;
  let yearSortCheck = 0;

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
    input.classList.add("formInp");

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

      let err = document.createElement("p");
      err.classList.add("errMsg");

      switch(key){
        case "name":
            p.textContent = "Имя";
            p.id = "nameP";
            err.id = "nameErr";
            break
        case "surname":
            p.textContent = "Фамилия";
            p.id = "surnameP";
            err.id = "surnameErr";
            break
        case "lastname":
            p.textContent = "Отчество";
            p.id = "lastnameP";
            err.id = "lastnameErr";
            break
        case "birthDate":
            p.textContent = "Дата рождения";
            p.id = "birthDateP";
            err.id = "birthDateErr";
            break
        case "startYear":
            p.textContent = "Год начала обучения";
            p.id = "startYearP";
            err.id = "startYearErr";
            break
        case "faculty":
            p.textContent = "Факультет";
            p.id = "faculityP";
            err.id = "faculityErr";
            break
      }
      form.append(p);

      let input = createInput();
      input.id = key;
      form.append(input);

      
      form.append(err);
    }

    let birthDate = document.querySelector("#birthDate");
    birthDate.setAttribute("type", "date");

    let button = createButton("addBtn");
    button.classList.add("btn");
    button.addEventListener("click", () => {

      let errMsgs = document.querySelectorAll(".errMsg");
      errMsgs.forEach(element => {
        element.textContent = "";
      });
      
      let check = true;
      let inputs = document.querySelectorAll(".formInp");
      let today = new Date()
      let startYear = document.querySelector("#startYear");

      for (let i = 0; i < inputs.length; i++){

        if (inputs[i].value.trim() == ""){
          errMsgs[i].textContent = "*заполните поле";

          check = false;
        }          
        else if (new Date(birthDate.value) < new Date("01.01.1900") || new Date(birthDate.value) > new Date()){
          document.getElementById("birthDateErr").textContent = "*Введите корректную дату рождения";
          check = false;
        }
        else if (startYear.value < 2000 || isNaN(startYear.value) || startYear.value > today.getFullYear()) {
          document.getElementById("startYearErr").textContent = "*Введите корректную дату начала обучения";
          check = false;
        }
      }
      if (!isNaN(inputs[0].value)){
        document.getElementById("nameErr").textContent = "Введите корректную информацию"
        check = false
      }
      if (!isNaN(inputs[1].value)){
        document.getElementById("surnameErr").textContent = "Введите корректную информацию"
        check = false
      }
      if (!isNaN(inputs[2].value)){
        document.getElementById("lastnameErr").textContent = "Введите корректную информацию"
        check = false
      }
      if (!isNaN(inputs[5].value)){
        document.getElementById("faculityErr").textContent = "Введите корректную информацию"
        check = false
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

  function showStudents(arr = [], key){
    array = JSON.parse(localStorage.getItem(key)) || arr;
    localStorage.setItem(key, JSON.stringify(array));

    let main = document.querySelector(".students");

    // filtration
    let inputFio = createInput();
    inputFio.placeholder = "Введите фамилию, имя или отчество";
    inputFio.addEventListener("input", () => {filterByFio(array, inputFio.value); main.removeChild(document.querySelector(".studTable"))});
    main.append(inputFio);

    let inputFac = createInput();
    inputFac.placeholder = "Введите факультет";
    inputFac.addEventListener("input", () => {filterByFac(array, inputFac.value); main.removeChild(document.querySelector(".studTable"))});
    main.append(inputFac);

    let inputStart = createInput();
    inputStart.placeholder = "Введите год начала обучения";
    inputStart.addEventListener("input", () => {filterByStart(array, inputStart.value); main.removeChild(document.querySelector(".studTable"))});
    main.append(inputStart);

    let inputEnd = createInput();
    inputEnd.placeholder = "Введите год конца обучения";
    inputEnd.addEventListener("input", () => {filterByEnd(array, inputEnd.value)});
    main.append(inputEnd);


    createTableStud(array);
  }

  function createTableStud(array = []){
    let main = document.querySelector(".students");

    // table
    let table =createTable();
    main.append(table);

    let tr = document.createElement("tr");
      tr.id = `tr0`;
      table.append(tr);
      
      let tdFio = document.createElement("td");
      tdFio.textContent = "ФИО";
      let fioSort = document.createElement("button");
      fioSort.addEventListener("click", () => {sortByFio(array); main.removeChild(document.querySelector(".studTable"))});
      if(fioSortCheck == 0){
        fioSort.classList = "sortUp";
      }
      else{
        fioSort.classList = "sortDown";
      }
      tdFio.append(fioSort);
      tr.append(tdFio);

      let tdFaculty = document.createElement("td");
      tdFaculty.textContent = "Факультет";
      let facultySort = document.createElement("button");
      facultySort.addEventListener("click", () => {sortByFaculity(array); main.removeChild(document.querySelector(".studTable"))});
      if(facultySortCheck == 0){
        facultySort.classList = "sortUp";
      }
      else{
        facultySort.classList = "sortDown";
      }
      tdFaculty.append(facultySort);
      tr.append(tdFaculty);

      let tdBirth = document.createElement("td");
      tdBirth.textContent = "ДР и возраст";
      let birthSort = document.createElement("button");
      birthSort.addEventListener("click", () => {sortByBirth(array); main.removeChild(document.querySelector(".studTable"))});
      if(birthSortCheck == 0){
        birthSort.classList = "sortUp";
      }
      else{
        birthSort.classList = "sortDown";
      }
      tdBirth.append(birthSort);
      tr.append(tdBirth);

      let tdYears = document.createElement("td");
      tdYears.textContent = "Годы обучения";
      let yearSort = document.createElement("button");
      yearSort.addEventListener("click", () => {sortByYear(array); main.removeChild(document.querySelector(".studTable"))});
      if(yearSortCheck == 0){
        yearSort.classList = "sortUp";
      }
      else{
        yearSort.classList = "sortDown";
      }
      tdYears.append(yearSort);
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

  function sortByFio(array){
    if (fioSortCheck == 0){
      fioSortCheck += 1;
      array.sort((a,b) => {
        let frstFio = a.surname + " " + a.name + " " + a.lastname;
        let scndFio = b.surname + " " + b.name + " " + b.lastname;
        
        
        if (frstFio > scndFio){
          return 1
        }
        if(frstFio < scndFio){
          return -1
        }
        return 0
      });
    }
    else{
      fioSortCheck = 0;
      array.sort((a,b) => {
        let frstFio = a.surname + " " + a.name + " " + a.lastname;
        let scndFio = b.surname + " " + b.name + " " + b.lastname;
        
        
        if (frstFio < scndFio){
          return 1
        }
        if(frstFio > scndFio){
          return -1
        }
        return 0
      });
    }
    createTableStud(array);
  }

  function sortByFaculity(array){
    if (facultySortCheck == 0){
      facultySortCheck += 1;
      array.sort((a,b) => {
        if (a.faculty > b.faculty){
          return 1
        }
        if (a.faculty < b.faculty){
          return -1
        }
        return 0
      });
    }
    else{
      facultySortCheck = 0;
      array.sort((a,b) => {
        if (a.faculty < b.faculty){
          return 1
        }
        if (a.faculty > b.faculty){
          return -1
        }
        return 0
      });
    }
    createTableStud(array);
  }

  function sortByBirth(array){

    if (birthSortCheck == 0){
      birthSortCheck += 1;
      array.sort((a,b) => {
        if (a.birthDate > b.birthDate){
          return 1
        }
        if (a.birthDate < b.birthDate){
          return -1
        }
        return 0
      });
    }
    else{
      birthSortCheck = 0;
      array.sort((a,b) => {
        if (a.birthDate < b.birthDate){
          return 1
        }
        if (a.birthDate > b.birthDate){
          return -1
        }
        return 0
      });
    }
    createTableStud(array);
  }

  function sortByYear(array){
    if (yearSortCheck == 0){
      yearSortCheck += 1;
      array.sort((a,b) => {
        return a.startYear - b.startYear
      });
    }
    else{
      yearSortCheck = 0;
      array.sort((a,b) => {
        return b.startYear - a.startYear
      });
    }
    createTableStud(array);
  }

  function filterByFio(array, value){
    let res = array.filter((el) => {
      let str = el.surname + " " + el.name + " " + el.lastname;
      return str.toLowerCase().includes(value.trim().toLowerCase())
    });
    createTableStud(res);
  }

  function filterByFac(array, value){
    let res = array.filter((el) => {
      return el.faculty.toLowerCase().includes(value.trim().toLowerCase())
    });
    createTableStud(res);
  }

  function filterByStart(array, value){
    let main = document.querySelector(".students");
    let res = array.filter((el) => {
      return el.startYear  == value.trim();
    });
    createTableStud(res);

    if (value == ""){
      main.removeChild(document.querySelector(".studTable"))
      createTableStud(array);
    }
  }

  function filterByEnd(array, value){
    let main = document.querySelector(".students");
    main.removeChild(document.querySelector(".studTable"))
    let res = array.filter((el) => {
      return Number(el.startYear) + 4 == value.trim();
    });
    createTableStud(res);

    if (value == ""){
      main.removeChild(document.querySelector(".studTable"));
      createTableStud(array);
    }
  }


  window.studentForm = studentForm;
  window.arr = array;
  window.createTableStud = showStudents;
})();