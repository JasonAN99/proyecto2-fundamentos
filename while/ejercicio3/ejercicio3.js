let contador = 0;

while (true) {
    let numero = parseInt(prompt ("Digite un número"));
    if (numero == 0) {
        break;
    }
    contador = contador + 1;
}

alert (contador)