let contador = 0;
let promedio = 0;
let suma = 0;

while (true) {
    let numero = parseInt(prompt ("Digite un número"));
    if (numero == 0) {
        break;
    }
    contador = contador + 1;
    suma = suma + numero;
}

promedio = suma / contador;
alert (promedio)