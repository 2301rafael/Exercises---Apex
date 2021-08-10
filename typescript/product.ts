class product {
    fabricante: string
    tax: number
    bestbefor: number
    price: number

    showAtributes(): void {
        console.log(this.fabricante, this.tax, this.bestbefor, this.price)
    }
}