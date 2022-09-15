import React from 'react';
import styled from 'styled-components';
import { PageHero, StripeCheckout } from '../components';
// extra imports
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';

const CheckoutPage = ({ title }) => {
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'></Wrapper>
    </main>
  );
};
const Wrapper = styled.div``;
export default CheckoutPage;
