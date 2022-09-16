import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../assets/images/not-found.svg";
const ErrorPage = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <img src={img} alt="not found" />
        <h3>Hmmm...</h3>
        <p>We couldn't find the page you were looking for</p>
        <Link to="/">back home</Link>
      </section>
    </Wrapper>
  );
};
export default ErrorPage;

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    width: 70vw;
    max-width: 500px;
    margin-bottom: 2rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }

  a {
    font-size: 1.2rem;
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
  @media (min-width: 992px) {
    p {
      font-size: 1.1rem;
    }
    a {
      font-size: 1.2rem;
    }
  }
`;
