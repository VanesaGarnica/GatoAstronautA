function adivinanza1() {
    var gato;
    var intentos = 3;
    var acertado = false;
    var cancelado = false;
    do {
        intentos--;
        gato = prompt("¿Como se llama el gato de Sabrina?");
        if (gato === null) {
            cancelado = true;
            break;
        } else if (!gato.match(/^[a-zA-Z]+$/g)) {
            alert("Por favor ingrese solo letras");
            intentos++;
        } else if (gato.toLocaleLowerCase().trim() === "salem") {
            mostrarAlerta("exito", "Felicitaciones!!! Adivinaste.");
            var acertado = true;
        } else if (intentos == 0) {
            mostrarAlerta("fracaso", "Bajon, te quedaste sin intentos.");
        } else if (intentos == 2 && !acertado) {
            alert(
                "No... Pista: Es de color negro. Te quedan: " + intentos + " intentos."
            );
        } else if (intentos == 1 && !acertado) {
            alert(
                "Mal de nuevo... Pista: Tiene nombre de pueblo. Te quedan: " +
                intentos +
                " intento."
            );
        }
    } while (intentos > 0 && !acertado);
    if (cancelado === false) {
        document.getElementById("resultado-adivinanza-2").innerHTML =
            "El gato de Sabrina es <strong>Salem</strong>";
    }
}

function adivinanza2() {
    var comida;
    var intentos = 3;
    var acertado = false;
    var cancelado = false;
    do {
        intentos--;
        comida = prompt("¿Cual es la comida favorita de Garfield?");
        if (comida === null) {
            cancelado = true;
            break;
        } else if (!comida.match(/^[a-zA-Z]+$/g)) {
            alert("Por favor ingrese solo letras");
            intentos++;
        } else if (comida.toLocaleLowerCase().trim() === "lasagna") {
            mostrarAlerta("exito", "Felicitaciones!!! Adivinaste.");
            var acertado = true;
        } else if (intentos == 0) {
            mostrarAlerta("fracaso", "Bajon, te quedaste sin intentos.");
        } else if (intentos == 2 && !acertado) {
            alert(
                "No... Pista: Es comida italiana. Te quedan: " + intentos + " intentos."
            );
        } else if (intentos == 1 && !acertado) {
            alert(
                "Mal de nuevo... Pista: Pastas rellenas al horno. Te quedan: " +
                intentos +
                " intento."
            );
        }
    } while (intentos > 0 && !acertado);
    if (cancelado === false) {
        document.getElementById("resultado-adivinanza-2").innerHTML =
            "La comida favorita de Garfield es la  <strong>Lasagna</strong>";
    }
}

function mostrarAlerta(typeAlert, message) {
    if (typeAlert === "exito") {
        document.getElementById("alerta-exito").hidden = false;
        document.getElementById("alerta-exito").innerHTML = message;
        setTimeout(() => {
            esconderAlerta(document.getElementById("alerta-exito"));
        }, 3000);
    } else {
        document.getElementById("alerta-fracaso").hidden = false;
        document.getElementById("alerta-fracaso").innerHTML = message;
        setTimeout(() => {
            esconderAlerta(document.getElementById("alerta-fracaso"));
        }, 3000);
    }
}

function esconderAlerta(value) {
    value.hidden = true;
}