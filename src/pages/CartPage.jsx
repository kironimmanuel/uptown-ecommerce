import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CartContent, PageHero } from '../components'
import { useCartContext } from '../context/cart_context'

const CartPage = () => {
  return <Wrapper>cart page</Wrapper>
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage
