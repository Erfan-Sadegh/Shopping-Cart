import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { selectProductById } from '../features/productSlice';

const Product = ({ productsId }) => {
  const products = useSelector((state) => selectProductById(state.products, productsId));
  console.log(products);

  return (
    <MDBCard>
      <MDBCardImage
        src='https://mdbootstrap.com/img/new/standard/nature/184.webp'
        position='top'
        alt='...'
      />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Product;
