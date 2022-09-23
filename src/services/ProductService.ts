import axios from 'axios';
import Product from "../models/Product";

export default class ProductService {
    public static async getProducts() {
        let productList: Product[] = [];
        const res = await axios.get(
            'http://localhost:4000/products'
        );
        for (let i = 0; i < res.data.length; i++) {
            let product = new Product(
                res.data[i].id, 
                res.data[i].name, 
                res.data[i].image, 
                res.data[i].description, 
                res.data[i].price
            );
            productList.push(product);
        }
        return productList;
    }

    public static async getProduct(id: any): Promise<Product> {
        const res = await axios.get(
            `http://localhost:4000/products/show/${id}`
        );
        let product = new Product(
            res.data.id, 
            res.data.name, 
            res.data.image, 
            res.data.description, 
            res.data.price
        );
        return product;
    }
}