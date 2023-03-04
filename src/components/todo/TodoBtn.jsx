import styled, { css } from 'styled-components';

const TodoBtn = ({ children, ...props }) => {
	return <TodoBtnSt {...props}>{children}</TodoBtnSt>;
};

const TodoBtnSt = styled.button`
	cursor: pointer;

	${({ variant }) => {
		switch (variant) {
			case 'addTodo':
				return css`
					width: 50px;
					height: 40px;
					background-color: black;
					border-radius: 0px 5px 5px 0px;
					font-size: 14px;
					color: white;
				`;
			case 'modTodo':
				return css`
					width: 36px;
					height: 27px;
					border-radius: 5px;
					font-size: 13px;
					:hover {
						background-color: black;
						color: white;
					}
				`;
			default:
				break;
		}
	}};
`;

export default TodoBtn;
