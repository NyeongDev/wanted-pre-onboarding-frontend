import styled, { css } from "styled-components";

const AuthBtn = ({ children, ...props }) => {
  return <ButtonSt {...props}>{children}</ButtonSt>;
};

const ButtonSt = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 15px;
  font-weight: 700;
  color: white;

  ${({ variant }) => {
    switch (variant) {
      case "abled":
        return css`
          background-color: black;
          :hover {
            cursor: pointer;
          }
        `;
      case "disabled":
        return css`
          background-color: #c7c7c7;
        `;
      default:
        break;
    }
  }};
`;

export default AuthBtn;
