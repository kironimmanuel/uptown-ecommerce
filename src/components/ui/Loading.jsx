import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper className="section section-center page-100">
      <div className="loader"></div>
    </Wrapper>
  );
};
export default Loading;

const Wrapper = styled.div`
  .loader {
    width: 6rem;
    height: 6rem;
    margin: 0 auto;
    margin-top: 10rem;
    color: #222;
    font-family: Consolas, Menlo, Monaco, monospace;
    font-weight: bold;
    font-size: 78px;
    opacity: 0.8;
  }
  .loader:before {
    content: "{";
    display: inline-block;
    animation: pulse 0.4s alternate infinite ease-in-out;
  }
  .loader:after {
    content: "}";
    display: inline-block;
    animation: pulse 0.4s 0.3s alternate infinite ease-in-out;
  }
  @keyframes pulse {
    to {
      transform: scale(0.8);
      opacity: 0.5;
    }
  }
`;
