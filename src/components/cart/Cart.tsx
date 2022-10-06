import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from 'react-redux';

function Cart() {
  const cartState = (state: any) => state.cartData.cart;
  const cart = useSelector(cartState);

  const listOfProductsInCart = [];

  for (const product of cart) {
    listOfProductsInCart.push(
      <div key={ product.id } className="row">
        <div className="ms-auto">
          <p className="lead text-justify">
            { product.id } - { product.name } - { product.quantity }
          </p>
        </div>
      </div>,
    );
  }

  return (
    <Row>
      <Col>
        <h2 className="page-section-heading text-center text-uppercase h2-about">
          Cart
        </h2>
        {listOfProductsInCart}
      </Col>
    </Row>
  );
}

export default Cart;