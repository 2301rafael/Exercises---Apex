function calcular() {
    const data = document.getElementById('numberList').value
    let dataList = data.split(',')
    let soma = 0

    for (let i = 0; i < dataList.length; i++) {
        console.log(dataList[i])
        soma = parseInt(soma) + parseInt(dataList[i])
    }
    let resultado = soma / dataList.length
    alert(resultado)
}
