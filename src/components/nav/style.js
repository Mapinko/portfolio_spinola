import styled from "styled-components";

export const Navegation = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 10%;
	
	@media (max-width: 592px){
		gap: 1rem
	}
`;
