import "./Products.css";
import Row from "react-bootstrap/Row";
import Product from "../../models/Product";
import ProductService from "../../services/ProductService";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function Products() {
  let productList: Product[] = [];
  const [products, setProducts] = useState(productList);

  useEffect(() => {
    const fetchData = async () => {
      setProducts(await ProductService.getProducts());
    }

    fetchData();
  }, []);

  const listOfProducts = [];
  let gameImg = require("../../assets/images/game.png");

  for (const product of products) {
    listOfProducts.push(
      <div key={ product.getId() } className="col-md-4 col-lg-3 mb-2">
        <div className="card">
          <Image src={gameImg} alt="Product Image" className="card-img-top img-card" />
          <div className="card-body text-center"> 
            <Link className="button-primary btn text-white" to={`/products/${product.getId()}`}>
              { product.getName() }
            </Link>
          </div> 
        </div>
      </div>,
    );
  }
  
  return (
    <Row>
      {listOfProducts}
    </Row>
  );
}
export default Products;
