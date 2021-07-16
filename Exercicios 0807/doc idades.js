function idade() {
    let maior = 18
    let menor = 0
    let qtdMaiores = 0
    let qtdMenores = 0
    const number = document.getElementById('numberList').value
    let dataList = number.split(',')
    for (let i = 0; i < dataList.length; i++) {


        if (dataList[i] >= maior) {
            qtdMaiores++

        } else {
            qtdMenores++


        }
    }

    alert(`Maior de idade: ${qtdMaiores} e Menor de idade: ${qtdMenores}`)
}
