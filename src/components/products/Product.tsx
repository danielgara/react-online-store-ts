import Product from "../../models/Product";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

function ProductShow() {
  const [product, setProduct] = useState(new Product(1,"","","",1));
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
         console.log(`http://localhost:4000/products/${id}`);
         let product = new Product(data.id, data.name, data.image, data.description, data.price);
         setProduct(product);
      });
  }, []);

  let gameImg = require("../../assets/images/game.png");

  if (product) {
    return (
      <div className="card mb-3">
        <Row>
          <Col className="col-md-4">
            <Image
              src={gameImg}
              alt="Product Image"
              className="img-fluid rounded-start"
            />
          </Col>
          <Col className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.getName()} (${product.getPrice()})</h5>
              <p className="card-text">{product.getDescription()}</p>
              <p className="card-text">
                <small className="text-muted">Add to Cart</small>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
  } else {
    return <Row>Product not found</Row>;
  }
}
export default ProductShow;
