import styled from "styled-components";

const Flex = ({ children, ...props }) => {
  return <FlexSt {...props}>{children}</FlexSt>;
};

const FlexSt = styled.div`
  display: flex;

  /* flex 속성 */
  justify-content: ${({ jc }) => (jc ? jc : "center")};
  align-items: ${({ ai }) => (ai ? ai : "center")};
  flex-direction: ${({ dir }) => dir};

  /* 사이즈 */
  width: ${({ wd }) => wd};
  height: ${({ ht }) => ht};

  /* 여백 */
  margin: ${({ mg }) => mg};
  gap: ${({ gap }) => gap};
  padding: ${({ pd }) => pd};

  /* 스타일 */
  background-color: ${({ bc }) => bc};
  border: ${({ border }) => border};
  border-radius: ${({ radius }) => radius};
  box-shadow: ${({ bs }) => bs};

  /* 스크롤 */
  overflow-y: ${({ overflowY }) => overflowY};
`;

export default Flex;
