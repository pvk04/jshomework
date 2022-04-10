(function (){
    const game = document.querySelector(".game");

    function createAppHeader(name) {
        const appHeader = document.createElement("div");
        appHeader.classList.add("appHeader");

        const title = document.createElement("h1");
        title.classList.add("appTitle");
        title.textContent = name;
        appHeader.append(title);

        return appHeader;
    }

    function createGameCanvas() {
        const divCanvas = document.createElement("div");
        divCanvas.classList.add("divCanvas");

        const divCards = document.createElement("div");
        divCards.classList.add("divCards");
        divCanvas.append(divCards);

        const buttonPlayAgain = document.createElement("button");
        buttonPlayAgain.classList.add("buttonPlayAgain");
        divCanvas.append(buttonPlayAgain);

        return {
            divCanvas,
            divCards,
            buttonPlayAgain,
        };
    }

    function createCard() {
        let card = document.createElement("button");
        card.classList.add("card");

        // let cardH1 = document.createElement("h1");
        // cardH1.classList.add("cardH1");
        // card.append(cardH1);

        return card;
    }

  
    function CreateGame() {
        let header = createAppHeader("Found a couple");
        game.append(header);
        let canvas = createGameCanvas();
        game.append(canvas.divCanvas);

        let cardValues = createCardValuesArray(16);

        let compareCards = [];
        for (let i = 0; i < 16; i++){
            let htmlCard = createCard();
            htmlCard.id = i;
            htmlCard.textContent = cardValues[i];
            canvas.divCards.append(htmlCard);
            htmlCard.classList.add("cardBack");


            htmlCard.addEventListener("click", () => {

                if (compareCards.length < 2){
                    if (compareCards[0] != event.target){
                        compareCards.push(event.target);
                    }
                    htmlCard.classList.toggle("cardFront");
                }
                else if (compareCards[0].innerHTML == compareCards[1].innerHTML && compareCards[0].id != compareCards[1].id){
                    compareCards[0].setAttribute('disabled','disabled');
                    compareCards[1].setAttribute('disabled','disabled');
                    compareCards = [];
                    if (compareCards[0] != event.target){
                        compareCards.push(event.target);
                    }
                    htmlCard.classList.toggle("cardFront");
                }
                else if (compareCards.length == 2){
                    compareCards[0].classList.remove("cardFront");
                    compareCards[1].classList.remove("cardFront");
                    compareCards = [];
                    if (compareCards[0] != event.target){
                        compareCards.push(event.target);
                    }
                    htmlCard.classList.toggle("cardFront");
                }
                console.log(compareCards)
            });


        }



        canvas.buttonPlayAgain.textContent = "Играть снова";
        canvas.buttonPlayAgain.addEventListener("click", () => {});
    }


    function createCardValuesArray(cardCount){
        let array = [];
        for (let i = 1; i <= cardCount/2; i++){
            
            array.push(i);
            array.push(i);
        }

        array.sort(() => Math.random() - 0.5);

        return array;
    }

    CreateGame();
})();