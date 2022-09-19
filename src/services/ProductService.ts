import axios from 'axios';

export default class ProductService {
    public static async getProducts() {
        const res = await axios.get(
            'http://localhost:4000/products'
        );
        return res.data;
    }

    public static async getProduct(id: number) {
        const res = await axios.get(
            `http://localhost:4000/products/${id}`
        );
        return res.data;
    }
}