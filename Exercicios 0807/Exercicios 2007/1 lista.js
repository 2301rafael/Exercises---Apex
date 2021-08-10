let listavip = [
    { nome: 'Daniel', vip: true, idade: 21 },
    { nome: 'Gabriel', vip: true, idade: 54 },
    { nome: 'Felipe', vip: false, idade: 37 }
]

let vips = listavip.filter((item) => checkVip(item));

function checkVip(item) {
    return item.vip === true
}
console.log(vips)