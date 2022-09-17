import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../../context/products_context";
import Error from "../ui/Error";
import Loading from "../ui/Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>our book recommendations</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {/* .slice() to limit the amount of featured books */}
        {featured.slice(0, 4).map((book) => {
          return <Product key={book.id} {...book} />;
        })}
      </div>

      <Link className="btn" to="/products">
        all books
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 345px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
`;

export default FeaturedProducts;
