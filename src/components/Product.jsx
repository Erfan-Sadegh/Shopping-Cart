import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCol,
} from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { decrease, increase, removeProduct } from '../features/cartSlice';
import { useLocation } from 'react-router-dom';

const Product = ({ products, handleAddToCart }) => {
  const dispatch = useDispatch();

  const { id, title, price, img, quantity } = products;

  const { pathname } = useLocation();

  const handleRemove = () => {
    dispatch(removeProduct(id));
  }

  const handleIncrease = () => {
    dispatch(increase({id}))
  }
  const handleDecrease = () => {
    dispatch(decrease({id}))
  }

  return (
    <MDBCol size='4' className='mb-4'>
      <MDBCard>
        <MDBCardImage src={img} position='top' alt={title} />
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          {pathname === '/' ? (
            <div className='d-flex justify-content-between align-items-center mt-2'>
              <MDBCardText className='mt-3 fw-bold'>${price}</MDBCardText>
              <MDBBtn onClick={() => handleAddToCart(products)}>Add to cart</MDBBtn>
            </div>
          ) : (
            <>
              <MDBCardText className='mt-3 fw-bold'>${price}</MDBCardText>
              <div className='d-flex justify-content-between align-items-center mt-2'>
                <MDBBtn color='success' onClick={handleIncrease}>+</MDBBtn>
                <MDBCardText className='mt-3 fw-bold'>{quantity}</MDBCardText>
                <MDBBtn color='info' onClick={handleDecrease}>-</MDBBtn>
              </div>
                <MDBBtn className='mt-3' onClick={handleRemove} color='danger'>Remove</MDBBtn>
            </>
          )}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Product;
