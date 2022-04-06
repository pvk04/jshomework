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

        const buttonPlayAgain = document.createElement("button");
        buttonPlayAgain.classList.add("buttonPlayAgain");
        divCanvas.append(buttonPlayAgain);


        return {
            divCanvas,
            buttonPlayAgain
        };
    }

    // function createCard() {

    // }

    function createGame(){
        let head = createAppHeader("Найди пару");
        let canvas = createGameCanvas();
        
        game.append(head);
        game.append(canvas.divCanvas);
    }

    createGame();
})();