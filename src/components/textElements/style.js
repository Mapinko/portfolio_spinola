import styled from "styled-components";

export const ListContainer = styled.div`
	width: 100%;
	display: inline-flex;
	gap: 15px;
	
	.mark {
		display: flex;
		max-width: 5%;

		@media(max-width: 920px) {
			display: none;
		}
	}

	.identation-span{
		display: flex;
		width: 50%;

		@media(max-width: 920px) {
			display: none;
		}
	}	
`;

export const List = styled.ul`
	width: 95%;
	li {
		font-size: 16px;
		line-height: 26px;
	}
`;
