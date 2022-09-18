import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageHero } from "../components";
import { useCartContext } from "../context/cart_context";
import { StripeCheckout } from "../features";

const CheckoutPage = () => {
  const { cart } = useCartContext();

  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Your cart</h2>
            <p>is currently empty. Let's change that!</p>
            <Link to="/products" className="btn">
              shop now
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};
export default CheckoutPage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;
