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
		display: block;
		width: 100%;
		@media(max-width: 920px) {
			text-align: center;
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
