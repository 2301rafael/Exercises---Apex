let listavip = [
    { name: 'Daniel', age: 17 },
    { name: 'Gabriel', age: 54 },
    { name: 'Felipe', age: 37 }
]

let vips = listavip.filter((item) => checkVip(item));

function checkVip(item) {
    return item.age >= 18
}
console.log(vips)
