let numero = parseInt (prompt ("Digite un número"));

for (let i = numero; i <= numero ; i++) {
    for (let j = 1; j <= 10 ; j++) {
        let resultado = i * j;
        document.write (i + " * " + j + " = " + resultado)
        document.write ('<br>')
    }
}
