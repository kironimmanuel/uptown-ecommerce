import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import styled from "styled-components";

const Stars = ({ stars, reviews }) => {
  // Fn to display the stars
  // First arg will be undefined, we just want index
  const starsArr = Array.from({ length: 5 }).map((_, idx) => {
    return (
      <span key={idx}>
        {stars >= idx + 1 ? (
          <BsStarFill />
        ) : stars >= idx + 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="stars">{starsArr}</div>
      <p className="reviews">
        {reviews}{" "}
        {reviews > 1 ? "ratings" : reviews === 0 ? "ratings" : "rating"}
      </p>
    </Wrapper>
  );
};
export default Stars;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
