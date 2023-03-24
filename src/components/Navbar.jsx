import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectAllCartItems } from '../features/cartSlice';

export default function Navbar() {
  const cartItemLength = useSelector(state => selectAllCartItems(state.cart));

  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <Link to='/'>All Products</Link>
        <Link to='/cart'>
          <MDBBtn color='dark'>Cart {(cartItemLength.length)}</MDBBtn>
        </Link>
      </MDBContainer>
    </MDBNavbar>
  );
}
