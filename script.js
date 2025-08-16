class  ProductProperties{
    constructor (name,price,quantity){
        this.name=name;
    this.price=price
    this.quantity=quantity;

    }

    getTotalValue(){
        return this.price*this.quantity;
    }

toString(){
    return `Product: ${this.name} Price: $${this.price} Quantity: ${this.quantity} `;
}

}

let products=new ProductProperties("Apple", 2.50, 50);
console.log(products.getTotalValue());
console.log(products.toString());



    
