import styled from "styled-components";

export const ImageContainer = styled.div`
	position: absolute;
	right: 0px;
	top: 65px;

	max-width: 50%;
	width: 100%;
	.profile {
		position: relative;
	}
	.ticket {
		z-index: 2;
		position: absolute;
		right: 0px;
		bottom: -70px;
		width: 80%;
		
	}

	@media(max-width: 920px) {
		&{
			position: none;
			top: 0;
			max-width: 0;
		}
		.profile, .ticket {
				display: none;
		}
	
`;
