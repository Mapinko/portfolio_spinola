import styled from "styled-components";

export const HeaderStyle = styled.header`
	max-width: 500px;
	width: 100%;

	position: relative;
	h1 {
		font-size: 4rem;
		line-height: 120.6%;
	}

	span {
		width: 50%;

		position: absolute;
		right: 0;
		top: 25%;

		border: 3px solid var(--black);
		border-radius: 5px;
		background-color: var(--black);
	}
`;
