const Game = {
    contadorPlayer: 0,
    contadorConsole: 0,

    playerSelect(){
        const select = parseInt(prompt("Teclea 1 para piedra, 2 para papel, 3 para tijeras y 4 para salir:"));
        
        let selection;
        switch (select) {
            case 1:
                selection = "piedra";
                Game.partida();
                break;
            case 2:
                selection = "papel";
                Game.partida();
                break;
            case 3:
                selection = "tijera";
                alert(`Elegiste ${selection}`);
                Game.partida();
                break;
            case 4: 
                this.salir()
                break
            default:
                alert("Teclee un valor valido");
                return this.playerSelect(); // Llamada recursiva para obtener una selección válida
        }
        return select;
    },
    

    consoleSelect(){
        const opciones = [1, 2, 3];
        const tiradaConsola = opciones[Math.floor(Math.random() * opciones.length)];
        return tiradaConsola;
    },
    convertirSeleccionTextoPlayer(){
        switch (this.playerSelect()){
            case 1: 
                return "piedra";
            case 2: 
                return "papel";
            case 3:
                return "tijeras";
        }
    },
    convertirSeleccionTextoConsole(){
        switch (this.consoleSelect()){
            case 1: 
                return "piedra";
            case 2: 
                return "papel";
            case 3:
                return "tijeras";
        }
    },
    jugarOtraPartida(){
        const jugarOtraPartida = confirm("¿Quieres jugar otra partida?");
            if(jugarOtraPartida) {
                this.partida();
            } else {
                alert("Gracias por jugar. Fin del juego.");
            }
    },
    mostrarcontador(){
        const mensajeContador = `Tu: ${this.contadorPlayer} Consola: ${this.contadorConsole}`;
        alert(mensajeContador);
    },
    partida(){

        const playerSelectionText = this.convertirSeleccionTextoPlayer();
        const consoleText = this.convertirSeleccionTextoConsole();

        if (this.playerSelect() === this.consoleSelect()){
            alert(`Elegiste ${playerSelectionText} la consola eligió ${consoleText}`);
            alert("Empate ");
            this.jugarOtraPartida()
        }
        else if ((this.playerSelect() === 1 && this.consoleSelect() === 3) || (this.playerSelect() === 2 && this.consoleSelect() === 1) || (this.playerSelect() === 3 && this.consoleSelect() === 2)){
            alert(`Elegiste ${playerSelectionText} la consola eligió ${consoleText}`);
            alert("Ganaste");
            this.contadorPlayer++;
            this.jugarOtraPartida()
        } 
        else {
            alert(`Elegiste ${playerSelectionText} la consola eligió ${consoleText}`);
            alert("Perdiste");
            this.contadorConsole++;
            this.jugarOtraPartida()
        }

    },
    salir(){
        alert('Hata luego!')
    }
}
Game.playerSelect()
// Ejemplo de uso



