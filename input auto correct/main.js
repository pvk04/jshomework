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
}())