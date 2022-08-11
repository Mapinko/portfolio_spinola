import styled from "styled-components";

export const ButtonStyle = styled.button`
	font-family: "Ultra";
	font-size: 1rem;
	letter-spacing: 0.05em;

	width: 233px;
	height: 40px;
`;

export const ButtonContainer = styled.div`
	width: 238px;
	height: 44px;

	border: 3px solid #000000;
	border-radius: 30px;

	position: relative;

	transition: ease-in-out 200ms;

	&:hover {
		background-color: var(--black);
		cursor: pointer;
	}
	button {
		position: absolute;
		bottom: 4px;
		left: 3px;
		transition: ease-in-out 150ms;

		&:hover {
			left: 1px;
			bottom: 2px;
		}
	}
`;
