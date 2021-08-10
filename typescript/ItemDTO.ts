interface ItemDTO {
    category: string
    description: string
    price: number
}

class Item implements ItemDTO {
    category: string
    description: string
    price: number
}

class Pedido {
    listaDePedidos: ItemDTO[]

    addidItem(item: ItemDTO) {
        this.listaDePedidos.push(item)
    }
}