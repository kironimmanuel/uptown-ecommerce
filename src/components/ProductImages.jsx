import React, { useState } from "react";
import styled from "styled-components";

// If we pass an Array of images, to prevent the undefined we can set up ({images = [{url:""}]})
const ProductImages = ({ image, name }) => {
  // const [main,setMain] = useState(images[0])
  return (
    <Wrapper>
      <img src={image} alt={name} className="main" />
      <div className="gallery">
        {/* {images.map((image, index) => {
          return <img src={image.url} alt="thumbnail" key={index} onClick={()=> setMain(images[index])} className={`${image.url === main.url? "active" : null}`}/>
        })} */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    /* max-width: 350px; */
    /* height: auto; */
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      /* height: 300px; */
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      /* height: 500px; */
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
