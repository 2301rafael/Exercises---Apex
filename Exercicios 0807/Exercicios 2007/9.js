function media() {
    let numbers = document.getElementById("numberList").value
    numbers = numbers.split(',')
    let media = numbers.map(item => parseFloat(item)).reduce((sumatory, current) => sumatory + current) / numbers.length
    alert(media)
    // let soma = 0

    // for (let i = 0; i < numbers.length; i++) {
    //     console.log(numbers[i])
    //     soma = parseInt(soma) + parseInt(numbers[i])
}
// let resultado = soma / numbers.length



