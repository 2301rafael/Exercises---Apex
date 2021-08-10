function pares() {
    let numbers = document.getElementById("numberList").value
    numbers = numbers.split(',')
    let par = numbers.filter((item) => item % 2 == 0)
    console.log(par)
}