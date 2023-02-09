import styled from "styled-components";

const List = ({ children, ...props }) => {
  return <LiSt {...props}>{children}</LiSt>;
};

const LiSt = styled.li`
  width: 100%;
`;

export default List;
