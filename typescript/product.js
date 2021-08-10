var product = /** @class */ (function () {
    function product() {
    }
    product.prototype.showAtributes = function () {
        console.log(this.fabricante, this.tax, this.bestbefor, this.price);
    };
    return product;
}());
