let primernumero = parseInt(prompt ("Digite el primer número"));
let segundonumero = parseInt(prompt ("Digite el segundo número"));
let numeromayor, numeromenor;

if (primernumero > segundonumero) {
    numeromayor = primernumero;
    numeromenor = segundonumero;
}else if (primernumero < segundonumero) {
    numeromenor = primernumero;
    numeromayor = segundonumero;
}
else
{
    alert("Digite valores válidos");
}

while (numeromayor) {
    document.write(`${numeromenor} <br>`);
    numeromenor = numeromenor + 1;
    if(numeromenor > numeromayor)
    break;
}
