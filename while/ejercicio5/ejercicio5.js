let operacion = 0;

while (true) {
    let numero = parseInt(prompt ("Digite un número"));
    if (numero % 2 == 0) {
        operacion = numero / 2;
        alert ("El número es par, por lo tanto la operación " + numero + " / 2 = " + operacion);
    } else {
        operacion = (numero * 3) + 1;
        alert ("El número es impar, por lo tanto la operación (" + numero + " * 3 ) + 1 = " + operacion);
    }

    if (operacion == 1) {
        break;
    }
}