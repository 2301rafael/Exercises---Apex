function dobro() {
    let numbers = document.getElementById("numberList").value
    numbers = numbers.split(',')
    let duplica = numbers.map((item) => item * 2)
    alert(duplica)
}
