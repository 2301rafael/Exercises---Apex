function handleOnClick() {
    let maior = 0
    let posicaoDoMaior

    let listGender = document.getElementById('gender-list').value
    let listSize = document.getElementById('size-list').value
    listGender = listGender.split(',')
    listSize = listSize.split(',')

    for (let i = 0; i < listSize.length; i++) {
        maior = listSize[i];
        posicaoDoMaior = i

    }

    let sexoDoMaior = listGender[posicaoDoMaior]
    let qtdMasculino = 0
    let qtdFeminino = 0

    for (let j = 0; j < listGender.length; j++) {
        if (listGender[j] === 'M') {
            qtdMasculino++

        } else if (listGender[j] === 'F') {
            qtdFeminino++
        }

    }


    alert(`Quantidade Masculino: ${qtdMasculino}
Quanidade Feminino: ${qtdFeminino}
Maior Altura: ${maior}
Sexo do Maior: ${sexoDoMaior}`)

}