import { useSelector } from 'react-redux';

function Cart() {
  const cartState = (state: any) => state.cartData.cart;
  const cart = useSelector(cartState);

  const listOfProductsInCart = [];

  for (const product of cart) {
    listOfProductsInCart.push(
      <tr key={ product.id }>
          <td>{ product.id }</td>
          <td>{ product.name }</td>
          <td>${ product.price}</td>
          <td>{ product.quantity }</td>
      </tr>,
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        Products in Cart
      </div>
      <div className="card-body">
        <table className="table table-bordered table-striped text-center">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {listOfProductsInCart}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;