import React, { useEffect } from 'react';
import Product from '../../components/Product';
import Layout from '../../components/layout';

// redux
import { useSelector, useDispatch } from "react-redux";
import { selectProductIds, getProducts } from "../../features/productSlice";
import productsData from '../../data';

const HomePage = () => {

  const dispatch = useDispatch()
  const productsId = useSelector(state => selectProductIds(state.products));
  console.log(productsId);

  useEffect(() => {
    dispatch(getProducts(productsData))
  }, [dispatch])

  const productsComponent = productsId.map(id => <Product key={id} productsId={id} />)

  return (
    <Layout>
      {productsComponent}
    </Layout>
  );
};

export default HomePage;
