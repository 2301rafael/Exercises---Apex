function maior() {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let num3 = parseFloat(document.getElementById("numero3").value);
    let num4 = parseFloat(document.getElementById("numero4").value);
    let num5 = parseFloat(document.getElementById("numero5").value);



    let maior = num1;

    if (num2 > maior)
        maior = num2;
    if (num3 > maior)
        maior = num3;
    if (num4 > maior)
        maior = num4;
    if (num5 > maior)
        maior = num5;

    alert("Maior: " + maior);
}


function menor() {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let num3 = parseFloat(document.getElementById("numero3").value);
    let num4 = parseFloat(document.getElementById("numero4").value);
    let num5 = parseFloat(document.getElementById("numero5").value);

    let menor = num1;

    if (num2 < menor)
        menor = num2;
    if (num3 < menor)
        menor = num3;
    if (num4 < menor)
        menor = num4;
    if (num5 < menor)
        menor = num5;

    alert("Menor: " + menor);
}