import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/images/about.jpg";
import { PageHero } from "../components";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="book store" />
        <article>
          <div className="title">
            <h2>get to know us</h2>
            <div className="underline"></div>
          </div>
          <p>
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin. He lay on his
            armour-like back, and if he lifted his head a little he could see
            his brown belly, slightly domed and divided by arches into stiff
            sections. The bedding was hardly able to cover it and seemed ready
            to slide off any moment. His many legs, pitifully thin compared with
            the size of the rest of him, waved about helplessly as he looked.
            "What's happened to me?" he thought.
          </p>
          <p>
            It wasn't a dream. His room, a proper human room although a little
            too small, lay peacefully between its four familiar walls.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
