import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
import { useCartContext } from "../context/cart_context";

const CheckoutPage = ({ title }) => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page"></Wrapper>
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
