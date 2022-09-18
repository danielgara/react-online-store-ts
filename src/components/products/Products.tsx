import "./Products.css";
import Row from "react-bootstrap/Row";
import Product from "../../models/Product";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

function Products() {
  let products: Product[] = [];
  products.push(new Product(1, "TV", "game.png", "Best TV", 1000));
  products.push(new Product(2, "iPhone", "game.png", "Best iPhone", 999));
  products.push(new Product(3, "Chromecast", "game.png", "Best Chromecast", 30));
  products.push(new Product(4, "Glasses", "game.png", "Best Glasses", 100));

  const listOfProducts = [];
  let gameImg = require("../../assets/images/game.png");

  for (const product of products) {
    listOfProducts.push(
      <div className="col-md-4 col-lg-3 mb-2">
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
