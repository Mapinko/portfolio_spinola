import styled from "styled-components";

export const HeaderStyle = styled.div`
	max-width: 500px;
	width: 100%;

	position: relative;
	
	@media(max-width: 920px) {
		& {
			max-width: 100vw;
			margin: 0 auto;
		}
	}

	h1 {
		font-size: 10vh;

		@media(max-width: 920px) {
			& {
				text-align: center;
			}
		}
		@media(max-width: 920px) {
			& {
				font-size: 8vh
			} 
		}
	}

	span {
		width: 40%;

		position: absolute;
		right: 0;
		top: 25%;

		border: 3px solid var(--black);
		border-radius: 5px;
		background-color: var(--black);
		@media(max-width: 1024px) {
			& {
				width: 35%;
			}
		}
		@media(max-width: 920px) {
			& {
				display: none;
			}
		}
	}
`;
