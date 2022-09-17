import { ImBooks } from "react-icons/im";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img2 from "../../assets/images/bookstore-outside.jpg";
import img1 from "../../assets/images/bookstore.jpg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          The independent bookstore
          <br />
          with traditional values.
        </h1>
        <p>Where Montreal’s readers and writers gather.</p>
        <Link to="/products" className="btn hero-btn">
          browse books
          <span>
            <ImBooks />
          </span>
        </Link>
      </article>
      <article className="img-container">
        <img src={img1} alt="bookstore" className="main-img" />
        <img src={img2} alt="" className="accent-img" />
      </article>
    </Wrapper>
  );
};
export default Hero;

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  .hero-btn {
    max-width: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    span {
      margin-top: 0.3rem;
      font-size: 1.2rem;
    }
  }
  h1 {
    font-size: 2rem;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
      font-size: 2.5rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translate(-50%, 10%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;
