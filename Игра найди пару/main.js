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

        const buttonPlayAgain = document.createElement("button");
        buttonPlayAgain.classList.add("buttonPlayAgain");

        return {
            divCanvas,
            divCards,
            buttonPlayAgain,
        };
    }

    
    function createCardCount(){
        let divGroup = document.createElement("div");
        divGroup.classList.add("divGroup");

        let divOptions = document.createElement("div");
        divOptions.classList.add("cardOptions");
        
        let buttonMinus = document.createElement("button");
        buttonMinus.classList.add("buttonMinus");
        divOptions.append(buttonMinus);
        
        let cardsCount = document.createElement("h1");
        cardsCount.classList.add("cardCount");
        divOptions.append(cardsCount);

        let buttonPlus = document.createElement("button");
        buttonPlus.classList.add("buttonPlus");
        divOptions.append(buttonPlus);

        let descriptionP = document.createElement("p");
        descriptionP.classList.add("descriptionP");

        let playButton = document.createElement("button");
        playButton.classList.add("playButton");


        divGroup.append(divOptions);
        divGroup.append(descriptionP);
        divGroup.append(playButton);

        return {
            divOptions,
            cardsCount,
            buttonMinus,
            buttonPlus,
            descriptionP,
            playButton,
            divGroup
        }
    }


    function createCard() {
        let card = document.createElement("button");
        card.classList.add("card");

        return card;
    }

  
    function CreateGame() {
        let header = createAppHeader("Found a couple");
        game.append(header);

        let canvas = createGameCanvas();
        game.append(canvas.divCanvas);

        let cardCountOpt = createCardCount();
        

        // Card Count Options
        cardCountOpt.cardsCount.textContent = 16;
        cardCountOpt.descriptionP.textContent = "min: 8; max: 16";
        cardCountOpt.playButton.textContent = "PLAY!";

        cardCountOpt.buttonMinus.textContent = "-2";
        cardCountOpt.buttonMinus.addEventListener("click", ()=> {
            if (parseInt(cardCountOpt.cardsCount.innerHTML) > 8){
                cardCountOpt.cardsCount.textContent = parseInt(cardCountOpt.cardsCount.innerHTML) - 2;
            }
        });

        cardCountOpt.buttonPlus.textContent = "+2";
        cardCountOpt.buttonPlus.addEventListener("click", ()=> {
            if (parseInt(cardCountOpt.cardsCount.innerHTML) < 16){
                cardCountOpt.cardsCount.textContent = parseInt(cardCountOpt.cardsCount.innerHTML) + 2;
            }
        });

        canvas.divCanvas.append(cardCountOpt.divGroup);
        canvas.divCanvas.append(canvas.divCards);
        canvas.divCards.classList.add("hide");
        canvas.divCanvas.append(canvas.buttonPlayAgain);
        canvas.buttonPlayAgain.classList.add("hide");
        

        cardCountOpt.playButton.addEventListener("click", () => {
            cardCountOpt.divGroup.classList.add("hide");

            canvas.divCards.classList.remove("hide");

            let cardCountH1 = Number(cardCountOpt.cardsCount.textContent);

            let cardValues = createCardValuesArray(cardCountH1);

            let trueCount = 0;

            let compareCards = [];
            for (let i = 0; i < cardCountH1; i++){
                let htmlCard = createCard();
                htmlCard.id = i;
                htmlCard.textContent = cardValues[i];
                canvas.divCards.append(htmlCard);
                htmlCard.classList.add("cardBack");


                htmlCard.addEventListener("click", () => {

                    if (compareCards.length <  2){
                        if (compareCards[0] != event.target){
                            compareCards.push(event.target);
                        }
                        htmlCard.classList.toggle("cardFront");
                    }
                    else if (compareCards[0].innerHTML == compareCards[1].innerHTML && compareCards[0].id != compareCards[1].id){
                        trueCount++;
                        compareCards[0].setAttribute('disabled','disabled');
                        compareCards[1].setAttribute('disabled','disabled');
                        compareCards = [];
                    }
                    else if (compareCards.length == 2){
                        compareCards[0].classList.remove("cardFront");
                        compareCards[1].classList.remove("cardFront");
                        compareCards = [];
                    }

                    if (trueCount == cardCountH1/2 ){
                        alert("Вы выиграл!");
                        canvas.buttonPlayAgain.classList.remove("hide");
                        canvas.buttonPlayAgain.textContent = "Играть снова";
                        canvas.buttonPlayAgain.addEventListener("click", () => {
                            let cards = document.querySelectorAll(".card");
                            let cardValues = createCardValuesArray(cardCountH1);
                            trueCount = 0;
                            for (let i = 0; i < cards.length; i++){
                                cards[i].removeAttribute("disabled");
                                cards[i].textContent = cardValues[i];
                                cards[i].className = "card cardBack";
                                canvas.buttonPlayAgain.classList.add("hide");
                            }
                        });  
                    }
                });
            }
        });
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