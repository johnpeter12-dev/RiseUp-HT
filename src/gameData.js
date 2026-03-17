// Rise Up Game Data
const gameData = {
    translations: {
        en: {
            start: 'Start Game',
            pause: 'Pause',
            resume: 'Resume',
            gameOver: 'Game Over',
        },
        es: {
            start: 'Iniciar Juego',
            pause: 'Pausa',
            resume: 'Reanudar',
            gameOver: 'Juego Terminado',
        },
        // Add more translations as needed
    },

    functions: {
        startGame: function() {
            console.log(this.translations.en.start);
            // Logic to start the game
        },
        pauseGame: function() {
            console.log(this.translations.en.pause);
            // Logic to pause the game
        },
        resumeGame: function() {
            console.log(this.translations.en.resume);
            // Logic to resume the game
        },
        endGame: function() {
            console.log(this.translations.en.gameOver);
            // Logic to end the game
        }
        // Add other game functions here
    }
};

export default gameData;