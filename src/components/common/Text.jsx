import styled from "styled-components";

export const H1 = ({ children, ...props }) => {
  return <H1St {...props}>{children}</H1St>;
};

export const Span = ({ children, ...props }) => {
  return <SpanSt {...props}>{children}</SpanSt>;
};

const H1St = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

const SpanSt = styled.span`
  font-size: 14px;
  color: #ff4d4d;
`;
