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

static applyDiscount(products, discount) {
    products.forEach(product => {
      product.price = product.price - (product.price * discount);
    });
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
let apple = new ProductProperties("Apple", 2.50, 50);    
let laptop = new ProductProperties("Laptop", 1000, 3);    
let pen = new ProductProperties("Pen", 1.20, 100); 

console.log(milk.toString());
console.log(bread.toString());

//Part 3
let allProducts = [milk, bread];

ProductProperties.applyDiscount(allProducts, 0.1);
console.log("---- After Discount ----");
console.log(milk.toString());
console.log(bread.toString());

 //Part 4
   class Store {
  constructor() {
    this.inventory = [];
  }

addProduct(product) {
    this.inventory.push(product);
  }

  getInventoryValue() {
    return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
  }
findProductByName(name) {
    return this.inventory.find(product => product.name === name) || null;
  }
}
let store = new Store();
store.addProduct(milk);
store.addProduct(bread);

console.log("Total Inventory Value: $" + store.getInventoryValue().toFixed(2));
console.log(store.findProductByName("Bread")?.toString());
console.log(store.findProductByName("Banana")); 


    
