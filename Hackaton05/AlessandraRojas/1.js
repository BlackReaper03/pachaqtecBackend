//Crear una clase "Producto" que tenga propiedades como nombre, precio, descripción y cantidad en stock. 
//Incluye métodos para obtener (get) y actualizar (set) estas propiedades.

class Product {
    constructor(id, name, price, description, quantityInStock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantityInStock = quantityInStock;
    }

    get getName() {
        return this.name;
    }

    get getPrice() {
        return this.price;
    }

    get getDescription() {
        return this.description;
    }

    get getQuantityInStock() {
        return this.quantityInStock;
    }

    set setName(newName) {
        this.name = newName;
    }

    set setPrice(newPrice) {
        this.price = newPrice;
    }

    set setDescription(newDescription) {
        this.description = newDescription;
    }

    set setQuantityInStock(newQuantity) {
        this.quantityInStock = newQuantity;
    }
}