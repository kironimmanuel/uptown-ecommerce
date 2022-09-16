import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useCartContext } from "../../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ product }) => {
  const { id, stock, edition } = product;
  const { addToCart } = useCartContext();
  const [selectEdition, setSelectEdition] = useState(edition[0]);
  const [amount, setAmount] = useState(1);

  const increaseAmount = () => {
    setAmount((prevAmount) => {
      let tempAmount = prevAmount + 1;
      if (tempAmount > stock) {
        toast.warn("Max stock availability reached", {
          toastId: "custom-id-yes",
        });
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decreaseAmount = () => {
    setAmount((prevAmount) => {
      let tempAmount = prevAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className="editions">
        <span>edition : </span>
        <div>
          {edition.map((item, idx) => {
            return (
              <button
                key={idx}
                className={`${
                  selectEdition === item ? "edition-btn active" : "edition-btn"
                }`}
                onClick={() => setSelectEdition(item)}>
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, selectEdition, amount, product)}>
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

export default AddToCart;

const Wrapper = styled.section`
  margin-top: 2rem;
  .editions {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }

  .edition-btn {
    color: var(--clr-primary-1);
    text-transform: capitalize;
    display: inline-block;
    font-weight: 600;
    padding: 0.5rem;
    border-radius: var(--radius);
    border: 2px solid var(--clr-grey-8);
    background: var(--clr-grey-10);
    margin-right: 0.5rem;
    font-size: 0.85rem;
    cursor: pointer;
    opacity: 0.3;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
  }
`;
