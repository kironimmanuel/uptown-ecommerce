import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()} <span>Uptown Books.</span> All rights
        reserved
      </h5>
      <p>
        Pictures from{" "}
        <a href="https://www.canva.com/" target="_blank" rel="noreferrer">
          canva.com
        </a>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
    margin-top: 2rem;
  }
  p {
    color: var(--clr-white);
    font-size: 0.9rem;
    a {
      color: var(--clr-primary-3);
    }
  }
`;

export default Footer;
