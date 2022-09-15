import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatPrice } from "../utils/formatPrice";
const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map(({ id, image, name, price, description }) => {
        return (
          // key attr not possible on fragment shorthand
          <React.Fragment key={id}>
            <article>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <h5>{formatPrice(price)}</h5>
                {/* substring() to shorten the characters displayed */}
                <p>{description.substring(0, 200)}...</p>
                <Link to={`/products/${id}`} className="btn">
                  details
                </Link>
              </div>
            </article>
            <hr />
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: auto;
    height: 300px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
