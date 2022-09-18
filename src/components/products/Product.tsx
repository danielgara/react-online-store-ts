import Product from "../../models/Product";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";

function ProductShow() {
  const { id } = useParams();
  let gameImg = require("../../assets/images/game.png");

  let products: Product[] = [];
  products.push(new Product(1, "TV", "game.png", "Best TV", 1000));
  products.push(new Product(2, "iPhone", "game.png", "Best iPhone", 999));
  products.push(new Product(3, "Chromecast", "game.png", "Best Chromecast", 30));
  products.push(new Product(4, "Glasses", "game.png", "Best Glasses", 100));

  let product = products.find((i) => i.getId().toString() === id);

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
