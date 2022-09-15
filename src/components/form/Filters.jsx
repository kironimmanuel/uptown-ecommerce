import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../../context/filter_context";
import { formatPrice } from "../../utils/formatPrice";
import { getUniqueValues } from "../../utils/getUniqueValues";

const Filters = () => {
  const {
    filters: { text, category, edition, min_price, max_price, price, shipping },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const editions = getUniqueValues(all_products, "edition");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="text"
              className="search-input"
              placeholder="search books..."
              // Controlled input
              onChange={updateFilters}
              value={text}
            />
          </div>
          <div className="form-control">
            <h5>genre</h5>
            <div>
              {categories.map((genre, idx) => {
                return (
                  <button
                    key={idx}
                    type="button"
                    className={
                      category === genre.toLowerCase() ? "active" : null
                    }
                    onClick={updateFilters}
                    name="category">
                    {genre}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control edition-form">
            <h5>edition</h5>
            <div className="editions">
              {editions.map((item, idx) => {
                return (
                  <button
                    name="edition"
                    key={idx}
                    className={`btn-${idx + 1} ${
                      edition === item ? "edition-btn active" : "edition-btn "
                    }`}
                    onClick={updateFilters}>
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              // When changing the value, number turn into a string
              value={price}
              className="range-slider"
            />
          </div>
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              className="radio-btn"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .edition-form {
    max-width: 200px;
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active:not(.edition-btn) {
    border-color: var(--clr-grey-5);
  }
  .editions {
    display: grid;
    grid-template-areas:
      "a b b"
      "c c d";
  }
  .btn-1 {
    grid-area: a;
  }
  .btn-2 {
    grid-area: b;
  }
  .btn-3 {
    grid-area: c;
  }
  .btn-4 {
    grid-area: d;
  }
  .edition-btn {
    display: inline-block;
    border-radius: var(--radius);
    outline: 2px solid var(--clr-grey-8);
    padding: 0.5rem;
    margin-right: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    opacity: 0.3;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .edition-btn.active {
    opacity: 1;
    background-color: var(--clr-grey-10);
  }

  .price {
    margin-bottom: 0.25rem;
  }
  .range-slider {
    accent-color: var(--clr-grey-3);
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .radio-btn {
    accent-color: var(--clr-grey-5);
  }
  .clear-btn {
    border: 2px solid var(--clr-grey-5);
    color: var(--clr-grey-4);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
