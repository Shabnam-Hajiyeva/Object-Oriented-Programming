//Part 1
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
    return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity} `;
}

}

let products=new ProductProperties("Apple", 2.50, 50);
console.log(products.getTotalValue());
console.log(products.toString());

//Part 2
class PerishableProductProperties extends ProductProperties{
   constructor (name, price,quantity, expirationDate){
    super(name,price,quantity);
this.expirationDate=expirationDate;
}

toString(){
    return `"Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Expiration Date:${this.expirationDate}`;
}

   }
let milk=new PerishableProductProperties("Milk",1.50,10, "2024-12-31");
let bread = new PerishableProductProperties("Bread", 2.00, 20, "2024-08-20");
   

   



    
