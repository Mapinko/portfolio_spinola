import styled from "styled-components";

export const ListContainer = styled.div`
	width: 100%;
	display: inline-flex;
	gap: 15px;

	span {
		display: flex;
		max-width: 5%;
	}
`;

export const List = styled.ul`
	width: 95%;
	li {
		font-size: 16px;
		line-height: 26px;
	}
`;
