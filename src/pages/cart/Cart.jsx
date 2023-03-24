import { useSelector } from 'react-redux';
import Product from '../../components/Product';
import Layout from '../../components/layout';
import { selectAllCartItems } from '../../features/cartSlice';

const Cart = () => {
  const cartItem = useSelector((state) => selectAllCartItems(state.cart));
//   console.log(cartItem);

  const cartItems = cartItem.length > 0 && cartItem.map(product => <Product key={product.id} products={product}  />);

  return (
    <>
    <div className='col-8'>
    <Layout>
      {cartItems}
    </Layout>
    </div>
    <div className="col-4"></div>
    </>
  );
};

export default Cart;
