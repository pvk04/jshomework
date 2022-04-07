(function() {
    const game = document.querySelector(".game")

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
            buttonPlayAgain
        };
    }

    function createCard() {
        let card = document.createElement("div");
        card.classList.add("card");

        let cardH1 = document.createElement("h1");
        cardH1.classList.add("cardH1");
        card.append(cardH1);

        return {
            card,
            cardH1
        }
    }

    function createGame(){
        let head = createAppHeader("Найди пару");
        let canvas = createGameCanvas();
        let cardCount = 4;
        let numsArray = [1,1,2,2];


        // создание карт на странице
        for (let i = 0; i < cardCount; i++){

            let card = createCard();
            card.cardH1.textContent = numsArray[i];
            canvas.divCards.append(card.card);
            card.card.classList.add("cardBack");

            card.card.addEventListener("click", () => {
                let cardFronts = document.querySelectorAll(".cardFront");
                if(cardFronts.length < 2){
                    card.card.classList.toggle("cardFront");
                    card.cardH1.classList.toggle("cardH1show");
                }
                else{
                    card.card.classList.remove("cardFront");
                    card.cardH1.classList.remove("cardH1show");
                }
            });
        }
        


        canvas.buttonPlayAgain.textContent = "Играть снова";
        canvas.buttonPlayAgain.addEventListener("click", () => {
        
        });


        game.append(head);
        game.append(canvas.divCanvas);
    }

    createGame();
})();