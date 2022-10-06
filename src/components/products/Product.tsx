import Product from "../../models/Product";
import ProductService from "../../services/ProductService";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../reducers/cartSlice';
import { AppDispatch } from '../../store/Store';
import { useNavigate } from 'react-router-dom';

function ProductShow() {
  const [product, setProduct] = useState(new Product(1,"","","",1));
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setProduct(await ProductService.getProduct(id));
    }

    fetchData();
  }, [id]);

  let gameImg = require("../../assets/images/game.png");

  const dispatch: AppDispatch = useDispatch();

  function addProductToCart(id:any, name:any, price:any){
    dispatch(addToCart({
      id,
      name,
      price
    }));
    navigate('/cart');
  }

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
              <button className="button-primary btn text-white"
                onClick={
                  () => addProductToCart(
                    product.getId(), 
                    product.getName(), 
                    product.getPrice()
                  )}>
                Add to Cart
              </button>
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
