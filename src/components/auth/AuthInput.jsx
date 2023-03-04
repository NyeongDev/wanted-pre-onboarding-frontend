import styled from 'styled-components';

const AuthInput = ({ ...props }) => {
	return <AuthInputSt {...props} />;
};

const AuthInputSt = styled.input`
	width: 100%;
	height: 40px;
	padding: 10px;
	border: 1px solid #c7c7c7;
	border-radius: 5px;
	::placeholder {
		color: #c7c7c7;
		font-size: 14px;
		font-weight: 300;
	}
	:focus {
		border: 1px solid black;
	}
`;

export default AuthInput;
