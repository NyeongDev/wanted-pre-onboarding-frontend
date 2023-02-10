import styled, { css } from "styled-components";

const AuthBtn = ({ children, ...props }) => {
  switch (props.isBtnAvailable) {
    case "always":
      return (
        <ButtonSt variant={props.isBtnAvailable} {...props}>
          {children}
        </ButtonSt>
      );
    case "available":
      return (
        <ButtonSt variant={props.isBtnAvailable} {...props}>
          {children}
        </ButtonSt>
      );
    case "unavailable":
      return (
        <ButtonSt disabled variant={props.isBtnAvailable} {...props}>
          {children}
        </ButtonSt>
      );
    default:
      break;
  }
};

const ButtonSt = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 15px;
  font-weight: 700;
  color: white;

  ${({ variant }) => {
    switch (variant) {
      case "always":
        return css`
          border: 1px solid #c7c7c7;
          color: black;
          font-weight: 300;
          cursor: pointer;
        `;
      case "available":
        return css`
          background-color: black;
          :hover {
            cursor: pointer;
          }
        `;
      case "unavailable":
        return css`
          background-color: #c7c7c7;
        `;
      default:
        break;
    }
  }};
`;

export default AuthBtn;
