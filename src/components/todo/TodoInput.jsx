import styled, { css } from 'styled-components';

const TodoInput = ({ ...props }) => {
	return <TodoInputSt {...props} />;
};

const TodoInputSt = styled.input`
	${({ variant }) => {
		switch (variant) {
			case 'checkTodo':
				return css`
					display: none;
				`;
			case 'addTodo':
				return css`
					width: 100%;
					height: 40px;
					padding: 10px;
					border: 1px solid #c7c7c7;
					border-radius: 5px 0px 0px 5px;
					:focus {
						border: 1px solid black;
					}
				`;
			default:
				break;
		}
	}};
`;

export default TodoInput;
