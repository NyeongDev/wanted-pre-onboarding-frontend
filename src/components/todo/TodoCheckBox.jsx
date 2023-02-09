import styled, { css } from "styled-components";

const TodoCheckBox = ({ children, ...props }) => {
  return <CheckSt {...props}>{children}</CheckSt>;
};

const CheckSt = styled.div`
  width: 25px;
  height: 25px;
  cursor: pointer;

  ${({ variant }) => {
    switch (variant) {
      case "checkTodo":
        return css`
          border: 1px solid #c7c7c7;
          border-radius: 25px;
        `;
      case "checkedTodo":
        return css`
          background-size: contain;
          background-image: url("/images/checked-icon.svg");
          background-repeat: no-repeat;
          background-position: center;
        `;
      default:
        break;
    }
  }};
`;

export default TodoCheckBox;
