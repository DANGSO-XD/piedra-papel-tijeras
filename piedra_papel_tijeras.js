const Game = {
    contadorPlayer: 0,
    contadorConsole: 0,

    playerSelect() {
        let select;
        do {
            select = parseInt(prompt("Teclea 1 para piedra, 2 para papel, 3 para tijeras y 4 para salir:"));
            if (isNaN(select) || select < 1 || select > 4) {
                alert("Por favor, teclee un valor válido.");
            }
        } while (isNaN(select) || select < 1 || select > 4);
        return select;
    },

    consoleSelect() {
        return Math.floor(Math.random() * 3) + 1;
    },

    convertirSeleccionTexto(selection) {
        switch (selection) {
            case 1:
                return "piedra";
            case 2:
                return "papel";
            case 3:
                return "tijeras";
            default:
                return "";
        }
    },

    jugarOtraPartida() {
        const jugarOtraPartida = confirm("¿Quieres jugar otra partida?");
        if (jugarOtraPartida) {
            this.partida();
        } else {
            alert("Gracias por jugar. Fin del juego.");
        }
    },

    mostrarContador() {
        const mensajeContador = `Tu: ${this.contadorPlayer} Consola: ${this.contadorConsole}`;
        alert(mensajeContador);
    },

    partida() {
        const playerSelection = this.playerSelect();
        const consoleSelection = this.consoleSelect();

        const playerSelectionText = this.convertirSeleccionTexto(playerSelection);
        const consoleSelectionText = this.convertirSeleccionTexto(consoleSelection);

        alert(`Elegiste ${playerSelectionText} y la consola eligió ${consoleSelectionText}`);

        if (playerSelection === consoleSelection) {
            alert("Empate");
        } else if ((playerSelection === 1 && consoleSelection === 3) || 
                   (playerSelection === 2 && consoleSelection === 1) || 
                   (playerSelection === 3 && consoleSelection === 2)) {
            alert("Ganaste");
            this.contadorPlayer++;
        } else {
            alert("Perdiste");
            this.contadorConsole++;
        }

        this.mostrarContador();
        this.jugarOtraPartida();
    },

    salir() {
        alert('¡Hasta luego!');
    }
};

Game.partida();




