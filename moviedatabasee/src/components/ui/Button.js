import styled from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  margin: 0.4rem;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;

  background: ${function (props) {
    if (props.variant === "primary") {
      return "linear-gradient(90deg, rgba(0,5,255,1) 0%, rgba(56,57,45,1) 100%)";
    } else if (props.variant === "secondary") {
      return "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(249,255,0,1) 100%)";
    } else {
      return "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 100%)";
    }
  }};
`;

export default Button;
