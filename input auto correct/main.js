(function(){

    function createInput(){
        let input = document.createElement("input");
        input.classList.add("inp");

        return input;
    }

    function createSubDiv(){
        let inputDiv = document.createElement("div");
        inputDiv.classList.add("inpdiv");

        return inputDiv;
    }

    function createSubstitution(){
        let button = document.createElement("button");
        button.classList.add("btn");

        return button;
    }

    function createApp(){
        let body = document.querySelector(".inputSub");
        let wordsArray = ["Russia", "Germany", "Sweden", "Rambler", "Rosses", "rock", "Rucola"];

        let input = createInput();
        let inputDiv = createSubDiv();

        body.append(input);
        body.append(inputDiv);

        input.addEventListener("input", () => {
            for (let i = 0; i < wordsArray.length; i++){
                if (wordsArray[i].startsWith(input.value)){
                    let button = createSubstitution();
                    button.textContent = wordsArray[i];

                    button.addEventListener("click", () => {
                        input.value = button.textContent;
                    });

                    inputDiv.append(button);
                }
            }
        });
    }

    createApp();
}())