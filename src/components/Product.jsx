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
import { addProduct, removeProduct } from '../features/cartSlice';
import { useLocation } from 'react-router-dom';

const Product = ({ products, handleShowTostify }) => {
  const dispatch = useDispatch();

  const { id, title, price, img, quantity } = products;

  const { pathname } = useLocation();

  const handleAddToCart = () => {
    dispatch(addProduct(products));
    // handleShowTostify('success', 'Added to Cart');
  };

  const handleRemove = () => {
    dispatch(removeProduct(id));
    handleShowTostify('success', 'Removed from Cart');
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
              <MDBBtn onClick={handleAddToCart}>Add to cart</MDBBtn>
            </div>
          ) : (
            <>
              <MDBCardText className='mt-3 fw-bold'>${price}</MDBCardText>
              <div className='d-flex justify-content-between align-items-center mt-2'>
                <MDBBtn color='success'>+</MDBBtn>
                <MDBCardText className='mt-3 fw-bold'>{quantity}</MDBCardText>
                <MDBBtn color='info'>-</MDBBtn>
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
