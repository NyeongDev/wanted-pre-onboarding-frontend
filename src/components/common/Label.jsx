import styled from "styled-components";

const Label = ({ children, ...props }) => {
  return <LabelSt {...props}>{children}</LabelSt>;
};

const LabelSt = styled.label``;

export default Label;
