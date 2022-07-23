let numero = parseInt(prompt ("Digite un número"));
let contador = 0;
let suma = 0;

while (contador <= numero) {
    if (contador % 2 == 0) {
        suma = suma + contador;
    }
    contador = contador + 1;
}

alert (suma)