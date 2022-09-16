import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContent, PageHero } from "../components";
import { useCartContext } from "../context/cart_context";

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your cart</h2>
          <p>Your cart is currently empty. Let's change that!</p>
          <Link to="/products" className="btn">
            shop now
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};
export default CartPage;

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
    p {
      margin: 1rem 3rem;
    }
  }
`;
