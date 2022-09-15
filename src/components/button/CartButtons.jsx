import React from "react";
import { FaShoppingBag, FaUserPlus } from "react-icons/fa";
import { GrLogin } from "react-icons/gr";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../../context/cart_context";
import { useProductsContext } from "../../context/products_context";
import { useUserContext } from "../../context/user_context";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <FaShoppingBag />
          <span className={1 ? null : "cart-value"}></span>
        </span>
      </Link>
      <button type="button" className="auth-btn">
        Login
        <GrLogin />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50% !important;
    font-size: 0.75rem !important;
    color: var(--clr-white);
    padding: 7px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    font-family: var(--ff-secondary);
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
