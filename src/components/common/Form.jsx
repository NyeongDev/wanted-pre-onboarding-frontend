import styled from 'styled-components';

const Form = ({ children, ...props }) => {
	return <FormSt {...props}>{children}</FormSt>;
};

const FormSt = styled.form`
	width: ${({ wd }) => wd};
	height: ${({ ht }) => ht};
`;

export default Form;
