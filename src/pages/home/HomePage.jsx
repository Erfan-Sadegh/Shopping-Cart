import React, { useEffect } from 'react';
import Product from '../../components/Product';
import Layout from '../../components/layout';
import { ToastContainer, toast } from 'react-toastify';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, selectAllProducts } from '../../features/productSlice';
import productsData from '../../data';
import { addProduct } from '../../features/cartSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => selectAllProducts(state.products));

  useEffect(() => {
    dispatch(getProducts(productsData));
  }, [dispatch]);

  const handleShowTostify = (type, message) => {
    toast[type](message, {
      position: 'top-left',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const handleAddToCart = (products) => {
    dispatch(addProduct(products));
    handleShowTostify('success', 'Added to Cart');
  };

  const productsComponent = products.map((product) => (
    <Product
      key={product.id}
      handleAddToCart={handleAddToCart}
      handleShowTostify={handleShowTostify}
      products={product}
    />
  ));

  return (
    <Layout>
      <ToastContainer />
      {productsComponent}
    </Layout>
  );
};

export default HomePage;
