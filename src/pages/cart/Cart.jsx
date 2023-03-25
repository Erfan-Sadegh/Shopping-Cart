import { useSelector } from 'react-redux';
import Product from '../../components/Product';
import Layout from '../../components/layout';
import { selectAllCartItems } from '../../features/cartSlice';

// MDB
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItem = useSelector((state) => selectAllCartItems(state.cart));
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const cartItems =
    cartItem.length > 0 &&
    cartItem.map((product) => <Product key={product.id} products={product} />);
    console.log(cartItem);

  const { totalQuantity } = cart;

  const itemsTotalPrice = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className='d-flex px-3'>
      <div className='col-md-9'>
        {cartItems.length ? (
          <Layout>{cartItems}</Layout>
        ) : (
          <h2 className='mt-4'>
            There isn't any item. <Link to='/'>Let's Add Some One</Link>
          </h2>
        )}
      </div>
      <div
        className='col-md-3 mt-4 position-fixed top-25 px-3'
        style={{ right: '.7rem' }}
      >
        <MDBCard>
          <MDBCardHeader>Summary</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Total Price: {itemsTotalPrice}</MDBCardTitle>
            <MDBCardText> Total Quantity: {totalQuantity}</MDBCardText>
            <MDBBtn className='w-100 mt-2'>Go To Checkout</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    </section>
  );
};

export default Cart;
